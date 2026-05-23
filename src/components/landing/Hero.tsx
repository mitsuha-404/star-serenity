import heroBg from "@/assets/hero-cosmic.jpg";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="container relative mx-auto px-5 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-7 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs tracking-widest uppercase text-foreground/80">Trusted Numerology Guidance</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Discover the <span className="shimmer-text italic">numbers</span><br />
          shaping your destiny
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-lg text-foreground/70 mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Unlock clarity in love, career, and life purpose through ancient numerology — guided by intuition, decoded for the modern soul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#reading"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold text-primary-foreground font-medium glow-gold hover:scale-[1.03] transition-transform w-full sm:w-auto"
          >
            Reveal My Lucky Number
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full glass text-foreground hover:bg-card transition-colors w-full sm:w-auto"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { n: "15K+", l: "Souls Guided" },
            { n: "4.9★", l: "Avg Rating" },
            { n: "12yr", l: "Experience" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-2xl md:text-3xl text-gradient-gold">{s.n}</div>
              <div className="text-[11px] md:text-xs uppercase tracking-widest text-foreground/60 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}