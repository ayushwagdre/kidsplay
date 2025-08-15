import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [counters, setCounters] = useState({
    years: 0,
    students: 0,
    teachers: 0,
  });

  useEffect(() => {
    const targets = { years: 15, students: 500, teachers: 50 };
    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;

    const increments = {
      years: targets.years / steps,
      students: targets.students / steps,
      teachers: targets.teachers / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      
      setCounters({
        years: Math.min(Math.floor(increments.years * currentStep), targets.years),
        students: Math.min(Math.floor(increments.students * currentStep), targets.students),
        teachers: Math.min(Math.floor(increments.teachers * currentStep), targets.teachers),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen modern-gradient flex items-center overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 primary-gradient rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 secondary-gradient rounded-2xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 accent-gradient rounded-full opacity-15 animate-pulse-soft"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="font-fredoka text-5xl md:text-7xl text-text-dark leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Where Learning{" "}
                <span className="primary-gradient bg-clip-text text-transparent">
                  Comes Alive
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-text-medium leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Modern early childhood education that combines proven methodologies with innovative approaches. 
                Building confident, creative, and curious learners ready for tomorrow's world.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="primary-gradient text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 glass-effect border-0"
                data-testid="button-book-school-tour"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Schedule Tour
              </motion.button>
              <motion.button 
                className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-primary-blue hover:text-white transition-all duration-300"
                data-testid="button-watch-story"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-play mr-2"></i>
                Watch Video
              </motion.button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center" data-testid="stat-years">
                <div className="font-fredoka text-4xl text-primary-blue">{counters.years}+</div>
                <div className="text-text-medium text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-students">
                <div className="font-fredoka text-4xl text-accent-green">{counters.students}+</div>
                <div className="text-text-medium text-sm font-medium">Happy Families</div>
              </div>
              <div className="text-center" data-testid="stat-teachers">
                <div className="font-fredoka text-4xl text-primary-orange">{counters.teachers}+</div>
                <div className="text-text-medium text-sm font-medium">Expert Educators</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative glass-effect rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern learning environment at Little Steps Academy" 
                className="rounded-2xl w-full max-w-lg mx-auto"
                data-testid="img-hero-children"
              />
              
              {/* Modern floating elements */}
              <motion.div 
                className="absolute -top-2 -left-2 w-12 h-12 primary-gradient rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className="fas fa-star text-white text-lg"></i>
              </motion.div>
              <motion.div 
                className="absolute -bottom-2 -right-2 w-14 h-14 secondary-gradient rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -12, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className="fas fa-heart text-white text-xl"></i>
              </motion.div>
              <motion.div 
                className="absolute top-4 -right-4 w-10 h-10 accent-gradient rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -12, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className="fas fa-puzzle-piece text-white text-sm"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
