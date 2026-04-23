import { useCustomizationStore } from "@/store/customizationStore";
import { Slider } from "radix-ui";
import React from "react";
import SettingSlider from "./SettingSlider";

export default function Adjustment() {
  const {
    fontSize,
    setFontSize,
    width,
    setWidth,
    roundness,
    setRoundness,
    scale,
    setScale,
    opacity,
    setOpacity,
  } = useCustomizationStore();

  return (
    <div className="p-4 space-y-6">
      <h1 className="font-bold border-b pb-2 border-neutral-200 text-white">
        Adjustment
      </h1>
      <SettingSlider
        label="Font Size"
        value={fontSize}
        max={24}
        min={12}
        step={1}
        onChange={setFontSize}
      />
      <SettingSlider
        label="Width"
        value={width}
        max={100}
        min={40}
        step={1}
        onChange={setWidth}
      />
      <SettingSlider
        label="Roundness"
        value={roundness}
        max={32}
        min={0}
        step={1}
        onChange={setRoundness}
      />
      <SettingSlider
        label="Scale"
        value={scale}
        max={1.5}
        min={0.5}
        step={0.1}
        onChange={setScale}
      />
      <SettingSlider
        label="Opacity"
        value={opacity}
        max={1.0}
        min={0.0}
        step={0.1}
        onChange={setOpacity}
      />
    </div>
  );
}
