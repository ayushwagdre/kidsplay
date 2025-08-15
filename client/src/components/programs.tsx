import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      title: "Toddler Program",
      ageRange: "Ages 18 months - 3 years",
      icon: "fas fa-baby",
      gradient: "primary-gradient",
      features: [
        "Sensory play and exploration",
        "Language development activities", 
        "Social skills through play",
        "Music and movement"
      ],
      buttonGradient: "primary-gradient"
    },
    {
      title: "Pre-Kindergarten", 
      ageRange: "Ages 3 - 4 years",
      icon: "fas fa-child",
      gradient: "secondary-gradient",
      features: [
        "Early literacy and numeracy",
        "Creative arts and crafts",
        "Science exploration",
        "Independence building"
      ],
      buttonGradient: "secondary-gradient"
    },
    {
      title: "Kindergarten Prep",
      ageRange: "Ages 4 - 5 years", 
      icon: "fas fa-graduation-cap",
      gradient: "accent-gradient",
      features: [
        "School readiness skills",
        "Advanced problem solving",
        "Leadership development",
        "Elementary preparation"
      ],
      buttonGradient: "accent-gradient"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-neutral-warm">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-fredoka text-4xl md:text-5xl text-text-dark mb-6">Our Learning Programs</h2>
          <p className="text-xl text-text-medium max-w-3xl mx-auto">
            Comprehensive early childhood education programs designed to foster cognitive, social, and emotional development through innovative teaching methodologies.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              data-testid={`program-${program.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-center mb-6">
                <motion.div 
                  className={`w-20 h-20 ${program.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`${program.icon} text-white text-2xl`}></i>
                </motion.div>
                <h3 className="font-fredoka text-2xl text-text-dark mb-2">{program.title}</h3>
                <p className="text-primary-blue font-semibold">{program.ageRange}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    className="flex items-center text-text-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-check-circle text-accent-green mr-3"></i>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className={`w-full ${program.buttonGradient} text-white py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300`}
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
