import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function ModeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isCurrentlyDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isCurrentlyDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", darkMode);
  };

  return (
    <span onClick={toggleDarkMode} className="cursor-pointer">
      {darkMode ? (
        <MoonIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 fill-gray-900"/>
      ) : (
        <SunIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 fill-white"/>
      )}
    </span>
  );
}

export default ModeSwitcher;