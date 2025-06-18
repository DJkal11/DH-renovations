import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Here you would typically send the form data to your backend or email service
    // For demo purposes, we'll just set the submitted state to true
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
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
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to start your renovation project? Get in touch with our team for a free consultation.
          </motion.p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-gray-600">881 Idolofiya drive</p>
                  <p className="text-gray-600">Mount Moriah</p>
                  <p className="text-gray-600">Durban, 4051</p>
                </div>
              </div>
              
              <div className="flex items-start">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">084 959 3786</p>
                  <p className="text-gray-600">
                    <a href="https://wa.me/27849593786" className="text-primary-500 hover:underline">
                      Contact us on WhatsApp
                    </a>
                  </p>
                  <p className="text-gray-600">Mon-Fri: 8am - 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">projects@dhreno.co.za</p>
                </div>
              </div>
              
              <div className="flex items-start">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                  <p className="text-gray-600">Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Google Map Placeholder */}
            <div className="mt-10 bg-gray-200 rounded-lg overflow-hidden h-64">
              {/* Replace with actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">Google Map will be embedded here</p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="your@email.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="(555) 123-4567"
                      {...register('phone', { required: 'Phone number is required' })}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                  <select
                    id="service"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('service', { required: 'Please select a service' })}
                  >
                    <option value="">Select a Service</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="basement">Basement Finishing</option>
                    <option value="whole-home">Whole Home Remodeling</option>
                    <option value="outdoor">Outdoor Living Spaces</option>
                    <option value="custom">Custom Projects</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Tell us about your project..."
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full py-3 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Find answers to common questions about our renovation services and process.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-3">How long does a typical renovation take?</h3>
              <p className="text-gray-600">
                The timeline varies depending on the scope of the project. A bathroom renovation might take 2-3 weeks, while a kitchen renovation typically takes 4-6 weeks. Whole-home renovations can take several months. During your consultation, we'll provide a detailed timeline specific to your project.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Do you provide free estimates?</h3>
              <p className="text-gray-600">
                Yes, we provide free initial consultations and estimates for all renovation projects. Our team will visit your home, discuss your vision, and provide a detailed quote based on your specific requirements and budget.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Are you licensed and insured?</h3>
              <p className="text-gray-600">
                Absolutely. We are fully licensed and insured, including general liability insurance and workers' compensation. We're happy to provide proof of insurance upon request. All our work is performed according to local building codes and regulations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Do you offer financing options?</h3>
              <p className="text-gray-600">
                Yes, we partner with several financing companies to offer flexible payment options for your renovation project. During your consultation, we can discuss the various financing solutions available to help make your renovation dreams a reality.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;