import { motion } from 'motion/react';
import {
  FileText,
  Search,
  BarChart3,
  ArrowRight,
  Database,
  Brain,
  Workflow,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Building Assessment Report Generation Platform',
    summary: 'A startup-style AI-assisted document analysis and report generation platform that transforms unstructured building inspection inputs into structured professional reports.',
    image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwZGlhZ3JhbSUyMHN5c3RlbSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzMyNzg2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['LangChain', 'MCP', 'RAG', 'React', 'Vite', 'FastAPI', 'Python'],
    icon: FileText,
    gradient: 'from-blue-600 to-indigo-600',
    problem: 'Building inspectors spend hours manually transcribing field observations into compliant reports, leading to delays and inconsistency.',
    solution: 'Built an AI-powered platform that automates document analysis, structures unstructured data, and generates professional reports with compliance validation.',
    built: [
      'Multi-step agent workflows using LangChain and MCP tool calling',
      'RAG pipeline with chunking, embeddings, graph relationships, and semantic retrieval',
      'React + Vite frontend with real-time preview',
      'FastAPI backend with structured report generation engine'
    ],
    impact: 'Significantly reduced manual report-writing effort while maintaining compliance standards.',
    decisions: [
      'Separated extraction from report generation to improve control and debugging',
      'Used retrieval grounding to reduce hallucination in compliance-heavy sections',
      'Structured the workflow into stages instead of relying on one-shot prompting',
      'Implemented graph relationships to capture contextual dependencies between inspection items'
    ],
    workflow: [
      { step: 'Field Data', icon: FileText, desc: 'Documents, forms, text' },
      { step: 'AI Extraction', icon: Brain, desc: 'LLM-based parsing' },
      { step: 'Structured Storage', icon: Database, desc: 'Graph + vector DB' },
      { step: 'RAG Retrieval', icon: Search, desc: 'Context assembly' },
      { step: 'Report Generation', icon: Workflow, desc: 'Compliant output' },
    ]
  },
  {
    title: 'AI Search Agent for Structured Data',
    summary: 'An AI-powered search agent that converts natural language queries into structured MongoDB queries for backend search workflows.',
    image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwd29ya2Zsb3clMjBwaXBlbGluZSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczMjc4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['Node.js', 'MongoDB', 'OpenAI API', 'AWS', 'REST API'],
    icon: Search,
    gradient: 'from-violet-600 to-purple-600',
    problem: 'Internal users struggled to query complex structured data, requiring technical knowledge of database schemas and query syntax.',
    solution: 'Developed an LLM-powered search agent that interprets natural language and generates optimized MongoDB queries with fallback logic.',
    built: [
      'LLM-based query interpretation with schema understanding',
      'Node.js backend service with REST API',
      'MongoDB integration with optimized query generation',
      'Rule-based fallback logic for edge cases',
      'AWS deployment for internal product validation'
    ],
    impact: 'Enabled non-technical users to perform complex searches, significantly improving query accessibility.',
    decisions: [
      'Built a schema-aware prompt system that includes field types and relationships',
      'Implemented hybrid approach: LLM for intent parsing + validation layer for query safety',
      'Added fallback to keyword search when LLM interpretation confidence is low',
      'Cached common query patterns to reduce API costs and latency'
    ],
    workflow: [
      { step: 'User Query', icon: Search, desc: 'Natural language' },
      { step: 'LLM Interpretation', icon: Brain, desc: 'Intent parsing' },
      { step: 'Query Generation', icon: Database, desc: 'MongoDB syntax' },
      { step: 'Search Execution', icon: Zap, desc: 'Fast retrieval' },
    ]
  },
  {
    title: 'Real-Time Signal Visualization Desktop Application',
    summary: 'A systems-oriented desktop application for real-time signal visualization built during a software engineering internship.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsLXRpbWUlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzczMjc4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['Electron', 'React', 'Julia', 'ZeroMQ'],
    icon: BarChart3,
    gradient: 'from-orange-600 to-red-600',
    problem: 'Engineers needed to visualize high-frequency multi-channel signal data in real-time with low latency for critical monitoring.',
    solution: 'Built a desktop application with a high-performance streaming pipeline for real-time signal visualization and analysis.',
    built: [
      'Electron + React frontend with responsive visualization',
      'ZeroMQ streaming pipeline for low-latency data transfer',
      'Julia backend for high-performance signal processing',
      'Multi-channel visualization with synchronized updates',
      'End-to-end delivery from requirements to production'
    ],
    impact: 'Supported low-latency updates for real-time monitoring in mission-critical systems.',
    decisions: [
      'Chose ZeroMQ over HTTP/WebSocket for predictable low-latency messaging',
      'Used Julia for compute-intensive signal processing to maintain performance',
      'Implemented circular buffers to handle continuous data streams without memory growth',
      'Separated rendering thread from data ingestion to prevent UI blocking'
    ],
    workflow: [
      { step: 'Signal Stream', icon: Zap, desc: 'Multi-channel data' },
      { step: 'ZeroMQ Pipeline', icon: Workflow, desc: 'Low-latency transport' },
      { step: 'Desktop App', icon: BarChart3, desc: 'Real-time viz' },
    ]
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Production-oriented AI systems built from design to deployment
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="p-8 border-b border-gray-200 bg-white">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`bg-gradient-to-br ${project.gradient} text-white p-3 rounded-xl`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.summary}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-xl mb-6 text-center">System Workflow</h4>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                      {project.workflow.map((step, i) => {
                        const StepIcon = step.icon;
                        return (
                          <div key={step.step} className="flex items-center">
                            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow min-w-[140px]">
                              <div className={`bg-gradient-to-br ${project.gradient} text-white w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                                <StepIcon className="w-5 h-5" />
                              </div>
                              <div className="text-center">
                                <div className="text-sm mb-1">{step.step}</div>
                                <div className="text-xs text-gray-500">{step.desc}</div>
                              </div>
                            </div>
                            {i < project.workflow.length - 1 && (
                              <ArrowRight className="w-6 h-6 text-gray-400 mx-2 flex-shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <h5 className="text-lg mb-2 text-blue-600">Problem</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">{project.problem}</p>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <h5 className="text-lg mb-2 text-indigo-600">Solution</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <h5 className="text-lg mb-3 text-violet-600">What I Built</h5>
                        <ul className="space-y-2">
                          {project.built.map((item) => (
                            <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-violet-600 mt-1">-</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <h5 className="text-lg mb-2 text-orange-600">Impact</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h5 className="text-lg mb-4 text-emerald-600">Key Engineering Decisions</h5>
                    <ul className="space-y-3">
                      {project.decisions.map((decision) => (
                        <li key={decision} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">-</span>
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
