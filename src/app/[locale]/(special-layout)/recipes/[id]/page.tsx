import { notFound } from 'next/navigation';
import { getRecipeById, getRecipeCardList } from './action/action';
import RecipeDetailComponent from './components/recipe-detail';

export default async function GameDetailComponent(
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }
) {
  const { id } = await params;
  const recipePromise = await getRecipeById(id);
  const recipeCardListPromise = await getRecipeCardList();
  const [recipe, recipeCardList] = await Promise.all([recipePromise, recipeCardListPromise])
  if (!recipe) {
    notFound()
  }
  return (
    <RecipeDetailComponent recipe={recipe} recipes={recipeCardList} />
  );
}
