import React, { useState } from "react";
import { Menu, Star, X } from "lucide-react";

const navContents = [
  { name: "Services ", href: "#services" },
  { name: "Projects ", href: "#project" },
  { name: "Testimonials ", href: "#testimonials" },
  { name: "Contact ", href: "#contact" },
  { name: "Get Template", href: "" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="fixed top-0 left-0 right-0 z-40  overflow-hidden">
      <div className="padding py-3 bg-black/50 ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div><a href="#">
            {/* <img src={} alt="Logo" className="h-6" /> */}
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navContents.map((item, key) => (
              <a 
                key={key}
                href={item.href}
                className={`text-neutral font-medium ${item.name === "Get Template" ? "bg-neutral-900 p-2 rounded-2xl" : ""}`} 
                target={item.name==="Get Template"?` _blank`:``}
              ><div className="flex items-center gap-1.5">
                {item.name === "Get Template"?<Star/>:'' }
                {item.name}
                 </div>
              </a>
            ))}
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <div className="lg:hidden">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50"
            >
              {menuOpen ? <X size={28}/> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      
      <div
  className={`fixed top-0 right-0 left-0 bottom-0 bg-black/80 backdrop-blur-2xl xx:hidden z-30
    flex flex-col items-center justify-center gap-6
    transition-all duration-500
   ${menuOpen
        ? "opacity-100 translate-x-0 pointer-events-auto"
        : "opacity-0 translate-x-[100vw] pointer-events-none"}
  `}
>
          {navContents.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-[18px] font-medium text-neutral"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
    </section>
  );
};

export default NavBar;
