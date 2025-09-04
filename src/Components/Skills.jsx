import React from 'react'
import Card from './Card';

const skills = [
    {
      icon: "/icons/solidity.svg",
      title: "Solidity",
      description: "Smart contract development on Ethereum and EVM chains.",
    },
    {
      icon: "/icons/react.svg",
      title: "React",
      description: "Frontend development with component-based architecture.",
    },
    {
      icon: "/icons/tailwind.svg",
      title: "Tailwind CSS",
      description: "Rapid styling with utility-first CSS.",
    },
    {
      icon: "/icons/ethers.svg",
      title: "Ethers.js",
      description: "Blockchain interaction and contract integration.",
    },
  ];


const Skills = () => {
  return (
    <section className="py-16 bg-black">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Skills & Stack
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {[...skills].map((skill, index) => (
          <Card key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills



