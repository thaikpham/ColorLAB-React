import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Settings,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Globe,
  User,
  Bell,
  Shield,
  Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SettingsDialog = ({ open, onOpenChange }: SettingsDialogProps) => {
  const { toast } = useToast();

  // Profile settings state
  const [displayName, setDisplayName] = useState("Alex Kim");
  const [bio, setBio] = useState("Cinematic color grading specialist. Creating presets that transform your footage into visual poetry.");
  const [location, setLocation] = useState("Los Angeles, CA");
  const [website, setWebsite] = useState("");

  // Social media URLs state
  const [instagramUrl, setInstagramUrl] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");

  // Privacy settings state
  const [profilePublic, setProfilePublic] = useState(true);
  const [showEmail, setShowEmail] = useState(false);
  const [allowMessages, setAllowMessages] = useState(true);

  // Notification settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [presetLikes, setPresetLikes] = useState(true);
  const [presetComments, setPresetComments] = useState(true);
  const [newFollowers, setNewFollowers] = useState(false);

  const handleSave = () => {
    // Here you would typically save to your backend
    toast({
      title: "Settings saved!",
      description: "Your profile settings have been updated successfully.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Settings className="w-5 h-5 text-primary" />
            Account Settings
          </DialogTitle>
          <DialogDescription>
            Manage your profile, social links, and preferences
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Profile Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">Profile Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input
                  id="display-name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your display name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Your location"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us about yourself..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <div className="flex">
                <div className="flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                </div>
                <Input
                  id="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="rounded-l-none"
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Social Media Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">Social Media Links</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <div className="flex">
                  <div className="flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
                    <Instagram className="w-4 h-4 text-pink-500" />
                  </div>
                  <Input
                    id="instagram"
                    value={instagramUrl}
                    onChange={(e) => setInstagramUrl(e.target.value)}
                    placeholder="https://instagram.com/username"
                    className="rounded-l-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <div className="flex">
                  <div className="flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
                    <Facebook className="w-4 h-4 text-blue-600" />
                  </div>
                  <Input
                    id="facebook"
                    value={facebookUrl}
                    onChange={(e) => setFacebookUrl(e.target.value)}
                    placeholder="https://facebook.com/username"
                    className="rounded-l-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter / X</Label>
                <div className="flex">
                  <div className="flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
                    <Twitter className="w-4 h-4 text-sky-500" />
                  </div>
                  <Input
                    id="twitter"
                    value={twitterUrl}
                    onChange={(e) => setTwitterUrl(e.target.value)}
                    placeholder="https://x.com/username"
                    className="rounded-l-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="youtube">YouTube</Label>
                <div className="flex">
                  <div className="flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
                    <Youtube className="w-4 h-4 text-red-600" />
                  </div>
                  <Input
                    id="youtube"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="https://youtube.com/@username"
                    className="rounded-l-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <div className="flex">
                  <div className="flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
                    <Linkedin className="w-4 h-4 text-blue-700" />
                  </div>
                  <Input
                    id="linkedin"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="rounded-l-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Privacy Settings */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">Privacy Settings</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Public Profile</Label>
                  <p className="text-sm text-muted-foreground">
                    Make your profile visible to everyone
                  </p>
                </div>
                <Switch
                  checked={profilePublic}
                  onCheckedChange={setProfilePublic}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Email</Label>
                  <p className="text-sm text-muted-foreground">
                    Display your email address on your profile
                  </p>
                </div>
                <Switch
                  checked={showEmail}
                  onCheckedChange={setShowEmail}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Allow Messages</Label>
                  <p className="text-sm text-muted-foreground">
                    Let other users send you private messages
                  </p>
                </div>
                <Switch
                  checked={allowMessages}
                  onCheckedChange={setAllowMessages}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Notification Settings */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">Notifications</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Preset Likes</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when someone likes your presets
                  </p>
                </div>
                <Switch
                  checked={presetLikes}
                  onCheckedChange={setPresetLikes}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Preset Comments</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when someone comments on your presets
                  </p>
                </div>
                <Switch
                  checked={presetComments}
                  onCheckedChange={setPresetComments}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Followers</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when someone follows you
                  </p>
                </div>
                <Switch
                  checked={newFollowers}
                  onCheckedChange={setNewFollowers}
                />
              </div>
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
            onClick={handleSave}
            variant="default"
            className="gap-2"
          >
            <Save className="w-4 h-4" />
            Save Settings
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
