import { MessageCircle, Calendar, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="glass rounded-[2rem] p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden glow-purple">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Begin Your Journey</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 mb-5 leading-tight">
              Ready to meet <br /><span className="italic text-gradient-gold">your numbers?</span>
            </h2>
            <p className="text-foreground/70 max-w-lg mx-auto mb-9">
              Book a private consultation or message me directly — I personally respond to every soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gold text-primary-foreground font-medium glow-gold hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Me
              </a>
              <a
                href="#reading"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass hover:bg-card transition"
              >
                <Calendar className="w-4 h-4" /> Book Consultation
              </a>
              <a
                href="mailto:hello@numera.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass hover:bg-card transition"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}