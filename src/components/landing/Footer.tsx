import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 pb-28 md:pb-10">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="font-display text-lg text-gradient-gold">Numera</span>
        </div>
        <p className="text-xs text-foreground/50">© {new Date().getFullYear()} Numera Numerology. Guided with intention.</p>
      </div>
    </footer>
  );
}