export default function Resume() {
  const resumePath = "/garretHildebrandt-2024-fall.pdf";

  return (
    <div className="container mx-auto p-4 my-5">
      {/* Technical Skills Section */}
      <div className="my-6 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-orange-600 my-4 text-[22px] sm:text-[25px] font-semibold underline">
            Technical Skills
          </h2>
          <ul className="list-none text-base sm:text-lg md:text-xl text-left space-y-3">
            <li>
              <span className="font-semibold underline mr-2 block sm:inline">
                Frontend Development:
              </span>
              <span className="block sm:inline">
                HTML/CSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, React
              </span>
            </li>
            <li>
              <span className="font-semibold underline mr-2 block sm:inline">
                Backend Development:
              </span>
              <span className="block sm:inline">
                JavaScript (Node), Express, GraphQL
              </span>
            </li>
            <li>
              <span className="font-semibold underline mr-2 block sm:inline">
                Database Management:
              </span>
              <span className="block sm:inline">
                MongoDB, MySQL, Sequelize, Mongoose
              </span>
            </li>
            <li>
              <span className="font-semibold underline mr-2 block sm:inline">
                DevOps:
              </span>
              <span className="block sm:inline">Heroku, Netlify, Render</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Download Section */}
      <div className="my-6 flex justify-center">
        <a
          href={resumePath}
          download
          className="bg-primary text-base sm:text-lg md:text-xl text-primary-text hover:bg-orange-700 transition duration-300 py-2 px-4 rounded w-full md:w-auto text-center"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}
