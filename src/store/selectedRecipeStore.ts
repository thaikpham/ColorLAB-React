// stores/counterStore.ts
import { RecipeDot } from '@/type/recipe.type'
import { create } from 'zustand'

interface SelectedRecipeState {
  selectedRecipe: RecipeDot | null;
  setSelectedRecipe: (recipe: RecipeDot) => void;
}

export const useSelectedRecipeStore = create<SelectedRecipeState>((set) => ({
  selectedRecipe: null,
  setSelectedRecipe: (recipe: RecipeDot) => set({ selectedRecipe: recipe })
}))
