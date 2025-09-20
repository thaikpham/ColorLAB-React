import Sidebar from './sidebar';
import RecipeExplorer from './recipe-explorer';

export default function RecipePageComponent() {
  // Game data
  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar */}
          <Sidebar />
          {/* Main Content */}
          <RecipeExplorer />
        </div>
      </div>
    </div>
  );
}
