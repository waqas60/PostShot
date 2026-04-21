import React from "react";

type ButtonType = {
  onclick: () => void;
};

export default function Button(button: ButtonType) {
  return <button onClick={() => button.onclick()}>Generate</button>;
}
