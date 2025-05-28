export const Education = () => {
  const certifications = [
    {
      title: "Node.js de cero a experto",
      platform: "Udemy",
      description:
        "Desarrollo de aplicaciones web y API utilizando Node.js y su ecosistema",
    },
    {
      title: "React.js de cero a experto",
      platform: "Udemy",
      description:
        "Desarrollo frontend con React.js, CSS y HTML, conexión con APIs y backend",
    },
    {
      title: "Procesamiento de señales en Matlab",
      platform: "Curso Académico",
      description:
        "Conceptos y técnicas para el procesamiento de señales con Matlab",
    },
  ];

  const achievements = [
    {
      title: "Ganador del Hackathon EDS 2021",
      description:
        "Competición de innovación y desarrollo de soluciones tecnológicas",
      icon: "🏆",
    },
    {
      title: "Participante en Robotifest 2023",
      description: "Competición internacional de robótica",
      icon: "🤖",
    },
    {
      title: "IEEE PELS International Future Energy Challenge 2023",
      description: "Competición mundial de ingeniería de energía",
      icon: "⚡",
    },
    {
      title: "Miembro activo de IEEE",
      description:
        "Participación en actividades y eventos de desarrollo profesional",
      icon: "📡",
    },
  ];

  const academicCourses = [
    "Lógica de programación y orientación a objetos", // Base de programación
    "Estructuras de datos y algoritmos", // Optimización y lógica
    "Bases de datos", // Manejo de datos persistentes
    "Ingeniería de software", // Metodologías y buenas prácticas
    "Sistemas operativos", // Gestión de recursos y procesos
    "Gestión de proyectos", // Metodologías ágiles y gestión de equipos
    "Seguridad informática", // Prácticas de seguridad
    "Redes de computadoras", // Comunicación y protocolos
  ];

  return (
    <section id="education" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Formación Académica
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-white mb-4">
                Formación Principal
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 font-semibold">
                    Ingeniero Electrónico
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Universidad Nacional de Colombia
                  </p>
                  <p className="text-gray-400 text-sm">Mar 2019 – Dic 2024</p>
                  <p className="text-gray-300 text-sm mt-2">Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            {/* Academic Courses */}
            <div className="mt-6 bg-slate-800/50 p-6 rounded-xl border border-slate-600">
              <h4 className="text-lg font-semibold text-white mb-4">
                Cursos Académicos
              </h4>
              <div className="flex flex-wrap gap-2">
                {academicCourses.map((course, index) => (
                  <span
                    key={index}
                    className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-slate-600"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">
              Certificaciones
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-600 hover:border-green-500/50 transition-all duration-300"
                >
                  <h4 className="text-green-400 font-semibold mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-blue-400 text-sm mb-2">{cert.platform}</p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">
              Logros y Participaciones
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-600 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{achievement.icon}</span>
                    <div>
                      <h4 className="text-yellow-400 font-semibold mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills developed section */}
        <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Competencias Desarrolladas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-400 text-xl">🎯</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Gestión de Proyectos
              </h4>
              <p className="text-gray-300 text-sm">
                Distribución equitativa del trabajo y gestión eficiente de
                equipos
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 text-xl">🧠</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Aprendizaje Autónomo
              </h4>
              <p className="text-gray-300 text-sm">
                Adquisición rápida de nuevos conocimientos y diseño de planes
                adaptativos
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">🔒</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Seguridad Web</h4>
              <p className="text-gray-300 text-sm">
                Implementación de prácticas y protocolos para proteger
                aplicaciones y datos sensibles frente a vulnerabilidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
