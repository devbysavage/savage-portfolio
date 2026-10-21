
export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32"
    >
      <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <p className="text-xs tracking-[0.2em] text-muted">
            A LITTLE ABOUT ME
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            The person behind the work.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-white sm:text-xl sm:leading-9">
            I'm Jobi F. Ayomide, also known as Savage. I build web experiences
            that balance thoughtful design with practical functionality.
          </p>

          <p className="mt-6 text-base leading-8 text-muted">
            My work spans responsive interfaces, full-stack applications, and
            backend APIs. I enjoy understanding how the pieces fit together,
            solving problems step by step, and turning ideas into working
            products.
          </p>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="mb-4 text-xs tracking-[0.2em] text-muted">
              AREAS OF FOCUS
            </p>

            <ul className="grid grid-cols-1 gap-3 text-sm text-white sm:grid-cols-2">
              <li>Frontend development</li>
              <li>Backend development</li>
              <li>REST API design</li>
              <li>Responsive web experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
