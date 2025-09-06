import React from "react";
import { GitGraph, Package, Rocket, Table2 } from "lucide-react";

const array = [
  {
    icon: <Table2 />,
    title: "UI/UX Design",
    body: "Designing user-friendly layouts and prototypes in Figma, turning ideas into seamless digital experiences with attention to usability and flow.",
  },
  {
    icon: <Rocket />,
    title: "Frontend Development",
    body: "Creating responsive, modern user interfaces with React and Tailwind CSS ensuring fast performance and an engaging user experience across all devices.",
  },
  {
    icon: <Package />,
    title: "Backend Development",
    body: "Developing secure, efficient server-side applications using Node.js and Express, with APIs and database solutions that power dynamic web apps.",
  },
  {
    icon: <GitGraph />,
    title: "Full-Stack Development",
    body: "Building scalable web applications from frontend to backend combining clean user interfaces with robust server logic and database integration.",
  },
];

const Services = () => {
  return (
    <section id="services" className="z-50 pt-25">
      {/* Header with underline */}
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-white mb-10 relative group w-fit mx-auto">
        Services
        <span className="block h-1 bg-indigo-500 w-1/2 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></span>
      </h2>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6 ">
        {array.map((item, key) => (
          <div
            key={key}
            className="relative bg-gray-950 lg:bg-inherit backdrop-blur-2xl px-8 py-10 rounded-3xl border border-neutral-800 hover:border-indigo-600 fade-in-right transition"
          >
            <div className="inline-flex items-center gap-2 text-white">
              <span className="text-indigo-400">{item.icon}</span>
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </div>

            <hr className="border-neutral-800 my-4" />
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
