function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#1c0f0a]/85 backdrop-blur-[10px] border-b border-[#9a3412]/30 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-playfair text-xl font-bold text-[#b45309]">&lt;/Eliana&gt;</span>

        <ul className="flex gap-6 text-[#fef3e2] font-medium">
          <li>
            <a href="#projects" className="hover:text-[#b45309] transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#b45309] transition">
              About
            </a>
          </li>
          <li>
            <a href="/eliana-ayarachi-resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#b45309] transition">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#b45309] transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
