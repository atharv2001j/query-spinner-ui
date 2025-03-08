
import React, { useState } from 'react';
import { Search } from "lucide-react";
import LoadingSpinner from './LoadingSpinner';

interface VerificationFormProps {
  onSubmit: (query: string) => void;
  isLoading: boolean;
}

const VerificationForm = ({ onSubmit, isLoading }: VerificationFormProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSubmit(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="verification-form space-y-4">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Enter background verification query..."
          className="verification-input pl-10 h-16 text-base"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
        />
      </div>
      
      <button 
        type="submit" 
        className="verification-button w-full flex items-center justify-center"
        disabled={isLoading || !query.trim()}
      >
        {isLoading ? (
          <div className="flex items-center">
            <LoadingSpinner size="sm" />
            <span className="ml-2 verification-button-text">Processing<span className="dot-flashing"></span></span>
          </div>
        ) : (
          <span className="verification-button-text">Verify Background</span>
        )}
      </button>
    </form>
  );
};

export default VerificationForm;
