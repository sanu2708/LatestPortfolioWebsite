
import React from 'react';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="bg-offwhite pt-32 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           <div className="lg:col-span-5">
              <h1 className="text-6xl md:text-8xl font-oswald font-bold uppercase text-primary leading-[0.85] mb-8 opacity-0 animate-slide-left">
                Let's<br/>Talk
              </h1>
              <p className="font-mono text-muted text-lg mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Available for freelance opportunities and collaborations. Have a project in mind? Drop me a line.
              </p>
              
              <div className="space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                 <div>
                   <h4 className="font-oswald uppercase text-xl mb-2">Phone</h4>
                   <a href="tel:+916388782415" className="font-mono text-dark hover:text-primary text-lg block">+91 63887 82415</a>
                 </div>
                 <div>
                   <h4 className="font-oswald uppercase text-xl mb-2">Email</h4>
                   <a href="mailto:sanu27081@gmail.com" className="font-mono text-dark hover:text-primary text-lg block">sanu27081@gmail.com</a>
                 </div>
                 <div>
                   <h4 className="font-oswald uppercase text-xl mb-2">Socials</h4>
                   <div className="flex gap-4 font-mono text-sm">
                      <a href="https://github.com/sanu2708" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
                      <a href="https://www.linkedin.com/in/sanu27081/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
                      <a href="https://x.com/sanu27081" target="_blank" rel="noopener noreferrer" className="hover:text-primary">X (Twitter)</a>
                      <a href="https://www.instagram.com/mauktiksingh" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
                   </div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-lg border-t-4 border-primary opacity-0 animate-scale-in" style={{ animationDelay: '300ms' }}>
              <h3 className="font-oswald text-2xl uppercase mb-8">Project Inquiry</h3>
              <ContactForm />
           </div>
        </div>
      </div>
    </div>
  );
};