import { SectionReveal } from "@/components/ui/SectionReveal";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 flex flex-col items-center justify-center text-center">
      <SectionReveal>
        <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-[var(--color-ink)] mb-6">
          Projects Repository
        </h1>
        <p className="font-sans text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-12">
          Explore the cutting-edge IoT prototypes, autonomous robotics, and smart systems engineered by our club members.
        </p>
        <div className="font-mono text-sm text-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/30 bg-[var(--color-accent-blue)]/5 px-4 py-2 inline-block">
          // COMING SOON
        </div>
      </SectionReveal>
    </div>
  );
}
