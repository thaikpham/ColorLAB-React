// stores/counterStore.ts
import { create } from 'zustand'

interface quizStorePopup {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const useQuizPopupStore = create<quizStorePopup>((set) => ({
  isOpen: false,
  setOpen: (isOpen: boolean) => set({ isOpen })
}))
