"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid, List } from "lucide-react";
import ProfileHeader from "./profile-header";
import PresetCard from "@/components/preset-card";
import FloatingActionButton from "./floating-action-button";
import AddPresetDialog from "./add-preset-dialog";
import SettingsDialog from "./settings-dialog";

const ProfilePageComponent = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock data for user's presets
  const mockPresets = [
    {
      title: "Golden Hour Cinema",
      description: "Warm, cinematic tones perfect for sunset and golden hour footage. Enhances skin tones and creates atmospheric depth.",
      colorPrimary: "#ff8c42",
      colorSecondary: "#ff6b35",
      colorAccent: "#f7931e",
      views: 1245,
      downloads: 312,
      likes: 89,
      category: "Cinematic",
      createdAt: "2 days ago"
    },
    {
      title: "Moody Blue Night",
      description: "Deep blue tones with cool highlights. Ideal for night scenes and creating mysterious, dramatic atmospheres.",
      colorPrimary: "#1e3a8a",
      colorSecondary: "#3730a3",
      colorAccent: "#6366f1",
      views: 892,
      downloads: 156,
      likes: 67,
      category: "Dramatic",
      createdAt: "5 days ago"
    },
    {
      title: "Vintage Film Look",
      description: "Classic film emulation with subtle grain and faded colors. Perfect for creating nostalgic, authentic vintage vibes.",
      colorPrimary: "#a16207",
      colorSecondary: "#92400e",
      colorAccent: "#d97706",
      views: 2156,
      downloads: 445,
      likes: 134,
      category: "Vintage",
      createdAt: "1 week ago"
    },
    {
      title: "Fresh Portrait",
      description: "Clean, natural tones that enhance skin and create professional portrait looks. Great for headshots and beauty work.",
      colorPrimary: "#ef4444",
      colorSecondary: "#f97316",
      colorAccent: "#eab308",
      views: 756,
      downloads: 189,
      likes: 45,
      category: "Portrait",
      createdAt: "1 week ago"
    },
    {
      title: "Urban Street Style",
      description: "High contrast, desaturated look perfect for street photography and urban environments. Adds grit and character.",
      colorPrimary: "#374151",
      colorSecondary: "#6b7280",
      colorAccent: "#9ca3af",
      views: 1534,
      downloads: 287,
      likes: 92,
      category: "Street",
      createdAt: "2 weeks ago"
    },
    {
      title: "Nature's Palette",
      description: "Enhanced greens and earth tones that bring out the natural beauty in landscape and nature photography.",
      colorPrimary: "#059669",
      colorSecondary: "#0d9488",
      colorAccent: "#10b981",
      views: 1887,
      downloads: 398,
      likes: 156,
      category: "Landscape",
      createdAt: "3 weeks ago"
    }
  ];

  const handleSettingsClick = () => {
    setShowSettingsDialog(true);
  };

  const filteredPresets = mockPresets.filter(preset => {
    const matchesSearch = preset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || preset.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Profile Header */}
        <ProfileHeader onSettingsClick={handleSettingsClick} />

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search your presets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-40">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="cinematic">Cinematic</SelectItem>
                <SelectItem value="portrait">Portrait</SelectItem>
                <SelectItem value="landscape">Landscape</SelectItem>
                <SelectItem value="street">Street</SelectItem>
                <SelectItem value="vintage">Vintage</SelectItem>
                <SelectItem value="dramatic">Dramatic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Presets Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid'
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
          {filteredPresets.map((preset, index) => (
            <PresetCard key={index} {...preset} />
          ))}
        </div>

        {filteredPresets.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <p className="text-lg mb-2">No presets found</p>
              <p className="text-sm">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}

        {/* Floating Action Button */}
        <FloatingActionButton onClick={() => setShowAddDialog(true)} />

        {/* Add Preset Dialog */}
        <AddPresetDialog
          open={showAddDialog}
          onOpenChange={setShowAddDialog}
        />

        {/* Settings Dialog */}
        <SettingsDialog
          open={showSettingsDialog}
          onOpenChange={setShowSettingsDialog}
        />
      </div>
    </div>
  );
};

export default ProfilePageComponent;
