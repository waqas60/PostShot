import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-4 mb-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-300 pt-6 sm:mx-8 sm:flex-row sm:pt-4 dark:border-neutral-700">
      <h1 className="text-sm font-bold tracking-tight text-neutral-400">
        POSTSHOT
      </h1>

      <Link
        href={"https://github.com/waqas60/PostShot"}
        target="_blank"
        className="text-[10px] font-medium text-orange-400 transition-opacity hover:opacity-80"
      >
        GitHub
      </Link>
    </div>
  );
}
