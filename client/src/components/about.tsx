import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: "fas fa-lightbulb",
      title: "Evidence-Based Learning",
      description: "Our curriculum combines the latest research in early childhood development with proven pedagogical approaches that optimize learning outcomes.",
      gradient: "primary-gradient"
    },
    {
      icon: "fas fa-users",
      title: "Individualized Approach", 
      description: "Small class sizes and personalized attention ensure each child receives targeted support to reach their full potential at their own pace.",
      gradient: "secondary-gradient"
    },
    {
      icon: "fas fa-trophy",
      title: "Measurable Success",
      description: "98% of our graduates demonstrate school readiness, with strong foundations in literacy, numeracy, and social-emotional competencies.",
      gradient: "accent-gradient"
    }
  ];

  const stats = [
    { icon: "fas fa-award", value: "12+", label: "Years Excellence", color: "text-primary-blue" },
    { icon: "fas fa-users", value: "500+", label: "Happy Families", color: "text-accent-green" },
    { icon: "fas fa-graduation-cap", value: "15+", label: "Expert Teachers", color: "text-primary-orange" },
    { icon: "fas fa-trophy", value: "50+", label: "Awards Won", color: "text-accent-purple" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-fredoka text-4xl md:text-5xl text-text-dark mb-6">Excellence in Early Education</h2>
          <p className="text-xl text-text-medium max-w-3xl mx-auto">
            Committed to providing exceptional early childhood education through innovative methodologies, 
            expert instruction, and comprehensive child development programs.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-xl text-text-medium leading-relaxed">
                For over a decade, Little Steps Academy has been at the forefront of innovative early childhood education, 
                combining research-based methodologies with modern learning environments.
              </p>
              <p className="text-lg text-text-medium leading-relaxed">
                Our certified educators create comprehensive learning experiences that develop critical thinking, 
                creativity, and social-emotional intelligence. We prepare children for academic success while 
                fostering their natural curiosity and love for learning.
              </p>
              <p className="text-lg text-text-medium leading-relaxed">
                From our thoughtfully designed classrooms to our evidence-based curriculum, every aspect of our 
                program is crafted to support optimal child development and family engagement.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4 glass-effect p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`w-12 h-12 ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <i className={`${feature.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xl text-text-dark mb-2">{feature.title}</h3>
                    <p className="text-text-medium">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional early childhood education environment"
                className="rounded-2xl w-full"
                data-testid="img-about-education"
              />
              
              {/* Stats overlay */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center glass-effect rounded-2xl p-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className={`font-fredoka text-3xl ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-text-medium text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-12 h-12 primary-gradient rounded-2xl flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="fas fa-star text-white"></i>
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-14 h-14 secondary-gradient rounded-2xl flex items-center justify-center shadow-lg"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -15, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="fas fa-heart text-white text-lg"></i>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}