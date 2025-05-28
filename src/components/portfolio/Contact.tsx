import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID_EMAILJS,
        import.meta.env.VITE_TEMPLATE_ID_EMAILJS,
        formData,
        import.meta.env.VITE_PUBLIC_KEY_EMAILJS
      )
      .then(() => {
        toast.success("Correo enviado con éxito");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        toast.error("Error al enviar el correo. Inténtalo de nuevo más tarde.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contacto</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
            ¿Interesado en trabajar juntos? No dudes en contactarme. Estoy
            siempre abierto a nuevas oportunidades y desafíos emocionantes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Conectemos</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">dgaspardev554@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-gray-300">linkedin.com/in/dgaspar554</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <Github className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-gray-300">github.com/Dgaspar554</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6 rounded-xl border border-slate-600">
              <h4 className="text-white font-semibold mb-4">
                ¿Por qué trabajar conmigo?
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Experiencia comprobada en desarrollo Full Stack</li>
                <li>• Compromiso con la calidad y mejores prácticas</li>
                <li>• Capacidad de adaptación a nuevas tecnologías</li>
                <li>• Excelentes habilidades de comunicación</li>
                <li>• Enfoque en resultados y optimización</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Envíame un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Asunto*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="Asunto del mensaje"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors resize-vertical"
                  placeholder="Cuéntame sobre tu proyecto o cómo puedo ayudarte..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400">
            © 2024 - Desarrollador Full Stack. Construido con React y Tailwind
            CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
