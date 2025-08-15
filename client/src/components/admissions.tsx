import { motion } from "framer-motion";

export default function Admissions() {
  const steps = [
    {
      number: 1,
      title: "Schedule Tour",
      description: "Visit our campus and meet our amazing teachers and staff.",
      buttonText: "Book Now",
      gradient: "from-warm-yellow to-warm-pink",
      buttonColor: "bg-warm-yellow"
    },
    {
      number: 2,
      title: "Submit Application", 
      description: "Complete our simple online application form.",
      buttonText: "Apply Online",
      gradient: "from-bright-blue to-soft-purple",
      buttonColor: "bg-bright-blue"
    },
    {
      number: 3,
      title: "Meet & Greet",
      description: "Introduce your child to their future classroom and friends.",
      buttonText: "Schedule",
      gradient: "from-fresh-green to-warm-yellow",
      buttonColor: "bg-fresh-green"
    },
    {
      number: 4,
      title: "Welcome!",
      description: "Begin the amazing learning adventure together.",
      buttonText: "Start Date",
      gradient: "from-warm-pink to-soft-purple",
      buttonColor: "bg-warm-pink"
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
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-6">Join Our Family</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your child's educational journey with us. Our simple admission process ensures a smooth transition into our learning community.
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
                className={`${step.buttonColor} text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                data-testid={`button-${step.title.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ scale: 1.05 }}
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
            <h3 className="font-fredoka text-2xl text-gray-800 mb-4">Download Information Packet</h3>
            <p className="text-gray-600 mb-6">Get detailed information about our programs, tuition, and enrollment process.</p>
            <motion.button 
              className="bg-gradient-to-r from-warm-pink to-soft-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 card-hover"
              data-testid="button-download-pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download mr-2"></i>
              Download PDF
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
