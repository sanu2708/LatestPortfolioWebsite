import React from 'react';
import { WaveOverlay } from '../components/WaveOverlay';

export const About: React.FC = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 
    'Node.js', 'WebGL', 'Figma', 'UI/UX Design'
  ];

  return (
    <div className="bg-offwhite pt-32 min-h-screen">
      {/* Intro */}
      <div className="container mx-auto px-6 mb-24">
         <div className="max-w-4xl">
            <h1 className="text-6xl md:text-9xl font-oswald font-bold uppercase text-primary leading-[0.85] mb-12">
              Creative<br/>Developer
            </h1>
            <div className="flex flex-col md:flex-row gap-12">
               <p className="font-mono text-sm md:text-base leading-loose text-muted md:w-1/2">
                 I am Sanu Singh, a multidisciplinary front-end developer and designer. I believe that the web is a canvas where logic meets creativity. With over 5 years of experience, I help brands tell their stories through immersive digital experiences.
               </p>
               <div className="md:w-1/2">
                  <h3 className="font-oswald text-xl uppercase mb-6 border-b border-gray-200 pb-2">Technical Arsenal</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {skills.map(skill => (
                      <span key={skill} className="font-mono text-sm text-dark">/ {skill}</span>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* WORKSTATION SECTION */}
      <section className="bg-beige py-32 relative overflow-hidden">
         <WaveOverlay className="top-0 -translate-y-20 text-offwhite" />
         
         <div className="container mx-auto px-6 relative">
            {/* Huge Background Text */}
            <h2 className="absolute top-0 left-0 w-full text-center text-[12vw] font-oswald font-bold text-primary/5 z-0 pointer-events-none">
              WORKSTATION
            </h2>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[600px]">
               {/* Collage Item 1 */}
               <div className="md:col-span-4 relative md:top-12">
                  <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop" className="shadow-xl w-full aspect-[4/5] object-cover rotate-[-2deg]" alt="Workspace 1" />
                  <p className="font-mono text-xs mt-4 text-muted">MacBook Pro M1 Max - The Powerhouse</p>
               </div>

               {/* Text Block */}
               <div className="md:col-span-4 text-center py-12">
                  <p className="font-oswald text-2xl uppercase leading-tight">
                    "My environment reflects my code: Clean, Organized, and Efficient."
                  </p>
               </div>

               {/* Collage Item 2 */}
               <div className="md:col-span-4 relative md:-top-12">
                  <img src="https://images.unsplash.com/photo-1550439062-609e15312797?q=80&w=800&auto=format&fit=crop" className="shadow-xl w-full aspect-square object-cover rotate-[3deg]" alt="Workspace 2" />
                  <p className="font-mono text-xs mt-4 text-muted text-right">Analog Tools & Sketches</p>
               </div>
            </div>
            
            {/* Floating Small Images */}
            <div className="hidden lg:block absolute bottom-20 left-20 w-48">
               <img src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=400" className="shadow-lg w-full rotate-6 border-4 border-white" alt="Coffee" />
            </div>
         </div>
         
         <WaveOverlay className="bottom-0 translate-y-10 text-offwhite rotate-180" />
      </section>
    </div>
  );
};