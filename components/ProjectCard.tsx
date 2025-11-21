import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group block h-full">
      <Link to={`/works/${project.id}`} className="block h-full">
        <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-100 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl flex flex-col">
          <div className="relative overflow-hidden aspect-[4/3] w-full mb-6 bg-gray-100">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
              {project.year}
            </div>
          </div>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-oswald text-2xl font-bold uppercase text-dark mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-muted uppercase tracking-wide">
                {project.category}
              </p>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
             <div className="flex gap-2">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[10px] font-mono bg-offwhite px-2 py-1 rounded text-muted">{tag}</span>
                ))}
             </div>
             <span className="font-mono text-xs font-bold uppercase text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
               View Case <span className="text-lg leading-none">→</span>
             </span>
          </div>
        </div>
      </Link>
    </div>
  );
};