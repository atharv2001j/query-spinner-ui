
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="w-full text-center py-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
          Background Verification
        </h1>
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center -mt-10">
        <div className="max-w-2xl w-full mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-primary/10 p-5 rounded-full mb-5">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <p className="text-slate-500 mt-2 text-lg">Enter your query below to verify background information.</p>
          </div>
          
          <div className="verification-container p-8 shadow-xl">
            <VerificationForm 
              onSubmit={handleSubmit} 
              isLoading={isLoading} 
            />
            
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-12">
                <LoadingSpinner size="lg" />
                <p className="mt-6 text-slate-500 animate-pulse text-lg">Processing your request...</p>
              </div>
            )}
            
            <ResultDisplay 
              isLoading={isLoading} 
              result={result} 
              className="max-h-80 overflow-y-auto"
            />
            
            {!isLoading && !result && (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="bg-slate-100/80 rounded-full p-4 mb-4">
                  <CheckCircle className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-500 text-lg">Enter a verification query and click verify to get started.</p>
              </div>
            )}
          </div>
          
          <p className="text-xs text-center mt-4 text-slate-400">
            Secure verification system • All data is encrypted and protected
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
