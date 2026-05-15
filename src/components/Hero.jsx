import { useState, useEffect } from "react";

const TYPEWRITER_TEXT = "Developer in Training";
const TYPE_SPEED = 80;
const ERASE_SPEED = 40;
const PAUSE_MS = 1800;

function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    let timer;
    if (phase === "typing") {
      if (displayed.length < TYPEWRITER_TEXT.length) {
        timer = setTimeout(() => {
          setDisplayed(TYPEWRITER_TEXT.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        timer = setTimeout(() => setPhase("erasing"), PAUSE_MS);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(TYPEWRITER_TEXT.slice(0, displayed.length - 1));
        }, ERASE_SPEED);
      } else {
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, phase]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1c0f0a] px-6">
      <div className="text-center max-w-2xl">
        <p className="text-sm font-mono text-[#b45309] tracking-widest uppercase mb-4">
          Hello, world — I'm
        </p>
        <h1 className="text-7xl font-extrabold text-[#fef3e2] mb-4 tracking-tight">
          Eliana
        </h1>
        <p className="text-lg text-[#fdba74] mb-2 font-medium h-7 flex items-center justify-center gap-1">
          <span>{displayed}</span>
          <span className="typewriter-cursor text-[#b45309]">|</span>
        </p>
        <p className="text-xl text-[#fef3e2] mb-10 leading-relaxed">
          Learning by building. Growing every day
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-[#9a3412] hover:bg-[#b45309] text-[#fef3e2] px-7 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="border border-[#9a3412] hover:border-[#b45309] text-[#fef3e2] hover:text-[#fef3e2] px-7 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
