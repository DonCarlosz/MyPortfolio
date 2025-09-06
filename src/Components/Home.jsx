import React from "react";
import NavBar from "./NavBar";
import DarkVeil from "./Background";
import Hero from "./Hero";
import Skills from "./Skills";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      {/* Background Layer */}
      {/* DarkVeil visible only on lg and above */}
      <div className="fixed min-h-screen -z-10 inset-0 hidden lg:block">
        <DarkVeil />
      </div>

      {/* Fallback black background for smaller screens */}
      <div className="fixed min-h-screen -z-10 inset-0 bg-black lg:hidden"></div>

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-32 z-10">
        <Hero />
        <Skills />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default Home;

