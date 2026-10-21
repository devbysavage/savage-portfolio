import Navbar from "./Navbar";
export default function ProjectCaseStudy({ id }) {
  const projects = {
    gather: {
  title: "Gather.",
  category: "Full-Stack Application",
   preview: "/gather-preview.png",
  description:
    "An event registration platform that helps attendees discover events and register, while organizers manage events and monitor registrations from a dashboard.",
  problem:
    "Event registration requires a reliable way to connect event discovery, attendee sign-ups, and organizer management in one experience.",
 solution:
  "I built a full-stack event registration system using Node.js and Express for the REST API, MongoDB and Mongoose for data persistence, and vanilla JavaScript for the frontend. I implemented JWT-based organizer authentication, protected event creation, attendee registration, duplicate-registration prevention, and registration cancellation.",
  features: [
    "Browse and discover available events",
    "Register attendees and prevent duplicate registrations",
    "Authenticate organizers and protect event creation",
    "View registrations and cancel attendee registrations",
  ],
  stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "JavaScript"],
  github: "https://github.com/devbysavage/Codealpha-Gather-Event-Registration-System",
live: "https://codealpha-gather-event-registration.onrender.com",
},
    "url-shortener": {
  title: "URL Shortener",
  preview: "/url-shortener-preview.png",
  category: "Backend API",
  description:
    "A URL shortening service that converts long links into compact, shareable URLs and redirects visitors to their original destinations.",
  problem:
    "Long URLs can be difficult to share and manage. The project needed a simple API for creating short links, storing them, and resolving them reliably.",
  solution:
    "I built a REST API using Node.js, Express, and MongoDB to generate short codes, persist URL records, validate submitted URLs, and redirect visitors.",
  features: [
    "Create short URLs through a REST API",
    "Store URL records in MongoDB",
    "Reuse existing short links for duplicate URLs",
    "Validate submitted URLs",
    "Redirect short links to their original destinations",
    "Handle unknown short codes with an appropriate response",
  ],
  stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JavaScript"],
  github: "https://github.com/devbysavage/CodeAlpha_URLShortener",
},
    "house-of-savage": {
  title: "House of Savage",
  category: "Jewelry Storefront",
  preview: "/house-of-savage-preview.png",
  description:
    "A luxury jewelry storefront designed to present diamond, moissanite, and gold jewelry through a clean, premium digital experience.",
  problem:
    "Luxury products need a digital presentation that communicates quality, builds brand identity, and makes browsing products feel intuitive.",
  solution:
    "I developed a storefront experience focused on visual presentation, responsive layouts, and a refined interface that reflects the brand's luxury positioning.",
  features: [
    "Luxury-inspired visual design",
    "Responsive layouts for different screen sizes",
    "Jewelry product presentation",
    "Reusable frontend components",
  ],
  stack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
},
    daisign: {
  title: "Executive Profiles",
  category: "Dashboard & Profile Application",
  preview: "/daisign-preview.png",
  description:
    "A dashboard experience for exploring executive profiles, presenting professional information, and navigating a searchable collection of people.",
  problem:
    "Professional directories can become difficult to navigate when profile information is scattered or users cannot quickly find the people they need.",
  solution:
    "I built a frontend interface with structured profile cards, dashboard layouts, and search and filtering interactions to make professional information easier to explore.",
  features: [
    "Executive profile cards",
    "Dashboard-style interface",
    "Search and filtering interactions",
    "Responsive component-based layouts",
    "Structured presentation of professional information",
  ],
  stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  github: "https://github.com/devbysavage/exeprocardv5",
},
   "real-estate": {
  title: "Real Estate",
  category: "Real Estate Website",
  preview: "/real-estate-preview.png",
  description:
    "A real estate website designed to present property information through a structured layout and an accessible browsing experience.",
  problem:
    "A property website needs to present information clearly so visitors can explore listings and understand the properties being showcased.",
  solution:
    "I built a responsive website using HTML, CSS, SCSS, and JavaScript, focusing on page structure, styling, and interactive frontend elements.",
  features: [
    "Structured property presentation",
    "Responsive page layouts",
    "Custom styling with CSS and SCSS",
    "JavaScript-powered frontend interactions",
  ],
  stack: ["HTML", "CSS", "SCSS", "JavaScript"],
},
   "aurelia-spa": {
  title: "Aurelia Spa",
  category: "Spa & Wellness Website",
  preview: "/aurelia-spa-preview.png",
  description:
    "A spa and wellness website designed to communicate the brand's services through a calm, polished, and responsive frontend experience.",
  problem:
    "A spa website needs to present its services and brand identity clearly while creating a welcoming experience for prospective customers.",
  solution:
    "I built a frontend website with Next.js, focusing on page structure, responsive styling, and a consistent visual experience across screen sizes.",
  features: [
    "Spa and wellness brand presentation",
    "Responsive page layouts",
    "Component-based frontend structure",
    "Deployed website accessible online",
  ],
  stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  live: "https://aureliaspa.netlify.app/",
},
  };

  const project = projects[id];
  
  const projectOrder = [
  "gather",
  "url-shortener",
  "house-of-savage",
  "daisign",
  "real-estate",
  "aurelia-spa",
];

