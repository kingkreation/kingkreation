import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const educationData = [
  {
    id: 1,
    institution: "University of the People",
    degree: "Bachelor of Science, Computer Science",
    period: "2025 - Present",
    description: "Currently pursuing a degree in Computer Science with focus on software development, algorithms, and modern programming paradigms."
  },
  {
    id: 2,
    institution: "Olabisi Onabanjo University (O.O.U)",
    degree: "Bachelor of Science, Physics",
    period: "2021 - 2025",
    description: "Completed with a focus on technical applications and leadership development. Actively participated in student organizations and community service."
  },
  {
    id: 3,
    institution: "Ibadan Grammar School",
    degree: "WASSCE, Technical Science",
    period: "Sep 2014 - Jul 2020",
    description: "Technical Science emphasis with additional focus on leadership and public speaking."
  }
];

const certificationData = [
  {
    id: 1,
    name: "Jobberman Soft-Skills Training",
    issuer: "Jobberman Nigeria",
    date: "May 2025",
    skills: ["Effective communication", "Emotional Intelligence", "Personal Effectiveness"]
  },
  {
    id: 2,
    name: "TestarsQuarter QA Bootcamp",
    issuer: "TestarsQuarter",
    date: "June 2025",
    skills: ["Software Testing", "QA Engineering", "Test Planning", "Bug Reporting"]
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Education & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap size={28} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-8">
                {educationData.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: item.id * 0.1 }}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-blue-200 dark:before:bg-blue-900/50"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.institution}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{item.degree}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Award size={28} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certificationData.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: item.id * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.issuer} • {item.date}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-lg p-5 text-white shadow-md"
                >
                  <h4 className="text-lg font-semibold">Awards & Recognition</h4>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Certificate of Service - President, GACSFEL OOU (2025)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Best Dressed (Male) - GACSFEL OOU (2025)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>TestarsQuarter Scholarship Recipient (2025)</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
