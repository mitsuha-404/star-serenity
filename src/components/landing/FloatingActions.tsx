import { MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp floating */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-5 md:bottom-6 md:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-4 bg-gradient-to-t from-background via-background/95 to-transparent">
        <a
          href="#reading"
          className="block w-full text-center px-6 py-4 rounded-full bg-gold text-primary-foreground font-medium glow-gold"
        >
          Reveal My Lucky Number ✨
        </a>
      </div>
    </>
  );
}