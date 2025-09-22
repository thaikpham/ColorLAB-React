import React from 'react';
import { Button } from '@/components/ui/button';
import { X, Camera, Sparkles } from 'lucide-react';
import { Dialog, DialogContent } from '../ui/dialog';

interface QuizLoadingProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizLoading: React.FC<QuizLoadingProps> = ({ onClose, isOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='lg:max-w-[800px] outline-0 bg-muted/25 backdrop-blur-2xl'>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 mx-auto">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow animate-glow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold">Generating Recipe</h2>
              <p className="text-muted-foreground">Please wait...</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-smooth ml-4"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-muted"></div>

            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>

            {/* Inner icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-float">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Analyzing Your Preferences</h3>
          <p className="text-muted-foreground mb-6">
            Our AI is crafting the perfect camera recipe based on your answers...
          </p>

          {/* Loading Steps */}
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm text-muted-foreground">Processing your style preferences</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm text-muted-foreground">Matching with camera profiles</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm">Generating custom settings...</span>
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="p-4 bg-gradient-secondary rounded-xl text-white">
          <h5 className="font-semibold mb-2">📸 Did you know?</h5>
          <p className="text-sm opacity-90">
            Professional photographers often spend hours perfecting their camera settings. Our AI can generate personalized recipes in seconds!
          </p>
        </div>
      </DialogContent >
    </Dialog >
  );
};

export default QuizLoading;
