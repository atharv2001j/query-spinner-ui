
import React from 'react';
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <div className={cn(
          "rounded-full border-2 border-t-transparent border-primary/30 animate-spin-slow",
          sizeClasses[size]
        )}></div>
        <div className={cn(
          "absolute top-0 left-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/50 animate-spin-slow",
          sizeClasses[size]
        )} style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
