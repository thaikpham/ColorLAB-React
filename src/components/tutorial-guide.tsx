'use client'
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { useTranslations } from "next-intl";

interface TutorialStep {
  title: string;
  description: string;
}

interface CameraModel {
  id: string;
  name: string;
}

interface TutorialGuideProps {
  className?: string;
}

export function TutorialGuide({ className = "" }: TutorialGuideProps) {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations('guide');
  const steps = useMemo(() => t.raw('steps') as Array<TutorialStep>, [])

  const cameraModels: CameraModel[] = useMemo(() => [
    { id: "alpha7IV", name: "α7 IV" },
    { id: "alpha7RV", name: "α7R V" },
    { id: "alpha1", name: "α1" },
    { id: "zvE1", name: "ZV-E1" }
  ], []);

  if (!isVisible) {
    return (
      <div className={`fixed bottom-4 right-4 ${className}`}>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsVisible(true)}
          className="shadow-lg"
        >
          <Eye className="h-4 w-4 mr-2" />
          Show Guide
        </Button>
      </div>
    );
  }

  return (
    <Card className={`bg-muted/25 backdrop-blur-2xl border-border shadow-[0_8px_32px_hsl(var(--tutorial-shadow))] ${className}`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">{t('title')}</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('description')}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground shrink-0 ml-4"
          >
            <EyeOff className="h-4 w-4 mr-2" />
            Hide Guide
          </Button>
        </div>

        {/* Introduction paragraph */}
        <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-tutorial-border">
          <p className="text-foreground leading-relaxed">
            {t('note.part1')} {' '}
            {cameraModels.map((model, index) => (
              <span key={model.id}>
                <span className="font-semibold">{model.name}</span>
                {index < cameraModels.length - 1 ? ', ' : ''}
              </span>
            ))}
            {t('note.part2')} {' '}
            <span className="font-bold text-highlight">{t('note.presets.cameraBody')}</span> {' '}
            {t('note.part3')} {' '}
            <span className="font-bold text-highlight">{t('note.presets.memoryCard')}</span> {' '}
            {t('note.part4')}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-2 leading-tight">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
