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
            <h1 className="text-3xl font-bold text-gray-900">Joshua Kolawole Obaloluwa</h1>
            <p className="text-xl text-blue-600 mt-1">QA Engineer & Frontend Developer</p>
            <div className="flex justify-center space-x-4 mt-3 text-sm text-gray-600">
              <span>+2349027951602</span>
              <span>•</span>
              <span>kolawolejoshua459@gmail.com</span>
              <span>•</span>
              <span>joshuaking.dev</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">PROFILE</h2>
            <p className="text-gray-700">
              Dedicated QA Engineer and Frontend Developer with a passion for creating robust, user-friendly web applications. 
              Skilled in manual testing, UI/UX design, and web development technologies. Strong background in Physics with 
              excellent problem-solving abilities and technical aptitude. Seeking to leverage my technical skills and creative 
              thinking in a challenging tech role.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">EDUCATION</h2>
            <div className="mb-3">
              <div className="flex justify-between">
                <h3 className="font-bold">Olabisi Onabanjo University</h3>
                <span className="text-gray-600">2021 - 2025</span>
              </div>
              <p className="text-gray-800">BSc in Physics</p>
              <p className="text-gray-600 text-sm">GPA: 4.0/5.0</p>
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
                <li>Developed responsive web applications using React and Tailwind CSS</li>
                <li>Collaborated with senior developers to implement UI designs and functionality</li>
                <li>Assisted in troubleshooting and debugging frontend issues</li>
                <li>Participated in code reviews and incorporated feedback into development workflow</li>
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

          {/* Leadership */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">LEADERSHIP</h2>
            
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">President, GACSFEL OOU</h3>
                <span className="text-gray-600">Jul 2024 - Jul 2025</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-gray-700">
                <li>Led a team of 15 executives in organizing events and programs</li>
                <li>Managed organization budget and resources</li>
                <li>Improved member engagement by 30% through innovative programs</li>
                <li>Coordinated with university administration and external organizations</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">SKILLS</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-1">Technical Skills</h3>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>HTML5, CSS3, JavaScript</li>
                  <li>React, Tailwind CSS</li>
                  <li>Manual Testing</li>
                  <li>UI/UX Design</li>
                  <li>Test Case Development</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-1">Soft Skills</h3>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Team Leadership</li>
                  <li>Public Speaking</li>
                  <li>Problem Solving</li>
                  <li>Adaptability</li>
                  <li>Sound Engineering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">PROJECTS</h2>
            
            <div className="mb-3">
              <h3 className="font-bold">Portfolio Website</h3>
              <p className="text-gray-700">Personal portfolio built with React, TypeScript and Tailwind CSS showcasing my projects and skills.</p>
            </div>
            
            <div className="mb-3">
              <h3 className="font-bold">E-commerce Testing Project</h3>
              <p className="text-gray-700">Developed and executed comprehensive test plans for an e-commerce platform, ensuring functionality and usability.</p>
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3">REFERENCES</h2>
            <p className="text-gray-700">Available upon request</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePDF;
