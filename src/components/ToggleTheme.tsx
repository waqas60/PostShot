"use client";
import { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted on client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute top-5 right-5 size-6" />; // Placeholder
  }

  function handleToggleTheme() {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      onClick={handleToggleTheme}
      className="absolute top-5 right-5 flex cursor-pointer items-center justify-center rounded-full border border-neutral-300 p-1 dark:border-neutral-500"
    >
      <FiMoon className="m-auto size-4 scale-0 rotate-45 text-neutral-50 transition-all duration-300 dark:scale-100 dark:rotate-0" />
      <IoSunnyOutline className="m-auto size-4 scale-100 rotate-0 text-neutral-900 transition-all duration-300 dark:scale-0 dark:rotate-45" />
    </button>
  );
}
