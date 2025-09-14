import { HeroHeader } from '@/components/header';
import RecipePageComponent from './components/recipe-page';
import ColorMap from '@/components/color-map';
import { getRecipes } from './action/action';

export default async function RecipeListPage() {
  const recipes = await getRecipes()
  console.log('personality', recipes![0].personalityColor)
  return (
    <>
      <HeroHeader />
      <ColorMap recipes={recipes || []} />
      <RecipePageComponent />
    </>
  );
}
