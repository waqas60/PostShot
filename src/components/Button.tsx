type ButtonType = {
  onclick: () => void;
};

export default function Button(button: ButtonType) {
  return (
    <button
      onClick={() => button.onclick()}
      className="w-full cursor-pointer rounded-md bg-neutral-800 p-2.5 text-sm text-white transition-all duration-200 hover:bg-neutral-600 sm:w-auto sm:px-6"
    >
      Generate
    </button>
  );
}