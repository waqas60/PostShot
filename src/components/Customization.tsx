import React from "react";
import Background from "./Background";
import Theme from "./Theme";

export default function Customization() {
  return (
    <div className="flex gap-2 flex-col">
      <h1 className="font-bold border-b pb-2  border-neutral-200">
        Customization
      </h1>

      <Background />
      <Theme />
    </div>
  );
}
