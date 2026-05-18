"use client";

import { Github, Linkedin, Instagram, Mail, MessageSquare } from "lucide-react";
import { footer, contact, identity } from "@/data/content";

const getIcon = (name: string) => {
  switch (name) {
    case "EMAIL": return Mail;
    case "WHATSAPP": return MessageSquare;
    case "LINKEDIN": return Linkedin;
    case "GITHUB": return Github;
    case "INSTAGRAM": return Instagram;
    default: return Mail;
  }
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/20 bg-deep-black pt-16 pb-8 overflow-hidden">
      {/* Ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyan-desat/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-8 bg-cyan-desat/5 blur-[20px]" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Quote */}
        <p className="text-muted-foreground/60 text-sm font-mono max-w-md mb-10 leading-relaxed">
          <span className="text-cyan-desat/40 mr-1">{">"}</span>
          {footer.quote}
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contact.socials.map((social) => {
            const Icon = getIcon(social.name);
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border/30 flex items-center justify-center text-muted-foreground hover:border-cyan-desat/50 hover:text-cyan-desat hover:bg-cyan-desat/5 transition-all duration-300 interactive"
                aria-label={social.name}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* System status bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-muted-foreground/30 border-t border-border/15 pt-6 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-retro-green/50 animate-pulse" />
            <span className="tracking-widest">SYSTEM_ONLINE</span>
          </div>
          <span className="tracking-wider">
            © {new Date().getFullYear()} {footer.copyrightName || (identity.name ? identity.name.toUpperCase() + ".SYS" : "ALWAN.SYS")} — All rights reserved.
          </span>
          <span className="tracking-widest hidden md:block">
            BUILD: {footer.buildVersion}
          </span>
        </div>
      </div>
    </footer>
  );
}
