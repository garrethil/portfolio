import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

export default function Resume() {
  const resumePath = "/garretHildebrandt-2024-fall.pdf";

  return (
    <div className="container mx-auto p-4 my-5">
      {/* Technical Skills Section */}
      <div className="my-6 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-orange-600 text-xl sm:text-2xl lg:text-3xl font-semibold text-center p-4 mb-5">
            Technical Skills
          </h2>

          {/* Insert Skill Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6 text-4xl">
            <FaHtml5 title="HTML5" className="text-orange-500" />
            <FaCss3Alt title="CSS3" className="text-blue-500" />
            <FaJsSquare title="JavaScript" className="text-yellow-500" />
            <FaReact title="React" className="text-blue-400" />
            <SiTailwindcss title="Tailwind CSS" className="text-teal-400" />
            <FaNodeJs title="Node.js" className="text-green-500" />
            <SiGraphql title="GraphQL" className="text-pink-500" />
            <SiMongodb title="MongoDB" className="text-green-400" />
            <SiMysql title="MySQL" className="text-blue-700" />
            <FaBootstrap title="Bootstrap" className="text-purple-600" />
            <SiHeroku title="Heroku" className="text-indigo-500" />
            <SiNetlify title="Netlify" className="text-teal-500" />
            <FaGitAlt title="Git" className="text-red-500" />
          </div>

          {/* Text List */}
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
          className="bg-primary text-base sm:text-lg md:text-xl text-primary-text hover:bg-orange-700 transition duration-300 py-2 my-5 px-4 rounded w-full md:w-auto text-center"
          name="resume download"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}
