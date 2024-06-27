import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-2xl font-bold">My Portfolio</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
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
          <a href="#home" className="block py-2 hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="block py-2 hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="block py-2 hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="block py-2 hover:text-gray-400">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
