
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32"
    >
      <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-4 text-xs tracking-[0.2em] text-muted">
            SELECTED WORK
          </p>

          <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
            Projects built with purpose.
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-muted">
          A selection of applications and digital experiences I've worked on,
          from backend APIs to responsive websites.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
