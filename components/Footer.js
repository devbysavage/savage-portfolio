
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="/"
          className="text-sm font-semibold tracking-wide text-white"
        >
          JOBI F. AYOMIDE
          <span className="text-muted"> (SAVAGE)</span>
        </a>

        <p className="text-xs text-muted">
          Building thoughtful digital experiences.
        </p>

        <a
          href="https://github.com/devbysavage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-white"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 pb-6">
        <p className="text-xs text-muted">
          © 2026 Jobi F. Ayomide. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
