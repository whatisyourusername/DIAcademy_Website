import Navbar from "@/components/layout/Navbar";
import Main from "@/components/home/Main";
import Courses from "@/components/home/Courses";
import Faculty from "@/components/home/Faculty";
import Reviews from "@/components/home/Reviews";
import Contact from "@/components/home/Contact";

// npm run dev

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Courses />
      <Faculty />
      <Reviews />
      <Contact />
    </>
  );
}