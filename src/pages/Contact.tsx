
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-africa-sand/30 text-africa-coffee text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-africa-earth mb-6">Contact Me</h1>
          <p className="text-africa-coffee/90 leading-relaxed">
            I'd love to hear from you! Whether you have questions about my academic journey, research interests, or potential collaborations, please feel free to reach out.
          </p>
        </div>
        
        <div className="africa-card max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-africa-earth mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-md border border-africa-sand/50 focus:outline-none focus:ring-2 focus:ring-africa-earth/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-africa-earth mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md border border-africa-sand/50 focus:outline-none focus:ring-2 focus:ring-africa-earth/50"
                  placeholder="johndoe@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-africa-earth mb-1">
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 rounded-md border border-africa-sand/50 focus:outline-none focus:ring-2 focus:ring-africa-earth/50"
                placeholder="E.g., Research Collaboration"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-africa-earth mb-1">
                Your Message
              </label>
              <textarea 
                id="message" 
                rows={6} 
                className="w-full px-4 py-2 rounded-md border border-africa-sand/50 focus:outline-none focus:ring-2 focus:ring-africa-earth/50"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                className="w-full md:w-auto px-6 py-3 bg-africa-earth text-white font-medium rounded-md hover:bg-africa-earth/90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="africa-card text-center">
            <div className="w-12 h-12 bg-africa-sand/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-africa-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-africa-earth mb-2">Email</h3>
            <p className="text-africa-coffee">laura.gachanja@example.com</p>
          </div>
          
          <div className="africa-card text-center">
            <div className="w-12 h-12 bg-africa-sand/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-africa-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-africa-earth mb-2">Phone</h3>
            <p className="text-africa-coffee">+123 456 7890</p>
          </div>
          
          <div className="africa-card text-center">
            <div className="w-12 h-12 bg-africa-sand/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-africa-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-africa-earth mb-2">Location</h3>
            <p className="text-africa-coffee">University Campus, Nairobi, Kenya</p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link to="/" className="inline-flex items-center text-africa-earth hover:text-africa-earth/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
