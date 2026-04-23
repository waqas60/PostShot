"use client";
import { useCustomizationStore } from "@/store/customizationStore";
import { useState } from "react";

const times = [
  { id: 1, label: "1:1", h: 15, w: 15, wp: 400 },
  { id: 2, label: "1.9:1", h: 15, w: 25, wp: 800 },
  { id: 3, label: "4:5", h: 25, w: 15, wp: 300 },
];

export default function RatioSelector() {
  const [selected, setSelected] = useState(1);
  const { setTweetParentWidth } = useCustomizationStore();

  function ratioSelect(id: number, w: number) {
    setSelected(id);
    setTweetParentWidth(w);
  }

  return (
    <div className="w-70 rounded-2xl">
      <div className="grid grid-cols-3 gap-2">
        {times.map((item) => (
          <button
            key={item.id}
            onClick={() => ratioSelect(item.id, item.wp)}
            className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border p-2 transition-all duration-200 ${
              selected === item.id ? "border-orange-400" : "border-neutral-700"
            } `}
          >
            <div
              style={{ width: `${item.w}px`, height: `${item.h}px` }}
              className={`mb-2 rounded-sm border ${
                selected === item.id ? "border-orange-500" : "border-gray-500"
              }`}
            />

            <span
              className={`text-sm ${
                selected === item.id ? "text-orange-500" : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
