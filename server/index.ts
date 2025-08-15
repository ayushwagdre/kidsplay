import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
(async () => {
  // Function to find an available port
  async function findAvailablePort(startPort: number): Promise<number> {
    return new Promise((resolve) => {
      const testServer = createServer();
      const tryPort = (port: number) => {
        testServer.listen(port, '0.0.0.0', () => {
          testServer.close(() => {
            resolve(port);
          });
        }).on('error', () => {
          // Port is in use, try next port
          tryPort(port + 1);
        });
      };
      tryPort(startPort);
    });
  }

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

  const httpServer = createServer(app);
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 3000 if not specified.
  // If the port is in use, automatically find the next available port.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const defaultPort = parseInt(process.env.PORT || '3000', 10);
  const port = await findAvailablePort(defaultPort);

  if (port !== defaultPort) {
    log(`Port ${defaultPort} is busy, using port ${port} instead`);
  }

  httpServer.listen(port, '0.0.0.0', () => {
    log(`serving on port ${port}`);
    if (port !== defaultPort) {
      log(`💡 Your app is now available at:`);
      log(`   Local:    http://localhost:${port}`);
      log(`   Network:  http://127.0.0.1:${port}`);
    }
  });
})();
