"use server"

import { createClient } from "@/lib/supabase/server";
import { RecipeCardDetail, RecipeData } from "@/type/recipe.type"

export const getRecipeById = async (id: string): Promise<RecipeData | null> => {
  const client = await createClient();
  const { data } = await client.from('recipes').select(`*`).eq('id', id).single();
  if (!data) return null;
  return data as RecipeData;
}

export const getRecipeCardList = async (): Promise<RecipeCardDetail[]> => {
  const client = await createClient();
  const { data } = await client.from('recipes').select(`id, name,description`);
  if (!data) return [];
  return data as RecipeCardDetail[];
}
