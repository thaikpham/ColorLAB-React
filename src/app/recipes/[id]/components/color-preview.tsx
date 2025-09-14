import { Card } from '@/components/ui/card';

interface ColorPreviewProps {
  title: string;
  gradient: string;
  description?: string;
}

export const ColorPreview = ({ title, gradient, description }: ColorPreviewProps) => {
  return (
    <Card className="transition-cinema hover:shadow-cinema overflow-hidden">
      <div className="relative h-48 w-full" style={{ background: gradient }}>
        <div className="absolute inset-0 flex items-end bg-black/20">
          <div className="p-6 text-white">
            <h3 className="mb-1 text-xl font-bold">{title}</h3>
            {description && <p className="text-sm text-white/80">{description}</p>}
          </div>
        </div>
      </div>
    </Card>
  );
};
