import { useState } from "react";
import { z } from "zod";
import { Check, Loader2, MessageCircle, Calendar } from "lucide-react";

const intents = [
  "Love & Relationships",
  "Career Direction",
  "Financial Clarity",
  "Emotional Healing",
  "Self Discovery",
  "Marriage Guidance",
  "Business Growth",
  "Life Purpose",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(120),
  intent: z.string().min(1, "Please choose an intent"),
});

export function ReadingForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", intent: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSuccess(true);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi! I just claimed my free lucky number reading. My intent: ${form.intent}. Looking forward to your guidance.`,
  );

  return (
    <section id="reading" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Free Reading</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Claim your <span className="italic text-gradient-gold">lucky number</span>
          </h2>
          <p className="text-foreground/65 mt-4">
            A personalised numerology insight, delivered with care. Takes 30 seconds.
          </p>
        </div>

        <div className="max-w-xl mx-auto glass rounded-3xl p-7 md:p-10 glow-purple">
          {success ? (
            <div className="text-center py-6 animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-5 glow-gold">
                <Check className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl mb-3">Your reading is on its way ✨</h3>
              <p className="text-foreground/70 mb-7">
                I'll send your personalised lucky number within minutes. For a deeper consultation, connect now.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919999999999?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold text-primary-foreground font-medium glow-gold hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full glass hover:bg-card transition"
                >
                  <Calendar className="w-4 h-4" /> Book Consultation
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5" noValidate>
              <Field label="Full Name" error={errors.name}>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Aria Sharma"
                  className="input-base"
                />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="input-base"
                />
              </Field>
              <Field label="Email Address" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="input-base"
                />
              </Field>
              <div>
                <label className="block text-sm text-foreground/70 mb-3">Why are you seeking guidance?</label>
                <div className="flex flex-wrap gap-2">
                  {intents.map((i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setForm({ ...form, intent: i })}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        form.intent === i
                          ? "bg-gold text-primary-foreground border-transparent glow-gold"
                          : "border-border text-foreground/75 hover:border-gold/60 hover:text-gold"
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
                {errors.intent && <p className="text-destructive text-xs mt-2">{errors.intent}</p>}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gold text-primary-foreground font-medium glow-gold hover:scale-[1.01] transition-transform disabled:opacity-70"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {loading ? "Reading the stars..." : "Reveal My Lucky Number"}
              </button>
              <p className="text-[11px] text-center text-foreground/50">
                Your details are private and never shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm text-foreground/70 mb-2">{label}</label>
      {children}
      {error && <p className="text-destructive text-xs mt-1.5">{error}</p>}
    </div>
  );
}