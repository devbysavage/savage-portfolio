
import { Suspense } from "react";
import ProjectCaseStudy from "../../../components/ProjectCaseStudy";

export function generateStaticParams() {
  return [
    { id: "gather" },
    { id: "url-shortener" },
    { id: "house-of-savage" },
    { id: "daisign" },
    { id: "real-estate" },
    { id: "aurelia-spa" },
  ];
}

async function ProjectContent({ params }) {
  const { id } = await params;

  return <ProjectCaseStudy id={id} />;
}

export default function ProjectPage({ params }) {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-background px-6 py-20 text-foreground">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm text-muted">Loading project...</p>
          </div>
        </main>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}
