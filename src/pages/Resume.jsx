export default function Resume() {
  const resume = "../../public/garret-hil-2024.pdf";

  return (
    <div className="container mx-auto p-4">
      <div className="my-6">
        <h2 className="text-xl font-bold">Download My Resume</h2>
        <a
          className="text-blue-500 underline"
          href={resume}
          download="garret-hildebrandt.pdf"
        >
          Click here to download a pdf of my resume
        </a>
      </div>

      <div className="my-6">
        <h2 className="my-4 text-xl font-bold">Technical Skills</h2>

        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold underline mr-2">
              Frontend Development:
            </span>
            HTML/CSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, React
          </li>
          <li>
            <span className="font-semibold underline mr-2">
              {" "}
              Backend Development:
            </span>
            JavaScript (Node), Express
          </li>
          <li>
            <span className="font-semibold underline mr-2">
              {" "}
              Database Management:
            </span>{" "}
            MongoDB, MySQL, Sequelize, Mongoose
          </li>
          <li>
            <span className="font-semibold underline mr-2">DevOps:</span>{" "}
            Heroku, Netlify, Render
          </li>
        </ul>
      </div>
    </div>
  );
}
