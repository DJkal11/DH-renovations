import { useState } from 'react';
import { motion } from 'framer-motion';



const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('renovations');

  const serviceCategories = [
    {
      id: 'renovations',
      title: 'Renovations & Remodelling',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      id: 'fire',
      title: 'Fire Protection Systems',
      icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
    },
    {
      id: 'plumbing',
      title: 'Plumbing',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
    }
  ];

  const serviceContent = {
    renovations: {
      title: 'Renovations, Remodelling, Maintenance and Repairs',
      content: 'DH INTERIOR AND RENOVATIONS pty ltd specializes in renovating projects and provide superior workmanship and quick turnaround times. We offer great quality material in all of our projects. Be it commercial as a business owner or residential as a homeowner we offer solutions that cater for your specific needs at cost effective prices. Our services are turnkey solutions and are not limited to tiling, electrical, interior and exterior painting, general masonry, waterproofing, carpentry, dry walls, ceilings etc.'
    },
    fire: {
      title: 'Fire Protection Systems',
      content: 'DH INTERIOR AND RENOVATIONS pty ltd also provide services in the fire protection industry. Our services are but not limited to servicing of fire equipment, refilling of extinguishers, installation of fire systems, fire doors, pumps and tanks, fire signage\'s, fire and smoke detection etc.'
    },
    plumbing: {
      title: 'Plumbing',
      content: 'We offer a broad number of plumbing service in both the commercial and residential spaces and in most cases offer our clients same day services to ensure their lives can resume as normal in the quickest turnaround time possible. We offer reliable advice while providing services such as but not limited to bathroom, kitchen and toilets plumbing, rainwater harvesting and water tank and pump installations, geyser replacement and burst pipes etc.'
    }
  };

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive services across renovations, fire protection, and plumbing for both commercial and residential clients.
          </p>
        </motion.div>

        {/* Service Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {serviceCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === category.id ? 'bg-primary-500 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveTab(category.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={category.icon}
                  />
                </svg>
                {category.title}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Service Content */}
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-8">
            <motion.h3 
              className="text-2xl font-bold mb-4 text-primary-600"
              key={`title-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {serviceContent[activeTab as keyof typeof serviceContent].title}
            </motion.h3>
            
            <motion.div
              className="prose prose-lg max-w-none"
              key={`content-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600">
                {serviceContent[activeTab as keyof typeof serviceContent].content}
              </p>
            </motion.div>

            {/* Service Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeTab === 'renovations' && (
                <>
                  <ServiceFeature title="Interior Renovations" icon="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  <ServiceFeature title="Exterior Painting" icon="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  <ServiceFeature title="Tiling & Flooring" icon="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  <ServiceFeature title="Carpentry" icon="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  <ServiceFeature title="Waterproofing" icon="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  <ServiceFeature title="Dry Walls & Ceilings" icon="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </>
              )}
              
              {activeTab === 'fire' && (
                <>
                  <ServiceFeature title="Fire Equipment Servicing" icon="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <ServiceFeature title="Extinguisher Refilling" icon="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  <ServiceFeature title="Fire Systems Installation" icon="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <ServiceFeature title="Fire Doors" icon="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  <ServiceFeature title="Pumps & Tanks" icon="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  <ServiceFeature title="Fire & Smoke Detection" icon="M13 10V3L4 14h7v7l9-11h-7z" />
                </>
              )}
              
              {activeTab === 'plumbing' && (
                <>
                  <ServiceFeature title="Bathroom Plumbing" icon="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  <ServiceFeature title="Kitchen Plumbing" icon="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  <ServiceFeature title="Toilet Plumbing" icon="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  <ServiceFeature title="Rainwater Harvesting" icon="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  <ServiceFeature title="Water Tank Installation" icon="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  <ServiceFeature title="Burst Pipe Repairs" icon="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <Link to="/services" className="btn-primary">
            View All Services
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
};

// Helper component for service features
const ServiceFeature = ({ title, icon }: { title: string; icon: string }) => (
  <motion.div 
    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-primary-100 p-3 rounded-full mr-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-primary-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={icon}
        />
      </svg>
    </div>
    <h4 className="font-medium">{title}</h4>
  </motion.div>
);

export default ServicesSection;