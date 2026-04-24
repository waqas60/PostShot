import React from "react";

const works = [
  {
    id: 1,
    title: "Paste any tweet URL",
    description: "Drop an X/Twitter link.",
  },
  {
    id: 2,
    title: "Customize the design",
    description:
      "Personalize your layout with custom backgrounds, fonts, and spacing.",
  },
  {
    id: 3,
    title: "Export in one click",
    description: "Download in PNG format or copy straight to your clipboard.",
  },
];

export default function HowItWorks() {
  return (
    <div className="my-10 flex w-150 flex-col items-center justify-center">
      <h1 className="text-neutral-500">HOW IT WORKS</h1>
      <div className="mx-auto mt-10 flex items-center justify-center gap-5">
        {works.map((work) => (
          <div
            key={work.id}
            className="max-w-50 space-y-1 rounded-2xl border border-neutral-400 bg-neutral-300 p-5 text-xs text-neutral-950 duration-200 hover:border-orange-500 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <h1 className="text-2xl text-orange-400">{work.id}</h1>
            <h2 className="text-neutral-600">{work.title}</h2>
            <p className="text-[10px] text-neutral-500">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
