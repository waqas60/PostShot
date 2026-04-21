import { create } from "zustand";

type CustomizationStore = {
  background: string;
  setBackground: (bg: string) => void;
};

export const useCustomizationStore = create<CustomizationStore>((set) => ({
  background: "",
  setBackground: (bg) => set({ background: bg }),
}));
