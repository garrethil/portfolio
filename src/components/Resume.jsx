import { useState } from "react";

export default function Resume() {
  const resumePath = "/garretHildebrandt-2024.pdf";
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handleViewResume = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Download Section */}
      <div className="my-6">
        <button
          className="bg-primary text-primary-text hover:bg-primary-text hover:text-primary py-2 px-4 rounded w-full md:w-auto"
          onClick={handleViewResume}
        >
          {isPreviewVisible ? "Hide Resume" : "View My Resume"}
        </button>
      </div>

      {/* Resume Preview */}
      {isPreviewVisible && (
        <div className="my-6">
          <embed
            src={resumePath}
            width="100%"
            height="500px"
            type="application/pdf"
            className="w-full h-auto md:h-96"
          />
        </div>
      )}

      {/* Technical Skills Section */}
      <div className="my-6">
        <h2 className="my-4 text-lg md:text-xl font-bold">Technical Skills</h2>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>
            <span className="font-semibold underline mr-2">
              Frontend Development:
            </span>
            HTML/CSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, React
          </li>
          <li>
            <span className="font-semibold underline mr-2">
              Backend Development:
            </span>
            JavaScript (Node), Express
          </li>
          <li>
            <span className="font-semibold underline mr-2">
              Database Management:
            </span>
            MongoDB, MySQL, Sequelize, Mongoose
          </li>
          <li>
            <span className="font-semibold underline mr-2">DevOps:</span>
            Heroku, Netlify, Render
          </li>
        </ul>
      </div>
    </div>
  );
}
