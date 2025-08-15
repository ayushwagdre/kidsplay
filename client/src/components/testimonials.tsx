import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson 👩‍👧",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      text: "Little Steps Academy has been absolutely magical for our daughter Emma! 🌟 She comes home excited about learning every day, and we've seen such incredible growth in her confidence and creativity! ✨",
      gradient: "from-candy-red via-rainbow-orange to-warm-yellow"
    },
    {
      name: "Michael Chen 👨‍👦", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      text: "The teachers here truly care about each child's individual development! 💕 Our son Lucas has flourished academically and socially since joining Little Steps - it's been amazing to watch! 🎯",
      gradient: "from-bright-blue via-turquoise to-soft-purple"
    },
    {
      name: "Maria Rodriguez 👩‍👧‍👦",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80", 
      text: "We couldn't be happier with our choice! 🎉 The curriculum is engaging, the facilities are beautiful, and most importantly, our daughter loves going to school every single day! 💖",
      gradient: "from-lime-green via-fresh-green to-turquoise"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-6">What Parents Say 💬</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our amazing parent community about their wonderful experiences at Little Steps Academy! 🌟
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={`bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-3xl p-8 shadow-xl text-center`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              data-testid={`testimonial-${currentIndex}`}
            >
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={`${testimonials[currentIndex].name} testimonial photo`}
                    className="w-18 h-18 rounded-full object-cover"
                    data-testid={`testimonial-img-${currentIndex}`}
                  />
                </div>
                <h4 className="font-fredoka text-2xl text-gray-800">{testimonials[currentIndex].name}</h4>
                <div className="flex text-warm-yellow text-xl mt-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-bright-blue' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
