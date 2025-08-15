import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'navbar-scrolled' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="w-12 h-12 primary-gradient rounded-2xl flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-graduation-cap text-white text-xl"></i>
          </motion.div>
          <div>
            <h1 className="font-fredoka text-2xl text-text-dark">Little Steps Academy</h1>
            <p className="text-xs text-text-medium">Modern Early Learning</p>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-text-medium hover:text-primary-blue transition-colors font-medium relative group"
              data-testid={`nav-link-${item.id}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 primary-gradient group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          ))}
          <motion.button 
            className="primary-gradient text-white px-6 py-3 rounded-2xl hover:shadow-lg transition-all duration-300 font-medium"
            data-testid="button-book-tour"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Tour
          </motion.button>
        </div>
        
        <button 
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden bg-white border-t mt-4 py-4 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block text-gray-700 hover:text-bright-blue transition-colors font-medium"
              data-testid={`nav-mobile-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="w-full bg-gradient-to-r from-warm-pink to-soft-purple text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            data-testid="button-mobile-book-tour"
          >
            Book Tour
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
