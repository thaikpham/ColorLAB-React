import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, RotateCcw, Eye, Camera, Palette } from 'lucide-react';
import { Dialog, DialogContent } from '../ui/dialog';

interface Recipe {
  id: string;
  name: string;
  description: string;
  whiteBalance: string;
  settings: Record<string, string>;
  colorDepth?: Record<string, string>;
  detailSettings?: Record<string, string>;
  image?: string;
}

interface QuizResultProps {
  recipe: Recipe;
  isOpen: boolean;
  onClose: () => void;
  onRetake: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ recipe, onClose, onRetake, isOpen }) => {
  const handleDownload = () => {
    // Implement download functionality
    console.log('Downloading recipe...');
  };

  const handleViewDetails = () => {
    // Implement view details functionality
    console.log('Viewing recipe details...');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='lg:max-w-[800px] outline-0 bg-muted/25 backdrop-blur-2xl p-8'>
        {/* Header */}
        < div className="flex items-center justify-between mb-6" >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Your Perfect Recipe</h2>
              <p className="text-muted-foreground">Customized camera settings just for you</p>
            </div>
          </div>
        </div >

        {/* Recipe Card */}
        <div className="glass-card animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Recipe Image */}
            <div className="flex-shrink-0">
              <div className="w-full md:w-48 h-32 rounded-xl flex items-center justify-center text-white shadow-glow bg-gradient-to-br from-primary/30 to-primary/10 shadow-[0_0_5px_5px] shadow-primary/30">
                <Camera className="w-12 h-12" />
              </div>
            </div>

            {/* Recipe Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{recipe.name}</h3>
                  <p className="text-muted-foreground italic">{recipe.description}</p>
                </div>
                <Badge variant="outline" className="bg-gradient-primary text-white">
                  Perfect Match
                </Badge>
              </div>

              {/* White Balance */}
              <div className="flex space-x-4">
                <h4 className="text-sm font-semibold text-muted-foreground translate-y-1">WHITE BALANCE</h4>
                <span className="font-semibold">{recipe.whiteBalance}</span>
              </div>
            </div>
          </div>
        </div >

        {/* Settings Grid */}
        {/* 
        <div className="space-y-6">
        <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
          <h4 className="text-lg font-semibold mb-4">Camera Settings</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(recipe.settings).map(([key, value]) => (
              <div key={key} className="glass rounded-lg p-3 text-center hover:shadow-glow transition-smooth">
                <div className="text-xs text-muted-foreground font-medium mb-1">{key.toUpperCase()}</div>
                <div className="font-semibold text-lg">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {recipe.colorDepth && (
          <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
            <h4 className="text-lg font-semibold mb-4">Color Adjustments</h4>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {Object.entries(recipe.colorDepth).map(([key, value]) => (
                <div key={key} className="glass rounded-lg p-3 text-center hover:shadow-glow transition-smooth">
                  <div className="text-xs text-muted-foreground font-medium mb-1">{key.toUpperCase()}</div>
                  <div className="font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {recipe.detailSettings && (
          <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
            <h4 className="text-lg font-semibold mb-4">Detail Enhancement</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(recipe.detailSettings).map(([key, value]) => (
                <div key={key} className="glass rounded-lg p-3 text-center hover:shadow-glow transition-smooth">
                  <div className="text-xs text-muted-foreground font-medium mb-1">{key.toUpperCase()}</div>
                  <div className="font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
          */}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-border animate-slide-up" style={{ animationDelay: '600ms' }}>
          <Button
            onClick={handleViewDetails}
            className="bg-primary hover:shadow-glow transition-smooth"
            size="lg"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Recipe Details
          </Button>

          <Button
            onClick={handleDownload}
            variant="outline"
            className="hover:shadow-glow transition-smooth"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PNG
          </Button>

          <Button
            onClick={onRetake}
            variant="outline"
            className="hover:shadow-glow transition-smooth"
            size="lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Retake Quiz
          </Button>
        </div>

        {/* Tips */}
        <div className="mt-6 p-4 bg-gradient-accent rounded-xl text-white animate-slide-up" style={{ animationDelay: '700ms' }}>
          <h5 className="font-semibold mb-2">💡 Pro Tip</h5>
          <p className="text-sm opacity-90">
            These settings work best in natural lighting conditions. Adjust the exposure compensation based on your specific shooting environment for optimal results.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuizResult;
