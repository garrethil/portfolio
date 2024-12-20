import { useState } from "react";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";

function Home() {
  const headshot = "headshot.webp";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Image container */}
      <img
        src={headshot}
        alt="Profile Picture"
        className="w-full lg:w-[80%] max-w-lg h-auto rounded-full object-cover shadow-lg my-4"
      />
      {/* Title */}
      <h2 className="font-serif text-orange-600 text-xl sm:text-2xl lg:text-3xl font-bold py-3 mb-4">
        Garret Hildebrandt
      </h2>
      {/* About Me Button */}
      <button
        className="bg-primary text-base sm:text-lg md:text-xl text-primary-text hover:bg-orange-700 transition duration-300 py-2 px-4 rounded w-full md:w-auto text-center"
        onClick={handleOpenModal}
        name="open bio"
      >
        About Me
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 h-screen"
          onClick={handleCloseModal} // Close modal when clicking outside the content
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-lg mx-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent click from propagating to overlay
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            <div className="flex flex-col items-center text-start">
              {/* Bio Content */}
              <h2 className="font-serif text-orange-600 text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Garret Hildebrandt
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                I'm a Full-Stack Developer actively pursuing all types of
                positions. I earned a Full-Stack Web Development Certificate and
                a Bachelor of Music from the University of Toronto, bringing a
                unique perspective to development with a focus on industry
                standards. My five years as a freelance jazz musician taught me
                spontaneity, creativity, and the ability to think on my
                feet—skills that now empower my problem-solving and adaptability
                in tech. I am passionate about continuous learning,
                collaboration, and have a growing interest in cloud computing
                and scalable systems. I’m eager to contribute to a fast-paced,
                dynamic environment where I can further expand my skills and
                expertise as a Full-Stack Developer.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Resume Section */}
      <div className="w-full lg:w-[80%] max-w-screen-lg flex justify-center items-center">
        <Resume />
      </div>

      {/* Projects Section */}
      <h2
        id="projects"
        className="font-serif text-orange-600 text-xl sm:text-2xl lg:text-3xl font-semibold text-center pt-4"
      >
        Projects
      </h2>
      <div className="w-full max-w-screen flex justify-center items-center p-2 sm:p-4 lg:p-6">
        <Portfolio />
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="w-full lg:w-[80%] h-[400px] sm:h-[450px] lg:h-[500px] max-w-screen-lg flex flex-col items-center justify-center py-6 sm:py-8 lg:py-10 my-6 sm:my-8 lg:my-10"
      >
        <h2 className="font-serif text-orange-600 text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4">
          Contact Me
        </h2>
        <p className="text-base text-base sm:text-lg md:text-xl">
          Email me at:
        </p>
        <a
          href="mailto:garrethildebrandt@gmail.com"
          className="underline hover:text-orange-600 transition duration-300 text-base sm:text-lg lg:text-xl"
        >
          garrethildebrandt@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Home;
