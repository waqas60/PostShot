import { useCustomizationStore } from "@/store/customizationStore";
import React from "react";

export default function Theme() {
  const { theme, setTheme } = useCustomizationStore();
  return (
    <div>
      <p className="pb-2 text-xs font-semibold">Theme</p>

      <div className="grid grid-cols-2 justify-between rounded-md bg-neutral-700 p-0.5 text-neutral-500">
        <button
          onClick={() => setTheme("light")}
          className={`cursor-pointer rounded-md p-2 text-[10px] ${theme === "light" && "bg-neutral-100 text-neutral-800"}`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`cursor-pointer rounded-md p-2 text-[10px] ${theme === "dark" && "bg-neutral-100 text-neutral-800"}`}
        >
          Dark
        </button>
      </div>
    </div>
  );
}
