"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Send, MessageSquare } from "lucide-react";
import { contact } from "@/data/content";

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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full py-28 min-h-[80vh] flex items-center border-t border-border/30"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-cyan-desat/3 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-muted-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="text-cyan-desat font-mono text-sm mb-4">08.</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
            {contact.heading}
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-lg leading-relaxed">
            <span className="text-cyan-desat mr-1">{">"}</span>
            {contact.description}
          </p>
        </motion.div>

        <div className="w-full max-w-3xl grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 border border-border/30 bg-matte-black/60 backdrop-blur-md shadow-2xl shadow-black/20 overflow-hidden"
          >
            {/* Window chrome */}
            <div className="h-9 bg-matte-black/80 border-b border-border/30 flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-warning-red/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-soft-amber/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-retro-green/60" />
              </div>
              <span className="ml-3 font-pixel text-[9px] text-muted-foreground tracking-widest">
                transmit.sys
              </span>
            </div>

            <div className="p-6 md:p-8 flex flex-col gap-6 relative">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,rgba(0,0,0,0.05)_2px,rgba(0,0,0,0.05)_4px)] pointer-events-none" />

              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-pixel text-[9px] text-muted-purple tracking-widest uppercase">
                    Entity Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setIsFocused("name")}
                    onBlur={() => setIsFocused(null)}
                    className={`bg-transparent border-b py-2.5 font-mono text-sm text-warm-white outline-none transition-colors placeholder:text-muted-foreground/30 ${
                      isFocused === "name"
                        ? "border-cyan-desat"
                        : "border-border/40"
                    }`}
                    placeholder="Enter designation..."
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-pixel text-[9px] text-muted-purple tracking-widest uppercase">
                    Comm Channel (Email)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setIsFocused("email")}
                    onBlur={() => setIsFocused(null)}
                    className={`bg-transparent border-b py-2.5 font-mono text-sm text-warm-white outline-none transition-colors placeholder:text-muted-foreground/30 ${
                      isFocused === "email"
                        ? "border-cyan-desat"
                        : "border-border/40"
                    }`}
                    placeholder="Enter valid transmission address..."
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-pixel text-[9px] text-muted-purple tracking-widest uppercase">
                    Payload (Message)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setIsFocused("message")}
                    onBlur={() => setIsFocused(null)}
                    className={`bg-transparent border-b py-2.5 font-mono text-sm text-warm-white outline-none transition-colors resize-none placeholder:text-muted-foreground/30 ${
                      isFocused === "message"
                        ? "border-cyan-desat"
                        : "border-border/40"
                    }`}
                    placeholder="Detail your requirements..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="relative z-10 self-start mt-2 px-7 py-3.5 bg-cyan-desat/10 text-cyan-desat border border-cyan-desat/50 hover:bg-cyan-desat hover:text-matte-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-mono font-bold uppercase text-xs tracking-widest interactive flex items-center gap-2 group"
                >
                  <Send className={`w-3.5 h-3.5 ${status === "submitting" ? "animate-pulse" : "group-hover:translate-x-0.5 transition-transform"}`} />
                  {status === "submitting" ? "TRANSMITTING..." : status === "success" ? "TRANSMISSION SUCCESS" : status === "error" ? "TRANSMISSION FAILED" : "TRANSMIT DATA"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Social links sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-2"
          >
            <span className="font-pixel text-[9px] text-muted-foreground/40 tracking-widest mb-2">
              COMMUNICATION_CHANNELS
            </span>
            {contact.socials.map((link, i) => {
              const Icon = getIcon(link.name);
              return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="flex items-center gap-3 p-3 border border-border/20 hover:border-cyan-desat/30 hover:bg-cyan-desat/5 transition-all duration-300 group interactive"
              >
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-cyan-desat transition-colors" />
                <div className="flex flex-col">
                  <span className="font-pixel text-[8px] text-muted-foreground/40 tracking-widest">
                    {link.name}
                  </span>
                  <span className="font-mono text-xs text-warm-white/70 group-hover:text-cyan-desat transition-colors">
                    {link.label}
                  </span>
                </div>
              </motion.a>
            )})}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
