function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="text-center max-w-2xl">
        <p className="text-sm font-mono text-emerald-400 tracking-widest uppercase mb-4">
          Hello, world — I'm
        </p>
        <h1 className="text-7xl font-extrabold text-white mb-4 tracking-tight">
          Eliana
        </h1>
        <p className="text-lg text-gray-400 mb-2 font-medium">
          Developer in Training
        </p>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Learning by building. Growing every day
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-emerald-500 hover:bg-emerald-400 text-gray-950 px-7 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-7 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
