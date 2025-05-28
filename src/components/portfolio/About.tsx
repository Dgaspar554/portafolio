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
              Objetivo Profesional
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Consolidarme como desarrollador Full Stack en entornos web y
              móviles, aprovechando mi experiencia en Front-end (React.js,
              Angular, React Native) y Back-end (Node.js, Yii, Phalcon,
              Laravel). Cuento con sólidos conocimientos en bases de datos
              relacionales y NoSQL (SQL, MongoDB), así como en control de
              versiones con Git. Mi enfoque está en crear soluciones eficientes,
              escalables y orientadas a la experiencia del usuario.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Me comprometo a aportar soluciones innovadoras y eficientes que
              optimicen la experiencia del usuario y potencien el crecimiento
              del negocio.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">Idiomas</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Español (Nativo)</li>
                  <li>• Inglés (Intermedio B2)</li>
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
                      <li>React.js</li>
                      <li>React Native</li>
                      <li>Angular</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-purple-400 font-semibold mb-2">
                      Backend
                    </h5>
                    <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                      <li>Node.js</li>
                      <li>Laravel</li>
                      <li>Phalcon</li>
                      <li>Yii2</li>
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
                      <li>MongoDB</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-semibold mb-2">
                      Herramientas y Metodologías
                    </h5>
                    <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                      <li>Git & GitHub</li>
                      <li>CI/CD (GitHub Actions)</li>
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
