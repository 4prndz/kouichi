export const MusicSection = () => {
  return (
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
  );
};

export default MusicSection;
