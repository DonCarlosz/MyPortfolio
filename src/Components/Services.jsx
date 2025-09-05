import React from "react";
import { DotIcon, GitGraph, Package, Rocket, Table2 } from "lucide-react";
const array = [
  {
    icon: <GitGraph />,
    title: "Brand Identity",
    body: "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.",
  },
  {
    icon: <Rocket />,
    title: "Brand Design",
    body: "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.",
  },
  {
    icon: <Package />,
    title: "Package Design",
    body: "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.",
  },
  {
    icon: <Table2 />,
    title: "Mochup Design",
    body: "Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters when showcasing your product's true potential.",
  },
];

const Services = () => {
  return (
    <section className="z-50">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Services
      </h2>
      <div className="grid xx:grid-cols-2 gap-5 fade-in-right">
        {array.map((item, key) => (
          <div
            key={key}
            className="relative bg-gray-950 px-8 py-10 rounded-3xl"
          >
            <div className="inline-flex items-center gap-1.5 text-white">
              <p>{item.icon}</p>
              <p className="text-2xl">{item.title}</p>
            </div>

            <hr className="text-neutral-700 my-4" />
            <p className="text-neutral">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
