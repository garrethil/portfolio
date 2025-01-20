import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Get the current URL location
  const [activeSection, setActiveSection] = useState("");

  // Update the active section based on the current path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveSection("home");
    } else if (path === "/music") {
      setActiveSection("music");
    } else if (path === "/projects") {
      setActiveSection("projects");
    }
  }, [location.pathname]);

  return (
    <header className="bg-primary text-primary-text fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto py-4 px-6 flex justify-center items-center">
        {/* Navigation Buttons */}
        <nav className="flex space-x-4 text-xl">
          {/* Home Link */}
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg transition-transform transform ${
              activeSection === "home" ? "bg-primary-text" : "bg-primary"
            } text-content hover:-translate-y-1 duration-400`}
            onClick={() => setActiveSection("home")}
          >
            Home
          </Link>

          {/* Music Link */}
          <Link
            to="/music"
            className={`px-4 py-2 rounded-lg transition-transform transform ${
              activeSection === "music" ? "bg-primary-text" : "bg-primary"
            } text-content hover:-translate-y-1 duration-400`}
            onClick={() => setActiveSection("music")}
          >
            Music
          </Link>

          {/* Projects Link */}
          <Link
            to="/projects"
            className={`px-4 py-2 rounded-lg transition-transform transform ${
              activeSection === "projects" ? "bg-primary-text" : "bg-primary"
            } text-content hover:-translate-y-1 duration-400`}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
