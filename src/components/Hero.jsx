import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Moon, Sun, Home, User, Briefcase, Code, Mail  } from "react-feather";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Banner from "./Banner";
import Skills from "./Skills";

const Hero = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className={`app relative ${theme === 'light' ? 'light' : 'dark'}`}>
      <Banner></Banner>

      <button onClick={toggleTheme}>
        {theme === 'light' ? (
          <Sun size={36} className="text-yellow-300 fixed top-0 right-0 m-2 border-2 border-yellow-300 rounded-s-2xl pl-1 pr-2" />
        ) : (
          <Moon size={36} className="text-white fixed top-0 right-0 m-2 border-2 border-white rounded-s-2xl pl-1 pr-2" />
        )}
      </button>

      <nav className="navbar fixed bottom-0 xl:top-0 left-0 text-white z-40">
        <ul className="flex xl:flex-col justify-center w-full bg-blue-950">
          <li className="p-2">
            <a href="#banner">
              <Home />
            </a>
          </li>
          <li className="p-2">
            <a href="#about">
              <User />
            </a>
          </li>
          <li className="p-2">
            <a href="#skills">
              <Briefcase />
            </a>
          </li>
          <li className="p-2">
            <a href="#projects">
              <Code />
            </a>
          </li>
          <li className="p-2">
            <a href="#contact">
              <Mail />
            </a>
          </li>
        </ul>
      </nav>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
     
      
    </div>
    );
};

export default Hero;