import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'AI Engineer (Contract)',
    company: 'Axon Health',
    location: 'Ottawa',
    period: 'Feb 2026 - Present',
    gradient: 'from-blue-600 to-indigo-600',
    description: 'Building AI-powered healthcare solutions with LLM integration and backend services'
  },
  {
    role: 'Building Assessment Report Generation Platform',
    company: 'Startup Product',
    location: 'Ottawa',
    period: 'Sep 2025 - Present',
    gradient: 'from-violet-600 to-purple-600',
    description: 'Designed and built an end-to-end AI platform with RAG pipelines and multi-step agent workflows'
  },
  {
    role: 'Software Development Engineer (Co-op)',
    company: 'D-TA Systems Corp',
    location: 'Ottawa',
    period: 'May 2023 - Dec 2023',
    gradient: 'from-indigo-600 to-cyan-600',
    description: 'Developed a real-time visualization system with a ZeroMQ-based streaming pipeline'
  },
];

export function Experience() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${exp.gradient} text-white p-3 rounded-lg flex-shrink-0`}>
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-1">{exp.role}</h3>
                      <div className="text-gray-600 text-sm">
                        {exp.company} - {exp.location}
                      </div>
                      <div className="text-gray-500 text-sm mt-2">
                        {exp.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 md:ml-auto">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
