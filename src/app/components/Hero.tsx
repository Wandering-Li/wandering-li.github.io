import { motion } from 'motion/react';
import { Github, Linkedin, FileText, ChevronDown, MapPin, GraduationCap, Sparkles, Brain, Database, Zap, ArrowRight } from 'lucide-react';

export function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-6"
            >
              Available for Opportunities
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl mb-4">
              Yan Li
            </h1>
            
            <div className="text-xl lg:text-2xl text-gray-600 mb-6">
              AI Engineer / Applied AI Engineer
            </div>
            
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I build production-oriented AI systems using LLMs, agents, retrieval pipelines, 
              backend services, and full-stack product workflows.
            </p>
            
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Specialized in turning natural language capabilities into structured, deployable operations.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => handleScroll('projects')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                View Projects
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm hover:shadow-md flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Resume
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm hover:shadow-md flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm hover:shadow-md flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
            </div>
            
            {/* Quick Facts - moved to bottom */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Ottawa, Canada</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>MEng, uOttawa</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>AI Search / RAG / Agents</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Visual - AI Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Workflow Cards */}
              <div className="space-y-6">
                {/* Card 1: Natural Language Input */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-4 rounded-xl">
                      <Brain className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">LLM Processing</h3>
                      <p className="text-sm text-gray-600">Prompt engineering, agent workflows, tool calling</p>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <ArrowRight className="w-6 h-6 text-blue-600 rotate-90" />
                  </motion.div>
                </div>

                {/* Card 2: Structured Operations */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-violet-600 to-purple-600 text-white p-4 rounded-xl">
                      <Database className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">Structured Operations</h3>
                      <p className="text-sm text-gray-600">RAG pipelines, database queries, API calls</p>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    <ArrowRight className="w-6 h-6 text-blue-600 rotate-90" />
                  </motion.div>
                </div>

                {/* Card 3: Production Systems */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-4 rounded-xl">
                      <Zap className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">Production Systems</h3>
                      <p className="text-sm text-gray-600">Backend services, deployment, monitoring</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl -z-10 blur-3xl opacity-30"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => handleScroll('about')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}