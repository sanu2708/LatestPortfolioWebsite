
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, HERO_IMAGE, EXPERIENCES } from '../constants';
import { Routes } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/ui/Button';
import { WaveOverlay } from '../components/WaveOverlay';

export const Home: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);

  // Fallback URL if the local image fails to load
  const fallbackImage = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop';

  return (
    <main className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-offwhite">
        
        {/* Background Wavy Decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Wave 1 */}
            <div className="absolute top-[20%] -left-[10%] w-[120%] h-64 opacity-40">
                 <svg viewBox="0 0 1440 320" className="w-full h-full text-white fill-current drop-shadow-lg">
                    <path d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"></path>
                 </svg>
            </div>
             {/* Wave 2 */}
            <div className="absolute top-[40%] -right-[10%] w-[120%] h-64 opacity-30">
                 <svg viewBox="0 0 1440 320" className="w-full h-full text-primary/10 fill-current transform rotate-180">
                    <path d="M0,64L48,90.7C96,117,192,171,288,181.3C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160V320H0Z"></path>
                 </svg>
            </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full">
          
             {/* Subheading */}
             <h2 className="font-oswald text-xl md:text-2xl font-bold uppercase tracking-widest text-dark mb-4 md:mb-8 text-center relative z-30">
              Hi! I'M Sanu Singh
            </h2>

            {/* COMPOSITION CONTAINER */}
            <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
                
                {/* LAYER 1: BACK TEXT (FULL STACK) */}
                <div className="w-full flex justify-between items-start absolute top-20 md:top-12 left-0 right-0 z-0 px-2 md:px-8 select-none pointer-events-none">
  <span className="text-[15vw] md:text-[13rem] lg:text-[16rem] font-oswald font-bold text-primary leading-none tracking-tighter opacity-90">
    FULL
  </span>
  <span className="text-[15vw] md:text-[13rem] lg:text-[16rem] font-oswald font-bold text-primary leading-none tracking-tighter opacity-90">
    STACK
  </span>
</div>

                {/* LAYER 2: IMAGE (CENTER) */}
                <div className="relative z-10 mt-[10vw] md:mt-[4rem] lg:mt-[6rem]">
  <div className="relative w-[85vw] md:w-[34rem] lg:w-[38rem] aspect-[3/4] -translate-y-12 md:-translate-y-20 lg:-translate-y-24">
    <img 
      src={HERO_IMAGE} 
      alt="Sanu Singh Portrait"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = fallbackImage;
        target.alt = "Fallback Portrait";
      }}
      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
    />
    {/* Gloss overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
  </div>
</div>

                {/* LAYER 3: FRONT TEXT (DEVELOPER) */}
                <div className="relative z-20 -mt-[10vw] md:-mt-[5rem] lg:-mt-[6rem] flex items-center justify-center w-full">
                    <h1 className="text-[15vw] md:text-[13rem] lg:text-[16rem] font-oswald font-bold text-primary leading-none tracking-tighter drop-shadow-xl mix-blend-normal">
                        DEVELOPER
                    </h1>
                    {/* Decorative Icon */}
                    <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 text-primary transform rotate-12 bg-white/80 p-2 rounded-full shadow-lg">
                       <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                         <polyline points="16 18 22 12 16 6"></polyline>
                         <polyline points="8 6 2 12 8 18"></polyline>
                       </svg>
                    </div>
                </div>

                {/* SIDE INTRO TEXT */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/3 max-w-[260px] text-right z-30">
                     <p className="font-mono text-xs leading-relaxed text-dark bg-white/80 backdrop-blur-md p-6 rounded shadow-sm border border-white/50">
                       I'm a software developer. I have practised data structures and algorithms in JAVA and solved decent problem-solving skills. After that, I started learning WEB development.
                     </p>
                </div>

            </div>

           {/* Mobile Intro Text */}
           <div className="md:hidden mt-12 text-center max-w-xs mx-auto relative z-20">
               <p className="font-mono text-xs leading-relaxed text-muted bg-white/60 p-4 rounded-xl backdrop-blur-sm">
                   I'm a software developer. I have practised data structures and algorithms in JAVA and solved decent problem-solving skills.
               </p>
            </div>

        </div>
      </section>

      {/* WORKS SECTION */}
      <section className="py-24 bg-offwhite relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-6xl md:text-8xl font-oswald font-bold text-primary uppercase leading-none">
              Selected<br/>Projects
            </h2>
            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="font-mono text-sm text-muted max-w-xs text-left md:text-right">
                Recent projects demonstrating my skills in Web Development and UI Design.
              </p>
              <Link to={Routes.WORKS}>
                <Button variant="outline">View All Projects</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT GLIMPSE SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Visual */}
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 overflow-hidden rounded-sm shadow-xl">
                 <img 
                   src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" 
                   alt="About Me" 
                   className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
               </div>
               {/* Decorative elements */}
               <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/20 z-0 rounded-sm hidden md:block"></div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
               <h4 className="font-mono text-xs text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                 <span className="w-8 h-px bg-primary"></span>
                 About Me
               </h4>
               <h2 className="text-4xl md:text-6xl font-oswald font-bold uppercase text-dark mb-6 leading-tight">
                 Bridging Logic<br/>& Creativity
               </h2>
               <p className="font-mono text-muted leading-relaxed mb-8">
                 I am a software developer with a strong foundation in Java, Data Structures, and Algorithms. 
                 My journey has evolved from solving complex algorithmic problems to building robust full-stack web applications. 
                 I thrive on creating clean, efficient, and scalable solutions that solve real-world problems.
               </p>
               
               <div className="flex flex-wrap gap-4 mb-8">
                  {['Java', 'Spring Boot', 'React', 'Problem Solving'].map(skill => (
                    <span key={skill} className="font-mono text-xs uppercase bg-offwhite px-3 py-1 rounded text-dark border border-gray-100">
                      {skill}
                    </span>
                  ))}
               </div>

               <Link to={Routes.ABOUT}>
                 <Button variant="outline" className="!border-dark !text-dark hover:!bg-dark hover:!text-white">
                   Read My Story
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TYPOGRAPHIC DIVIDER */}
      <section className="py-32 bg-beige overflow-hidden relative">
        <WaveOverlay className="top-0 -translate-y-20 text-offwhite" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold text-primary uppercase leading-[0.9] tracking-tight">
                PASSIONATE<br/>ABOUT<br/>DEVELOPMENT
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-white p-6 shadow-lg max-w-sm rotate-2 transform hover:rotate-0 transition-transform duration-500">
                 <p className="font-mono text-sm leading-relaxed text-muted">
                   "Code is not just logic; it's the medium through which we sculpt modern experiences. Every pixel matters, every millisecond counts."
                 </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" className="w-full h-32 object-cover grayscale hover:grayscale-0 transition-all" alt="Code" />
                <img src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=800&auto=format&fit=crop" className="w-full h-32 object-cover grayscale hover:grayscale-0 transition-all" alt="Design" />
              </div>
            </div>
          </div>
        </div>
        <WaveOverlay className="bottom-0 translate-y-10 text-offwhite rotate-180" />
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="py-24 bg-offwhite">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-primary uppercase text-center md:text-left">
              Experience
            </h2>
            <Link to={Routes.EXPERIENCE} className="hidden md:block">
                <Button variant="outline">View Full Resume</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {EXPERIENCES.slice(0, 2).map((exp) => (
               <div key={exp.id} className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow border-l-4 border-primary">
                 <div className="flex justify-between items-start mb-4">
                   <div>
                     <h4 className="font-oswald uppercase text-xl leading-none mb-1">{exp.role}</h4>
                     <p className="font-mono text-xs text-primary uppercase font-bold">{exp.company}</p>
                   </div>
                   <span className="font-mono text-[10px] text-muted bg-offwhite px-2 py-1 rounded">{exp.period}</span>
                 </div>
                 <ul className="list-disc list-inside space-y-2">
                    {exp.description.slice(0, 2).map((desc, i) => (
                        <li key={i} className="font-mono text-xs text-muted leading-relaxed pl-2 -indent-2">{desc}</li>
                    ))}
                 </ul>
               </div>
             ))}
          </div>
          <div className="mt-8 text-center md:hidden">
              <Link to={Routes.EXPERIENCE}>
                <Button variant="outline">View Full Resume</Button>
              </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
         </div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase mb-8">
              Have an idea?
            </h2>
            <h3 className="text-2xl md:text-4xl font-oswald uppercase mb-12 opacity-80">
              Tell me about it
            </h3>
            <Link to={Routes.CONTACT}>
               <Button size="lg" className="bg-white !text-primary hover:bg-beige hover:scale-105 transform transition-all">
                 Send Me A Request →
               </Button>
            </Link>
         </div>
      </section>
    </main>
  );
};
