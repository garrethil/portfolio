import projectData from "../assets/data";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <div className="container mx-auto p-4">
      {/* Projects Section */}
      <div className="flex flex-wrap -mx-2">
        {projectData.map((project, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4" key={index}>
            <Project
              image={project.image}
              title={project.title}
              desc={project.desc}
              alt={project.alt}
              repo={project.repo}
              link={project.link}
              depl={project.depl}
            />
          </div>
        ))}
      </div>

      {/* GitHub Trophies Section */}
      <div className="mt-6">
        <h2 className="font-serif text-orange-600 text-xl sm:text-2xl lg:text-3xl font-semibold text-center p-4 mb-5">
          GitHub Achievements
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src="https://github-profile-trophy.vercel.app/?username=garrethil&column=4"
            alt="GitHub Trophies"
            className="w-90 h-90 sm:w-128 sm:h-128 lg:w-340 lg:h-340 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}
