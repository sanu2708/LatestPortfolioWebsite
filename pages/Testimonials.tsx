import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-offwhite">
       <div className="container mx-auto px-6 mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase text-primary mb-6">Client Stories</h1>
          <p className="font-mono text-muted max-w-2xl mx-auto">Hearing from the people I've collaborated with is the best part of the job.</p>
       </div>

       <div className="container mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-10 shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                   {/* Decorative Circle */}
                   <div className="absolute -top-10 -right-10 w-32 h-32 bg-beige rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                   
                   <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-8">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary p-1 mb-4">
                          <img src={t.avatarUrl} alt={t.name} className="w-full h-full rounded-full object-cover" />
                        </div>
                        <h3 className="font-oswald text-2xl uppercase leading-none">{t.name}</h3>
                        <p className="font-mono text-xs text-primary uppercase mt-1">{t.role} @ {t.company}</p>
                      </div>
                      <p className="font-mono text-sm text-muted leading-loose flex-grow italic">
                        "{t.content}"
                      </p>
                      <div className="mt-6 text-primary">★★★★★</div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};