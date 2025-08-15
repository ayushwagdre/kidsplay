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
    <section id="home" className="relative min-h-screen gradient-bg flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="font-fredoka text-5xl md:text-7xl text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Where Learning{" "}
                <span className="text-transparent rainbow-text">
                  Feels Like Play!
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Nurturing young minds through play-based learning, creativity, and endless discovery. 
                Join our magical educational journey where every child's potential shines bright.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-candy-red via-rainbow-orange to-warm-yellow text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 card-hover shadow-lg"
                data-testid="button-book-school-tour"
                whileHover={{ scale: 1.05, y: -2, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Book a School Tour 🎉
              </motion.button>
              <motion.button 
                className="border-3 border-bright-blue text-bright-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-bright-blue hover:text-white transition-all duration-300 shadow-lg"
                data-testid="button-watch-story"
                whileHover={{ scale: 1.05, y: -2, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-play mr-2"></i>
                Watch Our Story 🎬
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
                <div className="font-fredoka text-4xl text-candy-red drop-shadow-md">{counters.years} ⭐</div>
                <div className="text-gray-700 text-sm font-semibold">Years of Excellence</div>
              </div>
              <div className="text-center" data-testid="stat-students">
                <div className="font-fredoka text-4xl text-bright-blue drop-shadow-md">{counters.students} 😊</div>
                <div className="text-gray-700 text-sm font-semibold">Happy Students</div>
              </div>
              <div className="text-center" data-testid="stat-teachers">
                <div className="font-fredoka text-4xl text-fresh-green drop-shadow-md">{counters.teachers} 👩‍🏫</div>
                <div className="text-gray-700 text-sm font-semibold">Expert Teachers</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main hero image of children playing at school */}
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Happy children playing and learning at preschool" 
              className="rounded-3xl shadow-2xl w-full h-auto parallax-layer"
              data-testid="img-hero-children"
            />
            
            {/* Floating elements around the image */}
            <motion.div 
              className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-warm-yellow to-rainbow-orange rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="fas fa-star text-white text-xl wiggle"></i>
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-warm-pink to-candy-red rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="fas fa-heart text-white text-2xl wiggle"></i>
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-bright-blue to-turquoise rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 45, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="fas fa-puzzle-piece text-white wiggle"></i>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
