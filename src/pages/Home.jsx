import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";

function Home() {
  const headshot = "headshot.jpg";

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 lg:px-0 space-y-12">
      {/* Top Section (Image and Bio) */}
      <div className="w-full lg:w-[80%] xl:w-[75%] max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-0 lg:space-x-8 pt-5">
        {/* Image container */}
        <div className="flex-shrink-0 relative">
          <img
            src={headshot}
            alt="Profile Picture"
            className="md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Text content container */}
        <div className="flex flex-col items-center lg:items-start lg:flex-grow lg:w-2/3  rounded-xl p-6 lg:p-8 bg-content text-content-text">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Garret Hildebrandt
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-8">
            I'm a Junior Full-Stack Developer actively pursuing my first paid
            role in the tech industry. I earned a Full-Stack Web Development
            Certificate from the University of Toronto, building on my Bachelor
            of Music from UofT to approach development with a fresh perspective
            and a focus on industry standards. I am passionate about learning,
            collaboration, and have a growing interest in cloud computing and
            scalable systems. Eager to contribute to a fast-paced, dynamic
            environment, where I can continue to expanding my skills and
            expertise as a Full-Stack Developer.
          </p>
        </div>
      </div>

      {/* Resume Section */}
      <div className="w-full lg:w-[80%] max-w-screen-lg flex justify-center items-center">
        <Resume />
      </div>

      {/* Projects Section */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold underline text-center pt-4">
        Projects
      </h2>
      <div
        id="projects"
        className="w-full max-w-screen flex justify-center items-center p-4"
      >
        <Portfolio />
      </div>
    </div>
  );
}

export default Home;
