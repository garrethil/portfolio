import Resume from "./Resume";
import Portfolio from "./Portfolio";
function Home() {
  const headshot = "headshot.jpg";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 mt-8">
      {/* Top section with image and bio */}
      <div className="w-full lg:w-[80%] xl:w-[75%] max-w- flex justify-center items-center">
        <div className="w-full px-2 md:px-4 lg:px-6 xl:px-12 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
          {/* Image container */}
          <div className="flex-shrink-0 lg:mr-6 xl:mr-8 mb-4 lg:mb-0">
            <img
              src={headshot}
              alt="Profile Picture"
              className="md:w-[315px] md:h-[315px] lg:w-[375px] lg:h-[375px] xl:w-[415px] xl:h-[415px] rounded-full object-cover"
            />
          </div>

          {/* Text content container */}
          <div className="flex flex-col items-center lg:items-start lg:flex-grow lg:w-2/3 border-content-text border-2 rounded-xl p-4">
            <h2 className="mt-5 text-xl sm:text-2xl lg:text-3xl font-bold">
              Garret Hildebrandt{" "}
            </h2>
            <p className="text-sm sm:text-base lg:text-[20px] xl:text-[22px] lg:leading-[28px] xl:leading-[30px] mt-4 lg:mt-6">
              Garret is a Full-Stack Web Developer that draws on creative
              elements from an education in music to provide a unique
              perspective in app development and solutions. He earned a
              Full-Stack Web Development Certificate from the University of
              Toronto following a bachelor's of music from the UofT. Passionate
              problem solver and collaborator seeking a fast-paced environment
              for continued learning and growth as a web developer.
            </p>
          </div>
        </div>
      </div>

      {/* Resume section below the top section */}
      <div className="w-full lg:w-[80%] xl:w-[60%] flex justify-center items-center p-4">
        <Resume />
      </div>

      <h2 className="text-[25px] font-semibold pt-4">Projects</h2>
      <div
        id="projects"
        className="w-full xl:w-[80%] flex justify-center items-center p-4"
      >
        <Portfolio />
      </div>
    </div>
  );
}

export default Home;
