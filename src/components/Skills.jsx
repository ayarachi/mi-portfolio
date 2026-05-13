const skills = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Python",
  "SQL",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section id="skills" className="bg-gray-950 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 border border-gray-700 text-emerald-400 font-medium text-sm px-5 py-2 rounded-full hover:border-emerald-500 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
