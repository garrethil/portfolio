const resumePath = "/g.hildebrandt-2025.pdf";

function Home() {
  return (
    <div className="w-full bg-primary flex flex-col items-center justify-center h-screen px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Striking Title */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-primary-text text-3xl sm:text-4xl lg:text-5xl font-bold text-center tracking-wide">
          Garret Hildebrandt
        </h1>
        <p className="text-content text-lg sm:text-xl lg:text-2xl text-center mt-2">
          Full Stack Developer. Musician.
        </p>
      </div>
      <div className="bg-primary p-4 md:p-6 lg:p-8">
        <ul className="flex justify-center items-center space-x-4 md:space-x-6 lg:space-x-8 mt-4">
          <li>
            <a
              href="https://github.com/garrethil"
              target="_blank"
              rel="noopener noreferrer"
              className=""
              name="github profile"
              aria-label="view github profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 hover:-translate-y-1 duration-800 transition-transform transform"
                viewBox="-74.4 -120.90175 644.8 725.4105"
                fill="#85ae8e"
              >
                <path d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0zM97.2 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/garret-hildebrandt-6887662b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:-translate-y-1 duration-400"
              name="linkedin profile"
              aria-label="view linkedin profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9 hover:-translate-y-1 duration-800 transition-transform transform"
                viewBox="0 0 24 24"
                fill="#85ae8e"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:garrethildebrandt@gmail.com"
              className=""
              name="email"
              aria-label="send email"
            >
              <svg
                fill="#85ae8e"
                className="h-9 w-9 md:h-11 md:w-11 lg:h-15 lg:w-15 hover:-translate-y-1 duration-800 transition-transform transform"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />

                <g id="mail">
                  <path d="M29,6H3L2.92,6a.78.78,0,0,0-.21,0l-.17.07a.65.65,0,0,0-.15.1.67.67,0,0,0-.15.14l-.06.06a.36.36,0,0,0,0,.09,1.08,1.08,0,0,0-.08.19A1.29,1.29,0,0,0,2,6.9S2,7,2,7V25a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7A1,1,0,0,0,29,6ZM16,14.81,6.2,8H27.09ZM4,24V8.91l11.43,7.91,0,0a1.51,1.51,0,0,0,.18.09l.08,0A1.09,1.09,0,0,0,16,17h0a1,1,0,0,0,.41-.1l.07,0,0,0L28,9.79V24Z" />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-highlight hover:underline transition duration-300"
              name="resume preview"
              aria-label="view resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 md:h-11 md:w-11 lg:h-15 lg:w-15 hover:-translate-y-1 duration-800 transition-transform transform"
                viewBox="0 0 24 24"
                fill="#85ae8e"
              >
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM14 3.5L18.5 8H14V3.5ZM7 11H17V13H7V11ZM7 15H17V17H7V15Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
