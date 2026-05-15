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
    <section id="skills" className="bg-[#1c0f0a] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#fef3e2] mb-12 text-center">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-[#2d1810] border border-[#9a3412]/40 text-[#b45309] font-medium text-sm px-5 py-2 rounded-full hover:border-[#b45309] transition-colors duration-200"
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
