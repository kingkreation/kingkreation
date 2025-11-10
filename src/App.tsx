import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResumePDF from "./components/ResumePDF";
import BlogPost from "./components/BlogPost";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  useEffect(() => {
    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);

    // Apply dark mode class to html
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<ResumePDF />} />
        <Route path="/blog/age-calculator" element={<BlogPost />} />
        <Route
          path="/"
          element={
            <div
              className={`min-h-screen bg-white text-gray-900 ${
                darkMode ? "dark" : ""
              }`}
            >
              <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Timeline />
                <Testimonials />
                <ResumeSection />
                <Contact />
                <Footer />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
