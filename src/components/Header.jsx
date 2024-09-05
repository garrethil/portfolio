import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
    }
  };

  return (
    <header className="bg-primary text-primary-text font-sans">
      <div className="container mx-auto flex justify-between items-center p-5 md:p-8 lg:p-10">
        <div className="text-2xl lg:text-[35px] font-bold items-center justify-center">
          Garret Hildebrandt{" "}
          <span className="hidden lg:inline font-semibold underline ml-3">
            - Full-Stack Developer
          </span>
        </div>
        <nav className="hidden text-[20px] lg:text-[30px] md:flex space-x-4">
          {/* Use onClick handler to prevent default and manually scroll */}
          <a
            href="#projects"
            onClick={(e) => handleScrollToSection(e, "projects")}
            className="hover:text-gray-400"
          >
            Projects
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gray-800 p-5">
          <a
            href="#projects"
            onClick={(e) => handleScrollToSection(e, "projects")}
            className="hover:text-gray-400"
          >
            Projects
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
