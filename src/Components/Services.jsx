import React from "react";
import { DotIcon, GitGraph, Package, Rocket, Table2 } from "lucide-react";

const skills = [
  "Product Design",
  "Brand Identity Design",
  "Branding",
  "Packaging Design",
  "Mockup Design",
];

const flowLeft = [
  "Brand Graphics",

  "Brand Migration",

  "Package Design",

  "Branding",

  "Slide Decks",

  "Copywriting",
];
const flowRight = [
  'Brand Visibility',

'Brand Integrations',

'Optimization',

'Brand Landing Pages',

'Social Media',

'Icons',

];

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
    <section className="text-neutral" id="services">
      <div className=" border border-t-neutral-500 border-b-neutral-900 rounded-4xl px-4 md:px-22 text-[16px] py-20">
        <div className="flex flex-col  xx:flex-row xx:gap-16 items-center mb-7 xx:mb-0 pb-10">
          {/* Left Section */}
          <div>
            <div>
              <span className="xx:mt-0 border border-neutral-700  rounded-3xl bg-neutral-900  inline-flex items-center p-2 pr-4 mb-5 text-white">
                <DotIcon />
                <p>Design process</p>
              </span>
              <p className="text-5xl text-secondary pb-6 md:text-2xl lg:text-6xl xl:text-8xl fade-in">
                Services
              </p>
            </div>
          </div>
          {/* right Section */}
          <div className="max-w-[100vw] max-h-[35vh]  md:min-h-[65vh] xx:max-w-[42vw] xx:max-h-[32vw] relative items-center flex overflow-hidden rounded-3xl">
            <img
              className="grayscale-100 md:w-full "
            //   src={asset.services}
              alt=""
              srcset=""
            />
          </div>
        </div>

        {/* under Section */}

        <div className="grid xx:grid-cols-2 gap-5 fade-in-right">
          {array.map((item, key) => (
            <div
              key={key}
              className="relative bg-neutral-950 px-8 py-10 rounded-3xl"
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

        {/* scroll section */}
        <div className="relative overflow-hidden w-full flex flex-col justify-center">
           {/* scrolling div */}
          <div className=" gap-15 animate-scroll flex w-max pt-15 pb-8">
            {[...flowLeft,...flowLeft,...flowLeft,...flowLeft].map(
              (items, key) => (
                <button key={key} className="border-0 bg-neutral-950 text-[16px]">{items}</button>
              )
            )}
          </div>
           {/* scrolling div */}
         <div className=" gap-15 animate-scroll-right flex w-max pb-6">
            {[...flowRight,...flowRight,...flowRight,...flowRight].map(
              (items, key) => (
                <button key={key} className="border-0 bg-neutral-950 text-[16px]">{items}</button>
              )
            )}
          </div>
          Left Blur
          <div className="absolute left-0 top-0 bottom-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />

          {/* Right Blur */}
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default Services;
