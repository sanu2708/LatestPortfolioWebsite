import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-mono uppercase text-muted mb-2 tracking-widest">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-offwhite border-b-2 border-gray-300 px-0 py-2 focus:outline-none focus:border-primary transition-colors font-mono text-dark placeholder-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-mono uppercase text-muted mb-2 tracking-widest">
          {label}
        </label>
      )}
      <textarea
        className={`w-full bg-offwhite border-b-2 border-gray-300 px-0 py-2 focus:outline-none focus:border-primary transition-colors font-mono text-dark placeholder-gray-400 resize-none ${className}`}
        {...props}
      />
    </div>
  );
};