const projects = [
  {
    title: "Project Title",
    description: "Short description of what this project does and what problem it solves.",
    tags: ["React", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Title",
    description: "Short description of what this project does and what problem it solves.",
    tags: ["Python", "SQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Title",
    description: "Short description of what this project does and what problem it solves.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-900 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 flex flex-col justify-between hover:bg-gray-750 border border-gray-700 hover:border-emerald-500 transition-colors duration-200"
            >
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-gray-700 text-emerald-400 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 text-sm font-medium">
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
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
