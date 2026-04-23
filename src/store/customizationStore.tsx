import { create } from "zustand";

type CustomizationStore = {
  background: string;
  setBackground: (bg: string) => void;
  solidColor: string;
  setSolidColor: (s: string) => void;
  theme: string;
  setTheme: (th: string) => void;
  fontSize: number;
  setFontSize: (f: number) => void;
  width: number;
  setWidth: (w: number) => void;
  roundness: number;
  setRoundness: (r: number) => void;
  scale: number;
  setScale: (s: number) => void;
  opacity: number;
  setOpacity: (o: number) => void;
  padding: number;
  setPadding: (p: number) => void;
  tilt: number;
  setTilt: (t: number) => void;
  tweetParentWidth: number;
  setTweetParentWidth: (w: number) => void;
};

export const useCustomizationStore = create<CustomizationStore>((set) => ({
  background:
    "linear-gradient(135deg, rgb(13, 0, 26) 0%, rgb(109, 0, 181) 40%, rgb(192, 0, 106) 70%, rgb(255, 78, 80) 100%)",
  setBackground: (bg) => set({ background: bg }),
  solidColor: "",
  setSolidColor: (s) => set({solidColor: s}),
  theme: "light",
  setTheme: (th) => set({ theme: th }),
  fontSize: 12,
  setFontSize: (f) => set({ fontSize: f }),
  width: 100,
  setWidth: (w) => set({ width: w }),
  roundness: 14,
  setRoundness: (r) => set({ roundness: r }),
  scale: 0.9,
  setScale: (s) => set({ scale: s }),
  opacity: 1,
  setOpacity: (o) => set({ opacity: o }),
  padding: 16,
  setPadding: (p) => set({ padding: p }),
  tilt: 0,
  setTilt: (t) => set({ tilt: t }),
  tweetParentWidth: 400,
  setTweetParentWidth: (w) => set({ tweetParentWidth: w }),
}));
