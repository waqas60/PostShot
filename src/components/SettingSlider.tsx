import { Slider } from "radix-ui";

type SettingSliderType = {
  label: string;
  value: any;
  onChange: (v: any) => void;
  min: number;
  max: number;
  step: number;
};

export default function SettingSlider(s: SettingSliderType) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-8">
        <span className="text-[10px] font-medium text-neutral-400">{s.label}</span>
        <span className="text-[10px] text-neutral-400">{s.value}</span>
      </div>

      <Slider.Root
        className="relative flex h-5 w-full touch-none items-center select-none"
        value={[s.value]}
        max={s.max}
        min={s.min}
        step={s.step}
        onValueChange={(vals) => s.onChange(vals[0])}
      >
        <Slider.Track className="relative h-0.5 grow rounded-full bg-neutral-700">
          <Slider.Range className="absolute h-full rounded-full bg-[#f97316]" />
        </Slider.Track>
        <Slider.Thumb
          className="block h-3 w-3 rounded-[10px] bg-[#f97316] hover:bg-orange-600 focus:outline-none"
          aria-label={s.label}
        />
      </Slider.Root>
    </div>
  );
}
