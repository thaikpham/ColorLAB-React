import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";

interface TutorialStep {
  title: string;
  description: string;
}

interface TutorialGuideProps {
  title: string;
  subtitle: string;
  steps: TutorialStep[];
  className?: string;
}

export function TutorialGuide({ title, subtitle, steps, className = "" }: TutorialGuideProps) {
  const [isVisible, setIsVisible] = useState(true);

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
            <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">{subtitle}</p>
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
            On new generation Sony Alpha cameras (like{" "}
            <span className="font-semibold">α7 IV</span>,{" "}
            <span className="font-semibold">α7R V</span>,{" "}
            <span className="font-semibold">α1</span>,{" "}
            <span className="font-semibold">ZV-E1</span>), you can save{" "}
            <span className="font-bold text-highlight">3 presets on the camera body</span>{" "}
            (positions 1, 2, 3 on the mode dial) and{" "}
            <span className="font-bold text-highlight">4 presets on the memory card</span>{" "}
            (M1, M2, M3, M4).
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
