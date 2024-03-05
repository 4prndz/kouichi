"use client";

import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = usePathname();

  const pages = [
    { href: "/", text: "/home" },
    { href: "/blog", text: "/blog" },
    { href: "/notes", text: "/notes" },
    { href: "/projects", text: "/projects" },
    { href: "/aboutme", text: "/about me" },
  ];

  return (
    <header className="mt-5 flex justify-between items-center pb-3 border-b">
      <Link href="/">
        <h1 className="text-3xl font-[Inter] font-semibold">4prndz</h1>
      </Link>
      <nav className="flex text-md gap-6 font-normal items-center">
        {pages.map(({ href, text }) => (
          <div key={href}>
            <Link
              href={href}
              className={`${router === href ? "text-middle-blue border-b border-b-middle-blue" : ""} transition hover:text-middle-blue `}
            >
              {text}
            </Link>
          </div>
        ))}
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Header;
