function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
      <div className="text-center text-white px-4">
        <p className="text-xl mb-2">Hey, I'm</p>
        <h1 className="text-6xl font-bold mb-4">Eliana</h1>
        <p className="text-2xl mb-8">Web Developer + Writer</p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
