"use client";

import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = usePathname();

  return (
    <header className="mt-5 flex justify-between items-center">
      <h1 className="text-3xl font-light font-roboto">
        <Link href="/">
          Victor <span className="font-semibold">Kouichi</span>
        </Link>
      </h1>
      <nav className="flex text-lg gap-6 font-roboto font-light items-center">
        <div>
          <Link href="/" className={`${router === "/" ? "underline" : ""}`}>
            /home
          </Link>
        </div>
        <div>
          <Link
            href="/blog"
            className={`${router === "/blog" ? "underline" : ""}`}
          >
            /blog
          </Link>
        </div>
        <div>
          <Link
            href="/notes"
            className={`${router === "/notes" ? "underline" : ""}`}
          >
            /notes
          </Link>
        </div>
        <div>
          <Link
            href="/projects"
            className={`${router === "/projects" ? "underline" : ""}`}
          >
            /projects
          </Link>
        </div>
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Header;
