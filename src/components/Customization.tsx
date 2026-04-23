import React from "react";
import Background from "./Background";
import Theme from "./Theme";
import { OPTION_ENUM, useCustomizeOptionStore } from "@/store/customizeOption";
import Adjustment from "./Adjustment";
import RatioSelector from "./RatioSelector";

export default function Customization() {
  const { option, setOption } = useCustomizeOptionStore();

  return (
    <div className="flex flex-col gap-5 rounded-2xl border-neutral-50 p-4 shadow-md dark:border-neutral-100">
      <p className="border-b border-neutral-200 pb-2 text-xs font-semibold dark:border-neutral-700">
        Customization
      </p>
      <div className="grid w-full grid-cols-3 justify-between rounded-md bg-neutral-700 p-0.5 text-neutral-500">
        <button
          onClick={() => setOption(OPTION_ENUM.Background)}
          className={`cursor-pointer rounded-md p-2 text-[10px] ${option === OPTION_ENUM.Background && "bg-neutral-100 text-neutral-800"}`}
        >
          BG
        </button>
        <button
          onClick={() => setOption(OPTION_ENUM.Adjustment)}
          className={`cursor-pointer rounded-md p-2 text-[10px] ${option === OPTION_ENUM.Adjustment && "bg-neutral-100 text-neutral-800"}`}
        >
          Adjust
        </button>
        <button
          onClick={() => setOption(OPTION_ENUM.Export)}
          className={`cursor-pointer rounded-md p-2 text-[10px] ${option === OPTION_ENUM.Export && "bg-neutral-100 text-neutral-800"}`}
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
