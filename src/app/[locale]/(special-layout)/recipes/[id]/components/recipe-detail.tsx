import { RecipeCardDetail, RecipeData } from "@/type/recipe.type";
import { Card } from "@/components/ui/card";
import RecipeSidebar from "./recipe-sidebar";
import WhiteBalanceGrid from "./white-balance-grid";
import { Sliders, Star } from "lucide-react";
import RecipeImageCarousel from "./recipe-image-carousel";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface RecipeDetailComponentProps {
  recipe: RecipeData;
  recipes: RecipeCardDetail[];
}

const mainSettingsRecord: Record<string, string> = {
  "Black level": "Black Level",
  "Gamma": "Gamma",
  "Black Gamma": "Knee",
  "Knee": "Knee",
  "Color Mode": "Color Mode",
  "Saturation": "Saturation",
  "Color Phase": "Color Phase",
}

const RecipeDetailComponent = async ({ recipe, recipes }: RecipeDetailComponentProps) => {
  // const t = await getTranslations('detail');
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 pt-4">
      {/* left side bar */}
      <RecipeSidebar
        className={"col-span-1 hidden lg:flex backdrop-blur-xl bg-muted/10 border border-border rounded-3xl p-4  flex-col max-h-[calc(100vh-40px)] overflow-scroll"}
        recipes={recipes} />
      {/* main content */}
      <div className='space-y-4 col-span-3'>
        <Card className="bg-muted/10 backdrop-blur-xl h-1/5 px-4 overflow-scroll">
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl text-accent-foreground">{recipe.name}</h1>
            <div className="flex items-center space-x-1">
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
            </div>
          </div>
          <p>{recipe.description['en']}</p>
          {/* <div className="flex justify-end space-x-4"> */}
          {/*   <Button>Action</Button> */}
          {/*   <Button>Action</Button> */}
          {/*   <Button>Action</Button> */}
          {/* </div> */}
        </Card>
        <Card className="bg-muted/10 backdrop-blur-xl h-fit px-4">
          <RecipeImageCarousel />
        </Card>
        <Card className="bg-muted/10 backdrop-blur-xl h-80 px-4">
          <h1 className="font-bold text-lg text-accent-foreground">{'Input SCL recipes to Sony cameras guide'} </h1>
          <Textarea className="flex flex-1" />
          <div className="flex flex-row justify-center space-x-8">
            <Button>{'Tweak With AI'}</Button>
            <Button variant='secondary'>{'Save Recipe Card'}</Button>
          </div>
        </Card>
      </div>
      {/* right side bar */}
      <div className="col-span-1 h-fit space-y-4 mx-auto">
        <Card className="bg-muted/10 backdrop-blur-xl px-8">
          <div className="flex justify-between">
            <h1 className="text-accent-foreground text-xl font-extrabold">{"white balance".toUpperCase()}</h1>
            <Sliders />
          </div>
          <div className="h-fit bg-muted/30 grid grid-cols-2 border border-border rounded-lg">
            <div className="h-full flex flex-col justify-center px-4 space-y-2">
              <h3 className="font-bold text-primary">{recipe.whiteBalance.split(",")[0].trim()}</h3>
              <h3 className="font-bold text-primary">{recipe.whiteBalance.split(",")[1]?.split("-")[0]?.trim() || ''}</h3>
              <h3 className="font-bold text-primary">{recipe.whiteBalance.split(",")[1]?.split("-")[1]?.trim() || ''}</h3>
            </div>
            <div className="flex flex-col justify-center">
              <WhiteBalanceGrid />
            </div>
          </div>
        </Card>
        <Card className="bg-muted/10 backdrop-blur-xl px-8 max-h-[calc(100vh-330px)] overflow-scroll">
          <div className="flex justify-between">
            <h1 className="text-accent-foreground text-xl font-extrabold">{"picture profile".toUpperCase()}</h1>
            <Sliders />
          </div>
          <div className="space-y-4 h-fit">
            {Object.entries(recipe.settings).map(([key, value]) => (
              <Card key={key} className="h-fit bg-muted/30 flex flex-row justify-between px-4">
                <span className="font-bold text-start">{mainSettingsRecord[key]}: </span>
                <span className="text-end">{value}</span>
              </Card>
            ))}
            <Card className="h-fit bg-muted/30 flex flex-row justify-between px-4">
              <span className="font-bold text-start">Detail:</span>
              <span className="text-end">{recipe.detailSettings.Level}</span>
            </Card>
          </div>
          <h1 className="text-accent-foreground text-xl font-extrabold">{"picture profile".toUpperCase()}</h1>
          <div className="grid grid-cols-3 gap-4">
            <Card className="h-fit bg-muted/30 flex flex-row justify-center items-center inset-shadow-sm inset-shadow-red-800/50">
              <span className="font-bold text-red-500">R:</span>
              <span className="text-red-500">{recipe.colorDepth['R']}</span>
            </Card>
            <Card className="h-fit bg-muted/30 flex flex-row justify-center inset-shadow-sm inset-shadow-green-800/50">
              <span className="font-bold text-green-500">G:</span>
              <span className="text-green-500">{recipe.colorDepth['G']}</span>
            </Card>
            <Card className="h-fit bg-muted/30 flex flex-row justify-center inset-shadow-sm inset-shadow-blue-800/50">
              <span className="font-bold text-blue-500">B:</span>
              <span className="text-blue-500">{recipe.colorDepth['B']}</span>
            </Card>
            <Card className="h-fit bg-muted/30 flex flex-row justify-center inset-shadow-sm inset-shadow-cyan-800/50">
              <span className="font-bold text-cyan-500">C:</span>
              <span className="text-cyan-500">{recipe.colorDepth['C']}</span>
            </Card>
            <Card className="h-fit bg-muted/30 flex flex-row justify-center inset-shadow-sm inset-shadow-purple-800/50">
              <span className="font-bold text-purple-500">M:</span>
              <span className="text-purple-500">{recipe.colorDepth['M']}</span>
            </Card>
            <Card className="h-fit bg-muted/30 flex flex-row justify-center inset-shadow-sm inset-shadow-yellow-800/50">
              <span className="font-bold text-yellow-500">Y:</span>
              <span className="text-yellow-500">{recipe.colorDepth['Y']}</span>
            </Card>
          </div>
        </Card>
      </div >
    </div >
  );
}

export default RecipeDetailComponent;
