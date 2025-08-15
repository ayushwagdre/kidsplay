import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/15551234567', '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 z-50 animate-pulse-soft"
      data-testid="button-whatsapp"
      whileHover={{ 
        scale: 1.1,
        rotate: 360,
      }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <i className="fab fa-whatsapp text-white text-2xl"></i>
    </motion.button>
  );
}
