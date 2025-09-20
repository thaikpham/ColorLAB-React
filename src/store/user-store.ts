import { create } from 'zustand'

interface User {
  name: string;
  email: string;
  profileImage: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user: user }),
  clearUser: () => set({ user: null })
}))
