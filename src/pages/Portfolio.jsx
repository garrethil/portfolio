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
              vid={project.vid}
            />
          </div>
        ))}
      </div>

      <section className="mt-14 mb-[100px] rounded-xl border border-primary-text/25 bg-primary/40 px-6 py-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary-text">
              GitHub
            </p>
            <p className="mt-2 text-base sm:text-lg text-content">
              More builds, repos, and recent work live on my GitHub profile.
            </p>
          </div>
          <a
            href="https://github.com/garrethil"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-primary-text/40 px-5 py-3 text-content transition-colors hover:bg-primary-text hover:text-primary"
          >
            View GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
