import { memo } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(/portfolio/home.jpg)', 
            filter: 'brightness(0.7)' 
          }}
          aria-hidden="true"
          role="img"
          aria-label="Home renovation background image"
        />
        <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Home With Expert Renovations
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-4 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional renovation services tailored to your vision. Serving both commercial and residential sectors, we provide expert solutions for businesses and homeowners alike with superior workmanship and quick turnaround times.
          </motion.p>
          
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#portfolio" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById('portfolio');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        aria-hidden="true"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(HeroSection);