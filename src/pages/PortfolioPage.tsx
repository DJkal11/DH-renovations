import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  location: string;
  duration: string;
  testimonial?: {
    quote: string;
    client: string;
  };
  features: string[];
}

const PortfolioPage = () => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 'modern-kitchen',
      title: 'Modern Kitchen Transformation',
      category: 'kitchen',
      description: 'Complete renovation of an outdated kitchen into a modern, open-concept space with custom cabinetry, quartz countertops, and high-end appliances.',
      beforeImage: '/portfolio/kitchen-before.jpg',
      afterImage: '/portfolio/kitchen-after.jpg',
      location: 'Brooklyn, NY',
      duration: '6 weeks',
      testimonial: {
        quote: 'The team transformed our kitchen beyond our expectations. The attention to detail and quality of work was exceptional.',
        client: 'Sarah & Michael Johnson'
      },
      features: [
        'Custom white shaker cabinets',
        'Quartz countertops',
        'Subway tile backsplash',
        'Hardwood flooring',
        'Stainless steel appliances',
        'Kitchen island with seating',
        'Under-cabinet lighting',
        'Pot filler faucet'
      ]
    },
    {
      id: 'luxury-bathroom',
      title: 'Luxury Master Bathroom',
      category: 'bathroom',
      description: 'Transformation of a standard bathroom into a spa-like retreat featuring a walk-in shower, freestanding tub, and custom vanity.',
      beforeImage: '/portfolio/bathroom-before.jpg',
      afterImage: '/portfolio/bathroom-after.jpg',
      location: 'Manhattan, NY',
      duration: '4 weeks',
      testimonial: {
        quote: 'Our bathroom feels like a luxury spa now. The craftsmanship is impeccable and the project was completed on time and on budget.',
        client: 'Emily & David Chen'
      },
      features: [
        'Walk-in glass shower',
        'Freestanding soaking tub',
        'Heated marble floors',
        'Double vanity with quartz countertop',
        'Custom lighting',
        'Rainfall showerhead',
        'Built-in storage niches',
        'Water-efficient fixtures'
      ]
    },
    {
      id: 'basement-entertainment',
      title: 'Basement Entertainment Center',
      category: 'basement',
      description: 'Conversion of an unfinished basement into a multi-functional entertainment space with a home theater, wet bar, and game area.',
      beforeImage: '/portfolio/basement-before.jpg',
      afterImage: '/portfolio/basement-after.jpg',
      location: 'Queens, NY',
      duration: '8 weeks',
      testimonial: {
        quote: 'The basement is now our favorite part of the house. The team handled everything from waterproofing to the final decorative touches.',
        client: 'Robert & Lisa Martinez'
      },
      features: [
        'Home theater with surround sound',
        'Custom wet bar with refrigerator',
        'Game area with built-in storage',
        'Recessed lighting',
        'Luxury vinyl plank flooring',
        'Sound insulation',
        'Egress windows',
        'Full bathroom addition'
      ]
    },
    {
      id: 'open-concept-living',
      title: 'Open Concept Living Space',
      category: 'whole-home',
      description: 'Structural renovation to create an open floor plan connecting the kitchen, dining, and living areas for a modern lifestyle.',
      beforeImage: '/portfolio/living-before.jpg',
      afterImage: '/portfolio/living-after.jpg',
      location: 'Staten Island, NY',
      duration: '10 weeks',
      testimonial: {
        quote: 'The transformation is incredible. Our home feels so much larger and more connected now. The team handled the structural work expertly.',
        client: 'Jennifer & Thomas Wilson'
      },
      features: [
        'Load-bearing wall removal',
        'Engineered beam installation',
        'Hardwood flooring throughout',
        'Recessed lighting',
        'Custom built-ins',
        'Open kitchen with island',
        'New electrical and HVAC',
        'Fresh paint and trim work'
      ]
    },
    {
      id: 'backyard-oasis',
      title: 'Backyard Oasis',
      category: 'outdoor',
      description: 'Creation of a multi-functional outdoor living space featuring a custom deck, outdoor kitchen, and fire pit area.',
      beforeImage: '/portfolio/outdoor-before.jpg',
      afterImage: '/portfolio/outdoor-after.jpg',
      location: 'Bronx, NY',
      duration: '5 weeks',
      testimonial: {
        quote: 'Our backyard went from unused space to our favorite place to entertain. The outdoor kitchen and fire pit area get used almost every weekend.',
        client: 'Carlos & Maria Rodriguez'
      },
      features: [
        'Composite deck with railing',
        'Outdoor kitchen with grill and countertop',
        'Natural stone fire pit',
        'Paver patio',
        'Landscape lighting',
        'Privacy fence',
        'Pergola with ceiling fan',
        'Low-maintenance plantings'
      ]
    },
    {
      id: 'attic-conversion',
      title: 'Attic to Home Office Conversion',
      category: 'custom',
      description: 'Transformation of an unused attic into a functional home office with built-in storage, improved insulation, and natural lighting.',
      beforeImage: '/portfolio/attic-before.jpg',
      afterImage: '/portfolio/attic-after.jpg',
      location: 'Long Island, NY',
      duration: '6 weeks',
      testimonial: {
        quote: 'The team turned our dusty attic into a beautiful, functional workspace. The skylights and built-ins make it perfect for working from home.',
        client: 'Amanda Taylor'
      },
      features: [
        'Improved insulation and drywall',
        'Hardwood flooring',
        'Custom built-in desk and shelving',
        'Skylights for natural lighting',
        'Mini-split HVAC system',
        'Recessed and task lighting',
        'Sound insulation',
        'Staircase renovation'
      ]
    },
  ];

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

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
            Our Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse our collection of successful renovation projects and see the transformations we've created for our clients.
          </motion.p>
        </div>
      </div>

      {selectedProject ? (
        // Project Detail View
        <div className="container-custom py-16">
          <button 
            onClick={closeProjectDetails}
            className="flex items-center text-primary-500 mb-8 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to All Projects
          </button>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.location}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.duration}
                </span>
              </div>
              
              <p className="text-gray-700 text-lg mb-8">{selectedProject.description}</p>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">Before & After</h3>
                <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={selectedProject.beforeImage} alt="Before renovation" />}
                    itemTwo={<ReactCompareSliderImage src={selectedProject.afterImage} alt="After renovation" />}
                    className="h-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
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
                </div>
                
                {selectedProject.testimonial && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Client Testimonial</h3>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <svg
                        className="h-8 w-8 text-primary-300 mb-4"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-600 italic mb-4">"{selectedProject.testimonial.quote}"</p>
                      <p className="text-gray-800 font-medium">— {selectedProject.testimonial.client}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <a href="/contact" className="btn-primary">
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Projects Grid View
        <div className="container-custom py-16">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('kitchen')}
              className={`px-4 py-2 rounded-full ${filter === 'kitchen' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Kitchen
            </button>
            <button
              onClick={() => setFilter('bathroom')}
              className={`px-4 py-2 rounded-full ${filter === 'bathroom' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Bathroom
            </button>
            <button
              onClick={() => setFilter('basement')}
              className={`px-4 py-2 rounded-full ${filter === 'basement' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Basement
            </button>
            <button
              onClick={() => setFilter('whole-home')}
              className={`px-4 py-2 rounded-full ${filter === 'whole-home' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Whole Home
            </button>
            <button
              onClick={() => setFilter('outdoor')}
              className={`px-4 py-2 rounded-full ${filter === 'outdoor' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Outdoor
            </button>
            <button
              onClick={() => setFilter('custom')}
              className={`px-4 py-2 rounded-full ${filter === 'custom' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Custom
            </button>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => openProjectDetails(project)}
              >
                <div className="h-64 relative">
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={project.beforeImage} alt="Before renovation" />}
                    itemTwo={<ReactCompareSliderImage src={project.afterImage} alt="After renovation" />}
                    className="h-full"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{project.location}</span>
                    <span className="text-primary-500 font-medium text-sm flex items-center">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      )}

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
              <h2 className="text-3xl font-bold mb-2">Ready to Transform Your Space?</h2>
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

export default PortfolioPage;