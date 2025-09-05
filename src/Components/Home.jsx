import React from "react";
import NavBar from "./NavBar";
import DarkVeil from "./Background";
import Hero from "./Hero";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Contact from "./Contact";
import Services from "./Services";


const Home = () => {
  return (
    <div>
      {/* Background Layer */}
      <div className="fixed -z-10 inset-0">
        <DarkVeil />
      </div>

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 z-10">
        <Hero />
        <Skills />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default Home;

