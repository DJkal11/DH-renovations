import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Project {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
}

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 'ablution-block',
      title: 'New Ablution Block',
      category: 'commercial',
      images: [
        '/portfolio/ablution-block-1.jpg',
        '/portfolio/ablution-block-2.jpg',
        '/portfolio/ablution-block-3.jpg'
      ],
      description: 'Our most recent project that we have proudly completed from start to finish was a new ablution block at Mediclinic Victoria hospital in Tongaat. From plumbing underground and in walls to installation of sanware, we did it all.'
    },
    {
      id: 'fire-protection',
      title: 'Installation of Fire Protection Systems',
      category: 'fire-systems',
      images: [
        '/portfolio/portfolio-img-9.jpg',
        '/portfolio/portfolio-img-20.jpg',
        '/portfolio/portfolio-img-21.jpg'
      ],
      description: 'Our team travelled to Bizana and Gumbu to provide installation of fire protection systems in Cash and Carry\'s. After completing these projects, we had a sense of pride and comfort instilled in us knowing that consumers and business owners were now shielded from risk of fires. The end result was simply pleasing.'
    },
    {
      id: 'staircase-storage',
      title: 'Home Renovation – Storage Under Staircase',
      category: 'custom',
      images: [
        '/portfolio/portfolio-img-1.jpg',
        '/portfolio/portfolio-img-2.jpg',
      ],
      description: 'DH INTERIOR AND RENOVATIONS strive on providing our clients with innovative and "out the box" ideas. In this project we gave our customer an opportunity to utilize what was once wasted space at the same time giving them modern and custom made storage cabinets.'
    },
    {
      id: 'pinetown-renovation',
      title: 'Full Home Renovation in Pinetown',
      category: 'whole-home',
      images: [
        '/portfolio/portfolio-img-3.jpg',
        '/portfolio/portfolio-img-8.jpg',
        '/portfolio/portfolio-img-18.jpg',
        '/portfolio/portfolio-img-19.jpg'
      ],
      description: 'We had the opportunity to put our skills to the test with a full home renovation. Our clients were first time property owners and they had instilled their faith and trust in us at DH INTERIOR AND RENOVATIONS and we delivered them the best customer satisfaction possible.'
    },
    {
      id: 'kitchen-renovation',
      title: 'Kitchen Renovation',
      category: 'kitchen',
      images: [
        '/portfolio/portfolio-img-12.jpg',
        '/portfolio/portfolio-img-13.jpg'
      ],
      description: 'The kitchen is the most important room in most homes. Keeping up to date with the latest trends, DH INTERIOR AND RENOVATIONS proudly completed another kitchen renovation tailored to suit our client\'s needs.'
    },
    {
      id: 'bathroom-bedroom',
      title: 'Bathroom and Bedroom Renovations',
      category: 'bathroom',
      images: [
        '/portfolio/portfolio-img-14.jpg',
        '/portfolio/portfolio-img-15.jpg',
        '/portfolio/portfolio-img-16.jpg',
        '/portfolio/portfolio-img-17.jpg',
      ],
      description: 'We at DH INTERIOR AND RENOVATIONS has a great deal of experience in the renovations industry and we are always available to offer our clients the best possible advice based on their expectations. We provide complete services needed to renovate your bathroom and bedroom spaces. Service include but not limited to tiling, painting, waterproofing, general masonry and installation of fixtures and sanware such as toilets, shower glasses, tubs, bidets, towel racks, rails, holders etc.'
    },
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'fire-systems', name: 'Fire Systems' },
    { id: 'custom', name: 'Custom Solutions' },
    { id: 'whole-home', name: 'Full Home' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'bathroom', name: 'Bathroom' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our showcase of transformative renovation projects that highlight our commitment to quality craftsmanship and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeFilter === filter.id ? 'bg-primary-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden group bg-white shadow-lg rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-72 overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="h-full w-full"
                  loop={true}
                >
                  {project.images.map((image, i) => (
                    <SwiperSlide key={i}>
                      <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${i+1}`} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute top-2 right-2 z-10 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {filters.find(f => f.id === project.category)?.name}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {/* <Link
                  to={`/portfolio/${project.id}`}
                  className="text-primary-500 font-medium hover:text-primary-600 inline-flex items-center"
                >
                  View Project Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link> */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <Link to="/portfolio" className="btn-primary">
            View All Projects
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;