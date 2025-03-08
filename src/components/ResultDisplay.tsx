
import React from 'react';
import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, Info } from "lucide-react";

interface ResultDisplayProps {
  isLoading: boolean;
  result: {
    status: 'success' | 'warning' | 'info' | 'error' | null;
    message: string;
    details?: string;
  } | null;
  className?: string;
}

const ResultDisplay = ({ isLoading, result, className }: ResultDisplayProps) => {
  if (isLoading || !result) return null;

  const statusConfig = {
    success: {
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-100'
    },
    warning: {
      icon: AlertCircle,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100'
    },
    error: {
      icon: AlertCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-100'
    },
    info: {
      icon: Info,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100'
    }
  };

  const config = result.status ? statusConfig[result.status] : statusConfig.info;
  const IconComponent = config.icon;

  return (
    <div className={cn(
      "animate-slide-up rounded-xl p-6 mt-8 border max-h-96 overflow-y-auto scrollbar-thin",
      config.bgColor,
      config.borderColor,
      className
    )}>
      <div className="flex items-start gap-4">
        <div className={cn("shrink-0 mt-0.5", config.color)}>
          <IconComponent size={24} />
        </div>
        <div className="space-y-2">
          <p className="font-medium text-slate-800 text-lg">{result.message}</p>
          {result.details && (
            <p className="text-base text-slate-600">{result.details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
