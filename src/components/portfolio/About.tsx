export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Perfil Profesional
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Ingeniero Electrónico y Desarrollador Full Stack con más de 3
              años de experiencia en el desarrollo de aplicaciones web y
              móviles utilizando Angular, React, React Native, Node.js y PHP.
              Experiencia en plataformas e-commerce, sistemas
              administrativos y APIs REST, aplicando metodologías ágiles
              (Scrum/Kanban) y buenas prácticas para construir soluciones
              escalables y de alto rendimiento.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">Idiomas</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Español (Nativo)</li>
                  <li>• Inglés (Intermedio)</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">
                  Especialización
                </h4>
                <p className="text-gray-300">
                  Ingeniero Electrónico y Desarrollador Web/Móvil
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl">
              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h4 className="text-white font-semibold mb-4 text-xl">
                  Tecnologías Principales
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-blue-400 font-semibold mb-2">
                      Frontend
                    </h5>
                    <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                      <li>Angular 18</li>
                      <li>AngularJS</li>
                      <li>React.js</li>
                      <li>React Native</li>
                      <li>JavaScript (ES6+)</li>
                      <li>TypeScript</li>
                      <li>HTML5 / CSS3</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-purple-400 font-semibold mb-2">
                      Backend
                    </h5>
                    <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                      <li>Node.js</li>
                      <li>PHP</li>
                      <li>Yii</li>
                      <li>Laravel</li>
                      <li>Phalcon</li>
                      <li>Express.js</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-green-400 font-semibold mb-2">
                      Bases de Datos
                    </h5>
                    <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                      <li>MySQL / MariaDB</li>
                      <li>PostgreSQL</li>
                      <li>SQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-semibold mb-2">
                      Herramientas y Metodologías
                    </h5>
                    <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                      <li>Docker</li>
                      <li>Git</li>
                      <li>Jira</li>
                      <li>Postman</li>
                      <li>Scrum / Kanban</li>
                      <li>Figma (Diseño UI/UX)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
