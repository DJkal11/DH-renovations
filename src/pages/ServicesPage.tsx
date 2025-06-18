import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  features: string[];
  image: string;
}

const ServicesPage = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'kitchen',
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into a functional and beautiful space.',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      details: 'Our kitchen remodeling services include custom cabinetry, countertop installation, appliance upgrades, lighting design, and complete layout transformations. We work with you to create a kitchen that balances functionality with your aesthetic preferences.',
      features: [
        'Custom cabinet design and installation',
        'Premium countertop options (granite, quartz, marble)',
        'Energy-efficient appliance upgrades',
        'Kitchen island additions',
        'Lighting design and installation',
        'Flooring replacement',
        'Backsplash design and installation',
        'Plumbing and electrical updates'
      ],
      image: '/services/kitchen.jpg'
    },
    {
      id: 'bathroom',
      title: 'Bathroom Renovation',
      description: 'Create a spa-like retreat in your own home.',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      details: 'Our bathroom renovation services include tub and shower replacement, vanity installation, tile work, lighting upgrades, and water-efficient fixture installation. We can transform outdated bathrooms into modern, relaxing spaces with attention to both form and function.',
      features: [
        'Custom shower and tub installation',
        'Luxury vanity and countertop options',
        'Tile flooring and shower surrounds',
        'Water-efficient fixtures',
        'Lighting and ventilation improvements',
        'Heated flooring systems',
        'Accessibility modifications',
        'Storage solutions'
      ],
      image: '/services/bathroom.jpg'
    },
    {
      id: 'basement',
      title: 'Basement Finishing',
      description: 'Add valuable living space to your home.',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      details: 'Our basement finishing services transform underutilized spaces into functional living areas. We handle waterproofing, insulation, electrical work, flooring, and custom built-ins to create entertainment rooms, home offices, guest suites, or whatever space you envision.',
      features: [
        'Waterproofing and moisture control',
        'Insulation and soundproofing',
        'Electrical and lighting installation',
        'HVAC integration',
        'Custom entertainment centers',
        'Home theater design',
        'Home office or guest suite creation',
        'Egress window installation'
      ],
      image: '/services/basement.jpg'
    },
    {
      id: 'whole-home',
      title: 'Whole Home Remodeling',
      description: 'Comprehensive renovations tailored to your lifestyle.',
      icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
      details: 'Our whole home remodeling services provide comprehensive solutions for transforming your entire living space. From open concept conversions to multi-room renovations, we handle all aspects of the project including structural changes, electrical and plumbing updates, and finishing touches.',
      features: [
        'Open concept transformations',
        'Floor plan redesign',
        'Multi-room renovations',
        'Structural modifications',
        'Complete electrical and plumbing updates',
        'Window and door replacement',
        'Flooring installation throughout',
        'Interior and exterior painting'
      ],
      image: '/services/whole-home.jpg'
    },
    {
      id: 'outdoor',
      title: 'Outdoor Living Spaces',
      description: 'Extend your living area to the great outdoors.',
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      details: 'Our outdoor living space services include deck and patio construction, outdoor kitchens, fire pits, pergolas, and landscaping design. We create beautiful, functional outdoor areas that extend your living space and enhance your property value.',
      features: [
        'Custom deck and patio design',
        'Outdoor kitchen installation',
        'Fire pit and fireplace construction',
        'Pergola and gazebo building',
        'Landscaping design and installation',
        'Outdoor lighting systems',
        'Water features',
        'Fencing and privacy solutions'
      ],
      image: '/services/outdoor.jpg'
    },
    {
      id: 'custom',
      title: 'Custom Projects',
      description: 'Unique solutions for your specific renovation needs.',
      icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      details: 'Our custom project services address unique renovation needs that don\'t fit standard categories. Whether it\'s built-in storage solutions, accessibility modifications, home additions, or specialty rooms, we work closely with you to bring your vision to life with quality craftsmanship.',
      features: [
        'Built-in storage solutions',
        'Accessibility modifications',
        'Home additions',
        'Specialty rooms (wine cellars, home gyms)',
        'Smart home technology integration',
        'Energy efficiency upgrades',
        'Historic home restoration',
        'Unique architectural features'
      ],
      image: '/services/custom.jpg'
    },
  ];

  // Check for hash in URL to scroll to specific service
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && services.some(service => service.id === hash)) {
      setActiveService(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash, services]);

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container-custom">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a comprehensive range of renovation services to transform your home into the space you've always dreamed of.
          </motion.p>
        </div>
      </div>

      {/* Services List */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Navigation Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
              <nav className="space-y-2">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className={`block px-4 py-2 rounded-md transition-colors duration-300 ${activeService === service.id ? 'bg-primary-500 text-white' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveService(service.id)}
                  >
                    {service.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-gray-50 rounded-md">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">Not sure which service is right for your project? Contact us for a free consultation.</p>
                <a href="/contact" className="btn-primary w-full text-center">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="md:col-span-2 space-y-16">
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                id={service.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-64 bg-gray-300">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary-100 rounded-lg mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={service.icon}
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-gray-700 mb-6">{service.details}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a href="/contact" className="btn-primary inline-block">
                      Get a Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="container-custom">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Project?</h2>
              <p className="text-gray-600 max-w-2xl">
                Contact us today for a free consultation and quote on your renovation project. Our team is ready to bring your vision to life.
              </p>
            </div>
            <a href="/contact" className="btn-primary whitespace-nowrap">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;