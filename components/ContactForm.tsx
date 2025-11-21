import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input, TextArea } from './ui/Input';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input 
            label="Your Name" 
            placeholder="John Doe" 
            required 
            disabled={isSubmitting}
          />
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="john@example.com" 
            required 
            disabled={isSubmitting}
          />
        </div>
        <TextArea 
          label="Project Details" 
          placeholder="Tell me about your idea..." 
          rows={4} 
          required
          disabled={isSubmitting}
        />
        <div className="flex justify-end mt-4">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? 'Sending...' : 'Send Request →'}
          </Button>
        </div>
      </form>

      {/* Success Modal / Dialog */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm" onClick={() => setShowSuccess(false)}></div>
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl relative z-10 max-w-md w-full text-center transform transition-all animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-oswald text-3xl uppercase text-primary mb-2">Message Sent!</h3>
            <p className="font-mono text-sm text-muted mb-8">Thanks for reaching out. I'll get back to you within 24 hours.</p>
            <Button onClick={() => setShowSuccess(false)} variant="outline" className="w-full">
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};