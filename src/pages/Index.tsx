
import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import VerificationForm from '@/components/VerificationForm';
import ResultDisplay from '@/components/ResultDisplay';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Shield, CheckCircle } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    status: 'success' | 'warning' | 'info' | 'error' | null;
    message: string;
    details?: string;
  } | null>(null);
  const { toast } = useToast();

  // Simulate background verification process
  const handleSubmit = (query: string) => {
    setIsLoading(true);
    setResult(null);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      
      // Sample response - in a real app, this would come from your API
      const verificationResult = {
        status: 'success' as const,
        message: 'Background verification completed successfully',
        details: `All verification checks passed for query: "${query}"`
      };
      
      setResult(verificationResult);
      
      toast({
        title: "Verification Complete",
        description: "Background verification process has been completed.",
      });
    }, 3000); // 3 seconds delay to simulate processing
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">Background Verification</h1>
          <p className="text-slate-500 mt-2">Enter your query below to verify background information.</p>
        </div>
        
        <div className="verification-container p-6">
          <VerificationForm 
            onSubmit={handleSubmit} 
            isLoading={isLoading} 
          />
          
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-10">
              <LoadingSpinner size="lg" />
              <p className="mt-4 text-slate-500 animate-pulse">Processing your request...</p>
            </div>
          )}
          
          <ResultDisplay 
            isLoading={isLoading} 
            result={result} 
          />
          
          {!isLoading && !result && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="bg-slate-100/80 rounded-full p-3 mb-3">
                <CheckCircle className="w-6 h-6 text-slate-400" />
              </div>
              <p className="text-slate-500">Enter a verification query and click verify to get started.</p>
            </div>
          )}
        </div>
        
        <p className="text-xs text-center mt-4 text-slate-400">
          Secure verification system • All data is encrypted and protected
        </p>
      </div>
    </div>
  );
};

export default Index;
