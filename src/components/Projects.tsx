import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Age Calculator Web App",
    description:
      "A fully responsive, JavaScript-based Age Calculator developed as part of the CodeAlpha Web Development Internship. Features include age calculation, dark mode toggle, countdown to next birthday, and more.",
    image: "https://i.imghippo.com/files/CJFl2969svg.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "GitHub",
      "Manual Testing",
    ],
    githubUrl: "https://github.com/kingkreation/CodeAlpha_AgeCalculator.git",
    liveUrl: "https://kingkreation.github.io/CodeAlpha_AgeCalculator/",
    date: "June 2025",
    blogUrl: "/blog/age-calculator",
  },
  {
    id: 2,
    title: "QA Assignment Webpage",
    description:
      "A webpage created to showcase bug reports and user stories as part of the TestarsQuarter QA Internship. The project demonstrates clear documentation of software bugs and user-centered stories with acceptance criteria.",
    image:
      "https://images.unsplash.com/photo-1633614208977-69ea9e241df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    technologies: [
      "HTML",
      "CSS",
      "Notion",
      "Google Sheets",
      "Jira",
      "Software Testing",
    ],
    githubUrl:
      "https://github.com/kingkreation/kolajosh-day2-assignment-user-story-and-bug-report.git",
    liveUrl:
      "https://kingkreation.github.io/kolajosh-day2-assignment-user-story-and-bug-report/",
    date: "May 2025",
  },
  {
    id: 3,
    title: "Birthday Present Webpage",
    description:
      "A custom webpage created as a birthday gift, showcasing creative web development skills and personal design elements. The page serves as both a gift and a demonstration of frontend capabilities.",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/kingkreation/Debbie-s-Birthday.git",
    liveUrl: "https://kingkreation.github.io/Debbie-s-Birthday/",
    date: "April 2025",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Featured{" "}
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{project.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                    {project.blogUrl && (
                      <Link
                        to={project.blogUrl}
                        className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                      >
                        <span>Read Case Study</span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/kingkreation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors shadow-md"
            >
              <Github size={18} className="mr-2" />
              <span>View More on GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
