import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Routes } from '../types';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on Home page
  if (location.pathname === Routes.HOME) return null;

  // Determine destination and label based on current route
  // If we are on a specific project page (e.g., /works/1), go back to Works list
  // Otherwise, go back to Home
  const isProjectDetail = location.pathname.startsWith('/works/') && location.pathname !== Routes.WORKS;
  
  const handleNavigation = () => {
    if (isProjectDetail) {
      navigate(Routes.WORKS);
    } else {
      navigate(Routes.HOME);
    }
  };

  const label = isProjectDetail ? 'Back to Works' : 'Back to Home';

  return (
    <button 
      onClick={handleNavigation}
      className="fixed top-24 left-4 md:top-28 md:left-8 z-[60] bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm rounded-full px-4 py-2 flex items-center gap-2 group transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white active:scale-95"
      aria-label={label}
    >
      <svg 
        className="w-3 h-3 md:w-4 md:h-4 text-dark group-hover:text-white transition-colors" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span className="font-oswald uppercase text-[10px] md:text-xs font-bold text-dark group-hover:text-white transition-colors whitespace-nowrap">
        {label}
      </span>
    </button>
  );
};