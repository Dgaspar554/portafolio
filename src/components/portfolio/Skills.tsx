export const Skills = () => {
  const technicalSkills = [
    { name: "Angular 18", level: 84, category: "Frontend" },
    { name: "AngularJS", level: 79, category: "Frontend" },
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 93, category: "Programming" },
    { name: "TypeScript", level: 86, category: "Programming" },
    { name: "HTML5", level: 94, category: "Frontend" },
    { name: "CSS3", level: 88, category: "Frontend" },
    { name: "React Native", level: 85, category: "Mobile" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "PHP", level: 87, category: "Backend" },
    { name: "Yii", level: 75, category: "Backend" },
    { name: "Laravel", level: 80, category: "Backend" },
    { name: "Phalcon", level: 74, category: "Backend" },
    { name: "SQL", level: 89, category: "Database" },
    { name: "MongoDB", level: 82, category: "Database" },
    { name: "Docker", level: 81, category: "Tools" },
    { name: "Git", level: 91, category: "Tools" },
    { name: "Jira", level: 84, category: "Tools" },
    { name: "Postman", level: 86, category: "Tools" },
  ];

  const softSkills = [
    "Trabajo en equipo",
    "Resolución de problemas",
    "Liderazgo técnico",
    "Gestión de proyectos ágiles (Scrum/Kanban)",
    "Comunicación efectiva con equipos y stakeholders",
    "Aprendizaje autónomo y continuo",
    "Adaptabilidad a nuevas tecnologías y entornos",
    "Toma de decisiones bajo presión",
    "Documentación técnica clara y concisa",
    "Colaboración interdisciplinaria",
    "Orientación al cliente",
    "Capacidad de análisis e investigación",
  ];

  const categories = [
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "Programming",
    "Tools",
  ];
  const categoryColors = {
    Frontend: "from-blue-400 to-blue-600",
    Backend: "from-green-400 to-green-600",
    Mobile: "from-purple-400 to-purple-600",
    Database: "from-yellow-400 to-yellow-600",
    Programming: "from-red-400 to-red-600",
    Tools: "from-indigo-400 to-indigo-600",
  };

  const additionalCompetencies = [
    {
      category: "Metodologías Ágiles",
      skills: ["Scrum", "Kanban"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "CI/CD", "Control de versiones (Git)"],
    },
    {
      category: "APIs y Arquitectura",
      skills: [
        "Diseño e implementación de APIs REST",
        "Integración de pasarelas de pago",
        "Arquitectura escalable",
      ],
    },
    {
      category: "Calidad y Rendimiento",
      skills: [
        "Optimización de consultas SQL y MongoDB",
        "Buenas prácticas de seguridad",
        "Debugging y mejora de estabilidad",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Habilidades</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Habilidades Técnicas
            </h3>

            {categories.map((category) => (
              <div key={category} className="mb-8">
                <h4
                  className={`text-lg font-medium mb-4 bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}
                >
                  {category}
                </h4>
                <div className="space-y-4">
                  {technicalSkills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div
                        key={index}
                        className="bg-slate-700/50 p-4 rounded-lg"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${categoryColors[category]} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Habilidades Blandas
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                    <span className="text-white text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills Section */}
            <div className="mt-12 bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6 rounded-xl border border-slate-600">
              <h4 className="text-xl font-semibold text-white mb-4">
                Competencias Adicionales
              </h4>
              <div className="space-y-3 text-gray-300">
                {additionalCompetencies.map((competency, index) => (
                  <p key={index}>
                    • <strong>{competency.category}</strong>{" "}
                    {competency.skills.join(", ")}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
