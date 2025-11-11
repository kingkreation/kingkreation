import { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePDF = () => {
  const [isLoading, setIsLoading] = useState(true);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading the resume content
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const printResume = () => {
    window.print();
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation bar that's hidden when printing */}
      <div className="print:hidden bg-white shadow-sm py-4 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Portfolio</span>
        </Link>
        <button 
          onClick={printResume}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
        >
          Print / Save as PDF
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div 
          ref={resumeRef} 
          className="max-w-[800px] mx-auto my-8 px-8 py-10 bg-white print:my-0 print:px-0"
        >
          {/* Resume Header */}
          <div className="text-center mb-8 border-b pb-6">
            <h1 className="text-3xl font-bold text-gray-900">JOSHUA KOLAWOLE</h1>
            <p className="text-xl text-blue-600 mt-1">QA Engineer & Frontend Developer</p>
            <div className="flex justify-center space-x-4 mt-3 text-sm text-gray-600">
              <span>kolawolejoshua459@gmail.com</span>
              <span>•</span>
              <span>LinkedIn: linkedin.com/in/joshua-kolawole</span>
              <span>•</span>
              <span>Portfolio: https://kingkreation.vercel.app/</span>
              <span>•</span>
              <span>+2349027951602</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">SUMMARY</h2>
            <p className="text-gray-700">
              A Frontend developer and QA Engineer with a BSc in Physics from Olabisi Onabanjo University, currently studying Computer Science at the University of the People. Skilled in HTML, CSS and JavaScript, with experience building accessible, responsive user interfaces and applying testing practices to ensure reliability and quality. Completed a 3-month frontend internship at CodeAlpha, the TestarsQuarter QA Bootcamp, and multiple volunteer web projects. Seeking an internship where I can deliver clean UI work and apply strong testing discipline.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">EDUCATION</h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">BSc Physics</h3>
                    <p className="text-gray-700">Olabisi Onabanjo University, Ogun State, Nigeria</p>
                  </div>
                  <span className="text-gray-600 text-sm">2021 - 2025</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">Computer Science (BS)</h3>
                    <p className="text-gray-700">University of the People (Online)</p>
                  </div>
                  <span className="text-gray-600 text-sm">2025 - Present</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">EXPERIENCE</h2>
            
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Web Development Intern</h3>
                <span className="text-gray-600">Jun 2025 - Present</span>
              </div>
              <p className="italic text-gray-800">CodeAlpha</p>
              <ul className="list-disc ml-5 mt-1 text-gray-700">
                <li>Built responsive UI components for a web application using React and Tailwind CSS</li>
                <li>Applied accessibility best practices to ensure WCAG compliance</li>
                <li>Wrote unit tests for UI components and performed manual QA checks</li>
                <li>Collaborated with senior developers to implement design specifications</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Student QA Intern</h3>
                <span className="text-gray-600">Apr 2025 - Jun 2025</span>
              </div>
              <p className="italic text-gray-800">TestarsQuarter</p>
              <ul className="list-disc ml-5 mt-1 text-gray-700">
                <li>Performed manual testing on web and mobile applications</li>
                <li>Created detailed test cases and executed test plans</li>
                <li>Reported bugs and tracked issues using JIRA</li>
                <li>Participated in QA team meetings and sprint planning</li>
              </ul>
            </div>
          </div>



          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• HTML5</li>
                  <li>• CSS3</li>
                  <li>• JavaScript</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Frameworks & Libraries</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• React</li>
                  <li>• Next.js</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">JavaScript</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• ES6+</li>
                  <li>• DOM Manipulation</li>
                  <li>• Async/Await</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Backend & Services</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Git</li>
                  <li>• GitHub</li>
                  <li>• REST APIs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Testing</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Manual Testing</li>
                  <li>• Unit Testing</li>
                  <li>• WCAG Accessibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">PROJECTS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Portfolio Website</h3>
                <p className="text-gray-700 text-sm mb-1">https://kingkreation.vercel.app/</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Built responsive portfolio website using React and Tailwind CSS</li>
                  <li>• Implemented dark mode toggle and smooth animations</li>
                  <li>• Optimized for performance and accessibility</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Weather Dashboard</h3>
                <p className="text-gray-700 text-sm mb-1">React Weather Application</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Created weather dashboard with real-time data from OpenWeather API</li>
                  <li>• Implemented geolocation and search functionality</li>
                  <li>• Designed responsive UI with weather icons and animations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Task Manager App</h3>
                <p className="text-gray-700 text-sm mb-1">JavaScript CRUD Application</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Built task management application with vanilla JavaScript</li>
                  <li>• Implemented local storage for data persistence</li>
                  <li>• Created responsive design with CSS Grid and Flexbox</li>
                </ul>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">REFERENCES</h2>
            <p className="text-gray-700 text-sm">References available upon request.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePDF;
