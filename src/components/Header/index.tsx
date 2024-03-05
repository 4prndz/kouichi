"use client";

import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { usePathname } from "next/navigation";

const Header = () => {
  // Use desestruturação para extrair o valor retornado pela função usePathname
  const router = usePathname();

  const pages = [
    { href: "/", text: "/home" },
    { href: "/blog", text: "/blog" },
    { href: "/notes", text: "/notes" },
    { href: "/projects", text: "/projects" },
  ];

  return (
    <header className="mt-5 flex justify-between items-center">
      <h1 className="text-3xl font-extralight font-roboto">
        <Link href="/">
          Victor <span className="font-normal">Kouichi</span>
        </Link>
      </h1>
      <nav className="flex text-lg gap-6 font-roboto font-light items-center">
        {/* Links para diferentes rotas */}
        {pages.map(({ href, text }) => (
          <div key={href}>
            <Link
              href={href}
              className={`${router === href ? "border-b border-b-gray-500" : ""}`}
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
