import React, { useRef } from "react";

type InputType = {
  ref: React.Ref<HTMLInputElement>;
};

export default function Input(input: InputType) {
  return (
    <input
      type="url"
      ref={input.ref}
      className="outline-none focus:ring-2 ring-neutral-800 hover:focus:ring-neutral-500 p-2 text-xs bg-neutral-200 rounded-md flex-1"
    />
  );
}
