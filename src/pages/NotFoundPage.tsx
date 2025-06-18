import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="pt-16">
      <div className="container-custom py-20 flex flex-col items-center justify-center min-h-[70vh] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;