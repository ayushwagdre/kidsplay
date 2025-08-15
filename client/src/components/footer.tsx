import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Programs", href: "#programs" },
    { label: "Admissions", href: "#admissions" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#", color: "bg-bright-blue" },
    { icon: "fab fa-instagram", href: "#", color: "bg-warm-pink" },
    { icon: "fab fa-twitter", href: "#", color: "bg-bright-blue" },
    { icon: "fab fa-youtube", href: "#", color: "bg-fresh-green" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-warm-yellow to-warm-pink rounded-2xl flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <h3 className="font-fredoka text-2xl">Little Steps Academy</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Nurturing young minds through play-based learning, creativity, and endless discovery. 
              Where every child's potential shines bright.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors`}
                  data-testid={`social-link-${index}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-fredoka text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-warm-yellow transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-fredoka text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and parenting tips.</p>
            <form className="space-y-3" data-testid="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-2xl bg-gray-700 border border-gray-600 focus:border-bright-blue focus:outline-none transition-colors text-white"
                data-testid="input-newsletter-email"
              />
              <motion.button 
                type="submit" 
                className="w-full bg-gradient-to-r from-warm-pink to-soft-purple py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                data-testid="button-subscribe"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Little Steps Academy. All rights reserved. | Privacy Policy | Terms of Service</p>
        </motion.div>
      </div>
    </footer>
  );
}
