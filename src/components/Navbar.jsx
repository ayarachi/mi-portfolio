function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-emerald-400">&lt;/Eliana&gt;</span>

        <ul className="flex gap-6 text-gray-300 font-medium">
          <li>
            <a href="#projects" className="hover:text-emerald-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-emerald-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:text-emerald-400 transition">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
