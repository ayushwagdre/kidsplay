import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/15551234567', '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-lime-green to-fresh-green rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 z-50 gradient-border"
      data-testid="button-whatsapp"
      whileHover={{ 
        scale: 1.2,
        rotate: 360,
      }}
      whileTap={{ scale: 0.8 }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <i className="fab fa-whatsapp text-white text-2xl wiggle"></i>
    </motion.button>
  );
}
