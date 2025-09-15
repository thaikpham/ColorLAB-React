import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download, Heart, MoreHorizontal } from "lucide-react";

interface PresetCardProps {
  title: string;
  description: string;
  colorPrimary: string;
  colorSecondary: string;
  colorAccent: string;
  views: number;
  downloads: number;
  likes: number;
  category: string;
  createdAt: string;
}

const PresetCard = ({
  title,
  description,
  colorPrimary,
  colorSecondary,
  colorAccent,
  views,
  downloads,
  likes,
  category,
  createdAt
}: PresetCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/20 transition-smooth shadow-preset hover:shadow-glow">
      {/* Color Preview */}
      <div className="h-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/5" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `linear-gradient(135deg, ${colorPrimary}, ${colorSecondary}, ${colorAccent})`
          }}
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-smooth">
          <Button variant="ghost" size="icon" className="bg-background/20 hover:bg-background/40 backdrop-blur-sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="bg-background/20 backdrop-blur text-foreground border-0">
            {category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Title & Description */}
        <div>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {description}
          </p>
        </div>

        {/* Color Swatches */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: colorPrimary }}
            />
            <div
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: colorSecondary }}
            />
            <div
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: colorAccent }}
            />
          </div>
          <span className="text-xs text-muted-foreground">{createdAt}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="w-3 h-3" />
              <span>{downloads.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              <span>{likes.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PresetCard;
