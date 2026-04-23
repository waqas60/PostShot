import { create } from "zustand";

export enum ValueEnum {
  PRESETS = "presets",
  SOLID_COLORS = "solid_color",
}

type BackgroundStore = {
  value: ValueEnum;
  setValue: (v: ValueEnum) => void;
};

export const useBackgroundStore = create<BackgroundStore>((set) => ({
  value: ValueEnum.PRESETS,
  setValue: (v) => set({ value: v }),
}));
