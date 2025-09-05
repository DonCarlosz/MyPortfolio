import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import { asset } from "../Images/asset";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skills = [
  {
    icon: asset.react,
    title: "React",
    description:
      "I use React to build interactive and reusable components for web applications. Its virtual DOM and ecosystem help me create fast, scalable, and user-friendly interfaces.",
  },
  {
    icon: asset.tailwind,
    title: "Tailwind",
    description:
      "Tailwind allows me to design responsive and consistent layouts with ease. Its utility-first classes speed up development while keeping my codebase clean.",
  },
  {
    icon: asset.nodejs,
    title: "Node.js",
    description:
      "Node.js helps me develop fast, event-driven backend services. I use it to manage APIs, handle real-time data, and connect frontend apps with databases.",
  },
  {
    icon: asset.express,
    title: "Express.js",
    description:
      "With Express, I structure my backend logic and create RESTful APIs efficiently. It simplifies routing and middleware, making server-side development smoother.",
  },
  {
    icon: asset.mongodb,
    title: "MongoDB",
    description:
      "MongoDB is my go-to database for handling flexible, document-based data. It scales well with applications and integrates seamlessly with Node.js and Express.",
  },
  {
    icon: asset.figma,
    title: "Figma",
    description:
      "Figma is my tool for wireframes, prototypes, and polished UI/UX designs. It helps me plan layouts and collaborate efficiently before coding.",
  },
];

const Skills = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="my-20">
      {/* Header with underline */}
      <h2 className="font-bold text-3xl md:text-4xl text-white mb-10 relative group text-center w-fit mx-auto">
        Skills & Stack
        <span className="block h-1 bg-indigo-500 w-1/2 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></span>
      </h2>

      {/* Carousel container */}
      <div className="relative overflow-x-hidden">
        {/* Left Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
        )}

        {/* Scrollable Cards */}
        <div
  ref={containerRef}
  className="flex gap-6 md:gap-10 overflow-x-scroll scrollbar-hidden scroll-smooth"
>
  {skills.map((skill, index) => (
    <Card key={index} {...skill} />
  ))}
</div>


        {/* Right Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Skills;
