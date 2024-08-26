function Home() {
  const headshot = "headshot.jpg";

  return (
    <div className="w-full min-h-screen flex justify-center items-start p-4">
      {/* Outer container with responsive flex direction */}
      <div className="w-full p-6 flex flex-col lg:flex-row items-center lg:items-start lg:px-[250px] text-center lg:text-left">
        {/* Image container with responsive sizing */}
        <div className="flex-shrink-0 lg:mr-8 mb-4 lg:mb-0">
          <img
            src={headshot}
            alt="Profile Picture"
            className="md:w-[315px] md:h-[315px] lg:w-[415px] lg:h-[415px] rounded-full object-cover"
          />
        </div>

        {/* Text content container with more width on larger screens */}
        <div className="flex flex-col items-center lg:items-start lg:flex-grow lg:w-2/3 lg:pt-6">
          <h2 className="mt-5 text-xl sm:text-2xl lg:text-3xl font-bold">
            Garret Hildebrandt
          </h2>
          <p className="text-sm sm:text-base lg:text-[22px] lg:leading-[30px] mt-3">
            Garret is a Full-Stack Web Developer that draws on creative elements
            from an education in music to provide a unique perspective in app
            development and solutions. He earned a Full-Stack Web Development
            Certificate from the University of Toronto following a bachelor's of
            music from the UofT. Passionate problem solver and collaborator
            seeking a fast-paced environment for continued learning and growth
            as a web developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
