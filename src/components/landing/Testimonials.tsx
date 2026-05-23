import { Star } from "lucide-react";

const reviews = [
  { name: "Priya M.", role: "Mumbai", text: "Her reading shifted something in me. I finally understood my own patterns in love. Truly magical." },
  { name: "Sara K.", role: "Dubai", text: "I was lost about my career. One session — and everything fell into place. Highly intuitive." },
  { name: "Anika R.", role: "London", text: "So calming, so accurate. It feels like meeting someone who already knows your soul." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Whispers from Souls</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Stories of <span className="italic text-gradient-gold">awakening</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="glass rounded-3xl p-7">
              <div className="flex gap-1 text-gold mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic mb-6">"{r.text}"</p>
              <div>
                <div className="font-display text-lg text-gold">{r.name}</div>
                <div className="text-xs text-foreground/55 tracking-wider uppercase">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}