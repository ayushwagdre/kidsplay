import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "What are your operating hours?",
      answer: "We're open Monday through Friday from 7:00 AM to 6:00 PM. We also offer extended care options for working parents who need earlier drop-off or later pick-up times."
    },
    {
      question: "What is your student-to-teacher ratio?",
      answer: "We maintain small class sizes with a maximum ratio of 8:1 for toddlers, 10:1 for pre-K, and 12:1 for kindergarten. This ensures personalized attention for every child."
    },
    {
      question: "Do you provide meals and snacks?",
      answer: "Yes! We provide nutritious breakfast, lunch, and afternoon snacks. Our menu is designed by a pediatric nutritionist and accommodates various dietary restrictions and allergies."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "Safety is our top priority. We have secure entry systems, background-checked staff, security cameras, and follow strict health and safety protocols. All teachers are CPR and first aid certified."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-lavender to-soft-yellow">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-6">Frequently Asked Questions ❓</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our amazing programs, enrollment, and daily activities! 🌟
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`faq-item-${index}`}
            >
              <button 
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
                data-testid={`faq-button-${index}`}
              >
                <h3 className="font-fredoka text-lg text-gray-800 pr-4">{item.question}</h3>
                <motion.i
                  className="fas fa-chevron-down text-bright-blue text-lg flex-shrink-0"
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6" data-testid={`faq-answer-${index}`}>
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
