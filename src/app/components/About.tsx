import { motion } from 'motion/react';
import { MapPin, GraduationCap, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">About</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I'm an AI Engineer focused on building production-ready AI systems that solve real
              business problems. My work centers on LLM applications, agent workflows, RAG
              pipelines, and backend integration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I specialize in turning natural language capabilities into structured operations,
              converting unstructured inputs into reliable, deployable systems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From rapid prototyping to production deployment, I handle the full stack: AI workflow
              design, backend services, frontend integration, and cloud infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg">Based in Ottawa, Canada</h3>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg">MEng in ECE, University of Ottawa</h3>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-violet-600" />
                <h3 className="text-lg">Focused on production-ready AI systems</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
