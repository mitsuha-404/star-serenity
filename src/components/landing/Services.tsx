import { Heart, Briefcase, Coins, Sparkles, Users, Compass } from "lucide-react";

const services = [
  { icon: Heart, title: "Love & Relationships", desc: "Decode compatibility, soul connections, and emotional patterns." },
  { icon: Briefcase, title: "Career Direction", desc: "Find the path aligned with your numbers and your purpose." },
  { icon: Coins, title: "Financial Clarity", desc: "Understand your wealth cycles and money blueprint." },
  { icon: Sparkles, title: "Emotional Healing", desc: "Release blockages with personalized number rituals." },
  { icon: Users, title: "Marriage Guidance", desc: "Pre-marital and partnership numerology consultations." },
  { icon: Compass, title: "Life Purpose", desc: "Discover your life path number and soul mission." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">What I Offer</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Guidance for every <span className="italic text-gradient-gold">season of your soul</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass rounded-3xl p-7 hover:bg-card/60 transition-all duration-500 hover:-translate-y-1 group"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <s.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-2xl mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}