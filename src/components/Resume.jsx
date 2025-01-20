import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
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
  const resumePath = "/garret_hildebrandt.2025.pdf";

  return (
    <div className="container mx-auto p-4 my-5">
      {/* Technical Skills Section */}
      <div className="my-6 flex flex-col items-center justify-center">
        <div className="text-center">
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
        </div>
      </div>

      {/* Download Section */}
      <div className="my-6 mt-8 flex justify-center sm:text-lg md:text-xl ">
        <h2>
          {" "}
          click{" "}
          <a
            href={resumePath}
            download
            className="text-highlight hover:underline transition duration-300"
            name="resume download"
          >
            here
          </a>{" "}
          to view my resume
        </h2>{" "}
      </div>
    </div>
  );
}
