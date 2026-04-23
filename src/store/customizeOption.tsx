import { create } from "zustand";

export enum OPTION_ENUM {
  Background = "BG",
  Adjustment = "Adjust",
  Export = "Export",
}

type OPTION_TYPE = {
  option: OPTION_ENUM;
  setOption: (o: OPTION_ENUM) => void;
};

export const useCustomizeOptionStore = create<OPTION_TYPE>((set) => ({
  option: OPTION_ENUM.Background,
  setOption: (o) => set({ option: o }),
}));
