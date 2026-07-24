"use client";

import Image from "next/image";
import { scrollToSection } from "@/lib/scroll";

export default function Navbar() {
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

        <div className="flex gap-10 text-sm font-medium text-gray-700">
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

      </div>

    </nav>
  );
}