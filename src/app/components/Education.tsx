import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master of Electrical and Computer Engineering',
    school: 'University of Ottawa',
    location: 'Ottawa, Canada',
    period: '2022 - 2024',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    degree: 'Bachelor of Electronic Information Engineering',
    school: 'Beijing University of Chemical Technology',
    location: 'Beijing, China',
    period: '2018 - 2022',
    gradient: 'from-indigo-600 to-violet-600',
  },
];

export function Education() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`bg-gradient-to-br ${edu.gradient} text-white p-4 rounded-xl w-14 h-14 flex items-center justify-center mb-6`}>
                <GraduationCap className="w-7 h-7" />
              </div>

              <h3 className="text-xl mb-3 leading-snug">{edu.degree}</h3>
              <div className="text-gray-700 mb-2">{edu.school}</div>
              <div className="text-gray-600 text-sm mb-4">{edu.location}</div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
