"use server"

import client from "@/app/(website)/api/client"
import { RecipeData } from "@/type/recipe.type"

export const getRecipes = async (): Promise<RecipeData[] | null> => {
  const result: RecipeData[] | null = (await client.from('recipes').select(`*`)).data;
  return result;
}
