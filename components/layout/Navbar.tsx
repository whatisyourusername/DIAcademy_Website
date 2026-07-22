export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">

      <h1 className="text-2xl font-bold text-blue-700">
        DI Academy
      </h1>

      <ul className="flex gap-8 text-gray-700 font-medium">

        <li className="cursor-pointer hover:text-blue-700">
          About
        </li>

        <li className="cursor-pointer hover:text-blue-700">
          Courses
        </li>

        <li className="cursor-pointer hover:text-blue-700">
          Teachers
        </li>

        <li className="cursor-pointer hover:text-blue-700">
          Contact
        </li>

      </ul>

    </nav>
  );
}