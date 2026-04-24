import Background from "./Background";
import Theme from "./Theme";
import { OPTION_ENUM, useCustomizeOptionStore } from "@/store/customizeOption";
import Adjustment from "./Adjustment";
import RatioSelector from "./RatioSelector";

export default function Customization() {
  const { option, setOption } = useCustomizeOptionStore();

  return (
    <div className="flex flex-col gap-5 rounded-2xl border-neutral-50 bg-neutral-50 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:border-neutral-100 dark:bg-neutral-800 dark:shadow-[0_3px_10px_rgba(255,255,255,0.05)]">
      <p className="border-b border-neutral-200 pb-2 text-xs font-semibold dark:border-neutral-700">
        Customization
      </p>
      <div className="grid w-full grid-cols-3 justify-between rounded-md bg-neutral-200 p-0.5 text-neutral-500 dark:bg-neutral-600">
        <button
          onClick={() => setOption(OPTION_ENUM.Background)}
          className={`cursor-pointer rounded-md p-2 text-[10px] ${option === OPTION_ENUM.Background && "bg-neutral-50 text-neutral-800 dark:bg-neutral-100"}`}
        >
          BG
        </button>
        <button
          onClick={() => setOption(OPTION_ENUM.Adjustment)}
          className={`cursor-pointer rounded-md p-2 text-[10px] ${option === OPTION_ENUM.Adjustment && "bg-neutral-50 text-neutral-800 dark:bg-neutral-100"}`}
        >
          Adjust
        </button>
        <button
          onClick={() => setOption(OPTION_ENUM.Export)}
          className={`cursor-pointer rounded-md p-2 text-[10px] ${option === OPTION_ENUM.Export && "bg-neutral-50 text-neutral-800 dark:bg-neutral-100"}`}
        >
          Export
        </button>
      </div>
      {option === OPTION_ENUM.Background && (
        <>
          <Background />
          <Theme />
        </>
      )}
      {option === OPTION_ENUM.Adjustment && (
        <>
          <Adjustment />
        </>
      )}
      {option === OPTION_ENUM.Export && (
        <>
          <RatioSelector />
        </>
      )}
    </div>
  );
}
