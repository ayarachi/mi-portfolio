function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-purple-600">Eliana</span>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="#projects" className="hover:text-purple-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-600 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
