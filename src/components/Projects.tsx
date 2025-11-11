import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Bureau of Finance Website - OAU",
    description:
      "A comprehensive website project for Obafemi Awolowo University's Bureau of Finance. Built as a volunteer frontend developer, creating professional web solutions for the university community with modern design principles and responsive functionality.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Git",
      "Frontend Architecture",
    ],
    githubUrl: "https://github.com/kingkreation/BOF-OAU-Website",
    liveUrl: "https://bof.oauife.edu.ng",
    date: "December 2024",
  },
  {
    id: 2,
    title: "Age Calculator Web App",
    description:
      "A fully responsive, JavaScript-based Age Calculator developed as part of the CodeAlpha Web Development Internship. Features include age calculation, dark mode toggle, countdown to next birthday, and more.",
    image: "https://i.imghippo.com/files/CJFl2969svg.png",
    technologies: [
      "HTML5",
      "CSS3",
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
    id: 3,
    title: "HNG Stage 1 - Profile Card",
    description:
      "An elegant profile card application built during HNG Internship Stage 1. Showcases modern frontend development skills with clean UI design and interactive elements.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Design"],
    githubUrl: "https://github.com/kingkreation/HNG-Stage1-ProfileCard",
    liveUrl: "https://kingkreation.github.io/HNG-Stage1-ProfileCard/",
    date: "October 2025",
  },
  {
    id: 4,
    title: "HNG Stage 2 - Ticket App",
    description:
      "A dynamic ticket booking web application developed for HNG Internship Stage 2. Features include ticket selection, booking management, and responsive design for optimal user experience.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React", "JavaScript", "CSS3", "Responsive Design", "Frontend Architecture"],
    githubUrl: "https://github.com/kingkreation/HNG-Stage2-TicketApp",
    liveUrl: "https://kingkreation.github.io/HNG-Stage2-TicketApp/",
    date: "October 2025",
  },
  {
    id: 5,
    title: "HNG Stage 3 - Audiphile E-commerce",
    description:
      "A premium e-commerce web application for audio equipment, bringing Figma designs to life with React and Convex backend. Features product catalog, shopping cart, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React", "TypeScript", "Convex", "Figma", "E-commerce", "Frontend Architecture"],
    githubUrl: "https://github.com/kingkreation/HNG-Stage3-Audiphile",
    liveUrl: "https://kingkreation.github.io/HNG-Stage3-Audiphile/",
    date: "October 2025",
  }
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
