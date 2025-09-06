import React from "react";
import { asset } from "../Images/asset";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className="text-gray-400 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-10 lg:h-screen pt-40 lg:pt-0">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left max-w-lg">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-10 relative group w-full flex justify-center md:justify-start fade-in-down">
            <span className="inline-block relative">
              About Me
              <span className="block h-1 bg-indigo-500 w-full mt-2 mx-auto scale-x-50 origin-center transition-transform duration-500 group-hover:scale-x-100"></span>
            </span>
          </h2>

          <p className="my-8 text-base lg:text-lg leading-relaxed fade-in-right">
            I'm a web development enthusiast focused on building responsive
            applications with React, Tailwind CSS, Node.js, Express, and
            MongoDB. I also explore UI/UX design with Figma and enjoy learning
            how Web3 can shape the future of the web.
          </p>

          {/* Button scrolls to Skills section */}
          <button
            onClick={scrollToSkills}
            className="backdrop-blur-2xl bg-inherit text-indigo-500 font-medium px-4 py-2 rounded-xl flex items-center gap-2 mx-auto md:mx-0 border border-neutral-800 hover:border-indigo-600 transition fade-in-up text-base lg:text-lg"
          >
            Let's get started
            <ArrowDown />
          </button>
        </div>

        {/* Image Section (hidden on small screens) */}
        <div className="hidden md:block relative overflow-hidden rounded-2xl flex-shrink-0 w-[250px] lg:w-[350px] md:w-[290px]">
          <img
            src={asset.profile}
            alt="profile"
            className="rounded-2xl w-full h-auto object-cover mix-blend-screen fade-in-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
