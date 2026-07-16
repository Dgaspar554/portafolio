export const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack Web y Móvil",
      company: "TRADEBOG S.A.S.",
      location: "Bogotá, Colombia",
      period: "Enero 2023 – Actualidad",
      description: [
        "Desarrollo y mantenimiento de plataformas web y móviles utilizando AngularJS, Angular 18, React.js, React Native, Node.js y PHP (Yii, Laravel y Phalcon) para e-commerce y sistemas de suscripción.",
        "Diseño e implementación de APIs REST, lógica de negocio e integración con pasarelas de pago, autenticación, gestión de productos, usuarios, pedidos y suscripciones.",
        "Desarrollo de paneles administrativos y herramientas internas para la gestión de proveedores, productos y transacciones, optimizando procesos operativos.",
        "Diseño, administración y optimización de bases de datos SQL y MongoDB para mejorar rendimiento y estructura de la información.",
        "Implementación de buenas prácticas de desarrollo, seguridad, optimización de rendimiento y escalabilidad en aplicaciones web y móviles.",
        "Configuración de entornos con Docker, control de versiones con Git y seguimiento de proyectos con Jira, participando en procesos de CI/CD.",
        "Trabajo bajo metodologías ágiles (Scrum y Kanban) colaborando con equipos multidisciplinarios para la entrega continua de funcionalidades.",
      ],
      achievements: [
        "Incrementé la calificación de Zione Shop en Google Play en más de una estrella mediante mejoras en rendimiento y experiencia de usuario.",
        "Desarrollé funcionalidades escalables para COVOX, incluyendo sistema de suscripciones, transacciones e integración de servicios backend.",
        "Participé en la optimización del rendimiento de aplicaciones web y móviles, mejorando la estabilidad y la experiencia del usuario.",
      ],
      isCurrentJob: true,
    },
    {
      title: "Desarrollador Web",
      company: "RAMA IEEE UNAL",
      location: "Bogotá, Colombia",
      period: "Ago 2022 – Ene 2023",
      description: [
        "Desarrollo frontend con React.js y Angular para crear interfaces de usuario atractivas y funcionales.",
        "Desarrollo backend con Node.js para construir servidores y lógica de aplicación sólida.",
        "Diseño y optimización de bases de datos SQL y MongoDB.",
        "Resolución de problemas complejos y optimización del rendimiento de aplicaciones.",
      ],
      achievements: [],
      isCurrentJob: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experiencia Laboral
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform md:-translate-x-2 z-10 flex items-center justify-center">
                {exp.isCurrentJob && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-slate-800/80 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    {exp.isCurrentJob && (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        Actual
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>

                  <div className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <p
                        key={i}
                        className="text-gray-300 text-sm leading-relaxed"
                      >
                        • {desc}
                      </p>
                    ))}
                  </div>

                  {exp.achievements.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-600">
                      <h4 className="text-purple-400 font-medium mb-2">
                        Logros destacados:
                      </h4>
                      {exp.achievements.map((achievement, i) => (
                        <p
                          key={i}
                          className="text-gray-300 text-sm leading-relaxed"
                        >
                          🏆 {achievement}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
