import { motion } from 'framer-motion';
import { Download, FileText, Mail, Phone, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeSection = () => {
  const downloadResume = () => {
    // Open the resume page in a new tab
    window.open('/resume', '_blank');
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            My <span className="text-blue-600 dark:text-blue-400">Resume</span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Joshua Kolawole</h3>
                  <p className="text-blue-600 dark:text-blue-400 mt-1">Frontend Web Developer</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Ogun state, Nigeria • kolawolejoshua459@gmail.com • LinkedIn: linkedin.com/in/joshua-kolawole • Portfolio: joshuaking.dev • +2349027951602
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <motion.button
                    onClick={downloadResume}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <Download className="mr-2" size={18} />
                    Download Resume
                  </motion.button>
                  
                  <Link to="/resume" target="_blank">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-md font-medium transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      <Printer className="mr-2" size={18} />
                      View Resume
                    </motion.button>
                  </Link>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <FileText className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
                    Profile Summary
                  </h4>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Frontend developer with a BSc in Physics from Olabisi Onabanjo University, currently studying Computer Science at the University of the People. Skilled in HTML, CSS and JavaScript, with experience building accessible, responsive user interfaces and applying testing practices to ensure reliability and quality. Completed a 3-month frontend internship at CodeAlpha, the TestarsQuarter QA Bootcamp, and multiple volunteer web projects. Seeking a frontend internship where I can deliver clean UI work and apply strong testing discipline.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <FileText className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
                    Resume Highlights
                  </h4>
                  
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                      <div>
                        <span className="font-medium">BSc in Physics</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Olabisi Onabanjo University, 2021-2025
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                      <div>
                        <span className="font-medium">3-month Frontend Internship</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          CodeAlpha
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                      <div>
                        <span className="font-medium">TestarsQuarter QA Bootcamp Graduate</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Completed comprehensive QA training
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Technical Skills</h4>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Languages:</strong> HTML5, CSS3, modern Responsive Design, Tailwind CSS, CSS Modules
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Frameworks & Tools:</strong> React, Next.js (TypeScript), Vue, Twig, Git, Vercel, Netlify
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>JavaScript:</strong> ES6+, DOM Manipulation
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Backend & Services:</strong> Convex (backend), Resend
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Testing:</strong> Manual testing
                    </p>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-4">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "React", "QA Engineering", "Manual Testing", 
                      "UI/UX Design", "Public Speaking", "Team Leadership", 
                      "Problem Solving", "Adaptability"].map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone className="mr-2 text-blue-600 dark:text-blue-400" size={16} />
                        <span>+2349027951602</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-2 text-blue-600 dark:text-blue-400" size={16} />
                        <span>kolawolejoshua459@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
