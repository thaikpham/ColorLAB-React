import { HeroHeader } from '@/components/header';
// import RecipePageComponent from './components/recipe-page';
import ColorMap from './components/color-map';
import QuizPopup from '@/components/quiz/quiz-pop-up';

export default async function RecipeListPage() {
  return (
    <>
      <HeroHeader />
      <ColorMap />
      <QuizPopup />
      {/* <RecipePageComponent /> */}
    </>
  );
}
