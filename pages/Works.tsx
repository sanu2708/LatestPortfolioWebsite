import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { WaveOverlay } from '../components/WaveOverlay';

export const Works: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-offwhite">
      <div className="bg-primary text-white py-20 relative mb-20">
        <div className="container mx-auto px-6 relative z-10">
           <h1 className="text-6xl md:text-8xl font-oswald font-bold uppercase">All Projects</h1>
           <p className="font-mono mt-4 max-w-xl opacity-80">Exploring the intersection of design, technology, and user experience through selected works.</p>
        </div>
        <WaveOverlay className="bottom-0 text-offwhite" />
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};