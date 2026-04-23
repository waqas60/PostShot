import { Slider } from "radix-ui";

type SettingSliderType = {
  label: string;
  value: any;
  onChange: (v: any) => void;
  min: number;
  max: number;
  step: number
};

export default function SettingSlider(s: SettingSliderType) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-neutral-400">{s.label}</span>
        <span className="text-sm text-neutral-400">{s.value}</span>
      </div>

      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={[s.value]}
        max={s.max}
        min={s.min}
        step={s.step}
        onValueChange={(vals) => s.onChange(vals[0])}
      >
        <Slider.Track className="bg-neutral-700 relative grow rounded-full h-0.75">
          <Slider.Range className="absolute bg-[#f97316] rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-[#f97316] rounded-[10px] hover:bg-orange-600 focus:outline-none"
          aria-label={s.label}
        />
      </Slider.Root>
    </div>
  );
}
