import { CameraRecipeGuide } from "@/components/camera-recipe-guide";
import { HeroHeader } from "@/components/header";
import QuizPopup from "@/components/quiz/quiz-pop-up";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecipeData } from "@/type/recipe.type";
import { MemoryStickIcon as Memory, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DetailButton from "./detail-button";
import { getTranslations } from "next-intl/server";

interface RecipeDetailComponentProps {
  recipe: RecipeData;
}

const currentLang = 'en';

const mainSettingsRecord: Record<string, string> = {
  "Black level": "Black Level",
  "Gamma": "Gamma",
  "Black Gamma": "Knee",
  "Knee": "Knee",
  "Color Mode": "Color Mode",
  "Saturation": "Saturation",
  "Color Phase": "Color Phase",
}

const RecipeDetailComponent = async ({ recipe }: RecipeDetailComponentProps) => {
  const t = await getTranslations('detail');
  return (
    <>
      <HeroHeader />
      {/* Header with game title and breadcrumbs */}
      <AnimatedGroup>
        <div className="relative">
          <div className="absolute inset-0 bg-transparent">
            <Image
              src={'/placeholder.svg'}
              alt={recipe.name}
              fill
              className="-z-10 object-cover opacity-40"
              priority
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 pt-24 pb-8">
            <div className="text-muted-foreground mb-4 flex items-center gap-2 text-sm">
              <span className="text-primary">{recipe.name}</span>
            </div>

            <h1 className="text-primary text-4xl font-bold md:text-5xl">{recipe.name}</h1>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left column - Game media and info */}
            <div className="lg:col-span-2">
              {/* Game trailer/screenshots carousel */}
              <div className="mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {/* {game.screenshots.map((screenshot, index) => ( */}
                    {/*   <CarouselItem key={index}> */}
                    {/*     <div className="relative overflow-hidden rounded-lg"> */}
                    {/*       <Image */}
                    {/*         src={screenshot || '/placeholder.svg'} */}
                    {/*         alt={`${recipe.name} screenshot ${index + 1}`} */}
                    {/*         width={1200} */}
                    {/*         height={600} */}
                    {/*         className="aspect-video w-full object-cover" */}
                    {/*       /> */}
                    {/*     </div> */}
                    {/*   </CarouselItem> */}
                    {/* ))} */}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>

              {/* Thumbnail gallery */}
              <div className="mb-8 grid grid-cols-5 gap-2">
                {/* {game.screenshots.map((screenshot, index) => ( */}
                {/*   <div */}
                {/*     key={index} */}
                {/*     className="relative cursor-pointer overflow-hidden rounded-md transition hover:opacity-80" */}
                {/*   > */}
                {/*     <Image */}
                {/*       src={screenshot || '/placeholder.svg'} */}
                {/*       alt={`Thumbnail ${index + 1}`} */}
                {/*       width={200} */}
                {/*       height={100} */}
                {/*       className="aspect-video w-full object-cover" */}
                {/*     /> */}
                {/*   </div> */}
                {/* ))} */}
              </div>

              {/* Game description */}
              <div className="mb-8">
                <h2 className="text-primary mb-4 font-bold">{t('about')}</h2>
                <p className="text-secondary-foreground mb-4">{recipe.description[currentLang]}</p>
              </div>

              {/* Reviews section */}
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold">{t('review.title')}</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="bg-muted/25 backdrop-blur-2xl border-1 border-border rounded-lg p-4">
                    <h3 className="mb-2 font-semibold">{t('review.all')}</h3>
                    <div className="mb-2 flex items-center gap-4">
                      <div className="text-primary text-3xl font-bold">{50}%</div>
                      <div>
                        <div className="font-medium">Overwhelmingly Positive</div>
                        <div className="text-secondary-foreground text-sm">
                          20 reviews
                        </div>
                      </div>
                    </div>
                    <Progress value={50} className="h-2 bg-secondary" />
                  </div>
                  <div className="bg-muted/25 backdrop-blur-2xl border-1 border-border rounded-lg p-4">
                    <h3 className="mb-2 font-semibold">{t('review.recent')}</h3>
                    <div className="mb-2 flex items-center gap-4">
                      <div className="text-primary text-3xl font-bold">
                        100%
                      </div>
                      <div>
                        <div className="font-medium">Very Positive</div>
                        <div className="text-secondary-foreground text-sm">
                          20 reviews
                        </div>
                      </div>
                    </div>
                    <Progress value={50} className="h-2 bg-secondary" />
                  </div>
                </div>
              </div>

              {/* System requirements */}
              <div className="space-y-4">
                <h2 className="mb-4 text-xl font-bold">{t('recipe')}</h2>
                <Tabs defaultValue="main" className="w-full">
                  <TabsList className="bg-card/25 backdrop-blur-2xl border-1 border-border mb-4 grid w-full grid-cols-2">
                    <TabsTrigger className="cursor-pointer" value="main">
                      {t('main')}
                    </TabsTrigger>
                    <TabsTrigger className="cursor-pointer" value="color-depth">
                      {t('recommend')}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="main" className="mt-0">
                    <div className="grid grid-cols-3 bg-muted/25 backdrop-blur-2xl space-y-4 rounded-2xl border-border border-1 p-2">
                      {
                        (Object.keys(recipe.colorDepth) as Array<keyof RecipeData['colorDepth']>).map((item, index) =>
                          <div key={index} className="flex justify-center items-center gap-3 py-2">
                            <Memory className="text-secondary-foreground my-0.5 h-6 w-6 shrink-0" />
                            <div>
                              <span className="font-medium">{item}</span>
                              <span className="text-secondary-foreground"> {recipe.colorDepth[item]} </span>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </TabsContent>
                  <TabsContent value="color-depth" className="mt-0">
                    <div className="grid grid-cols-3 bg-muted/50 backdrop-blur-2xl space-y-4 rounded-lg p-2 pl-16">
                      {
                        (Object.keys(recipe.settings) as Array<keyof RecipeData['settings']>).map((item, index) =>
                          <div key={index} className="flex items-center gap-3 py-2">
                            <Memory className="text-secondary-foreground my-0.5 h-6 w-6 shrink-0" />
                            <div>
                              <span className="font-medium">{mainSettingsRecord[item]}</span>
                              <span className="text-secondary-foreground"> {recipe.settings[item]} </span>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </TabsContent>
                </Tabs>
                <CameraRecipeGuide />
              </div>
            </div>

            {/* Right column - Purchase info and metadata */}
            <div>
              {/* Game cover image */}
              <div className="mb-6">
                <Image
                  src={'/placeholder.svg'}
                  alt={recipe.name}
                  width={600}
                  height={300}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Purchase card */}
              <div className="bg-muted/50 backdrop-blur-2xl border-1 border-border mb-6 rounded-lg p-6">
                <h2 className="mb-4 text-xl font-bold">{t('get')} {recipe.name}</h2>
                <div className="grid gap-3">
                  <DetailButton type={"cart"} variant={"default"} />
                  <DetailButton type={"wishlist"} />
                  <DetailButton type={"share"} />
                </div>
              </div>

              {/* Game info card */}
              <div className="bg-muted/25 backdrop-blur-2xl border-1 border-border mb-6 rounded-lg p-6">
                <h3 className="mb-4 font-semibold">{t('author')}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Developer:</span>
                    <Link href="#" className="text-primary hover:underline">
                      Developer
                    </Link>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Publisher:</span>
                    <Link href="#" className="text-primary hover:underline">
                      Publisher
                    </Link>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Release Date:</span>
                    <span>Release Date</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">User Rating:</span>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>2/5</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Players:</span>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      <span>Single-player, Multi-player</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-muted/25 backdrop-blur-2xl border-1 border-border rounded-lg p-6">
                <h3 className="mb-4 font-semibold">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedGroup >
      <QuizPopup />
    </>
  )
}

export default RecipeDetailComponent;
