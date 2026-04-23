type ButtonType = {
  onclick: () => void;
};

export default function Button(button: ButtonType) {
  return (
    <button
      onClick={() => button.onclick()}
      className="text-sm bg-neutral-800 cursor-pointer hover:bg-neutral-600 duration-200 transition-all text-white p-2.5 rounded-md"
    >
      Generate
    </button>
  );
}
