import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { achievementsData } from "@/data/achievementsData";

export function generateStaticParams() {
  return achievementsData.map((achievement) => ({
    slug: achievement.slug,
  }));
}

export default async function AchievementDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = achievementsData.find((a) => a.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[var(--color-surface)] pb-24">
      {/* Hero Cover Banner */}
      <div className="relative w-full h-[55vh] min-h-[380px] overflow-hidden bg-[var(--color-surface-alt)]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/50 to-transparent" />
        <div className="absolute top-8 left-4 md:left-8">
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase bg-[var(--color-accent-blue)] text-white px-4 py-1.5 shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl -mt-24 relative z-10">
        <SectionReveal>
          {/* Navigation Breadcrumb Bar */}
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              prefetch={true}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-accent-blue)] transition-colors"
            >
              &larr; Home
            </Link>
            <span className="text-[var(--color-muted)]/30">|</span>
            <Link
              href="/projects"
              prefetch={true}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-accent-blue)] transition-colors"
            >
              Projects & Achievements
            </Link>
          </div>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] mb-6">
            <span className="text-[var(--color-accent-blue)] font-semibold">{post.type}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[var(--color-ink)] mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 pb-8 mb-8 border-b border-[var(--color-ink)]/10">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)]/20 flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-[var(--color-accent-blue)]">IC</span>
            </div>
            <div>
              <p className="font-sans font-semibold text-sm text-[var(--color-ink)]">{post.author}</p>
              <p className="font-mono text-xs text-[var(--color-muted)]">IoT Club VIT Pune</p>
            </div>
          </div>

          {/* Quick Metrics Bar if available */}
          {post.stats && post.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 mb-12 bg-[var(--color-surface-alt)]/80 backdrop-blur-sm border border-[var(--color-ink)]/10">
              {post.stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-muted)] mb-1">
                    {s.label}
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-[var(--color-ink)]">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Structured Sections / Paragraphs */}
          <div className="space-y-10">
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {section.title && (
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-[var(--color-ink)] tracking-tight pt-4 border-t border-[var(--color-ink)]/10 first:border-t-0 first:pt-0">
                    {section.title}
                  </h2>
                )}
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="font-sans text-lg text-[var(--color-ink)]/80 leading-[1.85]">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Milestones / Key Takeaways Box */}
          {post.milestones && post.milestones.length > 0 && (
            <div className="my-12 p-8 border-l-4 border-[var(--color-accent-blue)] bg-[var(--color-surface-alt)]">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-accent-blue)] mb-4">
                Key Milestones & Outcomes
              </h3>
              <ul className="space-y-3 font-sans text-base text-[var(--color-ink)]/85">
                {post.milestones.map((m, mIdx) => (
                  <li key={mIdx} className="flex items-start gap-3">
                    <span className="text-[var(--color-accent-blue)] font-bold">✔</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mt-14 pt-10 border-t border-[var(--color-ink)]/10 flex flex-wrap gap-3">
            {[post.type, post.category, "IoT Club", "VIT Pune"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs tracking-widest uppercase px-3 py-1.5 border border-[var(--color-ink)]/15 text-[var(--color-muted)] bg-[var(--color-surface-alt)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Join Call to Action */}
          <div className="mt-16 p-8 bg-[var(--color-surface-alt)] border border-[var(--color-ink)]/10">
            <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent-blue)] mb-3">
              Want to be part of the action?
            </p>
            <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-4">
              Join the IoT Club at VIT Pune
            </h3>
            <p className="font-sans text-[var(--color-muted)] mb-6 leading-relaxed">
              Be part of our growing community of innovators, builders, and tech enthusiasts. Apply now to join the club and achieve milestones like these.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center h-12 px-8 bg-[var(--color-ink)] text-[var(--color-surface)] font-sans font-bold text-sm tracking-widest uppercase hover:bg-[var(--color-accent-blue)] transition-colors"
            >
              Apply to Join
            </Link>
          </div>
        </SectionReveal>
      </div>
    </article>
  );
}
