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
    <div className="bg-black">
      {/* <div className="w-full inset-0 h-[100vh] lg:flex justify-center items-center">
        <DarkVeil />
      </div> */}
      <NavBar />
      <div className="px-45">
        <Hero/>
        <Skills/>
         <Services/>
        <Contact/>
       

      </div>
      
    </div>
  );
};

export default Home;
