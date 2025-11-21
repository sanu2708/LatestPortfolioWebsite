import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Routes } from '../types';
import { Button } from '../components/ui/Button';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="font-oswald text-4xl mb-4">Project Not Found</h2>
        <Link to={Routes.WORKS}><Button>Back to Works</Button></Link>
      </div>
    );
  }

  return (
    <div className="bg-offwhite min-h-screen pt-24">
      {/* Project Hero */}
      <div className="h-[60vh] w-full relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-dark/90 to-transparent">
           <div className="container mx-auto">
             <Link to={Routes.WORKS} className="text-white/70 font-mono text-xs uppercase hover:text-white mb-4 block">← Back to Works</Link>
             <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white uppercase">{project.title}</h1>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Meta */}
          <div className="lg:col-span-4 space-y-8">
             <div className="border-t-2 border-primary pt-4">
               <h3 className="font-oswald text-xl uppercase mb-2">Year</h3>
               <p className="font-mono text-muted">{project.year}</p>
             </div>
             <div className="border-t-2 border-gray-200 pt-4">
               <h3 className="font-oswald text-xl uppercase mb-2">Role</h3>
               <p className="font-mono text-muted">Frontend Development, UI/UX</p>
             </div>
             <div className="border-t-2 border-gray-200 pt-4">
               <h3 className="font-oswald text-xl uppercase mb-2">Stack</h3>
               <div className="flex flex-wrap gap-2 mt-2">
                 {project.tags.map(tag => (
                   <span key={tag} className="bg-white border border-gray-200 px-3 py-1 text-xs font-mono uppercase rounded-full">{tag}</span>
                 ))}
               </div>
             </div>
             <Button className="w-full mt-8">Visit Live Site →</Button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
             <h2 className="font-oswald text-3xl uppercase text-primary mb-6">Project Overview</h2>
             <p className="font-mono text-muted leading-loose mb-12 text-lg">
               {project.description}
               <br/><br/>
               This project challenged traditional navigation patterns. The goal was to create an immersive environment that felt less like a website and more like an interactive editorial piece. We utilized WebGL for smooth transitions and React for state management to ensure a snappy experience across devices.
             </p>

             {/* Gallery Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-200 aspect-square rounded-sm overflow-hidden">
                   <img src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Detail 1" />
                </div>
                <div className="bg-gray-200 aspect-square rounded-sm overflow-hidden">
                   <img src={`https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Detail 2" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};