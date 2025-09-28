import { notFound } from 'next/navigation';
import { getRecipeById } from './action/action';
import RecipeDetailComponent from './components/recipe-detail';

export default async function GameDetailComponent(
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }
) {
  const { id } = await params;
  const recipe = await getRecipeById(id);
  if (!recipe) {
    notFound()
  }
  return (
    <RecipeDetailComponent recipe={recipe} />
  );
}
