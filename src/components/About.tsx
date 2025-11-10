import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>

          <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 flex items-center justify-center">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white dark:bg-gray-800 overflow-hidden border-2 border-white dark:border-gray-700 shadow-md">
                  <img
                    src="https://i.imghippo.com/files/YnW7438cJc.png"
                    alt="Joshua Kolawole"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  BSc Physics Graduate (July 2025)
                </div>
                <div className="uppercase tracking-wide text-sm text-light blue-600 dark:text-light blue-400 font-semibold mb-1">
                  BSc Computer Science (July 2026)
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Joshua Kolawole
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I’m Joshua Kolawole, a purpose-driven{" "}
                  <strong>Frontend Developer</strong> and{" "}
                  <strong>QA Engineer</strong> with a strong passion for
                  creating clean, intuitive, and user-focused digital
                  experiences. My work sits at the intersection of design and
                  functionality—bringing ideas to life through code while
                  ensuring that every product I contribute to is reliable,
                  accessible, and enjoyable to use.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  My journey in tech has been shaped by hands-on internships,
                  volunteer opportunities, and intensive bootcamps where I’ve
                  honed both my development and testing skills. From building
                  projects like an age calculator and music player web app, to
                  contributing as a volunteer frontend developer on the Bureau
                  of Finance website project at OAU, I’ve learned the value of
                  combining creativity with precision. Recently, I expanded my
                  expertise through the QAShark Tech Bootcamp, where I explored
                  mobile automation with Appium, and I was also accepted into
                  the HNG Internship 13, further strengthening my path in
                  software engineering.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Beyond coding and testing, I am deeply committed to growth,
                  collaboration, and purposeful impact. My academic
                  journey—earning a BSc in Physics at Olabisi Onabanjo
                  University and securing a scholarship in Computer Science—has
                  equipped me with both analytical depth and technical
                  versatility. I believe in{" "}
                  <em>
                    impact over impression, process over perfection, and purpose
                    over popularity,
                  </em>{" "}
                  and I’m dedicated to applying these values as I build
                  meaningful solutions and grow in the tech ecosystem.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
