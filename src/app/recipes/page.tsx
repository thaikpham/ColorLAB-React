import { HeroHeader } from '@/components/header';
import RecipePageComponent from './components/recipe-page';
import ColorMap from '@/components/color-map';

export default function RecipeListPage() {
  return (
    <>
      <HeroHeader />
      <ColorMap />
      <RecipePageComponent />
    </>
  );
}
