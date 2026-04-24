import React from "react";

type InputType = {
  ref: React.Ref<HTMLInputElement>;
};

export default function Input(input: InputType) {
  return (
    <input
      type="text"
      ref={input.ref}
      placeholder="https://x.com/username/status/…"
      className="w-full flex-1 rounded-md bg-neutral-200 p-3 text-base text-neutral-800 ring-2 ring-neutral-400 transition-all outline-none focus:ring-orange-600 text-[10px]"
    />
  );
}
