"use client";

import { useState } from "react";
import Image from "next/image";
import { scrollToSection } from "@/lib/scroll";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-gray-100/80 backdrop-blur-md md:h-20">

      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 md:px-8">

        <Image
          src="/images/site_logo.png"
          alt="DI Academy"
          width={240}
          height={60}
          priority
        />

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <button onClick={() => scrollToSection("main")} className="hover:text-white active:text-blue-400">
            About
          </button>

          <button onClick={() => scrollToSection("courses")} className="hover:text-white active:text-blue-400">
            수업
          </button>

          <button onClick={() => scrollToSection("faculty")} className="hover:text-white active:text-blue-400">
            강사진
          </button>

          <button onClick={() => scrollToSection("reviews")} className="hover:text-white active:text-blue-400">
            수강 후기
          </button>

          <button onClick={() => scrollToSection("contact")} className="hover:text-white active:text-blue-400">
            연락처
          </button>
        </div>

        <button
          className="text-3xl md:hidden text-gray-500 hover:text-white active:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
      {menuOpen && (
        <div className="absolute left-0 top-16 w-full bg-gray-600 shadow-lg md:hidden">

          <button
            className="block w-full px-6 py-4 text-left hover:text-white active:text-blue-400"
            onClick={() => {
              scrollToSection("main");
              setMenuOpen(false);
            }}
          >
            About
          </button>

          <button
            className="block w-full px-6 py-4 text-left hover:text-white active:text-blue-400"
            onClick={() => {
              scrollToSection("courses");
              setMenuOpen(false);
            }}
          >
            수업
          </button>

          <button
            className="block w-full px-6 py-4 text-left hover:text-white active:text-blue-400"
            onClick={() => {
              scrollToSection("faculty");
              setMenuOpen(false);
            }}
          >
            강사진
          </button>

          <button
            className="block w-full px-6 py-4 text-left hover:text-white active:text-blue-400"
            onClick={() => {
              scrollToSection("reviews");
              setMenuOpen(false);
            }}
          >
            수강 후기
          </button>

          <button
            className="block w-full px-6 py-4 text-left hover:text-white active:text-blue-400"
            onClick={() => {
              scrollToSection("contact");
              setMenuOpen(false);
            }}
          >
            연락처
          </button>

        </div>
      )}
    </nav>
  );
}