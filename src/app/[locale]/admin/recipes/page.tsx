import RecipeDataTable from "@/components/recipe-list/table";
import { getRecipes } from "./action";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import SearchInput from "./components/search-input";

const RecipeTablePage = async (props: {
  searchParams?: Promise<{
    name: string
  }>;
}) => {
  const searchParams = await props.searchParams;
  const name = searchParams?.name || '';
  const recipes = await getRecipes(name);
  return (
    <div>
      <div className="w-full flex justify-between">
        <SearchInput value={name} />
        <Button className="mb-2">
          <Plus width={32} />
          Create new recipe
        </Button>
      </div>
      <RecipeDataTable data={recipes || []} />
    </div>
  )
}

export default RecipeTablePage;
