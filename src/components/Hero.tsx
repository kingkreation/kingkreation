import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const mobilePaddingClass = "px-4 md:px-6 pt-16 pb-8";
  return (
    <section
      className={`h-screen flex flex-col justify-center relative overflow-hidden ${mobilePaddingClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 px-2 mt-10 sm:mt-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Joshua Kolawole
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            QA Engineer | Frontend Developer | Tech Enthusiast
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10">
            I’m a purpose-driven Frontend Developer and QA Engineer passionate
            about creating responsive, accessible, and user-friendly digital
            products. My journey blends creativity in web development with
            precision in quality assurance, ensuring software is both functional
            and delightful. I thrive on building impactful solutions,
            collaborating on projects, and continuously growing my skills in
            tech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md font-medium transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.a
          href="#about"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
        >
          <ChevronDown className="text-blue-600 dark:text-blue-400" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
