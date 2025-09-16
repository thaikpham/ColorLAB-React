import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Camera, Star, Eye, Download } from "lucide-react";

interface ProfileHeaderProps {
  onSettingsClick: () => void;
}

const ProfileHeader = ({ onSettingsClick }: ProfileHeaderProps) => {
  return (
    <Card className="p-8 bg-transparent border-border shadow-preset">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Avatar & Basic Info */}
        <div className="flex items-center gap-6">
          <Avatar className="w-24 h-24 ring-2 ring-primary/20">
            <AvatarImage src='' alt="Profile" />
            <AvatarFallback className="text-2xl">AK</AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">Alex Kim</h1>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Camera className="w-3 h-3 mr-1" />
                Pro Creator
              </Badge>
            </div>
            <p className="text-muted-foreground text-lg max-w-md">
              Cinematic color grading specialist. Creating presets that transform your footage into visual poetry.
            </p>
          </div>
        </div>

        {/* Settings Button */}
        <div className="ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
            className="rounded-full hover:bg-secondary"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center gap-8 mt-6 pt-6 border-t border-border">
        <div className="flex items-center gap-2 text-sm">
          <Star className="w-4 h-4 text-primary" />
          <span className="font-medium">47 Presets</span>
          <span className="text-muted-foreground">created</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Eye className="w-4 h-4 text-primary" />
          <span className="font-medium">12.4K</span>
          <span className="text-muted-foreground">views</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Download className="w-4 h-4 text-primary" />
          <span className="font-medium">2.8K</span>
          <span className="text-muted-foreground">downloads</span>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;
