import { Github } from "lucide-react";

export const Projects = () => {
  const featuredProjects = [
    {
      title: "Zione Shop",
      description:
        "Desarrollo completo de la aplicación móvil para una plataforma de e-commerce orientada a dropshippers. Implementé funcionalidades clave como gestión de pagos, productos, promociones y códigos promocionales. La plataforma tiene un buen posicionamiento en Play Store y su sitio web, desarrollado con React y Tailwind, complementa la experiencia. Backend construido con Node.js y MongoDB para manejo eficiente de datos y operaciones.",
      technologies: [
        "React Native",
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Payment Gateway",
      ],
      status: "Producción",
      company: "TRADEBOG S.A.S.",
      isPrivate: true,
    },
    {
      title: "COVOX",
      description:
        "Plataforma escalable para agentes de IA que permite a los usuarios suscribirse y adquirir créditos mediante pasarelas de pago seguras. Los usuarios pueden seleccionar planes con distintos valores de créditos por minuto y crear agentes de IA con prompts especializados para realizar llamadas automáticas a clientes a nivel global. Incluye un panel administrativo robusto para gestión de proveedores y suscripciones.",
      technologies: ["React.js", "PHP", "Laravel", "SQL", "Payment Gateway"],
      status: "Producción",
      company: "TRADEBOG S.A.S.",
      isPrivate: true,
    },
    {
      title: "Proyecto IEEE UNAL",
      description:
        "Aplicación web desarrollada para la rama IEEE con frontend en React.js/Angular y backend en Node.js.",
      technologies: ["React.js", "Angular", "Node.js", "MongoDB"],
      status: "Completado",
      company: "IEEE UNAL",
      isPrivate: true,
    },
    {
      title: "Rick and Morty",
      description:
        "Aplicación móvil que consume un API de personajes de Rick and Morty, con búsqueda específica, paginación y detalle por personaje en rutas separadas.",
      technologies: ["React Native", "API REST"],
      status: "Público",
      company: "Proyecto Personal",
      isPrivate: false,
      githubLink: "https://github.com/Dgaspar554/RickAndMorty",
    },
    {
      title: "Inventario de Productos",
      description:
        "Proyecto full stack con Python y React/Tailwind. Login con roles (administrativo e invitado). CRUD completo de empresas y productos, generación y envío de PDFs, y sugerencias basadas en IA usando OpenAI.",
      technologies: ["Python", "React", "Tailwind", "OpenAI API"],
      status: "Público",
      company: "Proyecto Personal",
      isPrivate: false,
      githubLink: "https://github.com/Dgaspar554/inventoryWeb",
    },
    {
      title: "ToDoApp",
      description:
        "Aplicación móvil full stack con React Native y Java Spring Boot. Gestión completa de tareas pendientes con creación, actualización, marcado como completadas y eliminación.",
      technologies: ["React Native", "Java Spring Boot"],
      status: "Público",
      company: "Proyecto Personal",
      isPrivate: false,
      githubLink: "https://github.com/Dgaspar554/ToDoApp",
    },
    {
      title: "MexicoDivisas",
      description:
        "Aplicación móvil sin backend para conversión en tiempo real entre Peso Colombiano, Peso Mexicano y Dólares, con interfaz sencilla y funcional como conversor de divisas de Xiaomi.",
      technologies: ["React Native"],
      status: "Público",
      company: "Proyecto Personal",
      isPrivate: false,
      githubLink: "https://github.com/Dgaspar554/mexicoDivisas",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Proyectos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/80 rounded-xl p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Producción"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-blue-400 text-sm font-medium mb-2">
                  {project.company}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.isPrivate ? (
                <div className="flex items-center text-gray-400 text-sm">
                  <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
                  Proyecto privado
                </div>
              ) : (
                <a
                  target="_blank"
                  href={project.githubLink || "#"}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Ver código
                </a>
              )}
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="text-center bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-8 rounded-xl border border-slate-600">
          <Github className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Proyectos en GitHub
          </h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Tengo varios proyectos adicionales en mi perfil de GitHub que
            demuestran mi experiencia en diferentes tecnologías y enfoques de
            desarrollo. Algunos proyectos comerciales no pueden ser mostrados
            públicamente debido a políticas de confidencialidad.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="text-blue-400 font-semibold mb-2">
                Proyectos Públicos
              </h4>
              <p className="text-gray-300 text-sm">
                Disponibles en GitHub para demostrar habilidades técnicas y
                mejores prácticas
              </p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="text-purple-400 font-semibold mb-2">
                Proyectos Comerciales
              </h4>
              <p className="text-gray-300 text-sm">
                Desarrollados para empresas con código confidencial, disponibles
                para referencias
              </p>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Solicitar referencias de proyectos
          </button>
        </div>
      </div>
    </section>
  );
};
