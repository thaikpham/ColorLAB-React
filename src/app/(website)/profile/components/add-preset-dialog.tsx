import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Camera, Palette, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AddPresetDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddPresetDialog = ({ open, onOpenChange }: AddPresetDialogProps) => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [colorPrimary, setColorPrimary] = useState("#8b5cf6");
  const [colorSecondary, setColorSecondary] = useState("#ec4899");
  const [colorAccent, setColorAccent] = useState("#f59e0b");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleSubmit = () => {
    if (!title || !description || !category) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically submit to your backend
    toast({
      title: "Preset submitted!",
      description: "Your color preset has been added to your collection.",
    });

    // Reset form
    setTitle("");
    setDescription("");
    setCategory("");
    setColorPrimary("#8b5cf6");
    setColorSecondary("#ec4899");
    setColorAccent("#f59e0b");
    setTags([]);
    setCurrentTag("");

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Palette className="w-5 h-5 text-primary" />
            Add New Color Preset
          </DialogTitle>
          <DialogDescription>
            Share your unique color grading preset with the community
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Color Preview */}
          <div className="space-y-3">
            <Label>Color Preview</Label>
            <div
              className="w-full h-24 rounded-lg border border-border relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${colorPrimary}, ${colorSecondary}, ${colorAccent})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/5" />
            </div>
          </div>

          {/* Color Inputs */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="color-primary">Primary Color</Label>
              <div className="flex gap-2">
                <Input
                  id="color-primary"
                  type="color"
                  value={colorPrimary}
                  onChange={(e) => setColorPrimary(e.target.value)}
                  className="w-16 h-10 p-1 border-border"
                />
                <Input
                  value={colorPrimary}
                  onChange={(e) => setColorPrimary(e.target.value)}
                  placeholder="#8b5cf6"
                  className="flex-1"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="color-secondary">Secondary Color</Label>
              <div className="flex gap-2">
                <Input
                  id="color-secondary"
                  type="color"
                  value={colorSecondary}
                  onChange={(e) => setColorSecondary(e.target.value)}
                  className="w-16 h-10 p-1 border-border"
                />
                <Input
                  value={colorSecondary}
                  onChange={(e) => setColorSecondary(e.target.value)}
                  placeholder="#ec4899"
                  className="flex-1"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="color-accent">Accent Color</Label>
              <div className="flex gap-2">
                <Input
                  id="color-accent"
                  type="color"
                  value={colorAccent}
                  onChange={(e) => setColorAccent(e.target.value)}
                  className="w-16 h-10 p-1 border-border"
                />
                <Input
                  value={colorAccent}
                  onChange={(e) => setColorAccent(e.target.value)}
                  placeholder="#f59e0b"
                  className="flex-1"
                />
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Preset Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Sunset Cinematic"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cinematic">Cinematic</SelectItem>
                  <SelectItem value="portrait">Portrait</SelectItem>
                  <SelectItem value="landscape">Landscape</SelectItem>
                  <SelectItem value="street">Street</SelectItem>
                  <SelectItem value="vintage">Vintage</SelectItem>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="dramatic">Dramatic</SelectItem>
                  <SelectItem value="natural">Natural</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your preset, what style it achieves, and when to use it..."
              rows={3}
            />
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <Label>Tags</Label>
            <div className="flex gap-2">
              <Input
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="Add a tag..."
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              />
              <Button onClick={handleAddTag} variant="outline" size="sm">
                Add
              </Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1">
                    {tag}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-destructive"
                      onClick={() => handleRemoveTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Upload Section */}
          <div className="space-y-3">
            <Label>Sample Images (Optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-smooth cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Upload before/after images to showcase your preset
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PNG, JPG up to 10MB
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-6 border-t border-border">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="default"
            className="gap-2"
          >
            <Camera className="w-4 h-4" />
            Submit Preset
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPresetDialog;
