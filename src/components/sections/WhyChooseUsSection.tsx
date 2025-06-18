import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      title: 'Expert Craftsmanship',
      description: 'Our team of skilled professionals brings years of experience and attention to detail to every project.',
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    },
    {
      title: 'Transparent Pricing',
      description: 'We provide detailed, upfront quotes with no hidden fees, ensuring you know exactly what to expect.',
      icon: 'M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'On-Time Completion',
      description: 'We value your time and stick to agreed-upon schedules, completing projects efficiently without sacrificing quality.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Licensed & Insured',
      description: 'Our company is fully licensed and insured, providing you with peace of mind throughout your renovation project.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-left">
            DH INTERIOR AND RENOVATIONS pty ltd is a registered Durban based company that specializes in "turnkey renovation solutions" and "new projects" in both the commercial and residential sectors in and around Durban. Established in 2018 and growing ever since, DH INTERIOR AND RENOVATIONS has served numerous reputable companies and has left a positive mark in many residential properties throughout the years.
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto mt-4 text-left">
            We strive on customer satisfaction, quality workmanship, integrity, and professionalism. With our innovative ideas we tackle everything from large scale projects to smaller scale jobs timelessly ensuring our clients' needs and wants are consistently met. Pledged by our promise to merit, we conduct business at flexible hours, anytime of the day or week taking in consideration the availability of our clients and ensuring we accommodate all of them fairly and efficiently.
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto mt-4 text-left">
            We are committed and are aimed at providing superior quality and exceptional results by building the future and restoring the past. Our mission is to offer remarkable work at revolutionary and affordable prices while providing our clients with differentiated quality material and services to assist them in achieving their aspirations. DH INTERIOR AND RENOVATIONS is equipped with a trustworthy, committed, innovative and professional team who are impassioned in turning your visions into a reality.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="bg-primary-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
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
                    d={reason.icon}
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default WhyChooseUsSection;