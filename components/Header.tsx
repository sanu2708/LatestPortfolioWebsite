
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from '../types';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Works', path: Routes.WORKS },
    { label: 'About', path: Routes.ABOUT },
    { label: 'Testimonials', path: Routes.TESTIMONIALS },
    { label: 'Contact', path: Routes.CONTACT },
  ];

  const socialLinks = [
    { label: 'LN', href: '#' },
    { label: 'TW', href: '#' },
    { label: 'IG', href: '#' },
    { label: 'GH', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 backdrop-blur-md bg-white/80' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <Link to={Routes.HOME} className="z-50">
          <span className="font-oswald text-2xl font-bold tracking-tighter text-primary hover:scale-105 transition-transform block">
            Sanu Singh.
          </span>
        </Link>

        {/* Desktop Nav - Pill */}
        <nav className="hidden md:flex items-center bg-white/90 backdrop-blur-sm px-8 py-3 rounded-full shadow-sm border border-gray-100 gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-oswald uppercase tracking-widest hover:text-primary transition-colors relative group ${
                location.pathname === item.path ? 'text-primary font-bold' : 'text-dark'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
        </nav>

        {/* Social & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <div className="hidden md:flex flex-col text-[10px] font-mono leading-tight text-right">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} className="hover:text-primary transition-colors">{s.label}</a>
            ))}
          </div>

          <button 
            className={`md:hidden w-10 h-10 flex flex-col justify-center gap-1.5 group z-50 relative ${isMobileMenuOpen ? 'items-center' : 'items-end'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-8'}`}></span>
            <span className={`h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 w-0' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown (Glassmorphism) */}
        <div className={`
          absolute top-full right-6 mt-4 w-64 p-6 rounded-2xl
          bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl
          transform transition-all duration-300 origin-top-right
          flex flex-col gap-6
          ${isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}
        `}>
          <nav className="flex flex-col items-end gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-oswald uppercase font-bold hover:text-primary transition-colors ${
                   location.pathname === item.path ? 'text-primary' : 'text-dark'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="h-px w-full bg-dark/10"></div>

          <div className="flex justify-end gap-4">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} className="font-mono text-xs uppercase hover:text-primary text-muted transition-colors">{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};