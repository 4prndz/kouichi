"use client";

import Hero from "@/components/Hero";
import MusicSection from "../components/MusicSection";

const Home = () => {
  return (
    <>
      <Hero />
      <hr className="border-gray-300 w-full my-20" />
      <MusicSection />
    </>
  );
};

export default Home;
