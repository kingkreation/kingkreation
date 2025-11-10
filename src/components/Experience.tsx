import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CalendarDays } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  type: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "CodeAlpha",
    date: "Jun 2025 - Present",
    type: "Internship",
    location: "Remote",
    description: [
      "Selected as a Web Development Intern focused on hands-on project learning.",
      "Building and deploying responsive web projects including an Age Calculator Web App, Music player Web App. Project Management tool(Trello Type) with many features and advanced validation.",
      "Sharpening problem-solving through GitHub tasks and documenting progress via LinkedIn.",
      "Growing through feedback and peer collaboration."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Web Design", "GitHub", "Time Management"]
  },
  {
    id: 2,
    title: "Student QA Intern",
    company: "TestarsQuarter",
    date: "Apr 2025 - Jun 2025",
    type: "Internship",
    location: "Remote",
    description: [
      "Selected as one of the top-performing candidates in the TestarsQuarter Scholarship Bootcamp.",
      "Practiced real-world test case design and execution.",
      "Participated in live test reporting sessions using Google tools.",
      "Collaborated with peers and mentors in Agile-style sessions.",
      "Improved communication and critical thinking through daily feedback."
    ],
    skills: ["Software Quality Assurance", "QA Engineering", "Software Testing", "Attention to Detail", "Critical Thinking", "Reporting"]
  },
  {
    id: 3,
    title: "Student Intern",
    company: "Idigix Web Design Hub",
    date: "Apr 2025 - Present",
    type: "Internship",
    location: "Remote",
    description: [
      "Building foundational skills in front‑end (HTML, CSS, JS) and back‑end development.",
      "Learning software development life cycle and API integration."
    ],
    skills: ["Web Development", "Programming", "Software Development Life Cycle (SDLC)", "APIs"]
  },
  {
    id: 4,
    title: "Phone Engineer",
    company: "Ipasco Ventures",
    date: "Aug 2023 - Present",
    type: "Part-time",
    location: "Ogun State, Nigeria",
    description: [
      "Diagnosed and repaired smartphones/tablets.",
      "Optimized repair workflows.",
      "Liaised with clients for service updates."
    ],
    skills: ["Phone Repair", "Hardware Troubleshooting", "Customer Service"]
  },
  {
    id: 5,
    title: "President",
    company: "Gacsfel OOU",
    date: "Jul 2024 - Jul 2025",
    type: "Leadership",
    location: "Ago-Iwoye, Ogun State, Nigeria",
    description: [
      "Led the student fellowship in spiritual growth, media innovation, and tech support.",
      "Managed event planning and delivered public speaking engagements.",
      "Honored with a Certificate of Service in recognition of faithful stewardship and leadership impact."
    ],
    skills: ["Leadership", "Public Speaking", "Team Management", "Event Planning"]
  }
];

const Experience = () => {
  // Set first experience item active by default
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {/* Mobile Experience Accordion */}
            <div className="md:hidden space-y-4">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
                >
                  <div 
                    className={`p-4 cursor-pointer flex justify-between items-center ${activeTab === exp.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setActiveTab(activeTab === exp.id ? 0 : exp.id)}
                  >
                    <div>
                      <h3 className={`font-medium ${activeTab === exp.id ? 'text-blue-600 dark:text-blue-400' : ''}`}>{exp.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                    </div>
                    <span className={`w-6 h-6 flex items-center justify-center rounded-full ${activeTab === exp.id ? 'bg-blue-100 dark:bg-blue-800/40 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800'} transform transition-transform ${activeTab === exp.id ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                  
                  {activeTab === exp.id && (
                    <div className="p-4 pt-0 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <CalendarDays size={16} className="mr-1" />
                        <span>{exp.date}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.type}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.location}</span>
                      </div>
                      
                      <ul className="list-disc pl-5 space-y-1 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm">{item}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Desktop Experience Tabs */}
            <div className="hidden md:flex">
              <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 pr-4">
                {experiences.map((exp) => (
                  <div 
                    key={exp.id}
                    className={`py-3 px-4 cursor-pointer transition-colors ${
                      activeTab === exp.id 
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700/30'
                    }`}
                    onClick={() => setActiveTab(exp.id)}
                  >
                    <h3 className="font-medium">{exp.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                ))}
              </div>
              
              <div className="w-2/3 pl-8">
                {experiences.map((exp) => (
                  activeTab === exp.id && (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                          <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-lg text-gray-700 dark:text-gray-300">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                        <CalendarDays size={16} className="mr-1" />
                        <span>{exp.date}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.type}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.location}</span>
                      </div>
                      
                      <ul className="list-disc pl-5 space-y-2 mb-6">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300">{item}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-6">
                        {exp.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
