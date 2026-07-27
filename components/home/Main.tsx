"use client";

import { scrollToSection } from "@/lib/scroll";

export default function Main() {
  return (
    <section
      id="main"
      className="flex h-[calc(100vh-80px)] flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50">

      <h1 className="px-4 text-4xl font-extrabold text-gray-900 sm:px-6 md:px-0 md:text-6xl">
        QUAD ACADEMY
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Learn Smarter. Achieve Higher.
      </p>

      <div className="mt-10 flex gap-4">

        <button
          onClick={() => scrollToSection("contact")}
          className="rounded-xl border border-blue-600 px-8 py-4 
        font-semibold text-blue-600 
        transition hover:bg-blue-600 hover:text-white"
        >
          무료 상담
        </button>

        <button
          onClick={() => scrollToSection("courses")}
          className="rounded-xl border border-blue-600 px-8 py-4 
        font-semibold text-blue-600 
        transition hover:bg-blue-600 hover:text-white">
          강의 보기
        </button>

      </div>

    </section>
  );
}