const projects = [
  {
    title: "Water Reminder",
    description: "A water intake tracker that reminds you to drink every 30 minutes. Features an animated glass that empties over time, daily goal tracking with streak counter, and personalized experience saved locally.",
    tags: ["React", "Vite", "Tailwind CSS", "localStorage", "SVG Animation"],
    github: "https://github.com/ayarachi/pomodoro-water",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-[#231209] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#fef3e2] mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#2d1810] rounded-xl p-6 flex flex-col justify-between border border-[#9a3412]/40 hover:border-[#b45309] transition-colors duration-200"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#fef3e2] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#fdba74] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-[#3d2010] text-[#b45309] px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 text-sm font-medium">
                <a
                  href={project.github}
                  className="text-[#fdba74] hover:text-[#fef3e2] transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-[#b45309] hover:text-[#fef3e2] transition-colors duration-200"
                >
                  Live demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
