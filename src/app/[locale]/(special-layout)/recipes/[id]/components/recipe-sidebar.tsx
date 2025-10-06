import { Card } from "@/components/ui/card";
import { RecipeCardDetail } from "@/type/recipe.type";
import RecipeCard from "./recipe-card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface RecipeSidebarProps {
  recipes: RecipeCardDetail[]
  className: string;
}
const RecipeSidebar = ({ recipes, className }: RecipeSidebarProps) => {
  return (
    <Card className={cn(className, "")}>
      <div className="relative">
        <Input placeholder="Search recipes..." className="px-4 py-6" />
        <Image className="absolute right-3 top-2 select-none" src={'/logo.png'} width={32} height={32} alt={""} />
      </div>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Card>
  )
}

export default RecipeSidebar;
