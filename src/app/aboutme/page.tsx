const AboutMe = () => {
  return (
    <main className="flex-1 flex justify-center items-center ">
      <div className="max-w-screen-lg w-full m-auto">
        <h1 className="text-3xl text-roboto font-semibold mb-10">TL;DR</h1>
        <ul className="text-xl font-extralight flex flex-col gap-3 ml-12 mb-10 ">
          <li className="font-extralight">
            - <span className="text-middle-blue font-light">Online:</span>{" "}
            4prndz
          </li>
          <li className="font-extralight">
            - <span className="text-middle-blue font-light"> Location:</span>{" "}
            Goiás, Brasil
          </li>
          <li className="font-extralight">
            -{" "}
            <span className="text-middle-blue font-light">Professionaly:</span>{" "}
            Intern Developer (PHP)
          </li>
        </ul>
        <div className="font-roboto font-light text-lg w-full">
          You can contact with me by email at
          <span className="font-normal border-b border-b-middle-blue transition ease-in p-1 hover:bg-middle-blue hover:text-white">
            victorkouichi40@gmail.com
          </span>{" "}
          or just DM me on{" "}
          <span className="font-normal border-b border-b-middle-blue transition ease-in p-1 hover:bg-middle-blue hover:text-white">
            @Discord
          </span>
        </div>
        <hr className="border-gray-300 w-full my-8" />
        <h2 className="font-roboto mb-8">
          my musica taste
          <span className="font-italic font-extralight text-sm">
            {" "}
            and yes i not a depressed emo femboy
          </span>
        </h2>
        <div className="flex gap-3">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/0I1eFRytp4XRhLCjT6tZm7?utm_source=generator&theme=0"
            width="40%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/6a0G8hYEyxqvEkebVLU5VK?utm_source=generator"
            width="40%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/4KGw9LGz77SU02u4Xd9O1K?utm_source=generator"
            width="40%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <hr className="border-gray-300 w-full my-8" />
      </div>
    </main>
  );
};

export default AboutMe;
