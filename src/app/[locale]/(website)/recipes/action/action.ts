"use server"
import { createClient } from "@/lib/supabase/server";
import { RecipeData, RecipeDot } from "@/type/recipe.type"

export const getRecipeDots = async (): Promise<RecipeDot[] | null> => {
  const client = await createClient();
  const { data, error } = await client.from('recipes').select(`
    id,
    name,
    personalityColor,
    coords, 
    trending
  `);
  if (error) {
    return null;
  }
  return data;
}


export const getRecipeById = async (id: string): Promise<RecipeData | null> => {
  const client = await createClient();
  const { data, error } = await client.from('recipes').select(`*`).eq('id', id);
  if (error) {
    return null;
  }
  return data?.[0] || null;
}
