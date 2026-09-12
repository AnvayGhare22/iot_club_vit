import { SectionReveal } from "@/components/ui/SectionReveal";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events | IoT Club VIT Pune",
  description: "Hands-on innovation and flagship competitions at VIT Pune.",
};

const events = [
  {
    title: "Shark Tank IoT",
    category: "Flagship Event",
    description: "In collaboration with I2IOC. First-year students pitched innovative IoT solutions to industry judges Ashwin Kshirasagar and Shreyash Rane.",
    image: "/images/updates/shark-tank.jpeg",
  },
  {
    title: "XEN 4.0 Speaker Session",
    category: "Technical",
    description: "A Speaker Session under XEN 4.0 by Prabhaker S. Sir (Indian Air Force) highlighted the importance of a disciplined engineering mindset, practical problem-solving, and real-world IoT applications in industry and defense.",
    image: "/images/updates/expert-session.jpeg",
  },
  {
    title: "XEN 4.0 Workshop",
    category: "Technical",
    description: "A deep dive into Arduino, NodeMCU, and sensor integration for embedded systems enthusiasts.",
    image: "/images/updates/workshop.jpeg",
  },
  {
    title: "Resume Building Session",
    category: "Professional Development",
    description: "Led by Mr. Dheeraj Rathod, Career Coach, guiding students on crafting impactful, industry-ready resumes through effective structure, skill presentation, and project showcasing.",
    image: "/images/updates/resume.jpeg",
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-transparent relative z-10">
      <div className="container mx-auto">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div>
              <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-[var(--color-ink)] mb-6">
                XEN 4.0 & Beyond
              </h1>
              <p className="font-sans text-xl text-[var(--color-muted)] max-w-2xl">
                Hands-on innovation and flagship competitions at VIT Pune.
              </p>
            </div>
            <div className="text-[var(--color-accent-blue)] font-mono text-sm tracking-widest uppercase">
              // 2026 Season
            </div>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <SectionReveal key={event.title} delay={i * 0.1}>
              <div className="bg-[var(--color-surface-alt)]/60 backdrop-blur-md p-10 border border-[var(--color-ink)]/10 hover:border-[var(--color-accent-blue)] transition-colors h-full flex flex-col group">
                <div className="relative aspect-video -mx-10 -mt-10 mb-8 overflow-hidden border-b border-[var(--color-ink)]/10">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="font-mono text-xs text-[var(--color-accent-blue)] mb-4 uppercase tracking-widest">
                  {event.category}
                </div>
                <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-4">
                  {event.title}
                </h3>
                <p className="font-sans text-[var(--color-muted)] leading-relaxed">
                  {event.description}
                </p>
                <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium border-b border-[var(--color-ink)] pb-1">View Details →</span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
