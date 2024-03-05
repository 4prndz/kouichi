"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MathAnime from "../assets/mathanime.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex-1 flex flex-col justify-center items-center ">
      <div className="max-w-screen-lg w-full m-auto px-4 flex gap-5">
        <div className="mt-10">
          <p className="font-roboto font-extralight text-center">
            I'm a 20-year-old technology enthusiast and full-stack developer
            (suck in front and back), currently honing my skills in TypeScript
            and Rust and functional languages. I work with PHP and enjoy delving
            into the intricacies of low-level.
          </p>
        </div>
        <div>
          <Image src={MathAnime} alt="Math Anime" className="rounded-xl" />
        </div>
      </div>
    </main>
  );
};

export default Home;
