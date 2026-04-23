import { useBackgroundStore, ValueEnum } from "@/store/backgroundStore";
import { useCustomizationStore } from "@/store/customizationStore";
import { SetStateAction, useState } from "react";
import { TiTick } from "react-icons/ti";

const presets = [
  "linear-gradient(135deg, rgb(13, 0, 26) 0%, rgb(109, 0, 181) 40%, rgb(192, 0, 106) 70%, rgb(255, 78, 80) 100%)",
  "linear-gradient(135deg, rgb(15, 12, 41) 0%, rgb(121, 40, 202) 45%, rgb(0, 212, 255) 100%)",
  "linear-gradient(135deg, rgb(13, 11, 46) 0%, rgb(26, 22, 96) 40%, rgb(45, 32, 144) 70%, rgb(61, 40, 176) 100%)",
  "linear-gradient(135deg, rgb(15, 0, 0) 0%, rgb(74, 0, 0) 28%, rgb(139, 21, 0) 52%, rgb(212, 32, 0) 72%, rgb(255, 101, 0) 88%, rgb(255, 165, 0) 100%)",
  "linear-gradient(135deg, rgb(26, 5, 51) 0%, rgb(61, 26, 107) 30%, rgb(123, 45, 255) 60%, rgb(255, 107, 107) 85%, rgb(255, 217, 61) 100%)",
  "linear-gradient(135deg, rgb(244, 114, 182) 0%, rgb(251, 146, 60) 50%, rgb(251, 191, 36) 100%)",
  "linear-gradient(135deg, rgb(74, 0, 48) 0%, rgb(139, 0, 96) 35%, rgb(204, 0, 136) 65%, rgb(240, 5, 154) 85%, rgb(255, 68, 187) 100%)",
  "linear-gradient(135deg, rgb(4, 47, 46) 0%, rgb(13, 110, 106) 35%, rgb(15, 158, 151) 60%, rgb(20, 184, 166) 80%, rgb(94, 234, 212) 100%)",
  "linear-gradient(135deg, rgb(167, 139, 250) 0%, rgb(192, 132, 252) 35%, rgb(232, 121, 249) 65%, rgb(244, 114, 182) 100%)",
  "linear-gradient(135deg, rgb(199, 210, 254) 0%, rgb(165, 180, 252) 40%, rgb(129, 140, 248) 75%, rgb(99, 102, 241) 100%)",
  "radial-gradient(at 60% 40%, rgb(253, 164, 175) 0%, rgb(254, 205, 211) 45%, rgb(255, 241, 242) 100%)",
  "linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(226, 232, 240) 40%, rgb(203, 213, 225) 70%, rgb(148, 163, 184) 100%)",
];

export default function Background() {
  const { setBackground } = useCustomizationStore();
  const { value, setValue } = useBackgroundStore();
  const [selected, setSelected] = useState<SetStateAction<number>>(0);

  const changeBg = (index: number) => {
    setBackground(presets[index]);
    setSelected(index);
  };

  return (
    <div className="w-70">
      <div className="grid w-full grid-cols-2 rounded-md  bg-neutral-700 p-0.5 text-center text-[10px] text-neutral-500">
        <p
          className={`cursor-pointer rounded-md p-2 transition-all duration-200 ${value === ValueEnum.PRESETS && "bg-neutral-100 text-neutral-800"}`}
          onClick={() => setValue(ValueEnum.PRESETS)}
        >
          Presets
        </p>
        <p
          className={`cursor-pointer rounded-md p-2 transition-all duration-200 ${value === ValueEnum.SOLID_COLORS && "bg-neutral-100 text-neutral-800"}`}
          onClick={() => setValue(ValueEnum.SOLID_COLORS)}
        >
          Solid Colors
        </p>
      </div>

      <div className="mt-2 grid grid-cols-4 gap-2 justify-center">
        {presets.map((preset, index) => (
          <button
            key={index}
            style={{ background: preset }}
            onClick={() => changeBg(index)}
            className="h-8 w-16 cursor-pointer rounded-md"
          >
            {selected === index && (
              <TiTick className="mx-auto text-center text-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
