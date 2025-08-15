# Little Steps Academy - Play School Website

## Overview

This is a fully responsive, animated React website for "Little Steps Academy," a premium play school focused on creating magical learning experiences for children aged 18 months to 5 years. The project features a vibrant, kid-friendly design with extensive animations, interactive components, and a comprehensive set of pages including hero sections, program details, gallery, admissions process, testimonials, and contact forms. The website emphasizes trust and professionalism while maintaining a playful, engaging atmosphere through colorful design elements and smooth user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern component patterns
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **Framer Motion** for sophisticated animations and page transitions
- **TanStack Query** for efficient data fetching and state management
- **Component-based architecture** with modular, reusable UI components

### Styling and UI Framework
- **Tailwind CSS** for utility-first styling with custom color palette
- **Shadcn/ui** component library for consistent, accessible UI components
- **Radix UI** primitives for headless, accessible component foundations
- **Custom CSS variables** for theme colors specific to the play school brand
- **Responsive design** with mobile-first approach and breakpoint-based layouts

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **Modular route structure** with separation of concerns
- **Middleware pattern** for request/response handling and logging
- **Development/production environment configuration** with conditional Vite integration
- **In-memory storage** implementation with interface for future database migration

### Data Layer
- **Drizzle ORM** configured for PostgreSQL with type-safe database operations
- **Database schema** defined in shared directory for type consistency across frontend and backend
- **Zod validation** integrated with Drizzle for runtime type checking
- **Migration system** configured for database schema evolution

### Development and Build System
- **TypeScript** configuration shared across client, server, and shared code
- **ESModules** throughout the entire codebase for modern JavaScript practices
- **Path aliases** configured for clean imports (@/, @shared/, etc.)
- **Hot Module Replacement** in development with Vite integration
- **Production build process** with separate client and server compilation

### Animation and Interaction Design
- **Scroll-triggered animations** using Framer Motion with viewport detection
- **Parallax effects** for hero sections and floating elements
- **Hover states and micro-interactions** for enhanced user engagement
- **Smooth scrolling navigation** between page sections
- **Floating action elements** like WhatsApp integration

### Content Management
- **Static content structure** with component-based content organization
- **Image optimization** through external CDN services (Unsplash)
- **Form handling** with React Hook Form and validation
- **Newsletter subscription** and contact form implementations

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React 18, React DOM, TypeScript
- **Vite**: Build tool with React plugin and development server
- **Express.js**: Node.js web framework for backend API

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **Shadcn/ui**: Pre-built component library
- **Radix UI**: Headless UI component primitives
- **Framer Motion**: Animation library for React
- **Class Variance Authority**: Component variant management
- **Clsx/Tailwind Merge**: Conditional className utilities

### Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Integration with validation libraries

### Database and Validation
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Drizzle Kit**: Database migration and schema management
- **Zod**: TypeScript-first schema validation
- **@neondatabase/serverless**: PostgreSQL database driver

### Development Tools
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production
- **TSX**: TypeScript execution for development
- **Replit integrations**: Development environment plugins

### External Services
- **Google Fonts**: Typography (Fredoka One, Inter)
- **Font Awesome**: Icon library
- **Unsplash**: Image CDN for gallery and content images
- **WhatsApp API**: Direct messaging integration

### Build and Deployment
- **PostCSS**: CSS processing with Autoprefixer
- **Vite plugins**: Runtime error overlay, Cartographer for Replit
- **Node.js**: Server runtime environment