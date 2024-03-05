"use client";

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className="border p-2 rounded-xl"
        style={{ width: "36px", height: "36px" }}
      ></div>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <div className="border p-2 rounded-xl">
        <IoSunnyOutline
          width="25px"
          height="25px"
          className="transition-all"
          onClick={() => setTheme("light")}
        />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="border p-2 rounded-xl">
        <IoMoonOutline
          width="25px"
          height="25px"
          className="transition-all"
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }
};

export default ThemeSwitch;
