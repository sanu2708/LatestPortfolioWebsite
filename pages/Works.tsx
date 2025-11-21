import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { WaveOverlay } from '../components/WaveOverlay';

export const Works: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-offwhite">
      <div className="bg-primary text-white py-20 relative mb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <h1 className="text-6xl md:text-8xl font-oswald font-bold uppercase opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>All Projects</h1>
           <p className="font-mono mt-4 max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>Exploring the intersection of design, technology, and user experience through selected works.</p>
        </div>
        <WaveOverlay className="bottom-0 text-offwhite" />
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 150 + 400}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};