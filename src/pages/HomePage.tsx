import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection /> {/* Who We Are */}
      <ServicesSection /> {/* What We Do */}
      <PortfolioSection /> {/* Featured Work */}
      <ContactSection /> {/* Contact Us */}
      
      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-primary-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-primary-600 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </>
  );
};

export default HomePage;