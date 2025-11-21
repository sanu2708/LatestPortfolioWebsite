import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../types';
import { WaveOverlay } from './WaveOverlay';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-beige relative pt-32 pb-12 overflow-hidden">
      {/* Top Decoration */}
      <WaveOverlay className="top-0 -translate-y-20 text-offwhite" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Left: Email */}
          <div className="flex flex-col justify-center">
            <h3 className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Get in touch</h3>
            <a 
              href="mailto:info@albert.com" 
              className="font-oswald text-4xl md:text-5xl lg:text-6xl text-primary font-bold uppercase leading-none hover:text-dark transition-colors break-all"
            >
              info@<br/>albert.com
            </a>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex flex-col md:items-center justify-center">
             <h3 className="font-mono text-xs text-muted uppercase tracking-widest mb-6">Menu</h3>
             <nav className="flex flex-col gap-3 text-center items-start md:items-center">
                <Link to={Routes.WORKS} className="font-oswald text-xl uppercase hover:text-primary transition-colors">Selected Works</Link>
                <Link to={Routes.ABOUT} className="font-oswald text-xl uppercase hover:text-primary transition-colors">About Me</Link>
                <Link to={Routes.TESTIMONIALS} className="font-oswald text-xl uppercase hover:text-primary transition-colors">Testimonials</Link>
             </nav>
          </div>

          {/* Right: Address & Social */}
          <div className="flex flex-col md:items-end justify-center text-left md:text-right">
            <h3 className="font-mono text-xs text-muted uppercase tracking-widest mb-6">Studio</h3>
            <p className="font-mono text-sm text-dark mb-8 leading-relaxed">
              123 Creative Ave, Floor 4<br/>
              San Francisco, CA 94110<br/>
              United States
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="font-mono text-xs uppercase hover:text-primary border-b border-transparent hover:border-primary transition-all">{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] uppercase text-muted">© {new Date().getFullYear()} Albert Portfolio. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase text-muted">Design & Built by Albert</p>
        </div>
      </div>
    </footer>
  );
};