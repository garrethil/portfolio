import { useState } from "react";
import projectData from "../assets/data";
import Project from "../components/Project";
import Resume from "../components/Resume";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  // Function to filter projects based on the selected filter
  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((project) => project.type === filter);

  return (
    <div className="container mx-auto p-4 mt-10 text-content">
      <div className="mb-8">
        <h1 className="text-xl sm:text-3xl font-semibold text-primary-text my-4">
          Projects
        </h1>
        <div className="w-full h-1 bg-primary-text"></div>
      </div>
      <Resume />
      {/* Filter Section */}
      <div className="mb-6 flex justify-center">
        {["All", "Full Stack", "Frontend", "Backend"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 rounded-lg transition-transform transform duration-400 ${
              filter === category ? "bg-primary-text" : "bg-primary"
            } hover:-translate-y-1`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Section */}
      <div className="flex flex-wrap justify-center mx-2">
        {filteredProjects.map((project, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4" key={index}>
            <Project
              image={project.image}
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              alt={project.alt}
              repo={project.repo}
              link={project.link}
              depl={project.depl}
            />
          </div>
        ))}
      </div>

      {/* GitHub Trophies Section */}
      <div className="mt-10">
        <h2 className="text-content text-xl sm:text-2xl lg:text-3xl font-semibold text-center p-4 mb-5">
          GitHub Achievements
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-[100px]">
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
