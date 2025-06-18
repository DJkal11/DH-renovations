import { useState, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = useCallback((data: FormData) => {
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  }, [reset]);

  const services = [
    { value: '', label: 'Select a Service' },
    { value: 'kitchen', label: 'Kitchen Remodeling' },
    { value: 'bathroom', label: 'Bathroom Renovation' },
    { value: 'basement', label: 'Basement Finishing' },
    { value: 'whole-home', label: 'Whole Home Remodeling' },
    { value: 'outdoor', label: 'Outdoor Living Spaces' },
    { value: 'custom', label: 'Custom Project' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <section className="section-padding bg-gray-50" id="contact">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your renovation project? Get in touch with our team for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get a Free Quote</h3>
            
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
                <p>Thank you for your message! We'll get back to you shortly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your name"
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1" role="alert">{errors.name.message}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your email"
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1" role="alert">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your phone number"
                    aria-required="true"
                    aria-invalid={errors.phone ? "true" : "false"}
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1" role="alert">{errors.phone.message}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-700 mb-1">Service Interested In</label>
                <select
                  id="service"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
                  aria-required="true"
                  aria-invalid={errors.service ? "true" : "false"}
                  {...register('service', { required: 'Please select a service' })}
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>{service.label}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1" role="alert">{errors.service.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Tell us about your project"
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1" role="alert">{errors.message.message}</p>}
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
                aria-label="Submit contact form"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">881 Idolofiya drive, Mount Moriah, Durban, 4051</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">084 959 3786</p>
                    <p className="text-gray-600">
                      <a href="https://wa.me/27849593786" className="text-primary-500 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-sm">
                        Contact us on WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:projects@dhreno.co.za" className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-sm">
                        projects@dhreno.co.za
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Hours</h4>
                    <p className="text-gray-600">Monday-Friday: 8am - 6pm</p>
                    <p className="text-gray-600">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ContactSection);