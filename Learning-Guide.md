# Modern Portfolio Website - Learning Guide

Welcome to this comprehensive guide on building a modern portfolio website using React, TypeScript, and Tailwind CSS! This guide is designed to help you transition from basic HTML, CSS, and JavaScript to a modern frontend development stack.

## Table of Contents

1. [Modern Frontend Development Overview](#1-modern-frontend-development-overview)
2. [Project Setup and Structure](#2-project-setup-and-structure)
3. [React Fundamentals](#3-react-fundamentals)
4. [TypeScript Basics](#4-typescript-basics)
5. [Styling with Tailwind CSS](#5-styling-with-tailwind-css)
6. [Component-Based Architecture](#6-component-based-architecture)
7. [Responsive Design Implementation](#7-responsive-design-implementation)
8. [Dark Mode Functionality](#8-dark-mode-functionality)
9. [Animations with Framer Motion](#9-animations-with-framer-motion)
10. [Routing with React Router](#10-routing-with-react-router)
11. [State Management with React Hooks](#11-state-management-with-react-hooks)
12. [Performance Optimization](#12-performance-optimization)
13. [Deployment Options](#13-deployment-options)
14. [Learning Resources](#14-learning-resources)

---

## 1. Modern Frontend Development Overview

### Why Move Beyond Plain HTML, CSS, and JavaScript?

While HTML, CSS, and JavaScript form the foundation of web development, modern tools and frameworks offer significant advantages:

- **Component Reusability**: Build once, use everywhere
- **Developer Experience**: Hot reloading, better debugging tools
- **Performance**: Optimized rendering and code splitting
- **Maintainability**: Better code organization and structure
- **Community Support**: Access to libraries, plugins, and solutions

### The Modern Stack We're Using

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A strongly typed programming language that builds on JavaScript
- **Vite**: A build tool that provides faster development experience
- **Tailwind CSS**: A utility-first CSS framework
- **Framer Motion**: A library for animations
- **React Router**: For navigation between pages
- **Lucide React**: For icons

---

## 2. Project Setup and Structure

### Setting Up a New Project

In traditional HTML/CSS/JS development, you might start with an HTML file, link to CSS, and add script tags. With modern tools, the setup is different:

```bash
# Install Node.js first if you haven't already

# Create a new project with Vite
npm create vite@latest my-portfolio -- --template react-ts

# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure

Our portfolio project follows this structure:

```
/my-portfolio
├── /node_modules         # Dependencies (don't edit these)
├── /public               # Static assets that don't need processing
├── /src                  # Source code (where you'll spend most of your time)
│   ├── /components       # Reusable UI components
│   ├── /assets           # Images, fonts, etc.
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

In contrast to traditional development where you might have:

```
/my-website
├── index.html
├── about.html
├── contact.html
├── /css
│   └── styles.css
├── /js
│   └── script.js
└── /images
```

The modern approach separates concerns differently, focusing on components rather than pages.

---

## 3. React Fundamentals

### From DOM Manipulation to Component-Based Thinking

In traditional JavaScript, you might write:

```javascript
// Plain JavaScript
document.getElementById('greeting').innerHTML = 'Hello, ' + userName;
document.getElementById('submit-btn').addEventListener('click', handleSubmit);
```

In React, you think in components:

```jsx
// React component
function Greeting({ userName }) {
  const handleSubmit = () => {
    // Handle submission
  };
  
  return (
    <div>
      <h1>Hello, {userName}</h1>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

### JSX: HTML-in-JavaScript

JSX allows you to write HTML-like code in your JavaScript:

```jsx
// This looks like HTML but it's JSX
const element = <h1>Hello, world!</h1>;
```

Behind the scenes, this gets transformed into:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

### Components in Our Portfolio

Let's look at the `Hero.tsx` component from our portfolio:

```tsx
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const mobilePaddingClass = "px-4 md:px-6 pt-16 pb-8";
  return (
    <section className={`h-screen flex flex-col justify-center relative overflow-hidden ${mobilePaddingClass}`}>
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
            QA Engineer | Frontend Developer | Tech Innovator
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10">
            A purpose-driven leader with a passion for crafting clean, accessible, and impactful web experiences
            that solve real problems. Recent Physics graduate with hands-on expertise in frontend development, 
            quality assurance, and creative technology.
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
            duration: 1
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
```

This component:
1. Creates a hero section with animations
2. Uses conditional classes for dark mode
3. Implements responsive design using Tailwind's utilities
4. Uses Framer Motion for animations

---

## 4. TypeScript Basics

### Why TypeScript Over JavaScript?

TypeScript adds static typing to JavaScript, which helps catch errors during development rather than at runtime.

```javascript
// JavaScript
function greet(name) {
  return "Hello, " + name;
}

greet(42); // No error in JavaScript
```

```typescript
// TypeScript
function greet(name: string): string {
  return "Hello, " + name;
}

greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
```

### TypeScript in React Components

In our portfolio, we use TypeScript to define component props:

```tsx
// Example from our Navbar.tsx
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({
  darkMode,
  toggleDarkMode
}: NavbarProps) => {
  // Component code
};
```

This ensures that:
1. The component receives the required props
2. The props are of the correct type
3. You get autocomplete in your editor

### TypeScript Interfaces and Types

Here's how we define types for our Experience component:

```tsx
interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  type: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "CodeAlpha",
    // ...other properties
  },
  // ...other experiences
];
```

---

## 5. Styling with Tailwind CSS

### From Traditional CSS to Utility-First CSS

In traditional CSS, you might write:

```html
<div class="button">Click me</div>
```

```css
.button {
  padding: 0.5rem 1rem;
  background-color: blue;
  color: white;
  border-radius: 0.25rem;
  font-weight: bold;
}

.button:hover {
  background-color: darkblue;
}
```

With Tailwind, you apply utility classes directly in your HTML/JSX:

```html
<div class="px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700">
  Click me
</div>
```

### Advantages of Tailwind CSS

1. **No naming headaches**: You don't need to invent class names
2. **No context switching**: Stay in your HTML/JSX instead of jumping to CSS files
3. **Consistent design system**: Built-in spacing, color, and typography scales
4. **Responsive design**: Built-in responsive utilities (e.g., `md:`, `lg:`)
5. **Dark mode**: Easy dark mode implementation with `dark:` prefix

### Tailwind in Our Portfolio

Here's how we style a button in our portfolio:

```jsx
<motion.a 
  href="#projects"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors shadow-lg hover:shadow-xl"
>
  View Projects
</motion.a>
```

These classes do the following:
- `px-8`: Horizontal padding of 2rem (32px)
- `py-3`: Vertical padding of 0.75rem (12px)
- `bg-blue-600`: Background color
- `hover:bg-blue-700`: Background color on hover
- `text-white`: Text color
- `rounded-md`: Border radius
- `font-medium`: Font weight
- `transition-colors`: Smooth transition for color changes
- `shadow-lg`: Box shadow
- `hover:shadow-xl`: Larger box shadow on hover

---

## 6. Component-Based Architecture

### Breaking Down UI into Components

Traditional development often leads to large, monolithic files. In React, we break the UI into small, reusable components:

```
App
├── Navbar
├── Hero
├── About
├── Experience
│   ├── ExperienceTab
│   └── ExperienceContent
├── Skills
├── Projects
│   └── ProjectCard
└── Footer
```

### Component Communication

Components communicate through props (parent to child) and callbacks (child to parent):

```jsx
// Parent component
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <Child 
        value={count} 
        onIncrement={() => setCount(count + 1)} 
      />
    </div>
  );
}

// Child component
function Child({ value, onIncrement }) {
  return (
    <button onClick={onIncrement}>
      Increment {value}
    </button>
  );
}
```

### Component Composition in Our Portfolio

Our `App.tsx` composes all the components together:

```tsx
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  // ...useEffect hooks

  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<ResumePDF />} />
        <Route path="/blog/age-calculator" element={<BlogPost />} />
        <Route path="/" element={
          <div className={`min-h-screen bg-white text-gray-900 ${darkMode ? 'dark' : ''}`}>
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
        } />
      </Routes>
    </Router>
  );
};
```

---

## 7. Responsive Design Implementation

### From Media Queries to Utility Classes

In traditional CSS, you'd use media queries:

```css
.button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

@media (min-width: 768px) {
  .button {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  }
}
```

With Tailwind, you use responsive prefixes:

```html
<button class="px-4 py-2 text-base md:px-6 md:py-3 md:text-lg">
  Click me
</button>
```

### Tailwind's Responsive Design System

Tailwind has built-in breakpoints:
- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

### Mobile-First Approach

Our portfolio uses a mobile-first approach, where we design for mobile and then add styles for larger screens:

```jsx
<h1 className="text-4xl md:text-6xl font-bold mb-4">
  Joshua Kolawole
</h1>
```

This means:
- On mobile, the font size is 2.25rem (36px)
- On medium screens and up, the font size increases to 3.75rem (60px)

### Responsive Layouts

Our portfolio uses different layouts for mobile and desktop:

```jsx
{/* Mobile Experience Accordion */}
<div className="md:hidden">
  {/* Mobile version */}
</div>

{/* Desktop Experience Tabs */}
<div className="hidden md:flex">
  {/* Desktop version */}
</div>
```

---

## 8. Dark Mode Functionality

### Implementing Dark Mode with Tailwind

Tailwind makes dark mode implementation straightforward:

1. Configure Tailwind to use the `class` strategy:

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}
```

2. Add the `dark` class to a parent element when dark mode is active:

```jsx
<div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
  {/* Content */}
</div>
```

3. Use the `dark:` prefix for dark mode styles:

```jsx
<div className="bg-white text-black dark:bg-gray-900 dark:text-white">
  Dark mode ready content
</div>
```

### Dark Mode Toggle Implementation

Our portfolio implements a toggle button:

```tsx
const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  localStorage.setItem('darkMode', (!darkMode).toString());
};

// In JSX
<button 
  onClick={toggleDarkMode} 
  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
  aria-label="Toggle dark mode"
>
  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
</button>
```

### Persisting Dark Mode Preference

We save the user's preference in `localStorage`:

```tsx
useEffect(() => {
  // Load dark mode preference from localStorage
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  setDarkMode(savedDarkMode);

  // Apply dark mode class to html
  if (savedDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);
```

---

## 9. Animations with Framer Motion

### From CSS Animations to Framer Motion

In traditional CSS, you might animate like this:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}
```

With Framer Motion, you do:

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  I'll fade in
</motion.div>
```

### Animation Basics with Framer Motion

Framer Motion is a production-ready motion library for React that makes it easy to create animations:

```jsx
// Basic animation
<motion.div
  initial={{ opacity: 0, y: 20 }}  // Starting state
  animate={{ opacity: 1, y: 0 }}   // End state
  transition={{ duration: 0.6 }}   // How long it takes
>
  Content
</motion.div>

// Hover animation
<motion.button
  whileHover={{ scale: 1.05 }}     // When hovered
  whileTap={{ scale: 0.95 }}       // When pressed
>
  Click me
</motion.button>
```

### Animations in Our Portfolio

Our portfolio uses animations for a more engaging experience:

```jsx
// Animate on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>

// Infinite animation
<motion.a
  initial={{ y: -10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ 
    delay: 1,
    repeat: Infinity,
    repeatType: "reverse",
    duration: 1
  }}
>
  <ChevronDown />
</motion.a>
```

---

## 10. Routing with React Router

### From Multi-Page to Single-Page Applications

In traditional websites, navigation means loading a new HTML page:

```html
<a href="about.html">About</a>
```

In React Router, navigation happens without page reloads:

```jsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

### Setting Up React Router

Our portfolio uses React Router for navigation:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

<Router>
  <Routes>
    <Route path="/resume" element={<ResumePDF />} />
    <Route path="/blog/age-calculator" element={<BlogPost />} />
    <Route path="/" element={
      <div>
        <Navbar />
        <Hero />
        {/* More components */}
      </div>
    } />
  </Routes>
</Router>
```

### Navigation Between Routes

We use `Link` for navigation:

```jsx
import { Link } from 'react-router-dom';

<Link to="/resume" target="_blank">
  <motion.button>
    View Resume
  </motion.button>
</Link>
```

---

## 11. State Management with React Hooks

### From DOM Manipulation to React State

In traditional JavaScript, you might update the UI like this:

```javascript
let count = 0;
const countElement = document.getElementById('count');

function increment() {
  count++;
  countElement.textContent = count;
}

document.getElementById('increment').addEventListener('click', increment);
```

In React, you use state:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### React Hooks for State Management

React introduces several hooks for different purposes:

- `useState`: For managing local component state
- `useEffect`: For side effects (API calls, DOM manipulations)
- `useContext`: For accessing context (global state)
- `useRef`: For persistent mutable values and DOM references
- `useCallback`, `useMemo`: For performance optimization

### State Management in Our Portfolio

Our portfolio uses `useState` for managing the dark mode state:

```jsx
const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  localStorage.setItem('darkMode', (!darkMode).toString());
};
```

And `useEffect` for side effects:

```jsx
useEffect(() => {
  // Load dark mode preference from localStorage
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  setDarkMode(savedDarkMode);

  // Apply dark mode class to html
  if (savedDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);
```

---

## 12. Performance Optimization

### Code Splitting

React and Vite automatically split your code into smaller chunks that are loaded only when needed:

```jsx
import { lazy, Suspense } from 'react';

// Instead of:
// import HeavyComponent from './HeavyComponent';

// Use:
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Memoization

Prevent unnecessary re-renders with `React.memo`, `useCallback`, and `useMemo`:

```jsx
import { memo, useCallback, useMemo } from 'react';

// Memoize a component
const MemoizedComponent = memo(function MyComponent(props) {
  // Component code
});

function Parent() {
  // Memoize a function
  const handleClick = useCallback(() => {
    // Handle click
  }, []);
  
  // Memoize a computed value
  const expensiveValue = useMemo(() => {
    return computeExpensiveValue();
  }, []);
  
  return <MemoizedComponent onClick={handleClick} value={expensiveValue} />;
}
```

### Image Optimization

Use modern image formats and responsive images:

```jsx
<img 
  src="/images/hero.webp" 
  srcSet="/images/hero-sm.webp 640w, /images/hero.webp 1280w" 
  sizes="(max-width: 640px) 100vw, 1280px" 
  alt="Hero image" 
  loading="lazy" 
/>
```

---

## 13. Deployment Options

### Build Process

Before deployment, you need to build your project:

```bash
npm run build
```

This creates optimized files in the `dist` directory.

### Deployment Platforms

#### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

#### Netlify

1. Create a `netlify.toml` file:
   ```toml
   [build]
     publish = "dist"
     command = "npm run build"
   ```

2. Connect your GitHub repository to Netlify.

#### Vercel

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

---

## 14. Learning Resources

### React

- [Official React Documentation](https://react.dev/)
- [React for Beginners by Wes Bos](https://reactforbeginners.com/)
- [Epic React by Kent C. Dodds](https://epicreact.dev/)

### TypeScript

- [Official TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Total TypeScript](https://www.totaltypescript.com/)

### Tailwind CSS

- [Official Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS From Scratch | Learn By Building Projects](https://www.udemy.com/course/tailwind-from-scratch/)

### Framer Motion

- [Official Framer Motion Documentation](https://www.framer.com/motion/)
- [The Framer Motion Cookbook](https://www.framer.com/motion/examples/)

### React Router

- [Official React Router Documentation](https://reactrouter.com/en/main)

### YouTube Channels

- [Traversy Media](https://www.youtube.com/c/TraversyMedia)
- [The Net Ninja](https://www.youtube.com/c/TheNetNinja)
- [Jack Herrington](https://www.youtube.com/c/JackHerrington)
- [Theo - t3.gg](https://www.youtube.com/c/TheoBrowne1017)

### Blogs and Newsletters

- [Josh W Comeau's Blog](https://www.joshwcomeau.com/)
- [Kent C. Dodds' Blog](https://kentcdodds.com/blog)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript Weekly](https://javascriptweekly.com/)
- [React Status](https://react.statuscode.com/)

---

## Getting Started with Your Own Portfolio

Now that you understand the concepts, here's how to get started on your own portfolio:

1. **Set up your development environment**:
   ```bash
   npm create vite@latest my-portfolio -- --template react-ts
   cd my-portfolio
   npm install
   npm install tailwindcss postcss autoprefixer framer-motion react-router-dom lucide-react
   npx tailwindcss init -p
   ```

2. **Configure Tailwind**:
   ```js
   // tailwind.config.js
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     darkMode: 'class',
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. **Start building components**:
   - Begin with layout components (Navbar, Footer)
   - Add content sections (Hero, About, Projects)
   - Implement interactivity (dark mode toggle)
   - Add animations for polish

4. **Deploy your portfolio**:
   - Push to GitHub
   - Set up GitHub Pages, Netlify, or Vercel

Remember, learning is a journey, not a destination. Start small, focus on understanding the concepts, and gradually build up your skills.

Happy coding!
