import Link from "next/link";
import MathAnime from "../../assets/mathanime.jpg";
import Image from "next/image";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <main className="flex-1 flex flex-col justify-center items-center text-center lg:text-start mt-20 lg:mt-10">
      <div>
        <div className="max-w-screen-lg w-full mx-auto px-4 flex flex-col gap-9 lg:flex-row">
          <div className="w-full flex flex-col gap-5 justify-center items-center font-roboto flex-1 lg:items-start">
            <h1 className="text-4xl ">
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
          <div className="flex flex-col items-end flex-1 lg:visible">
            <Image
              src={MathAnime}
              alt="math anime"
              className="rounded-xl shadow-lg border "
            />
            <span className="text-sm text-gray-500 mt-1">
              <a href="https://twitter.com/nyr50ml/" target="_blank">
                @nyr50ml
              </a>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Hero;
