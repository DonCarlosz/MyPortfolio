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
    <section className="fixed top-4 left-0 right-0 z-40">
      {/* Container */}
      <div className="py-3 px-6 md:px-20 bg-black/50 rounded-3xl backdrop-blur-2xl border border-neutral-800 mx-4 md:mx-20">
        <div className="flex justify-between items-center">
          {/* Logo placeholder */}
          <div>
            <a href="#" className="text-white font-bold text-xl">
              Logo
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navContents.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-neutral-200 font-medium hover:text-white transition"
              >
                <div className="flex items-center gap-1.5">
                  {item.name === "Get Template" ? <Star /> : null}
                  {item.name}
                </div>
              </a>
            ))}
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-neutral-200"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-2xl z-50
        flex flex-col items-center justify-center gap-8
        transform transition-transform duration-500
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button (top-right) */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-neutral-200 hover:text-white"
        >
          <X size={32} />
        </button>

        {/* Links */}
        {navContents.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="text-[20px] font-medium text-neutral-200 hover:text-white transition"
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
