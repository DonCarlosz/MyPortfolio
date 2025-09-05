import React from "react";
import Card from "./Card";
import { asset } from "../Images/asset";

const skills = [
  {
    icon: asset.react,
    title: "React",
    description: "I use React to build interactive and reusable components for web applications. Its virtual DOM and ecosystem help me create fast, scalable, and user-friendly interfaces.",
  },
  {
    icon: asset.tailwind,
    title: "Tailwind CSS",
    description: "Tailwind allows me to design responsive and consistent layouts with ease. Its utility-first classes speed up development while keeping my codebase clean.",
  },
  {
    icon: asset.nodejs,
    title: "Node.js",
    description: "Node.js helps me develop fast, event-driven backend services. I use it to manage APIs, handle real-time data, and connect frontend apps with databases.",
  },
  {
    icon: asset.express,
    title: "Express.js",
    description: "With Express, I structure my backend logic and create RESTful APIs efficiently. It simplifies routing and middleware, making server-side development smoother.",
  },
  {
    icon: asset.mongodb,
    title: "MongoDB",
    description: "MongoDB is my go-to database for handling flexible, document-based data. It scales well with applications and integrates seamlessly with Node.js and Express.",
  },
  {
    icon: asset.figma,
    title: "Figma",
    description: "Figma is my preferred tool for creating wireframes, prototypes, and polished UI/UX designs. I use it to plan and visualize layouts before coding, ensuring a smooth handoff from design to development. Its collaboration features make it easy to iterate quickly and adapt based on feedback.",
  },
];


const Skills = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Skills & Stack
      </h2>
      <div className="relative overflow-hidden">
        <div className=" flex gap-10">
            {[...skills].map((skill, index) => (
              <Card key={index} {...skill} />
            ))}
        </div>
         {/* Left Blur */}
          <div className="absolute left-0 top-0 bottom-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />

          {/* Right Blur */}
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Skills;
