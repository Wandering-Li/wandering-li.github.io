import { motion } from 'motion/react';
import { Code2, Brain, Server, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    gradient: 'from-blue-600 to-indigo-600',
    skills: ['Python', 'TypeScript / JavaScript', 'SQL', 'C++']
  },
  {
    title: 'AI / LLM Systems',
    icon: Brain,
    gradient: 'from-violet-600 to-purple-600',
    skills: ['LangChain', 'LangGraph', 'RAG', 'MCP', 'Azure OpenAI', 'MongoDB', 'REST APIs']
  },
  {
    title: 'Backend / Infra',
    icon: Server,
    gradient: 'from-indigo-600 to-blue-600',
    skills: ['Node.js', 'FastAPI', 'Docker', 'AWS', 'Linux', 'Git']
  },
  {
    title: 'Frontend',
    icon: Layout,
    gradient: 'from-cyan-600 to-blue-600',
    skills: ['React', 'Vite', 'Vue', 'Electron']
  },
];

export function TechnicalSkills() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-br ${category.gradient} text-white p-3 rounded-xl`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
