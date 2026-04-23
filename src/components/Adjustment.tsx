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
    padding,
    setPadding,
    tilt,
    setTilt,
  } = useCustomizationStore();

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-3">
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
      </div>
      <div className="grid grid-cols-2 gap-4">
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
      </div>
      <SettingSlider
        label="Opacity"
        value={opacity}
        max={1.0}
        min={0.0}
        step={0.1}
        onChange={setOpacity}
      />
      <SettingSlider
        label="Padding"
        value={padding}
        max={96}
        min={16}
        step={1}
        onChange={setPadding}
      />
      <SettingSlider
        label="Tilt"
        value={tilt}
        max={12}
        min={-12}
        step={1}
        onChange={setTilt}
      />
    </div>
  );
}
