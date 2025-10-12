import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
    setTheme(savedTheme || "system");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) root.classList.add("dark");
      else root.classList.remove("dark");
    }
    theme && localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex gap-4">
      {[
        { label: "Light", icon: "☀️" },
        { label: "Dark", icon: "🌙" },
        { label: "System", icon: "💻" },
      ].map(({ label, icon }) => (
        <button
          key={label}
          className={`flex flex-col items-center justify-center w-24 p-3 rounded-2xl border text-sm transition
        ${
          theme === label.toLowerCase()
            ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20"
            : "border-gray-300 dark:border-gray-700 hover:border-purple-400"
        }`}
          onClick={() => setTheme(label.toLowerCase() as "light" | "dark" | "system")}
        >
          <span className="text-2xl">{icon}</span>
          {label}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
