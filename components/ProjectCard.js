
export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col border border-white/10 bg-surface p-6 transition-colors duration-300 hover:border-white/30 sm:p-8">
      <div className="mb-10 flex items-center justify-between">
        <span className="text-xs tracking-[0.2em] text-muted">
          PROJECT {project.number}
        </span>

        <span className="text-xs text-muted">
          {project.category}
        </span>
      </div>

      <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
        {project.title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-muted sm:text-base">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <span
            key={technology}
            className="border border-white/10 px-3 py-1.5 text-xs text-muted"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-5 border-t border-white/10 pt-5 text-sm">
        <a
          href={`/work/${project.id}`}
          className="text-white transition-colors hover:text-muted"
        >
          Case study <span aria-hidden="true">↗</span>
        </a>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-white"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-white"
          >
            Live site <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
