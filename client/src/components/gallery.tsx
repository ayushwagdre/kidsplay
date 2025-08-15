import { useState } from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Children building with colorful blocks in bright classroom",
      id: "blocks-classroom"
    },
    {
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=350",
      alt: "Colorful playground equipment with children playing outdoors",
      id: "playground-outdoor"
    },
    {
      src: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=350",
      alt: "Teacher reading colorful storybook to engaged children",
      id: "reading-corner"
    },
    {
      src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Children engaged in colorful arts and crafts activities",
      id: "arts-crafts"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Children enjoying music and movement class with instruments",
      id: "music-movement"
    },
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=350",
      alt: "Children exploring nature and gardening activities outdoors",
      id: "garden-learning"
    },
    {
      src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=350",
      alt: "Children working together on STEM building projects",
      id: "stem-learning"
    },
    {
      src: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Children engaged in imaginative dramatic play activities",
      id: "dramatic-play"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-6">Our Happy Moments 📸</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a peek into our vibrant classrooms, exciting activities, and the pure joy of learning that fills our academy every single day! 🌈✨
          </p>
        </motion.div>
        
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="masonry-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full rounded-2xl shadow-lg cursor-pointer"
                onClick={() => openLightbox(image.src)}
                data-testid={`gallery-img-${image.id}`}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-candy-red via-warm-pink to-soft-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 card-hover shadow-lg"
            data-testid="button-view-full-gallery"
            whileHover={{ scale: 1.05, y: -2, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-images mr-2"></i>
            View Full Gallery 🎨
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <motion.img 
            src={lightboxImage}
            alt="Gallery image in lightbox"
            className="max-w-full max-h-full object-contain rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            data-testid="lightbox-image"
          />
          <motion.button 
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
            onClick={closeLightbox}
            data-testid="button-close-lightbox"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-times"></i>
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}
