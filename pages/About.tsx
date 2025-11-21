
import React from 'react';
import { WaveOverlay } from '../components/WaveOverlay';

export const About: React.FC = () => {
  // Updated based on resume image
  const skills = [
    'Java', 'C/C++', 'Data Structures & Algo', 'OOP',
    'HTML', 'CSS', 'Tailwind', 'JavaScript', 
    'Spring', 'SpringBoot', 'Spring Data JPA', 'Hibernate', 'MySQL',
    'Git', 'Postman', 'VsCode', 'IntelliJ', 'Eclipse', 'DB Design'
  ];

  const education = [
    {
      school: 'Babasaheb Bhimrao Ambedkar Central University',
      degree: 'Bachelor of Technology, Computer Science',
      year: 'Aug 2018 - Aug 2022',
      location: 'Lucknow'
    },
    {
      school: 'Army Public School',
      degree: '12th PCM',
      year: '2017-2018',
      location: 'Lucknow'
    }
  ];

  return (
    <div className="bg-offwhite pt-32 min-h-screen">
      {/* Intro */}
      <div className="container mx-auto px-6 mb-24">
         <div className="max-w-5xl">
            <h1 className="text-6xl md:text-9xl font-oswald font-bold uppercase text-primary leading-[0.85] mb-12">
              Creative<br/>Developer
            </h1>
            <div className="flex flex-col md:flex-row gap-16">
               <div className="md:w-1/2">
                 <p className="font-mono text-sm md:text-base leading-loose text-muted mb-8">
                   I'm a software developer. I have practised data structures and algorithms in JAVA and gained decent problem-solving skills. After that, I started learning WEB development. I am here to show my all projects as a software developer and all tools and frameworks that I have used.
                 </p>
                 
                 {/* Education Section */}
                 <h3 className="font-oswald text-xl uppercase mb-6 border-b border-gray-200 pb-2">Education</h3>
                 <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="font-oswald text-lg uppercase font-bold text-dark">{edu.school}</h4>
                          <span className="font-mono text-xs text-muted whitespace-nowrap">{edu.year}</span>
                        </div>
                        <p className="font-mono text-sm text-primary mb-1">{edu.degree}</p>
                        <p className="font-mono text-xs text-muted uppercase tracking-wide">{edu.location}</p>
                      </div>
                    ))}
                 </div>
               </div>

               <div className="md:w-1/2">
                  <h3 className="font-oswald text-xl uppercase mb-6 border-b border-gray-200 pb-2">Technical Arsenal</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-3">
                    {skills.map(skill => (
                      <span key={skill} className="font-mono text-sm text-dark bg-white px-3 py-1 border border-gray-100 rounded-sm shadow-sm">
                        {skill}
                      </span>
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
                  <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop" className="shadow-xl w-full aspect-[4/5] object-cover rotate-[-2deg]" alt="Workspace 1" />
                  <p className="font-mono text-xs mt-4 text-muted">Code & Coffee</p>
               </div>

               {/* Text Block */}
               <div className="md:col-span-4 text-center py-12">
                  <p className="font-oswald text-2xl uppercase leading-tight">
                    "My environment reflects my code: Clean, Organized, and Efficient."
                  </p>
               </div>

               {/* Collage Item 2 */}
               <div className="md:col-span-4 relative md:-top-12">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" className="shadow-xl w-full aspect-square object-cover rotate-[3deg]" alt="Workspace 2" />
                  <p className="font-mono text-xs mt-4 text-muted text-right">Design Tools</p>
               </div>
            </div>
            
            {/* Floating Small Images */}
            <div className="hidden lg:block absolute bottom-20 left-20 w-48">
               <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400" className="shadow-lg w-full rotate-6 border-4 border-white" alt="Coffee" />
            </div>
         </div>
         
         <WaveOverlay className="bottom-0 translate-y-10 text-offwhite rotate-180" />
      </section>
    </div>
  );
};
