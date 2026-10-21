
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32"
    >
      <div className="border-t border-white/10 pt-10 sm:pt-14">
        <p className="mb-5 text-xs tracking-[0.2em] text-muted">
          HAVE A PROJECT IN MIND?
        </p>

        <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
          Let&apos;s build something meaningful.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
          I&apos;m open to conversations about web development, interesting
          projects, and opportunities to create useful digital experiences.
        </p>

            <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=jobiayomide8%40gmail.com"
               className="mt-10 inline-flex border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-transparent hover:text-white"
            >
          Get in touch <span className="ml-3" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
