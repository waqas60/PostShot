import { useCustomizationStore } from "@/store/customizationStore";
import { Slider } from "radix-ui";
import React from "react";

export default function Adjustment() {
  const { fontSize, setFontSize, width, setWidth, roundness, setRoundness } =
    useCustomizationStore();

  return (
    <div className="p-4 space-y-6">
      <h1 className="font-bold border-b pb-2 border-neutral-200 text-white">
        Adjustment
      </h1>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-neutral-400">
            Font size
          </span>
          <span className="text-sm text-neutral-400">{fontSize}px</span>
        </div>

        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[fontSize]}
          max={24}
          min={12}
          step={1}
          onValueChange={(vals) => setFontSize(vals[0])}
        >
          <Slider.Track className="bg-neutral-700 relative grow rounded-full h-0.75">
            <Slider.Range className="absolute bg-[#f97316] rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-[#f97316] rounded-[10px] hover:bg-orange-600 focus:outline-none"
            aria-label="Font size"
          />
        </Slider.Root>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-neutral-400">Width</span>
          <span className="text-sm text-neutral-400">{width}%</span>
        </div>

        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[width]}
          max={100}
          min={40}
          step={1}
          onValueChange={(vals) => setWidth(vals[0])}
        >
          <Slider.Track className="bg-neutral-700 relative grow rounded-full h-0.75">
            <Slider.Range className="absolute bg-[#f97316] rounded-full h-full"></Slider.Range>
          </Slider.Track>

          <Slider.Thumb
            className="block w-5 h-5 bg-[#f97316] rounded-[10px] hover:bg-orange-600 focus:outline-none"
            aria-label="Width"
          ></Slider.Thumb>
        </Slider.Root>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-neutral-400">
            Roundness
          </span>
          <span className="text-sm text-neutral-400">{roundness}px</span>
        </div>

        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[roundness]}
          max={32}
          min={0}
          step={1}
          onValueChange={(vals) => setRoundness(vals[0])}
        >
          <Slider.Track className="bg-neutral-700 relative grow rounded-full h-0.75">
            <Slider.Range className="absolute bg-[#f97316] rounded-full h-full"></Slider.Range>
          </Slider.Track>

          <Slider.Thumb
            className="block w-5 h-5 bg-[#f97316] rounded-[10px] hover:bg-orange-600 focus:outline-none"
            aria-label="Roundness"
          ></Slider.Thumb>
        </Slider.Root>
      </div>
    </div>
  );
}
