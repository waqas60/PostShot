import React, { useRef } from "react";

type InputType = {
  ref: React.Ref<HTMLInputElement>;
};

export default function Input(input: InputType) {
  return (
    <input
      type="text"
      ref={input.ref}
      placeholder="https://x.com/username/status/…"
      className="outline-none ring-2 ring-neutral-400 focus:ring-orange-600 p-3 text-[10px] bg-neutral-200 rounded-md flex-1 text-neutral-800"
    />
  );
}
