// stores/counterStore.ts
import { RecipeData } from '@/type/recipe.type'
import { create } from 'zustand'

interface SelectedRecipeState {
  selectedRecipe: RecipeData | null;
  setSelectedRecipe: (recipe: RecipeData) => void;
}

export const useSelectedRecipeStore = create<SelectedRecipeState>((set) => ({
  selectedRecipe: null,
  setSelectedRecipe: (recipe: RecipeData) => set({ selectedRecipe: recipe })
}))
