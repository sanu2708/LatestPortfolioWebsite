import React from 'react';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="bg-offwhite pt-32 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           <div className="lg:col-span-5">
              <h1 className="text-6xl md:text-8xl font-oswald font-bold uppercase text-primary leading-[0.85] mb-8">
                Let's<br/>Talk
              </h1>
              <p className="font-mono text-muted text-lg mb-12">
                Available for freelance opportunities and collaborations. Have a project in mind? Drop me a line.
              </p>
              
              <div className="space-y-8">
                 <div>
                   <h4 className="font-oswald uppercase text-xl mb-2">Email</h4>
                   <a href="mailto:info@sanusingh.com" className="font-mono text-dark hover:text-primary text-lg">info@sanusingh.com</a>
                 </div>
                 <div>
                   <h4 className="font-oswald uppercase text-xl mb-2">Socials</h4>
                   <div className="flex gap-4 font-mono text-sm">
                      <a href="#" className="hover:text-primary">LinkedIn</a>
                      <a href="#" className="hover:text-primary">Twitter</a>
                      <a href="#" className="hover:text-primary">Instagram</a>
                   </div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-lg border-t-4 border-primary">
              <h3 className="font-oswald text-2xl uppercase mb-8">Project Inquiry</h3>
              <ContactForm />
           </div>
        </div>
      </div>
    </div>
  );
};