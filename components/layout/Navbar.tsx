export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-10 bg-white shadow-sm">

      <h1 className="text-2xl font-bold">
        DI Academy
      </h1>

      <div className="flex gap-8">
        <button>About</button>
        <button>Courses</button>
        <button>Teachers</button>
        <button>Contact</button>
      </div>

    </nav>
  );
}