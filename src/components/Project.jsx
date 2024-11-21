import PropTypes from "prop-types";

function Project({ title, image, alt, desc, tech, repo, link, depl }) {
  return (
    <div className="project-card bg-white shadow-md rounded-lg p-4 relative group overflow-hidden">
      {/* Deployment Status */}
      <div className="absolute top-2 right-2 text-sm font-bold flex items-center space-x-1">
        {depl ? (
          <span className="text-green-700 flex items-center">
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
          <span className="text-red-700">Local use only</span>
        )}
      </div>
      {/* need to make responsive mobile card classes */}
      <h3 className="text-md sm:text-lg font-bold">{title}</h3>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
        <p className="text-white text-center px-4">{desc}</p>
      </div>

      {/* Image Container with Hover Effect */}
      <div className="relative overflow-hidden hidden sm:block">
        <img
          src={image}
          alt={alt}
          className="w-full h-auto mt-2 rounded transition-transform duration-300 group-hover:scale-105"
        />
        {/* Description Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-white text-center px-4">{desc}</p>
        </div>
      </div>

      {/* Hyperlinks (Always visible) */}
      <div className="mt-2 flex items-center space-x-4">
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-orange-600"
        >
          GitHub Repo
        </a>
        <span className="border-l border-gray-400 h-6"></span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-orange-600"
        >
          {depl ? "Project Link" : "Demo Video"}
        </a>
      </div>

      {/* Description Section */}
      <div className="mt-4">
        <p>{tech}</p>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  desc: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  depl: PropTypes.bool,
};

export default Project;
