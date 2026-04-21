import { create } from "zustand";

type CustomizationStore = {
  background: string;
  setBackground: (bg: string) => void;
  theme: string;
  setTheme: (th: string) => void;
};

export const useCustomizationStore = create<CustomizationStore>((set) => ({
  background: "",
  setBackground: (bg) => set({ background: bg }),
  theme: "light",
  setTheme: (th) => set({ theme: th }),
}));
