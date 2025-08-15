import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childAge: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      content: "123 Learning Lane, Happy Valley, CA 90210",
      bgColor: "bg-bright-blue"
    },
    {
      icon: "fas fa-phone", 
      title: "Phone",
      content: "(555) 123-KIDS (5437)",
      bgColor: "bg-fresh-green"
    },
    {
      icon: "fas fa-envelope",
      title: "Email", 
      content: "hello@littlestepsacademy.com",
      bgColor: "bg-warm-pink"
    },
    {
      icon: "fas fa-clock",
      title: "Hours",
      content: "Monday - Friday: 7:00 AM - 6:00 PM",
      bgColor: "bg-warm-yellow"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your child's learning journey? We'd love to hear from you and answer any questions you may have.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            className="bg-gradient-to-br from-soft-yellow to-sky-blue rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-fredoka text-2xl text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Parent Name</label>
                  <input 
                    type="text" 
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-bright-blue focus:outline-none transition-colors" 
                    placeholder="Your full name"
                    data-testid="input-parent-name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-bright-blue focus:outline-none transition-colors" 
                    placeholder="Your phone number"
                    data-testid="input-phone"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-bright-blue focus:outline-none transition-colors" 
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Child's Age</label>
                <select 
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-bright-blue focus:outline-none transition-colors"
                  data-testid="select-child-age"
                >
                  <option value="">Select age range</option>
                  <option value="18months-2years">18 months - 2 years</option>
                  <option value="2-3years">2 - 3 years</option>
                  <option value="3-4years">3 - 4 years</option>
                  <option value="4-5years">4 - 5 years</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-bright-blue focus:outline-none transition-colors" 
                  placeholder="Tell us about your child and any questions you have..."
                  data-testid="textarea-message"
                />
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full bg-gradient-to-r from-warm-pink to-soft-purple text-white py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 card-hover"
                data-testid="button-send-message"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info & Map */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-mint-green to-blush-pink rounded-3xl p-8 shadow-xl">
              <h3 className="font-fredoka text-2xl text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    data-testid={`contact-info-${info.title.toLowerCase()}`}
                  >
                    <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center`}>
                      <i className={`${info.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-3xl h-64 shadow-xl flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-4xl text-gray-400 mb-4"></i>
                <p className="text-gray-500 font-medium">Interactive Map</p>
                <p className="text-gray-400 text-sm">Google Maps Integration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
