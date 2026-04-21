import { useCustomizationStore } from "@/store/customizationStore";
import React from "react";

export default function Theme() {
  const { setTheme } = useCustomizationStore();
  return (
    <div>
      <h1 className="font-bold border-b border-t pb-2  border-neutral-200">
        Theme
      </h1>

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}
