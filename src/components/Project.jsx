import PropTypes from "prop-types";

function Project({ title, image, alt, desc, repo, link, depl }) {
  return (
    <div className="project-card bg-white shadow-md rounded-lg p-4 relative group overflow-hidden">
      {/* Deployment Status */}
      <div className="absolute top-2 right-2 text-sm font-bold flex items-center space-x-1">
        {depl ? (
          <span className="text-green-600 flex items-center">
            Deployed
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
        ) : (
          <span className="text-red-600">Local use only</span>
        )}
      </div>

      <h3 className="text-lg font-bold">{title}</h3>

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-auto mt-2 rounded transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-70">
          <div className="flex items-center space-x-4">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center justify-center w-12 h-12"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-white w-full h-full"
                viewBox="0 0 100 100"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
            </a>
            <div className="border-l border-white h-6"></div>{" "}
            {/* Border between links */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg"
            >
              {depl ? "Project Link" : "Demo Video"}
            </a>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="hidden-info mt-4">
        <p>{desc}</p>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  depl: PropTypes.bool, // Added prop type for depl
};

export default Project;
