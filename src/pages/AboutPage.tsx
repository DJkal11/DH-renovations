import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutPage = () => {
  const [refTeam, inViewTeam] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refValues, inViewValues] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refHistory, inViewHistory] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refAccreditations, inViewAccreditations] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Founder & CEO',
      bio: 'With over 20 years of experience in the renovation industry, John founded the company with a vision to deliver exceptional quality and customer service.',
      image: '/team/john-smith.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Lead Designer',
      bio: 'Sarah brings 15 years of interior design expertise to every project, ensuring beautiful and functional spaces that exceed client expectations.',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Project Manager',
      bio: "Michael's attention to detail and organizational skills ensure that every project is completed on time and within budget.",
      image: '/team/michael-rodriguez.jpg'
    },
    {
      name: 'Emily Chen',
      position: 'Customer Relations',
      bio: 'Emily ensures clear communication between our team and clients, making the renovation process smooth and stress-free.',
      image: '/team/emily-chen.jpg'
    },
  ];

  const coreValues = [
    {
      title: 'Quality Craftsmanship',
      description: 'We never compromise on quality, using premium materials and proven techniques in every project.',
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your vision and satisfaction are our top priorities from the initial consultation to the final walkthrough.',
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Integrity & Transparency',
      description: 'We provide honest assessments, clear communication, and transparent pricing throughout the entire process.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Innovation',
      description: 'We continuously explore new materials, techniques, and technologies to deliver cutting-edge renovation solutions.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
  ];

  const accreditations = [
    {
      name: 'National Association of Home Builders',
      logo: '/accreditations/nahb.svg',
      description: 'Member in good standing since 2010'
    },
    {
      name: 'Better Business Bureau',
      logo: '/accreditations/bbb.svg',
      description: 'A+ Rating'
    },
    {
      name: 'National Kitchen & Bath Association',
      logo: '/accreditations/nkba.svg',
      description: 'Certified Kitchen & Bath Remodeler'
    },
    {
      name: 'EPA Lead-Safe Certified',
      logo: '/accreditations/epa.svg',
      description: 'Certified for lead-safe renovation practices'
    },
  ];

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
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're a team of passionate renovation experts dedicated to transforming houses into dream homes.
          </motion.p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2005, our renovation company began with a simple mission: to provide high-quality home renovations with exceptional customer service. What started as a small team of passionate craftsmen has grown into a full-service renovation company serving the entire metropolitan area.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, John Smith, began his career as a carpenter and quickly realized that many homeowners were frustrated with contractors who didn't listen to their needs or deliver on their promises. He established our company on the principles of clear communication, quality craftsmanship, and customer satisfaction.
            </p>
            <p className="text-gray-700">
              Today, we've completed over 500 successful projects, from kitchen and bathroom remodels to whole-home renovations. Our team has grown, but our commitment to quality and customer satisfaction remains unchanged.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="/about/our-story.jpg" 
              alt="Our company history" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-100 py-16">
        <div className="container-custom">
          <motion.div
            ref={refValues}
            initial={{ opacity: 0, y: 30 }}
            animate={inViewValues ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These principles guide everything we do, from how we interact with clients to how we approach each renovation project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inViewValues ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <div className="p-3 bg-primary-100 rounded-full mb-4">
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
                      d={value.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="container-custom py-16">
        <motion.div
          ref={refTeam}
          initial={{ opacity: 0, y: 30 }}
          animate={inViewTeam ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our experienced professionals are passionate about creating beautiful, functional spaces that exceed your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inViewTeam ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 bg-gray-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our History */}
      <div className="bg-gray-100 py-16">
        <div className="container-custom">
          <motion.div
            ref={refHistory}
            initial={{ opacity: 0, y: 30 }}
            animate={inViewHistory ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              A timeline of our growth and achievements over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inViewHistory ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="flex items-center justify-center">
                  <div className="bg-primary-500 rounded-full w-8 h-8 z-10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="md:text-right md:pr-8">
                    <h3 className="text-xl font-semibold mb-2">2005</h3>
                    <p className="text-gray-600">Company founded by John Smith with a focus on kitchen and bathroom renovations.</p>
                  </div>
                  <div></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inViewHistory ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="flex items-center justify-center">
                  <div className="bg-primary-500 rounded-full w-8 h-8 z-10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div></div>
                  <div className="md:pl-8">
                    <h3 className="text-xl font-semibold mb-2">2010</h3>
                    <p className="text-gray-600">Expanded services to include whole-home renovations and custom projects.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inViewHistory ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="flex items-center justify-center">
                  <div className="bg-primary-500 rounded-full w-8 h-8 z-10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="md:text-right md:pr-8">
                    <h3 className="text-xl font-semibold mb-2">2015</h3>
                    <p className="text-gray-600">Celebrated our 10th anniversary and 250th completed project.</p>
                  </div>
                  <div></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inViewHistory ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="flex items-center justify-center">
                  <div className="bg-primary-500 rounded-full w-8 h-8 z-10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div></div>
                  <div className="md:pl-8">
                    <h3 className="text-xl font-semibold mb-2">2020</h3>
                    <p className="text-gray-600">Introduced eco-friendly renovation options and smart home integration services.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inViewHistory ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative"
              >
                <div className="flex items-center justify-center">
                  <div className="bg-primary-500 rounded-full w-8 h-8 z-10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="md:text-right md:pr-8">
                    <h3 className="text-xl font-semibold mb-2">Today</h3>
                    <p className="text-gray-600">Continuing to grow and innovate while maintaining our commitment to quality and customer satisfaction.</p>
                  </div>
                  <div></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditations */}
      <div className="container-custom py-16">
        <motion.div
          ref={refAccreditations}
          initial={{ opacity: 0, y: 30 }}
          animate={inViewAccreditations ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Accreditations</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We maintain the highest standards through professional certifications and memberships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accreditations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inViewAccreditations ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 mb-4 flex items-center justify-center">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="max-h-full max-w-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
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

export default AboutPage;