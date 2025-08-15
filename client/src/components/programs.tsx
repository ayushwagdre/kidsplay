import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      title: "Toddler Program 🍼",
      ageRange: "Ages 18 months - 3 years",
      icon: "fas fa-baby",
      gradient: "from-candy-red via-rainbow-orange to-warm-yellow",
      features: [
        "🎨 Sensory play and exploration",
        "💬 Language development activities", 
        "👫 Social skills through play",
        "🎵 Music and movement"
      ],
      buttonGradient: "from-candy-red via-rainbow-orange to-warm-yellow"
    },
    {
      title: "Pre-K Program 🎯", 
      ageRange: "Ages 3 - 4 years",
      icon: "fas fa-child",
      gradient: "from-bright-blue via-turquoise to-soft-purple",
      features: [
        "📚 Early literacy and numeracy",
        "🎨 Creative arts and crafts",
        "🔬 Science exploration",
        "💪 Independence building"
      ],
      buttonGradient: "from-bright-blue via-turquoise to-soft-purple"
    },
    {
      title: "Kindergarten 🎓",
      ageRange: "Ages 4 - 5 years", 
      icon: "fas fa-graduation-cap",
      gradient: "from-lime-green via-fresh-green to-turquoise",
      features: [
        "🏫 School readiness skills",
        "🧩 Advanced problem solving",
        "👑 Leadership development",
        "⭐ Elementary prep"
      ],
      buttonGradient: "from-lime-green via-fresh-green to-turquoise"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-soft-yellow to-sky-blue">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-6">Our Learning Programs 🎓</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Age-appropriate curricula designed to nurture development through play, creativity, and structured learning activities! 🎨📚
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="bg-white rounded-3xl p-8 shadow-xl card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              data-testid={`program-${program.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-center mb-6">
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${program.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className={`${program.icon} text-white text-2xl`}></i>
                </motion.div>
                <h3 className="font-fredoka text-2xl text-gray-800 mb-2">{program.title}</h3>
                <p className="text-bright-blue font-semibold">{program.ageRange}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    className="flex items-center text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-check-circle text-fresh-green mr-3"></i>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className={`w-full bg-gradient-to-r ${program.buttonGradient} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                data-testid={`button-learn-more-${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
