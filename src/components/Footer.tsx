import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mx-8 mb-8 flex justify-between border-t border-neutral-300 dark:border-neutral-700 pt-4">
      <h1 className="text-sm text-neutral-400">POSTSHOT</h1>

      <div className="flex items-center gap-2 text-[8px] text-neutral-800 dark:text-neutral-50">
        <p>Free forever · No account needed </p>
        <Link
          href={"https://github.com/waqas60/PostShot"}
          target="_blank"
          className="text-orange-400"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}
