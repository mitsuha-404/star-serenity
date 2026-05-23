import handsImg from "@/assets/hands-glow.jpg";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-secondary/30 blur-3xl rounded-full" />
          <img
            src={handsImg}
            alt="Sacred numerology guidance"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative rounded-3xl glass p-2 w-full"
          />
        </div>
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold">About the Practice</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 leading-tight">
            Ancient wisdom, <span className="text-gradient-gold italic">modern clarity</span>
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-5">
            For over a decade, I've helped women across the world decode their numbers — uncovering the patterns that shape their love stories, careers, and emotional healing.
          </p>
          <p className="text-foreground/60 leading-relaxed mb-8">
            Every reading is intuitive, personal, and rooted in the timeless science of numerology. No noise. Just truth, calm, and direction.
          </p>
          <a href="#reading" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
            Begin your reading <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}