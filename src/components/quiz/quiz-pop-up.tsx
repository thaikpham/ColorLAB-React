'use client'
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Camera, Palette, Sun, Mountain, Users, Sparkles, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuizResult from './quiz-result';
import QuizLoading from './quiz-loading';
import { Dialog, DialogContent } from '../ui/dialog';
import { useQuizPopupStore } from '@/store/quizPopupStore';

interface QuizOption {
  id: string;
  text: string;
  icon: React.ReactNode;
  tags: string[];
}

interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple_choice' | 'ai_prompt';
  options?: QuizOption[];
  description?: string;
}

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

const mockQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'What will you be shooting today today',
    type: 'multiple_choice',
    options: [
      {
        id: 'portrait',
        text: 'Portrait Photography',
        icon: <Users className="w-6 h-6 text-red-300" />,
        tags: ['portrait', 'people', 'bokeh']
      },
      {
        id: 'landscape',
        text: 'Landscape Photography',
        icon: <Mountain className="w-6 h-6 text-green-300" />,
        tags: ['landscape', 'nature', 'wide']
      },
      {
        id: 'urban',
        text: 'Urban',
        icon: <Building className='w-6 h-6 text-blue-300' />,
        tags: ['street', 'documentary', 'candid']
      },
      {
        id: 'lifestyle',
        text: 'Lifestyle',
        icon: <Building className='w-6 h-6 text-orange-300' />,
        tags: ['street', 'documentary', 'candid']
      }
    ]
  },
  {
    id: '2',
    question: 'What mood do you want to create?',
    type: 'multiple_choice',
    options: [
      {
        id: 'warm',
        text: 'Warm & Cozy',
        icon: <Sun className="w-6 h-6" />,
        tags: ['warm', 'golden', 'soft']
      },
      {
        id: 'vibrant',
        text: 'Vibrant & Bold',
        icon: <Palette className="w-6 h-6" />,
        tags: ['vibrant', 'saturated', 'punchy']
      },
      {
        id: 'cinematic',
        text: 'Cinematic & Moody',
        icon: <Sparkles className="w-6 h-6" />,
        tags: ['cinematic', 'moody', 'dramatic']
      }
    ]
  },
  {
    id: '3',
    question: 'Describe your ideal photo style in detail',
    type: 'ai_prompt',
    description: 'Tell us more about the specific look and feel you\'re trying to achieve. Be as detailed as possible!'
  }
];

const mockRecipe: Recipe = {
  id: 'cinematic-portrait',
  name: 'Cinematic Portrait',
  description: 'A moody, film-inspired look perfect for dramatic portraits',
  whiteBalance: 'Daylight (5500K)',
  settings: {
    'Exposure': '+0.3',
    'Highlights': '-75',
    'Shadows': '+45',
    'Contrast': '+25',
    'Vibrance': '+15',
    'Saturation': '+10'
  },
  colorDepth: {
    'Red': '+5',
    'Orange': '+10',
    'Yellow': '0',
    'Green': '-5',
    'Blue': '+15',
    'Purple': '+20'
  },
  detailSettings: {
    'Clarity': '+20',
    'Texture': '+15',
    'Sharpening': '+25'
  }
};

const QuizPopup: React.FC = () => {
  const isOpen = useQuizPopupStore(s => s.isOpen);
  const setOpen = useQuizPopupStore(s => s.setOpen);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [aiPrompt, setAiPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());

  useEffect(() => {
  }, [selectedOptions])

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Reset quiz state when opened
      setCurrentStep(0);
      setAnswers({});
      setAiPrompt('');
      setShowResult(false);
      setSelectedOptions(new Set());
    }
  }, [isOpen]);

  const handleOptionSelect = (questionId: string, option: QuizOption) => {
    const newAnswers = { ...answers };
    newAnswers[questionId] = option;
    setAnswers(newAnswers);

    // Auto-advance for multiple choice questions
    setTimeout(() => {
      if (currentStep < mockQuestions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmitQuiz();
      }
    }, 300);
  };

  const handleAIPromptSubmit = () => {
    const newAnswers = { ...answers };
    newAnswers[mockQuestions[currentStep].id] = aiPrompt;
    setAnswers(newAnswers);
    handleSubmitQuiz();
  };

  const handleSubmitQuiz = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setShowResult(true);
  };

  const currentQuestion = mockQuestions[currentStep];
  const progress = useMemo(() => {
    return (currentStep / mockQuestions.length) * 100
  }, [currentStep, mockQuestions]);

  if (!isOpen) return null;

  if (isLoading) {
    return <QuizLoading onClose={handleClose} isOpen={isOpen} />;
  }

  if (showResult) {
    return <QuizResult recipe={mockRecipe} isOpen={isOpen} onClose={handleClose} onRetake={() => setShowResult(false)} />;
  }


  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className='lg:max-w-[800px] outline-0 bg-primary-foreground/10 backdrop-blur-2xl'>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-foreground/75 to-primary/50 rounded-xl flex items-center justify-center shadow-glow">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Color Recipe Quiz</h2>
              <p className="text-muted-foreground">Find your perfect camera settings</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Step {currentStep + 1} of {mockQuestions.length}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Content */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">{currentQuestion?.question}</h3>
            {currentQuestion?.description && (
              <p className="text-muted-foreground">{currentQuestion.description}</p>
            )}
          </div>

          {currentQuestion?.type === 'multiple_choice' && currentQuestion.options && (
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(currentQuestion.id, option)}
                  className={`w-full rounded-xl hover:shadow-glow transition-smooth group animate-slide-up ${answers[currentQuestion.id]?.id === option.id ? 'bg-primary/75' : 'bg-muted/30'} hover:bg-primary/75 transition-all duration-300 py-2 outline-0`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 text-left px-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center text-white group-hover:shadow-glow transition-smooth">
                      {option.icon}
                    </div>
                    <span className="font-medium text-lg">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentQuestion?.type === 'ai_prompt' && (
            <div className="space-y-4">
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="Describe your ideal photo style in detail..."
                className="w-full p-4 rounded-xl border-2 border-border focus:border-primary transition-smooth resize-none min-h-[120px] bg-background/50"
                rows={5}
              />
              <Button
                onClick={handleAIPromptSubmit}
                disabled={!aiPrompt.trim()}
                className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
                size="lg"
              >
                Generate My Recipe
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            {currentQuestion?.type !== 'ai_prompt' &&
              (
                <Button
                  onClick={() => {
                    if (currentStep < mockQuestions.length - 1) {
                      setCurrentStep(currentStep + 1);
                    } else {
                      handleSubmitQuiz();
                    }
                  }}
                  variant='default'
                  disabled={!answers[currentQuestion.id]}
                >
                  {/* {currentStep === mockQuestions.length - 1 ? 'Finish Quiz' : 'Next Step'} */}
                  Next Step
                </Button>
              )
            }
            {currentQuestion?.type === 'ai_prompt' &&
              (
                <Button
                  onClick={() => {
                    if (currentStep < mockQuestions.length - 1) {
                      setCurrentStep(currentStep + 1);
                    } else {
                      handleSubmitQuiz();
                    }
                  }}
                  variant='default'
                  disabled={!aiPrompt}
                >
                  {/* {currentStep === mockQuestions.length - 1 ? 'Finish Quiz' : 'Next Step'} */}
                  Finish Quiz
                </Button>
              )
            }
          </div>
        </div>
      </DialogContent>
    </Dialog >
  );
};

export default QuizPopup;
