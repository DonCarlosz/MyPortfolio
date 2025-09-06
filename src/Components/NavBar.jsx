import React, { useState } from "react";
import { Menu, Star, X } from "lucide-react";

const navContents = [
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="fixed fade-in-down top-4 left-0 right-0 z-40">
      {/* Container */}
      <div className="py-3 px-6 md:px-12 bg-inherit rounded-3xl backdrop-blur-2xl border border-neutral-800 mx-4 md:mx-20">
        <div className="flex justify-between items-center">
          {/* Logo placeholder */}
          <div>
            <a href="#" className="text-indigo-600 font-bold text-xl md:text-2xl">
              D4RC
            </a>
          </div>
{/* Desktop Nav */}
<div className="hidden lg:flex items-center gap-15">
  {navContents.map((item, key) => (
    <a
      key={key}
      href={item.href}
      className="relative group text-neutral-200 text-sm sm:text-base md:text-lg font-medium hover:text-white transition"
    >
      <div className="flex items-center gap-1.5">
        {item.name}
      </div>
      {/* Underline appears + expands from center */}
      <span className="block h-0.5 bg-indigo-500 w-0 mx-auto mt-1 transition-all duration-500 group-hover:w-full"></span>
    </a>
  ))}
</div>




          {/* Hamburger Icon (Mobile Only) */}
          <div className="lg:hidden">
            <div
              onClick={() => setMenuOpen(true)}
              className="text-neutral-200"
            >
              <Menu size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed min-h-screen inset-0 bg-inherit backdrop-blur-2xl z-50
        flex flex-col items-center justify-center gap-8
        transform transition-transform duration-500
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button (top-right) */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-neutral-200 hover:text-white"
        >
          <X size={32} />
        </div>

        {/* Links */}
        {navContents.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="text-sm sm:text-base md:text-lg text-neutral-200 hover:text-white transition"
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
