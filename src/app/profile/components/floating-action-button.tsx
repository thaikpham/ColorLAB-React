import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={onClick}
        variant="default"
        size="lg"
        className="rounded-full w-14 h-14 shadow-float hover:shadow-glow"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingActionButton;
