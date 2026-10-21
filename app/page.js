import Reveal from "../components/Reveal";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-background px-6 text-foreground">
        <Reveal className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-5xl grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:gap-10 md:py-12">
          <div>
            <p className="mb-6 text-sm tracking-[0.2em] text-muted">
              JOBI F. AYOMIDE — DEVELOPER
            </p>

            <h1 className="max-w-xl text-5xl font-medium leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              I build thoughtful digital experiences.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Full-stack developer focused on building useful applications,
              clean interfaces, and reliable web experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-transparent hover:text-white"
              >
                Explore my work
              </a>

              <a
                href="#contact"
                className="border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-white"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Image
                src="/savagee.jpg"
                alt="Portrait of Jobi F. Ayomide"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
        </Reveal>
      </main>

      <Reveal>
       <ProjectsSection />
      </Reveal>

      <Reveal>
       <AboutSection />
     </Reveal>
     <Reveal>
      <ContactSection />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
      
    </>
  );
}
