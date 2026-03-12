import { motion } from 'motion/react';
import { 
  Brain, 
  GitBranch, 
  Database, 
  Search, 
  Server, 
  Cpu 
} from 'lucide-react';

const strengths = [
  {
    icon: Brain,
    title: 'LLM Application Engineering',
    description: 'Building production-ready applications powered by large language models with structured prompting, response handling, and error recovery.',
  },
  {
    icon: GitBranch,
    title: 'Agent Workflow Design',
    description: 'Designing multi-step agent systems with tool calling, state management, decision trees, and fallback logic for reliable execution.',
  },
  {
    icon: Database,
    title: 'RAG Pipelines',
    description: 'End-to-end retrieval-augmented generation with chunking strategies, embeddings, vector storage, graph relationships, and retrieval optimization.',
  },
  {
    icon: Search,
    title: 'AI Search over Structured Data',
    description: 'Converting natural language queries into structured database operations using LLM-powered interpretation and schema understanding.',
  },
  {
    icon: Server,
    title: 'Backend / API Development',
    description: 'Building scalable backend services, RESTful APIs, and cloud-deployed systems. Rapid prototyping and full-stack product delivery.',
  },
  {
    icon: Cpu,
    title: 'Systems Engineering Foundation',
    description: 'Strong fundamentals in real-time systems, streaming pipelines, data processing, and low-latency software architecture.',
  },
];

export function CoreStrengths() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Core Strengths</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg mb-2">{strength.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}