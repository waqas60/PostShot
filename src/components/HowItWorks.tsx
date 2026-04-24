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
    <div className="my-10 flex  max-w-5xl flex-col items-center justify-center px-4">
      <h1 className="text-sm font-semibold tracking-widest text-neutral-500">
        HOW IT WORKS
      </h1>
      <div className="mt-10 flex flex-col items-stretch justify-center gap-5 md:flex-row">
        {works.map((work) => (
          <div
            key={work.id}
            className="flex flex-1 flex-col space-y-2 rounded-2xl border border-neutral-400 bg-neutral-200 p-6 text-neutral-950 duration-200 hover:border-orange-500 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <h1 className="text-3xl font-bold text-orange-400">{work.id}</h1>
            <h2 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              {work.title}
            </h2>
            <p className="text-xs leading-relaxed text-neutral-500">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
