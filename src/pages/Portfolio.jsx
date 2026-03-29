import { useState } from "react";
import projectData from "../assets/data";
import Project from "../components/Project";
import Resume from "../components/Resume";

const githubHighlights = [
  {
    title: "Pull Shark x2",
    detail: "Merged pull requests across collaborative work and personal projects.",
  },
  {
    title: "Quickdraw",
    detail: "Resolved issues quickly after opening them on GitHub.",
  },
  {
    title: "YOLO",
    detail: "Shipped directly and iterated fast while building in public.",
  },
];

const githubStats = [
  { label: "Public repos", value: "41" },
  { label: "Pinned projects", value: "4" },
  { label: "Portfolio repo", value: "Live" },
];

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

      <section className="mt-14 mb-[100px] rounded-2xl border border-primary-text/30 bg-gradient-to-br from-primary/90 via-primary to-primary-text/20 p-6 sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-primary-text">
              GitHub Highlights
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-content">
              Verified achievements without relying on a third-party widget.
            </h2>
            <p className="mt-4 text-content/90">
              This section reflects the achievements shown on the public GitHub
              profile and keeps the portfolio stable even when embed services
              are slow or unavailable.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {githubStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-primary-text/25 bg-black/10 p-4"
                >
                  <p className="text-2xl font-bold text-content">{stat.value}</p>
                  <p className="mt-1 text-sm text-primary-text">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/garrethil"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-lg bg-highlight px-5 py-3 text-white transition-colors hover:bg-highlight-hover"
            >
              View GitHub Profile
            </a>
          </div>

          <div className="grid w-full max-w-2xl gap-4">
            {githubHighlights.map((achievement) => (
              <article
                key={achievement.title}
                className="rounded-xl border border-primary-text/25 bg-content/95 p-5 text-content-text shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-content-text">
                    {achievement.title}
                  </h3>
                  <span className="rounded-full border border-primary-text/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-text">
                    GitHub
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base text-content-text/90">
                  {achievement.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
