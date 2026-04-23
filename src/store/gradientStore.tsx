import { create } from "zustand";

type GradientType = {
  gradient: boolean;
  setGradient: (b: boolean) => void;
};

export const useGradient = create<GradientType>((set) => ({
  gradient: true,
  setGradient: (g) => set({ gradient: g }),
}));
