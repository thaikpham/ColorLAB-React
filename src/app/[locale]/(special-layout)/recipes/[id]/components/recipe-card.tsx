import { Card } from "@/components/ui/card";
import { RecipeCardDetail } from "@/type/recipe.type";
import { Star } from "lucide-react";
import Link from "next/link";

interface RecipeCardProps {
  recipe: RecipeCardDetail;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card className="bg-muted/20 hover:bg-muted/40 h-40 p-4 hover:scale-[102%] transition-all duration-300 ease-in-out">
      <Link className="flex flex-col justify-between h-full space-y-2" href={`/recipes/${recipe.id}`}>
        <h1 className="font-bold text-primary">{recipe.name}</h1>
        <p className="line-clamp-2 text-sm text-muted-foreground">{recipe.description['en']}</p>
        <div className="flex justify-center space-x-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </Link>
    </Card>
  )
}

export default RecipeCard;
