'use server'

import { createClient } from "@/lib/supabase/server";
import { RecipeTableList } from "@/type/recipe.type";

export const getRecipes = async (name: string = ''): Promise<RecipeTableList[] | null> => {
  const client = await createClient();
  const { data, error } = await client.from('recipes').select(`
    id,name,contrast,personalityColor,saturation
  `).ilike('name', `%${name}%`)
  if (error) {
    return null;
  }
  return data;
}

