import React from "react";
import { asset } from "../Images/asset";

const Hero = () => {
  return (
    <section>
      <div className="text-gray-400 flex items-center justify-between gap-50 h-screen ">
        <div className="flex-1">
          <h1>Akhuemokhan Isaiah</h1>
          <p>
            L orem ipsum dolor sit amet consectetur adipisicing elit. Velit odit
            maxime corrupti atque aliquam est illum, nam commodi consequatur
            fugit natus animi? Nobis dicta neque maxime sapiente quia sed nemo!
          </p>
          <button className="bg-white">Let's get started</button>
        </div>
        <div className="relative overflow-hidden fade-in-left rounded-2xl">
          <img src={asset.profile} alt="" srcset="" className="relative rounded-2xl mix-blend-screen"/>

         
        </div>
      </div>
    </section>
  );
};

export default Hero;
