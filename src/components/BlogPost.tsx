import { ArrowLeft, Calendar, Clock, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  return (
    <div className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-10">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to portfolio</span>
        </Link>
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Building an Age Calculator Web App: My Journey
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>Published June 18, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>5 min read</span>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1518611507436-f9221403f06e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80" 
                alt="Age Calculator Web App" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                #HTML
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                #CSS
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                #JavaScript
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                #WebDevelopment
              </span>
            </div>
          </header>
          
          <div className="prose max-w-none dark:prose-invert prose-lg prose-blue">
            <p>
              I'm excited to share my latest project as part of my CodeAlpha Web Development Internship - 
              an Age Calculator Web App! This project has been a fantastic learning experience, 
              allowing me to apply and expand my frontend development skills while solving a practical 
              problem.
            </p>
            
            <h2>Project Overview</h2>
            <p>
              The Age Calculator is a fully responsive web application that allows users to calculate their 
              exact age based on their birth date. It goes beyond basic age calculation to provide additional 
              features that enhance the user experience.
            </p>
            
            <h3>Key Features</h3>
            <ul>
              <li>
                <strong>Precise Age Calculation:</strong> The app displays years, months, days, hours, minutes, 
                and even seconds of age with real-time updates.
              </li>
              <li>
                <strong>Dark Mode Toggle:</strong> A sleek UI feature that allows users to switch between light 
                and dark themes based on their preference.
              </li>
              <li>
                <strong>Countdown to Next Birthday:</strong> The app calculates and displays how much time is 
                left until the user's next birthday.
              </li>
              <li>
                <strong>Copy to Clipboard:</strong> Users can easily copy their age results with a single click.
              </li>
              <li>
                <strong>Input Validation:</strong> The app includes comprehensive validation to ensure accurate 
                calculations and prevent errors.
              </li>
            </ul>
            
            <h2>Development Process</h2>
            <p>
              My approach to building this application focused on creating a clean, intuitive user interface while 
              implementing robust functionality. I began by designing a wireframe to plan the layout and user flow, 
              then moved on to HTML structure, styling with CSS, and finally adding interactivity with JavaScript.
            </p>
            
            <h3>Technical Implementation</h3>
            <p>
              For the age calculation logic, I needed to handle various edge cases such as leap years and different 
              month lengths. I implemented the following algorithm:
            </p>
            
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <code>
{`// Calculate age based on birth date and current date
function calculateAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);
  
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  
  // Adjust for negative months or days
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }
  
  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 0);
    days += lastMonth.getDate();
    months--;
  }
  
  return { years, months, days };
}`}
              </code>
            </pre>
            
            <p>
              One of the most challenging aspects was implementing the real-time age update feature, 
              which required careful use of JavaScript's <code>setInterval</code> function and 
              performance optimization to avoid excessive DOM updates.
            </p>
            
            <h3>Responsive Design</h3>
            <p>
              I implemented a mobile-first approach for this project, ensuring the application works 
              seamlessly across devices of all sizes. The layout adjusts dynamically using CSS media 
              queries, and touch-friendly UI elements make it easy to use on mobile devices.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
              <h3 className="text-blue-800 dark:text-blue-300 mb-2">What I Learned</h3>
              <p className="text-gray-800 dark:text-gray-300">
                This project significantly strengthened my JavaScript skills, particularly in working 
                with the Date object and handling complex calculations. I also improved my understanding 
                of DOM manipulation, event handling, and implementing dark mode with CSS variables.
              </p>
            </div>
            
            <h2>User Testing and Feedback</h2>
            <p>
              After completing the initial version, I conducted user testing with friends and family to 
              gather feedback. This led to several improvements:
            </p>
            <ul>
              <li>Enhanced input validation with clearer error messages</li>
              <li>Added the ability to reset the form with a single button press</li>
              <li>Improved contrast in both light and dark modes for better accessibility</li>
              <li>Optimized animations for smoother transitions</li>
            </ul>
            
            <h2>Future Enhancements</h2>
            <p>
              While I'm proud of the current implementation, I have several ideas for future enhancements:
            </p>
            <ul>
              <li>Adding a "share" feature to allow users to share their age results on social media</li>
              <li>Implementing localization to support multiple languages</li>
              <li>Creating a "time machine" feature to calculate ages at specific historical dates</li>
              <li>Adding interesting age facts based on the calculated age</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>
              Building this Age Calculator Web App has been an invaluable learning experience. It has 
              allowed me to apply theoretical knowledge to a practical project while developing my 
              problem-solving skills. I'm grateful for the opportunity provided by the CodeAlpha 
              internship and look forward to continuing to grow as a web developer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="https://github.com/kingkreation/CodeAlpha_AgeCalculator.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-md font-medium transition-colors"
              >
                <Github size={18} className="mr-2" />
                <span>View Code on GitHub</span>
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
              >
                <ExternalLink size={18} className="mr-2" />
                <span>View Live Demo</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
