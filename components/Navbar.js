
export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5"
      >
        <a
          href="/"
          className="text-sm font-semibold tracking-wide text-white"
        >
          SAVAGE<span className="text-muted">.</span>
        </a>

        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="/#work"
            className="transition-colors hover:text-white"
          >
            Work
          </a>

          <a
            href="/#about"
            className="transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="/#contact"
            className="transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
