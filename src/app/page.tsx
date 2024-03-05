"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MathAnime from "../assets/mathanime.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex-1 flex flex-col justify-center items-center ">
      <div>
        <div className="max-w-screen-lg w-full m-auto px-4 flex gap-5 items-center">
          <div>
            <p className="font-roboto font-extralight text-center">
              I'm a 20-year-old technology enthusiast and full-stack developer
              (suck in front and back), currently honing my skills in TypeScript
              and Rust and functional languages. I work with PHP and enjoy
              delving into the intricacies of low-level.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <Image
              src={MathAnime}
              alt="math anime"
              className="rounded-xl shadow-lg border"
            />
            <span className="text-sm text-gray-500 mt-1">
              <a href="https://twitter.com/nyr50ml/" target="_blank">
                @nyr50ml
              </a>
            </span>
          </div>
        </div>
        <hr className="border-gray-300 w-full mt-20" />
      </div>
    </main>
  );
};

export default Home;
