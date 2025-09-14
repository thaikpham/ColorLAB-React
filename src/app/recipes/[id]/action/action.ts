"use server"

import client from "@/app/api/client";
import { RecipeData } from "@/type/recipe.type"

export const getRecipeById = async (id: string): Promise<RecipeData | null> => {
  const recipes: RecipeData[] | null = (await client.from('recipes').select(`*`).eq('id', id)).data;
  if (!recipes) return null;
  return recipes[0];
}
