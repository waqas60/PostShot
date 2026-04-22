import { create } from "zustand";

type CustomizationStore = {
  background: string;
  setBackground: (bg: string) => void;
  theme: string;
  setTheme: (th: string) => void;
  fontSize: number;
  setFontSize: (f: number) => void;
  width: number;
  setWidth: (w: number) => void;
};

export const useCustomizationStore = create<CustomizationStore>((set) => ({
  background: "",
  setBackground: (bg) => set({ background: bg }),
  theme: "light",
  setTheme: (th) => set({ theme: th }),
  fontSize: 12,
  setFontSize: (f) => set({ fontSize: f }),
  width: 40,
  setWidth: (w) => set({ width: w }),
}));
