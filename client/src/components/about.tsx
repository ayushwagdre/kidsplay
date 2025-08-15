import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: "fas fa-lightbulb",
      title: "Our Philosophy",
      description: "Every child is unique and learns best through play, exploration, and hands-on experiences that spark their natural curiosity.",
      bgColor: "bg-soft-yellow",
      iconColor: "bg-warm-yellow"
    },
    {
      icon: "fas fa-users",
      title: "Our Approach", 
      description: "Small class sizes, individualized attention, and a nurturing environment where children feel safe to explore and express themselves.",
      bgColor: "bg-sky-blue",
      iconColor: "bg-bright-blue"
    },
    {
      icon: "fas fa-trophy",
      title: "Our Success",
      description: "98% of our graduates excel in elementary school, equipped with strong social skills, confidence, and a lifelong love of learning.",
      bgColor: "bg-mint-green",
      iconColor: "bg-fresh-green"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-6">Our Amazing Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been creating magical learning experiences that inspire curiosity, 
            creativity, and confidence in every child who walks through our doors.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Timeline */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={`flex items-start space-x-4 card-hover p-6 rounded-2xl ${feature.bgColor}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`w-12 h-12 ${feature.iconColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <i className={`${feature.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xl text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Teacher with young children in classroom setting */}
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Caring teacher working with young children in bright classroom" 
              className="rounded-3xl shadow-xl w-full h-auto"
              data-testid="img-about-teacher"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
