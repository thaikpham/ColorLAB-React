"use server"

import { createClient } from "@/lib/supabase/server";
import { RecipeData } from "@/type/recipe.type"

export const getRecipeById = async (id: string): Promise<RecipeData | null> => {
  const client = await createClient();
  const { data } = await client.from('recipes').select(`*`).eq('id', id).single();
  if (!data) return null;
  return data;
}
