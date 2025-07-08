"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, effectiveTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent" />
    );
  }

  const toggleTheme = () => {
    setTheme(effectiveTheme === "dark" ? "light" : "dark");
  };

  const getIcon = () => {
    if (effectiveTheme === "dark") {
      // Moon icon for dark mode
      return (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      );
    } else {
      // Sun icon for light mode
      return (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10 3.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1A.75.75 0 0110 3.25zm0 10a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zm6.75-.75a.75.75 0 010 1.5h-1a.75.75 0 010-1.5h1zm-11.5 0a.75.75 0 010 1.5h-1a.75.75 0 010-1.5h1zm9.19-5.44a.75.75 0 011.06 1.06l-.71.71a.75.75 0 11-1.06-1.06l.71-.71zm-7.78 7.78a.75.75 0 011.06 1.06l-.71.71a.75.75 0 11-1.06-1.06l.71-.71zm9.19 7.78a.75.75 0 01-1.06-1.06l.71-.71a.75.75 0 111.06 1.06l-.71.71zm-7.78-7.78a.75.75 0 01-1.06-1.06l.71-.71a.75.75 0 111.06 1.06l-.71.71z" />
        </svg>
      );
    }
  };

  const getLabel = () => {
    return effectiveTheme === "dark" ? "Dark mode" : "Light mode";
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={`Switch to ${effectiveTheme === "dark" ? "light" : "dark"} mode. Currently using ${getLabel()}.`}
      title={`Switch to ${effectiveTheme === "dark" ? "light" : "dark"} mode`}
    >
      {getIcon()}
    </button>
  );
}
