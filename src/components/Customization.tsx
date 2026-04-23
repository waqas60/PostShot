import React from "react";
import Background from "./Background";
import Theme from "./Theme";

export default function Customization() {
  return (
    <div className="flex flex-col gap-5">
      <p className="border-b border-neutral-200 pb-2 text-xs font-semibold">
        Customization
      </p>

      <Background />
      <Theme />
    </div>
  );
}
