
import React from 'react';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-offwhite">
       <div className="container mx-auto px-6 mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase text-primary mb-6 opacity-0 animate-fade-in-up">Professional Journey</h1>
          <p className="font-mono text-muted max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>My career path and the roles that have shaped my skills.</p>
       </div>

       <div className="container mx-auto px-6 pb-32 max-w-4xl">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
             {EXPERIENCES.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${300 + (index * 200)}ms` }}
                >
                   
                   {/* Icon/Dot */}
                   <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                        <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                      </svg>
                   </div>
                   
                   {/* Card */}
                   <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                         <time className="font-mono text-xs font-bold text-primary uppercase mb-1 sm:mb-0">{exp.period}</time>
                      </div>
                      <h3 className="font-oswald text-xl font-bold text-dark mb-1 uppercase">{exp.role}</h3>
                      <div className="font-mono text-xs font-bold text-muted uppercase mb-4 tracking-wide">{exp.company}</div>
                      <ul className="space-y-2">
                        {exp.description.map((point, i) => (
                            <li key={i} className="font-mono text-sm text-slate-600 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-primary before:rounded-full">
                                {point}
                            </li>
                        ))}
                      </ul>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};