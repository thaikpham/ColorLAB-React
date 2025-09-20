"use server"

import client from "@/app/(website)/api/client"
import { RecipeData, RecipeDot } from "@/type/recipe.type"


export const getRecipes = async (): Promise<RecipeData[] | null> => {
  const{data,error} = (await client.from('recipes').select(`*`));
  if(error) {
    return null;
  }
  return data;
}

export const getRecipeDots= async (): Promise<RecipeDot[] | null> => {
  const {data,error} = (await client.from('recipes').select(`
    id,
    name,
    personalityColor,
    coords, 
    trending
  `));
  if(error) {
    return null;
  }
  return data;
}


export const getRecipeById = async (id: string): Promise<RecipeData | null> => {
  const {data,error} = (await client.from('recipes').select(`*`).eq('id', id));
  if(error) {
    return null;
  }
  return data?.[0] || null;
}