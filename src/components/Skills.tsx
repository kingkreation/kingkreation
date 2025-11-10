import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Headphones, Laptop, Lightbulb, PenTool, UsersRound } from 'lucide-react';

type SkillCategory = 'development' | 'leadership' | 'creative' | 'audio' | 'design' | 'technical';

interface Skill {
  name: string;
  level: number; // 1-5
  category: SkillCategory;
}

const skills: Skill[] = [
  // Development
  { name: "HTML", level: 4, category: "development" },
  { name: "CSS", level: 4, category: "development" },
  { name: "JavaScript", level: 3, category: "development" },
  { name: "Responsive Design", level: 4, category: "development" },
  { name: "GitHub", level: 3, category: "development" },
  { name: "DOM Manipulation", level: 3, category: "development" },
  
  // Leadership
  { name: "Public Speaking", level: 5, category: "leadership" },
  { name: "Team Management", level: 4, category: "leadership" },
  { name: "Event Planning", level: 4, category: "leadership" },
  { name: "Mentorship", level: 3, category: "leadership" },
  { name: "Community Building", level: 4, category: "leadership" },
  
  // Creative
  { name: "Music Production", level: 4, category: "creative" },
  { name: "Instruments (Drums)", level: 5, category: "creative" },
  { name: "Keyboard", level: 3, category: "creative" },
  { name: "Guitar", level: 2, category: "creative" },
  { name: "Talking Drum", level: 3, category: "creative" },
  
  // Audio
  { name: "Sound Engineering", level: 4, category: "audio" },
  { name: "Live Mixing", level: 4, category: "audio" },
  { name: "Microphone Placement", level: 3, category: "audio" },
  { name: "FOH Operation", level: 3, category: "audio" },
  
  // Design
  { name: "Graphic Design", level: 3, category: "design" },
  { name: "Photo Editing", level: 3, category: "design" },
  { name: "Video Editing", level: 3, category: "design" },
  { name: "Visual Storytelling", level: 4, category: "design" },
  
  // Technical
  { name: "QA Engineering", level: 4, category: "technical" },
  { name: "Manual Testing", level: 4, category: "technical" },
  { name: "Bug Reporting", level: 4, category: "technical" },
  { name: "Phone Repair", level: 5, category: "technical" },
  { name: "Hardware Troubleshooting", level: 4, category: "technical" },
];

const categoryIcons = {
  development: <Code />,
  leadership: <UsersRound />,
  creative: <Lightbulb />,
  audio: <Headphones />,
  design: <PenTool />,
  technical: <Laptop />
};

const categoryColors = {
  development: "from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500",
  leadership: "from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500",
  creative: "from-violet-600 to-purple-600 dark:from-violet-500 dark:to-purple-500",
  audio: "from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500",
  design: "from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500",
  technical: "from-cyan-600 to-sky-600 dark:from-cyan-500 dark:to-sky-500",
};

const categoryNames = {
  development: "Web Development",
  leadership: "Leadership",
  creative: "Creative",
  audio: "Audio Engineering",
  design: "Design & Media",
  technical: "Technical",
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("development");

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-10">
              {(Object.keys(categoryNames) as SkillCategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    flex flex-col items-center justify-center p-4 rounded-lg transition-all
                    ${activeCategory === category 
                      ? `bg-gradient-to-r ${categoryColors[category]} text-white shadow-lg`
                      : 'bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
                    }
                  `}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    activeCategory !== category ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white/20'
                  }`}>
                    {categoryIcons[category]}
                  </div>
                  <span className="text-sm font-medium">{categoryNames[category]}</span>
                </button>
              ))}
            </div>
            
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 overflow-hidden"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className={`inline-block mr-3 p-2 rounded-lg bg-gradient-to-r ${categoryColors[activeCategory]}`}>
                  <span className="text-white">{categoryIcons[activeCategory]}</span>
                </span>
                {categoryNames[activeCategory]} Skills
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level === 1 && "Beginner"}
                        {skill.level === 2 && "Elementary"}
                        {skill.level === 3 && "Intermediate"}
                        {skill.level === 4 && "Advanced"}
                        {skill.level === 5 && "Expert"}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div 
                        className={`h-2.5 rounded-full bg-gradient-to-r ${categoryColors[activeCategory]}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level * 20}%` }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
