import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
  project: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Homeowner',
      image: '/testimonials/testimonial-1.jpg',
      quote: 'The team at Renovations transformed our outdated kitchen into a stunning, functional space that has become the heart of our home. Their attention to detail and craftsmanship exceeded our expectations.',
      rating: 5,
      project: 'Kitchen Remodel'
    },
    {
      id: 2,
      name: 'Michael Thompson',
      position: 'Property Developer',
      image: '/testimonials/testimonial-2.jpg',
      quote: "I've worked with many contractors over the years, and Renovations stands out for their professionalism, quality work, and ability to stay on schedule and budget. They're now my go-to team for all renovation projects.",
      rating: 5,
      project: 'Whole Home Renovation'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Homeowner',
      image: '/testimonials/testimonial-3.jpg',
      quote: "Our bathroom renovation was completed on time and the results are beautiful. The team was respectful of our home and kept the work area clean throughout the project. We couldn't be happier!",
      rating: 5,
      project: 'Bathroom Remodel'
    },
    {
      id: 4,
      name: 'David Wilson',
      position: 'Business Owner',
      image: '/testimonials/testimonial-4.jpg',
      quote: 'The outdoor living space that Renovations created for us has completely transformed how we use our home. We now entertain outdoors year-round and enjoy our property like never before.',
      rating: 5,
      project: 'Outdoor Living Space'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their renovation experiences.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                    <div className="flex items-center mb-6">
                      {/* Star Rating */}
                      <div className="flex mr-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{testimonial.project}</span>
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg italic text-gray-700 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-primary-500' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-primary-500 transition-colors duration-300 focus:outline-none hidden md:block"
            onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-primary-500 transition-colors duration-300 focus:outline-none hidden md:block"
            onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;