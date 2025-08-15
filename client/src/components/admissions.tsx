import { motion } from "framer-motion";

export default function Admissions() {
  const steps = [
    {
      number: 1,
      title: "Schedule Tour 🏫",
      description: "Visit our magical campus and meet our amazing teachers and staff who can't wait to meet you! 👋",
      buttonText: "Book Now 📅",
      gradient: "from-candy-red via-rainbow-orange to-warm-yellow",
      buttonColor: "bg-gradient-to-r from-candy-red to-rainbow-orange"
    },
    {
      number: 2,
      title: "Submit Application 📝", 
      description: "Complete our super simple online application form - it's as easy as 1, 2, 3! ✨",
      buttonText: "Apply Online 🌟",
      gradient: "from-bright-blue via-turquoise to-soft-purple",
      buttonColor: "bg-gradient-to-r from-bright-blue to-turquoise"
    },
    {
      number: 3,
      title: "Meet & Greet 🤝",
      description: "Introduce your little one to their future classroom and new best friends! 👫",
      buttonText: "Schedule 🎯",
      gradient: "from-lime-green via-fresh-green to-turquoise",
      buttonColor: "bg-gradient-to-r from-lime-green to-fresh-green"
    },
    {
      number: 4,
      title: "Welcome! 🎉",
      description: "Begin the most amazing learning adventure together - let the fun begin! 🚀",
      buttonText: "Start Date ⭐",
      gradient: "from-warm-pink via-soft-purple to-candy-red",
      buttonColor: "bg-gradient-to-r from-warm-pink to-soft-purple"
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-mint-green to-blush-pink">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-6">Join Our Family 👨‍👩‍👧‍👦</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your child's magical educational journey with us! Our super simple admission process ensures a smooth transition into our amazing learning community. 🌟
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-white rounded-3xl p-8 shadow-xl card-hover text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              data-testid={`admission-step-${step.number}`}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-fredoka text-2xl">{step.number}</span>
              </motion.div>
              <h3 className="font-fredoka text-xl text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <motion.button 
                className={`${step.buttonColor} text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 shadow-md`}
                data-testid={`button-${step.title.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="font-fredoka text-2xl text-gray-800 mb-4">Download Information Packet 📋</h3>
            <p className="text-gray-600 mb-6">Get all the colorful details about our programs, tuition, and enrollment process! 🌈</p>
            <motion.button 
              className="bg-gradient-to-r from-candy-red via-warm-pink to-soft-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 card-hover shadow-lg"
              data-testid="button-download-pdf"
              whileHover={{ scale: 1.05, y: -2, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download mr-2"></i>
              Download PDF 📄✨
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
