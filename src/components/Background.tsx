import { Gradient_Presets } from "@/lib/constants";
import { useBackgroundStore, ValueEnum } from "@/store/backgroundStore";
import { useCustomizationStore } from "@/store/customizationStore";
import { useGradient } from "@/store/gradientStore";
import { SetStateAction, useState } from "react";
import { TiTick } from "react-icons/ti";

export default function Background() {
  const { setBackground, setSolidColor, solidColor } = useCustomizationStore();
  const { setGradient } = useGradient();
  const { value, setValue } = useBackgroundStore();
  const [selected, setSelected] = useState<SetStateAction<number>>(0);

  const changeBg = (index: number) => {
    setGradient(true);
    setBackground(Gradient_Presets[index]);
    setSelected(index);
  };

  return (
    <div className="">
      <div className="grid w-full grid-cols-2 rounded-md bg-neutral-200 p-0.5 text-center text-[10px] text-neutral-500 dark:bg-neutral-700">
        <p
          className={`cursor-pointer rounded-md p-2 transition-all duration-200 ${value === ValueEnum.PRESETS && "bg-neutral-50 text-neutral-800"}`}
          onClick={() => setValue(ValueEnum.PRESETS)}
        >
          Presets
        </p>
        <p
          className={`cursor-pointer rounded-md p-2 transition-all duration-200 ${value === ValueEnum.SOLID_COLORS && "bg-neutral-50 text-neutral-800"}`}
          onClick={() => setValue(ValueEnum.SOLID_COLORS)}
        >
          Solid Colors
        </p>
      </div>

      {value === ValueEnum.PRESETS && (
        <div className="mt-2 grid grid-cols-4 justify-center gap-2">
          {Gradient_Presets.map((preset, index) => (
            <button
              key={index}
              style={{ background: preset }}
              onClick={() => changeBg(index)}
              className="h-8 cursor-pointer rounded-md"
            >
              {selected === index && (
                <TiTick className="mx-auto text-center text-white" />
              )}
            </button>
          ))}
        </div>
      )}

      {value === ValueEnum.SOLID_COLORS && (
        <div className="mt-2 flex items-center text-[10px]">
          <input
            type="color"
            onChange={(e) => {
              setGradient(false);
              setSolidColor(e.target.value);
            }}
          />
          <p>{solidColor}</p>
        </div>
      )}
    </div>
  );
}
