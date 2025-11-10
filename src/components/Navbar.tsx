import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({
  darkMode,
  toggleDarkMode
}: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    const handleBodyScroll = () => {
      if (menuOpen) {
        const scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${scrollY}px`;
      } else {
        const scrollY = document.body.style.top;
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }
      }
    };
    
    handleBodyScroll();
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [menuOpen]);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold dark:text-white transition-colors">
          <span>J</span><span className="text-blue-600 dark:text-blue-400">K</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="text-xl font-bold dark:text-white" onClick={() => setMenuOpen(false)}>
                <span>J</span><span className="text-blue-600 dark:text-blue-400">K</span>
              </Link>
              <button 
                onClick={() => setMenuOpen(false)} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center space-y-6 p-8 text-lg">
              <a 
                href="#about" 
                className="w-full text-center py-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" 
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="w-full text-center py-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" 
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#skills" 
                className="w-full text-center py-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" 
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="w-full text-center py-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" 
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="w-full text-center py-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" 
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
