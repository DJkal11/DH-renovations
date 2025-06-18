import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { lazyLoad } from './utils/lazyLoad';

// Lazy load page components
const HomePage = lazyLoad(() => import('./pages/HomePage'));
const AboutPage = lazyLoad(() => import('./pages/AboutPage'));
const ServicesPage = lazyLoad(() => import('./pages/ServicesPage'));
const PortfolioPage = lazyLoad(() => import('./pages/PortfolioPage'));
const ContactPage = lazyLoad(() => import('./pages/ContactPage'));
const NotFoundPage = lazyLoad(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
