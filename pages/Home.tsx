import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, HERO_IMAGE, TESTIMONIALS } from '../constants';
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
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-12 overflow-hidden bg-offwhite">
        
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
             <h2 className="font-oswald text-xl md:text-2xl font-bold uppercase tracking-widest text-dark mb-8 lg:mb-12 text-center relative z-30">
              Hi There, I'm Sanu Singh
            </h2>

            {/* Grid Composition for Perfect Overlap & Responsiveness */}
            <div className="grid grid-cols-1 grid-rows-1 place-items-center w-full max-w-7xl mx-auto">
                
                {/* Layer 1: Typography (Z-30 = ON TOP of image) */}
                <div className="col-start-1 row-start-1 flex flex-col items-center justify-center w-full z-30 select-none pointer-events-none">
                    {/* Gap frames the image */}
                    <div className="flex justify-between w-full gap-16 md:gap-48 lg:gap-64 transition-all duration-500 transform -translate-y-6 md:-translate-y-16">
                         <span className="text-[16vw] md:text-[13rem] lg:text-[15rem] font-oswald font-bold text-primary uppercase leading-[0.8] tracking-tighter opacity-90 drop-shadow-xl md:drop-shadow-none mix-blend-darken">FRONT</span>
                         <span className="text-[16vw] md:text-[13rem] lg:text-[15rem] font-oswald font-bold text-primary uppercase leading-[0.8] tracking-tighter opacity-90 drop-shadow-xl md:drop-shadow-none mix-blend-darken">END</span>
                    </div>
                    <span className="text-[16vw] md:text-[13rem] lg:text-[15rem] font-oswald font-bold text-primary uppercase leading-[0.8] tracking-tighter opacity-90 text-center w-full drop-shadow-xl md:drop-shadow-none transform translate-y-6 md:translate-y-16 mix-blend-darken">
                        DEVELOPER
                    </span>
                </div>

                {/* Layer 2: Portrait Image (Z-20 = BEHIND text) */}
                <div className="col-start-1 row-start-1 z-20 mt-4 md:mt-0">
                    <div className="relative w-[60vw] md:w-80 lg:w-96 aspect-[3/4] shadow-2xl rounded-[3rem] bg-offwhite overflow-hidden group transition-all duration-500 border-4 border-white/50">
                        <img 
                            src={HERO_IMAGE} 
                            alt="Sanu Singh Portrait"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = fallbackImage;
                              target.alt = "Fallback Portrait";
                            }}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                         {/* Gloss overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                        
                        {/* Decorative Icon */}
                        <div className="absolute -bottom-6 -right-6 text-primary bg-white p-3 rounded-full shadow-lg hidden md:block transform rotate-12 z-40">
                           <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                             <polyline points="16 18 22 12 16 6"></polyline>
                             <polyline points="8 6 2 12 8 18"></polyline>
                           </svg>
                        </div>
                    </div>
                </div>

            </div>

            {/* Intro Text - Floating Right on Desktop */}
            <div className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 max-w-[200px] text-right z-30">
                 <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-dark bg-white/50 backdrop-blur-sm p-4 rounded-sm shadow-sm border border-white/50">
                   I am a creative front-end developer with a strong focus on motion and interaction.
                 </p>
            </div>

           {/* Mobile Intro Text */}
           <div className="md:hidden mt-12 text-center max-w-xs mx-auto relative z-20">
               <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-muted">
                   I am a creative front-end developer with a strong focus on motion and interaction.
               </p>
            </div>

        </div>
      </section>

      {/* WORKS SECTION */}
      <section className="py-24 bg-offwhite relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-6xl md:text-8xl font-oswald font-bold text-primary uppercase leading-none">
              Selected<br/>Works
            </h2>
            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="font-mono text-sm text-muted max-w-xs text-left md:text-right">
                A curated selection of projects demonstrating performance, accessibility, and design.
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
                <img src="https://images.unsplash.com/photo-1605106702842-01a843dd67e2?q=80&w=800" className="w-full h-32 object-cover grayscale hover:grayscale-0 transition-all" alt="Code" />
                <img src="https://images.unsplash.com/photo-1550439062-609e15312797?q=80&w=800" className="w-full h-32 object-cover grayscale hover:grayscale-0 transition-all" alt="Design" />
              </div>
            </div>
          </div>
        </div>
        <WaveOverlay className="bottom-0 translate-y-10 text-offwhite rotate-180" />
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-24 bg-offwhite">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-primary uppercase mb-16 text-center">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.slice(0, 3).map((t) => (
               <div key={t.id} className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-primary">
                 <div className="flex items-center gap-4 mb-6">
                   <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                   <div>
                     <h4 className="font-oswald uppercase text-lg leading-none">{t.name}</h4>
                     <p className="font-mono text-[10px] text-muted uppercase">{t.role}, {t.company}</p>
                   </div>
                 </div>
                 <p className="font-mono text-xs leading-loose text-muted">"{t.content}"</p>
               </div>
             ))}
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
               <Button size="lg" className="bg-white text-primary hover:bg-beige hover:scale-105 transform transition-all">
                 Send Me A Request →
               </Button>
            </Link>
         </div>
      </section>
    </main>
  );
};