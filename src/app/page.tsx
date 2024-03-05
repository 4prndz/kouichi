"use client";

import Link from "next/link";
import MathAnime from "../assets/mathanime.jpg";
import Image from "next/image";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const Home = () => {
  return (
    <main className="flex-1 flex flex-col justify-center items-center ">
      <div>
        <div className="max-w-screen-lg w-full mx-auto px-4 flex gap-9 items-center">
          <div className="flex flex-col gap-5 justify-center items-start font-roboto flex-1">
            <h1 className="text-4xl">
              Hi, I&apos;m{" "}
              <span className="border-b-2 border-b-black">Kouichi</span>
            </h1>
            <p className="font-roboto font-extralight">
              I&apos;m a 20-year-old technology enthusiast and full-stack
              developer (suck in both), currently learning TypeScript and Rust
              and functional languages.
            </p>
            <div className="flex gap-6 items-center">
              <Link
                href="https://github.com/4prndz"
                target="_blank"
                className="flex items-center gap-3 text-white bg-middle-blue px-5 py-3 rounded-lg shadow-xl transition hover:scale-105"
              >
                <FiGithub className="text-xl" />
                <p className="text-lg font-roboto">github</p>
              </Link>
              <Link
                href="https://twitter.com/4prndz"
                target="_blank"
                className="transition hover:scale-105"
              >
                <FiTwitter className="text-xl" />
              </Link>
              <Link
                href="https://linkedin.com/in/4prndz"
                target="_blank"
                className="transition hover:scale-105"
              >
                <FiLinkedin className="text-xl" />
              </Link>
              <Link
                href="mailto:victorkouichi40@gmail.com"
                target="_blank"
                className="transition hover:scale-105"
              >
                <FiMail className="text-xl" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end flex-1">
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
        <hr className="border-gray-300 w-full my-10" />
        <section className="max-w-screen-lg w-full mx-auto px-4 gap-9">
          <h2 className="font-roboto mb-8">
            my musica taste
            <span className="font-italic font-extralight text-sm">
              {" "}
              and yes i not a depressed emo femboy
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <iframe
              title="Spotify Track 1"
              src="https://open.spotify.com/embed/track/0I1eFRytp4XRhLCjT6tZm7?theme=0"
              width="100%"
              height="80"
              allow="encrypted-media"
              loading="lazy"
            ></iframe>
            <iframe
              title="Spotify Track 2"
              src="https://open.spotify.com/embed/track/6a0G8hYEyxqvEkebVLU5VK"
              width="100%"
              height="80"
              allow="encrypted-media"
              loading="lazy"
            ></iframe>
            <iframe
              title="Spotify Track 3"
              src="https://open.spotify.com/embed/track/4KGw9LGz77SU02u4Xd9O1K"
              width="100%"
              height="80"
              allow="encrypted-media"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
