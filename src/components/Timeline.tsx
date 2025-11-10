import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: 'education' | 'work' | 'achievement' | 'certification';
  color: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "Started BSc in Physics",
    description: "Began undergraduate studies at Olabisi Onabanjo University",
    date: "2021",
    icon: "education",
    color: "bg-blue-600 dark:bg-blue-500"
  },
  {
    id: 2,
    title: "First Web Development Project",
    description: "Created first personal website using HTML and CSS",
    date: "2022",
    icon: "achievement",
    color: "bg-purple-600 dark:bg-purple-500"
  },
  {
    id: 3,
    title: "Phone Engineer at Ipasco Ventures",
    description: "Started part-time position diagnosing and repairing smartphones",
    date: "Aug 2023",
    icon: "work",
    color: "bg-green-600 dark:bg-green-500"
  },
  {
    id: 4,
    title: "Elected President of GACSFEL",
    description: "Took on leadership role at Gospel Apostolic Church Students' Fellowship",
    date: "Jul 2024",
    icon: "achievement",
    color: "bg-amber-600 dark:bg-amber-500"
  },
  {
    id: 5,
    title: "TestarsQuarter QA Bootcamp",
    description: "Completed QA engineering training and earned certification",
    date: "Apr 2025",
    icon: "certification",
    color: "bg-red-600 dark:bg-red-500"
  },
  {
    id: 6,
    title: "Student QA Intern",
    description: "Selected for internship at TestarsQuarter",
    date: "Apr 2025",
    icon: "work",
    color: "bg-green-600 dark:bg-green-500"
  },
  {
    id: 7,
    title: "Web Development Intern",
    description: "Started internship focused on frontend development at CodeAlpha",
    date: "Jun 2025",
    icon: "work",
    color: "bg-green-600 dark:bg-green-500"
  },
  {
    id: 8,
    title: "BSc Physics Graduation",
    description: "Graduated from Olabisi Onabanjo University",
    date: "Jul 2025",
    icon: "education",
    color: "bg-blue-600 dark:bg-blue-500"
  }
];

const Timeline = () => {
  const getIcon = (iconType: string) => {
    switch(iconType) {
      case 'education': return <GraduationCap size={20} />;
      case 'work': return <Briefcase size={20} />;
      case 'certification': return <BookOpen size={20} />;
      default: return <Award size={20} />;
    }
  };
  
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
            My <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700 transform md:translate-x-[-1px]"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] md:left-1/2 md:transform md:translate-x-[-9px] w-[18px] h-[18px] rounded-full border-4 border-white dark:border-gray-900 z-10" style={{ backgroundColor: event.color.split(' ')[0] }}></div>
                  
                  {/* Date */}
                  <div className={`md:w-1/2 pb-4 md:pb-0 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                      {event.date}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className={`pl-8 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white mr-3 ${event.color}`}>
                          {getIcon(event.icon)}
                        </div>
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
