import { motion } from 'motion/react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-6">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Open to AI Engineer and Applied AI opportunities in backend, product, and intelligent systems.
            Let's build production-ready AI solutions together.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Resume
            </a>
          </div>

          <div className="border-t border-blue-700 pt-8">
            <p className="text-blue-200 text-sm">(c) 2026 Yan Li. AI Engineer / Applied AI Engineer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
