import React from "react";
import { asset } from "../Images/asset";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <div className="text-gray-400 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10 h-auto lg:h-screen">
        
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left max-w-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            About Me
          </h1>
          <p className="my-6 text-base md:text-lg lg:text-xl leading-relaxed">
            I'm a web development enthusiast focused on building responsive applications with React, Tailwind CSS, Node.js, Express, and MongoDB. I also explore UI/UX design with Figma and enjoy learning how Web3 can shape the future of the web.
          </p>
          <button className="bg-white text-black font-medium px-4 py-2 rounded-xl flex items-center gap-2 mx-auto lg:mx-0 hover:bg-gray-200 transition">
            Let's get started
            <ArrowRight />
          </button>
        </div>

        {/* Image Section (hidden on small screens) */}
        <div className="hidden md:block relative overflow-hidden fade-in-left rounded-2xl flex-shrink-0 w-[250px] lg:w-[350px]">
          <img
            src={asset.profile}
            alt="profile"
            className="rounded-2xl w-full h-auto object-cover mix-blend-screen"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
