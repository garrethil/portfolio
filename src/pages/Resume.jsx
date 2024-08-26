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
          <li>Languages: HTML/CSS, JavaScript, SQL, MongoDB</li>
          <li>Frameworks: Node, Express, Handlebars</li>
          <li>Developer Tools: Github, MySQL</li>
          <li>Libraries: jQuery, Bootstrap, Sequelize, React, Mongoose</li>
        </ul>
      </div>
    </div>
  );
}
