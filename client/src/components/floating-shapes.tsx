import { motion } from "framer-motion";

export default function FloatingShapes() {
  const shapes = [
    { size: "w-20 h-20", color: "bg-warm-yellow", position: "top-10 left-10", delay: 0 },
    { size: "w-16 h-16", color: "bg-bright-blue", position: "top-32 right-20", delay: 1 },
    { size: "w-12 h-12", color: "bg-fresh-green", position: "top-64 left-1/4", delay: 2 },
    { size: "w-24 h-24", color: "bg-warm-pink", position: "top-96 right-1/3", delay: 3 },
    { size: "w-18 h-18", color: "bg-soft-purple", position: "bottom-32 left-20", delay: 4 },
    { size: "w-14 h-14", color: "bg-warm-yellow", position: "bottom-64 right-10", delay: 5 }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`floating-shape ${shape.position} ${shape.size} ${shape.color} rounded-full opacity-20`}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
