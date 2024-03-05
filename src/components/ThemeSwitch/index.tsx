"use client";

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) {
    return (
      <div className="border-2 p-2 rounded-xl">
        <IoMoonOutline className="opacity-0" />
      </div>
    );
  }

  return (
    <div className="border-2 p-2 rounded-xl">
      {resolvedTheme === "light" ? (
        <IoMoonOutline onClick={toggleTheme} />
      ) : (
        <IoSunnyOutline onClick={toggleTheme} />
      )}
    </div>
  );
};

export default ThemeSwitch;