const currentIndex = projectOrder.indexOf(id);

const previousProject =
  projectOrder[(currentIndex - 1 + projectOrder.length) % projectOrder.length];

const nextProject =
  projectOrder[(currentIndex + 1) % projectOrder.length];

  if (!project) {
    return (
      <main className="min-h-screen bg-background px-6 py-20 text-foreground">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-medium">Project not found</h1>
          <a
            href="/#work"
            className="mt-6 inline-block text-sm text-muted hover:text-white"
          >
            ← Back to selected work
          </a>
        </div>
      </main>
    );
  }

  return (
      <>
    <Navbar />

    <main className="min-h-screen bg-background px-6 py-20 text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <a
          href="/#work"
          className="text-sm text-muted transition-colors hover:text-white"
        >
          ← Back to selected work
        </a>

        <p className="mt-16 text-xs tracking-[0.2em] text-muted">
          {project.category.toUpperCase()}
        </p>

        <h1 className="mt-5 text-5xl font-medium tracking-tight sm:text-7xl">
          {project.title}
        </h1>
        
<div className="mt-8 flex flex-wrap gap-4">
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-transparent hover:text-white"
    >
      View live project <span className="ml-3" aria-hidden="true">↗</span>
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white"
    >
      View source code <span className="ml-3" aria-hidden="true">↗</span>
    </a>
  )}
</div>

   
        <div className="mt-10 overflow-hidden border border-white/10 bg-surface">
  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
    <span className="ml-3 text-xs text-muted">
      Gather — Project Preview
    </span>
  </div>

       {project.preview && (
  <img
    src={project.preview}
    alt={`${project.title} project preview`}
    className="block h-auto w-full"
  />
)}
        </div>


       
<p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
  {project.description ||
    "A closer look at the project, its purpose, and the decisions behind its implementation."}
</p>

{project.problem && (
  <section className="mt-20 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-[1fr_2fr]">
    <h2 className="text-xs tracking-[0.2em] text-muted">
      THE CHALLENGE
    </h2>
    <p className="text-base leading-8 text-muted sm:text-lg">
      {project.problem}
    </p>
  </section>
)}

{project.solution && (
  <section className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-[1fr_2fr]">
    <h2 className="text-xs tracking-[0.2em] text-muted">
      THE SOLUTION
    </h2>
    <p className="text-base leading-8 text-muted sm:text-lg">
      {project.solution}
    </p>
  </section>
)}

{project.features && (
  <section className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-[1fr_2fr]">
    <h2 className="text-xs tracking-[0.2em] text-muted">
      KEY FEATURES
    </h2>
    <ul className="space-y-4">
      {project.features.map((feature) => (
        <li
          key={feature}
          className="border-b border-white/10 pb-4 text-base leading-7 text-white"
        >
          {feature}
        </li>
      ))}
    </ul>
  </section>
)}

{project.stack && (
  <section className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-[1fr_2fr]">
    <h2 className="text-xs tracking-[0.2em] text-muted">
      TECHNOLOGIES
    </h2>
    <div className="flex flex-wrap gap-2">
      {project.stack.map((technology) => (
        <span
          key={technology}
          className="border border-white/10 px-3 py-2 text-sm text-muted"
        >
          {technology}
        </span>
      ))}
    </div>
  </section>
)}

      </div>
      <nav
  aria-label="Project navigation"
  className="mt-24 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-2"
>
  <a
    href={`/work/${previousProject}`}
    className="group border border-white/10 p-6 transition-colors hover:border-white/40"
  >
    <span className="text-xs tracking-widest text-muted">
      ← PREVIOUS PROJECT
    </span>
    <p className="mt-3 text-lg font-medium text-white transition-colors group-hover:text-muted">
      {projects[previousProject].title}
    </p>
  </a>

  <a
    href={`/work/${nextProject}`}
    className="group border border-white/10 p-6 transition-colors hover:border-white/40 sm:text-right"
  >
    <span className="text-xs tracking-widest text-muted">
      NEXT PROJECT →
    </span>
    <p className="mt-3 text-lg font-medium text-white transition-colors group-hover:text-muted">
      {projects[nextProject].title}
    </p>
  </a>
</nav>
    </main>
    </>
  );
}
