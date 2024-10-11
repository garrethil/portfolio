import projectData from "../assets/data";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <div className="container mx-auto p-4">
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
    </div>
  );
}
