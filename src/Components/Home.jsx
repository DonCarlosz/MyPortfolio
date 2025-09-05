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
      <div className="fixed -z-10 inset-0">
        <DarkVeil />
      </div>
      <NavBar />
      <div className="px-45 z-10">
         <Hero/>
        <Skills/>
        <Services/>
        <Contact/>
      </div>
      
    </div>
  );
};

export default Home;
