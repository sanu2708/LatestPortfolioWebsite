import React from 'react';

interface WaveOverlayProps {
  className?: string;
  inverted?: boolean;
}

export const WaveOverlay: React.FC<WaveOverlayProps> = ({ className = '', inverted = false }) => {
  return (
    <div className={`absolute left-0 w-full overflow-hidden pointer-events-none ${className} ${inverted ? 'rotate-180' : ''}`}>
       <svg viewBox="0 0 1440 320" className="w-full h-auto block text-overlay-white opacity-60 fill-current">
        <path fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
      </svg>
    </div>
  );
};