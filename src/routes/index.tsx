import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Rocket, TrendingUp, Target, Users, Briefcase, Zap, Sparkles, ArrowUpRight,
  Mail, Linkedin, MapPin, Download, Calendar, GraduationCap, Award, BookOpen,
  Quote, Star, Send, CheckCircle2, Building2, Lightbulb, Network, Cpu,
  ChevronLeft, ChevronRight, BarChart3, Brain, Globe,
} from "lucide-react";
import { Particles } from "@/components/Particles";
import { Counter, Reveal } from "@/components/motion-utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anwarr Ulhaq — Technical Program Manager & Startup Ecosystem Builder" },
      { name: "description", content: "PMP-certified Technical Program Manager. 200+ startups scaled, PKR 300M+ revenue, PKR 220M+ investment raised." },
    ],
  }),
  component: Portfolio,
});

/* ============================== LOADER ============================== */
function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] grid place-items-center"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="relative">
        <div className="spin-slow absolute -inset-12 rounded-full border border-white/10" />
        <div className="spin-reverse absolute -inset-20 rounded-full border border-white/5" />
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="relative grid h-24 w-24 place-items-center rounded-2xl neon-glow"
          style={{ background: "var(--gradient-border)" }}
        >
          <Sparkles className="h-10 w-10 text-white" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="absolute top-full mt-8 left-1/2 -translate-x-1/2 text-center w-max"
        >
          <div className="text-2xl font-display font-bold shimmer-text">ANWARR ULHAQ</div>
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground mt-2">Initializing…</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ============================== BACKGROUND ============================== */
function TechBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="orb absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, rgba(160,32,240,0.55), transparent 70%)" }} />
      <div className="orb absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, rgba(255,77,255,0.4), transparent 70%)", animationDelay: "3s" }} />
      <div className="orb absolute bottom-0 left-1/4 h-96 w-96 rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, rgba(0,191,255,0.45), transparent 70%)", animationDelay: "6s" }} />
      {[0, 1.5, 3, 4.5, 6].map((d, i) => (
        <div key={i} className="beam" style={{ top: `${10 + i * 18}%`, animationDelay: `${d}s` }} />
      ))}
    </div>
  );
}

/* ============================== NAV ============================== */
const NAV = [
  ["About", "about"], ["Impact", "impact"], ["Experience", "experience"],
  ["Network", "network"], ["Skills", "skills"], ["Certifications", "certs"],
  ["Education", "education"], ["Research", "research"], ["Testimonials", "testimonials"],
  ["Contact", "contact"],
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.8 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all ${scrolled ? "rounded-2xl glass" : ""}`}>
        <div className="flex items-center justify-between py-2">
          <a href="#top" className="flex items-center gap-2 font-display font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg pulse-ring"
                  style={{ background: "var(--gradient-border)" }}>
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-gradient">Anwarr Ulhaq</span>
          </a>
          <ul className="hidden xl:flex items-center gap-0 text-sm">
            {NAV.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`}
                   className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact"
             className="magnetic-btn hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white"
             style={{ background: "var(--gradient-border)" }}>
            Let's talk <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ============================== HERO ============================== */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Particles density={70} />
      </div>

      {/* Rotating rings */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="spin-slow h-[680px] w-[680px] rounded-full border border-white/5" />
        <div className="spin-reverse absolute inset-12 rounded-full border border-white/5" />
        <div className="spin-slow absolute inset-24 rounded-full border border-white/5" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium glass mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to global opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.9 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            <span className="block shimmer-text">ANWARR ULHAQ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
            className="text-lg sm:text-2xl font-display text-gradient mb-2">
            Technical Program Manager · Startup Incubation & Venture Operations
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
            className="text-sm sm:text-base text-muted-foreground mb-10">
            Certified PMP & Business Intelligence Professional
          </motion.p>

          {/* KPI counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.6 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto mb-10">
            {[
              { v: <><Counter to={200} suffix="+" /></>, l: "Startups Scaled" },
              { v: <>PKR <Counter to={300} suffix="M+" /></>, l: "Revenue Generated" },
              { v: <>PKR <Counter to={220} suffix="M+" /></>, l: "Investment Raised" },
            ].map((k, i) => (
              <div key={i} className="glass rounded-2xl p-4 sm:p-5">
                <div className="text-xl sm:text-3xl font-display font-bold text-gradient">{k.v}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider">{k.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }}
            className="flex flex-wrap items-center justify-center gap-3">
            <a href="/resume.pdf" download
               className="magnetic-btn inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white"
               style={{ background: "var(--gradient-border)" }}>
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#experience"
               className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:border-white/40 transition-all">
              <Rocket className="h-4 w-4" /> View Experience
            </a>
            <a href="https://linkedin.com/in/anwarr-ulhaq" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:border-white/40 transition-all">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}
            className="mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Rawalpindi, Pakistan
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================== ABOUT ============================== */
const ABOUT_PILLARS = [
  { icon: Rocket, label: "Startup Ecosystems" },
  { icon: BarChart3, label: "Operational Strategy" },
  { icon: Lightbulb, label: "Innovation Management" },
  { icon: Briefcase, label: "Venture Development" },
  { icon: Cpu, label: "Technology Programs" },
];
function About() {
  return (
    <Section id="about" eyebrow="About" title={<>Working at the edge of <span className="text-gradient">innovation</span></>}>
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <Reveal x={-30} className="lg:col-span-3">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Program management professional with 5+ years at <span className="text-foreground">PITB Incubation Wing</span>,
            designing and executing incubation and acceleration programs supporting
            <span className="text-foreground"> 200+ startups</span> across fintech, AI, edtech, AR/VR, and digital commerce.
            Proven strength in building structured execution systems, KPI tracking, milestone-based program design,
            cross-functional stakeholder coordination, and founder support frameworks.
          </p>
        </Reveal>
        <div className="lg:col-span-2 space-y-3">
          {ABOUT_PILLARS.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08} x={30}>
              <div className="neon-border rounded-2xl p-4 flex items-center gap-4 group hover:translate-x-1 transition-transform">
                <span className="grid h-10 w-10 place-items-center rounded-lg neon-glow"
                      style={{ background: "var(--gradient-border)" }}>
                  <p.icon className="h-5 w-5 text-white" />
                </span>
                <span className="font-medium">{p.label}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============================== IMPACT ============================== */
const METRICS = [
  { to: 200, suffix: "+", label: "Startups Supported", icon: Rocket, prefix: "" },
  { to: 300, suffix: "M+", label: "Revenue Generated (PKR)", icon: TrendingUp, prefix: "" },
  { to: 220, suffix: "M+", label: "Investment Raised (PKR)", icon: Target, prefix: "" },
  { to: 10000, suffix: "+", label: "Individuals Trained", icon: Users, prefix: "" },
  { to: 500, suffix: "+", label: "Internships Facilitated", icon: Briefcase, prefix: "" },
  { to: 1500, suffix: "+", label: "Jobs Created", icon: Zap, prefix: "" },
];
function Impact() {
  return (
    <Section id="impact" eyebrow="Key Impact" title={<>Numbers that tell the <span className="text-gradient">story</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08}>
            <motion.div whileHover={{ y: -6, scale: 1.02 }}
              className="neon-border rounded-2xl p-6 relative overflow-hidden group">
              {/* fake animated graph */}
              <svg className="absolute right-2 bottom-2 opacity-20 group-hover:opacity-40 transition-opacity"
                   width="120" height="50" viewBox="0 0 120 50">
                <defs>
                  <linearGradient id={`g${i}`} x1="0" x2="1">
                    <stop offset="0%" stopColor="#00bfff" />
                    <stop offset="100%" stopColor="#ff4dff" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0,40 Q20,10 40,25 T80,15 T120,5"
                  fill="none" stroke={`url(#g${i})`} strokeWidth="2"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 + i * 0.1 }}
                />
              </svg>
              <m.icon className="h-7 w-7 mb-4" style={{ color: "var(--neon-blue)" }} />
              <div className="text-3xl sm:text-4xl font-display font-bold text-gradient">
                {m.prefix && m.prefix}<Counter to={m.to} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== EXPERIENCE ============================== */
const EXPERIENCE = [
  { role: "Technical Program Manager", org: "PITB Incubation Wing — Punjab IT Board",
    period: "Jan 2021 – Present · 5+ yrs", location: "Rawalpindi, Pakistan",
    bullets: ["Led 200+ startups across fintech, AI, edtech, AR/VR & digital commerce.",
      "Implemented KPI tracking & milestone-based frameworks.",
      "Enabled PKR 300M+ revenue & PKR 220M+ investment for portfolio.",
      "Shifted program model from event-driven to outcome-driven.",
      "1,500+ jobs created · 10,000+ trained · 500+ internships."] },
  { role: "Project Consultant", org: "Ignite — National Technology Fund",
    period: "Jan 2026 – Feb 2026 · Contract", location: "Islamabad · Hybrid",
    bullets: ["Innovation-focused initiatives in Pakistan's national tech funding ecosystem.",
      "Program-level execution in public-sector innovation environment."] },
  { role: "Founder & Program Director", org: "Brainiac's Digitalized Education System",
    period: "Aug 2019 – Dec 2025 · 6+ yrs", location: "Mardan, KP",
    bullets: ["Founded a digital education initiative for tech awareness & skill development.",
      "Designed AI awareness, digital tools & entrepreneurship workshops."] },
  { role: "Marketing & Digital Channel Manager", org: "Dars Ul Quran",
    period: "Nov 2018 – Present · Part-time", location: "Mardan, KP",
    bullets: ["Managed digital content strategy & publishing workflows.",
      "Improved audience engagement through structured planning."] },
  { role: "Provincial Coordinator", org: "Million Smiles Foundation",
    period: "Jan 2015 – Jul 2021 · 6+ yrs", location: "Khyber Pakhtunkhwa",
    bullets: ["Regional coordination of youth-led SDG-aligned welfare initiatives.",
      "Executed 15+ large-scale welfare initiatives."] },
  { role: "Visiting Lecturer", org: "ANSI Degree College Mardan",
    period: "Dec 2020 – Jan 2021 · Part-time", location: "Pakistan",
    bullets: ["Lectured MBA & BBA students on management & entrepreneurship."] },
  { role: "Assistant Operations Manager", org: "The Bank of Khyber",
    period: "Aug 2018 – Sep 2019", location: "Mardan, KP",
    bullets: ["Managed branch operations in a regulated financial environment.",
      "Built strong foundation in governance & operational discipline."] },
];

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>A track record of <span className="text-gradient">execution</span></>}>
      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          style={{ transformOrigin: "top", background: "linear-gradient(to bottom, transparent, #00bfff, #a020f0, #ff4dff, transparent)" }}
          className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
        />
        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.org}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className={`relative flex ${i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 mt-6 z-10">
                <div className="h-4 w-4 rounded-full pulse-ring" style={{ background: "var(--gradient-border)" }} />
              </div>
              <motion.div whileHover={{ y: -4 }}
                className={`ml-12 sm:ml-0 sm:w-[46%] neon-border rounded-2xl p-6 ${i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"}`}>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3.5 w-3.5" /> {exp.period}
                </div>
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <div className="text-sm font-medium mb-1" style={{ color: "var(--neon-blue)" }}>{exp.org}</div>
                <div className="text-xs text-muted-foreground mb-4 inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {exp.location}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.bullets.map((b, k) => (
                    <li key={k} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full flex-shrink-0" style={{ background: "var(--neon-pink)" }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============================== NETWORK VIZ ============================== */
const NODES = [
  { label: "Founders", icon: Rocket, angle: -90 },
  { label: "Investors", icon: TrendingUp, angle: -18 },
  { label: "Mentors", icon: Brain, angle: 54 },
  { label: "Government", icon: Building2, angle: 126 },
  { label: "Corporates", icon: Globe, angle: 198 },
];
function Network_() {
  return (
    <Section id="network" eyebrow="Ecosystem Impact" title={<>A connected <span className="text-gradient">venture network</span></>}>
      <div className="relative aspect-square max-w-2xl mx-auto">
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="linegrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00bfff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ff4dff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {NODES.map((n, i) => {
            const x = 200 + Math.cos((n.angle * Math.PI) / 180) * 160;
            const y = 200 + Math.sin((n.angle * Math.PI) / 180) * 160;
            return (
              <motion.line
                key={n.label}
                x1="200" y1="200" x2={x} y2={y}
                stroke="url(#linegrad)" strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
              />
            );
          })}
          {/* connections between nodes */}
          {NODES.map((n, i) => {
            const next = NODES[(i + 1) % NODES.length];
            const x1 = 200 + Math.cos((n.angle * Math.PI) / 180) * 160;
            const y1 = 200 + Math.sin((n.angle * Math.PI) / 180) * 160;
            const x2 = 200 + Math.cos((next.angle * Math.PI) / 180) * 160;
            const y2 = 200 + Math.sin((next.angle * Math.PI) / 180) * 160;
            return (
              <motion.line key={i + "-c"} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(160,32,240,0.25)" strokeWidth="1" strokeDasharray="3 4"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 + i * 0.1 }}
              />
            );
          })}
        </svg>

        {/* center node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="grid h-28 w-28 sm:h-36 sm:w-36 place-items-center rounded-full pulse-ring neon-glow"
            style={{ background: "var(--gradient-border)" }}>
            <div className="text-center text-white px-3">
              <Network className="h-6 w-6 mx-auto mb-1" />
              <div className="text-lg font-bold leading-none">200+</div>
              <div className="text-[10px] uppercase tracking-wider mt-1">Startups Scaled</div>
            </div>
          </motion.div>
        </div>

        {/* nodes */}
        {NODES.map((n, i) => {
          const x = 50 + Math.cos((n.angle * Math.PI) / 180) * 40;
          const y = 50 + Math.sin((n.angle * Math.PI) / 180) * 40;
          return (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.12, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${y}%`, left: `${x}%` }}>
              <div className="glass rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2">
                <n.icon className="h-4 w-4" style={{ color: "var(--neon-pink)" }} />
                <span className="text-xs sm:text-sm font-medium">{n.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================== SKILLS MATRIX ============================== */
const SKILL_GROUPS = [
  { icon: Target, title: "Program Management", color: "#a020f0",
    items: [["PMP", 95], ["KPI Tracking", 92], ["Program Design", 90], ["Stakeholder Management", 94]] },
  { icon: Rocket, title: "Startup Ecosystems", color: "#00bfff",
    items: [["Incubation", 96], ["Acceleration", 92], ["Venture Operations", 88], ["Founder Support", 93]] },
  { icon: BarChart3, title: "Business & Strategy", color: "#ff4dff",
    items: [["Business Intelligence", 88], ["Digital Transformation", 85], ["Innovation Strategy", 90], ["Ecosystem Development", 92]] },
] as const;

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>A futuristic <span className="text-gradient">skill matrix</span></>}>
      <div className="grid lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.12}>
            <motion.div whileHover={{ y: -6 }}
              className="neon-border rounded-2xl p-7 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl"
                      style={{ background: `linear-gradient(135deg, ${g.color}, rgba(255,255,255,0.05))`, boxShadow: `0 0 30px ${g.color}55` }}>
                  <g.icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.items.map(([name, pct]) => (
                  <div key={name as string}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-foreground">{name}</span>
                      <span className="text-muted-foreground">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${g.color}, #ff4dff)`, boxShadow: `0 0 10px ${g.color}` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== CERTIFICATIONS ============================== */
const CERTS = [
  { name: "AI in Project Management", org: "PMI", year: "2026" },
  { name: "Google Project Management", org: "Google", year: "2023" },
  { name: "Google Business Intelligence", org: "Google", year: "2023" },
  { name: "Innovation & Entrepreneurship", org: "Tec de Monterrey", year: "2023" },
  { name: "Google Digital Marketing & E-com", org: "Google", year: "2023" },
  { name: "FinTech: Industry Transformation", org: "HKUST", year: "2023" },
  { name: "Investment Management", org: "Univ. of Geneva", year: "2023" },
  { name: "Excel Skills for Business", org: "Macquarie", year: "2023" },
  { name: "Creating a Tech Startup", org: "HEC Paris", year: "2023" },
  { name: "Digital Business Models", org: "Lund University", year: "2023" },
  { name: "Managerial Economics", org: "UIUC", year: "2023" },
  { name: "Financial Management", org: "UIUC", year: "2023" },
];
function CertCard({ c }: { c: typeof CERTS[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 10, ry: x * 10 });
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      style={{ transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`, transition: "transform 0.2s" }}
      className="neon-border rounded-2xl p-5 relative overflow-hidden group">
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"
           style={{ background: "var(--neon-purple)" }} />
      <Award className="h-7 w-7 mb-3 relative z-10" style={{ color: "var(--neon-blue)" }} />
      <div className="font-semibold text-sm leading-snug relative z-10">{c.name}</div>
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground relative z-10">
        <span>{c.org}</span>
        <span className="font-mono">{c.year}</span>
      </div>
    </motion.div>
  );
}
function Certifications() {
  return (
    <Section id="certs" eyebrow="Licenses & Certifications" title={<>Continuously <span className="text-gradient">leveling up</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CERTS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}><CertCard c={c} /></Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== EDUCATION ============================== */
const EDUCATION = [
  { degree: "MBA — Finance", school: "Abdul Wali Khan University Mardan", period: "2016 – 2020", note: "CGPA 3.27 · Corporate finance, investment analysis, financial governance." },
  { degree: "MA — International Relations & Affairs", school: "Abdul Wali Khan University Mardan", period: "2020 – 2022", note: "1st Division · Governance, policy analysis, institutional strategy." },
  { degree: "BA — Economics & Political Science", school: "Abdul Wali Khan University Mardan", period: "2015 – 2017", note: "2nd Division" },
  { degree: "ACCA — Business & Accounting", school: "Professional Academy of Commerce", period: "2013 – 2014", note: "Accounting, financial reporting, business law." },
];
function Education() {
  return (
    <Section id="education" eyebrow="Education" title={<>Academic <span className="text-gradient">milestones</span></>}>
      <div className="grid sm:grid-cols-2 gap-5">
        {EDUCATION.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 0.1}>
            <motion.div whileHover={{ y: -4 }}
              className="neon-border rounded-2xl p-6 relative overflow-hidden group h-full">
              <GraduationCap className="absolute -right-6 -top-6 h-28 w-28 opacity-5 group-hover:opacity-20 transition-opacity" />
              <div className="text-xs text-muted-foreground mb-2">{ed.period}</div>
              <h3 className="text-lg font-semibold mb-1">{ed.degree}</h3>
              <div className="text-sm mb-3" style={{ color: "var(--neon-blue)" }}>{ed.school}</div>
              <p className="text-sm text-muted-foreground">{ed.note}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== RESEARCH ============================== */
const PUBS = [
  { title: "Earnings Quality & Stock Returns Analysis", venue: "International Conference on Issues in Management and Social Sciences",
    type: "Conference Presentation", date: "Aug 2020",
    abstract: "Presented research on earnings quality and its impact on stock return performance among publicly listed firms at an international academic conference." },
  { title: "Impact of Training on SME Performance", venue: "International Review of Basic and Applied Sciences",
    type: "Published Research", date: "Jun 2020",
    abstract: "Examined the relationship between structured employee training programs and measurable performance outcomes within SME environments." },
];
function Research() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="research" eyebrow="Research & Publications" title={<>Research that <span className="text-gradient">moves the field</span></>}>
      <div className="grid lg:grid-cols-2 gap-6">
        {PUBS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -4 }}
              onClick={() => setOpen(open === i ? null : i)}
              className="neon-border rounded-2xl p-6 cursor-pointer">
              <div className="flex items-center gap-2 text-xs mb-3">
                <BookOpen className="h-4 w-4" style={{ color: "var(--neon-pink)" }} />
                <span style={{ color: "var(--neon-pink)" }}>{p.type}</span>
                <span className="text-muted-foreground">· {p.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <div className="text-sm" style={{ color: "var(--neon-blue)" }}>{p.venue}</div>
              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="text-sm text-muted-foreground overflow-hidden">
                    {p.abstract}
                  </motion.p>
                )}
              </AnimatePresence>
              <div className="text-xs text-muted-foreground mt-3">
                {open === i ? "Click to collapse" : "Click to expand"}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== TESTIMONIALS ============================== */
const TESTIMONIALS = [
  { name: "Noushin Paracha", role: "Certified NLP & Silva Master Practitioner · CEO & Founder",
    quote: "Anwar has an exceptional ability to bridge technology, business strategy, and startup development. His work in mentoring ventures and supporting startup ecosystems reflects not only his technical expertise but also his genuine commitment to empowering entrepreneurs and driving meaningful impact. What stands out is his clarity of thought, strong leadership mindset, and dedication to building solutions that create sustainable growth." },
  { name: "Sadeeq Khan", role: "Senior Program Manager, Service Pro · Direct Report",
    quote: "Anwarr has a unique ability to combine strategic thinking with practical execution. He provides clear direction, sets realistic goals, and ensures everyone understands their responsibilities. What truly sets him apart is his mentorship — he guided me both professionally and personally, helping me strengthen my decision-making, leadership skills, and confidence." },
];
function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[idx];
  return (
    <Section id="testimonials" eyebrow="Testimonials" title={<>Trusted by <span className="text-gradient">leaders</span></>}>
      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="neon-border rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30"
                 style={{ background: "radial-gradient(circle at top right, rgba(255,77,255,0.3), transparent 60%)" }} />
            <Quote className="h-10 w-10 mb-6 relative" style={{ color: "var(--neon-pink)" }} />
            <p className="text-lg sm:text-xl leading-relaxed relative">{t.quote}</p>
            <div className="mt-6 flex items-center gap-3 relative">
              {[...Array(5)].map((_, i) => (
                <motion.span key={i}
                  initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, type: "spring" }}>
                  <Star className="h-4 w-4 fill-current" style={{ color: "#fbbf24" }} />
                </motion.span>
              ))}
            </div>
            <div className="mt-6 relative">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="glass rounded-full p-2 hover:scale-110 transition-transform">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8" : "w-2"}`}
                style={{ background: i === idx ? "var(--gradient-border)" : "rgba(255,255,255,0.2)" }} />
            ))}
          </div>
          <button onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
                  className="glass rounded-full p-2 hover:scale-110 transition-transform">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}

/* ============================== CONTACT ============================== */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's <span className="text-gradient">build something</span></>}>
      <div className="grid lg:grid-cols-5 gap-8">
        <Reveal x={-30} className="lg:col-span-2 space-y-6">
          <p className="text-muted-foreground">
            Open to global opportunities in Program/Project Management, Operations & Strategy,
            Startup & Venture Ecosystems, and Technical Program Management.
          </p>
          {[
            { icon: MapPin, label: "Rawalpindi, Punjab, Pakistan" },
            { icon: Linkedin, label: "linkedin.com/in/anwarr-ulhaq", href: "https://linkedin.com/in/anwarr-ulhaq" },
            { icon: Mail, label: "Available on request", href: "mailto:hello@example.com" },
          ].map((c, i) => (
            <a key={i} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
               className="flex items-center gap-3 glass rounded-2xl p-4 hover:border-white/40 transition-all group">
              <span className="grid h-10 w-10 place-items-center rounded-lg neon-glow"
                    style={{ background: "var(--gradient-border)" }}>
                <c.icon className="h-4 w-4 text-white" />
              </span>
              <span className="text-sm">{c.label}</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          ))}
        </Reveal>

        <Reveal x={30} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="neon-border rounded-3xl p-7 sm:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <Field label="Subject" name="subject" placeholder="What's it about?" required />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <textarea
                name="message" rows={5} required placeholder="Tell me a bit more…"
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-[var(--neon-purple)] focus:ring-2 focus:ring-[var(--neon-purple)]/30 transition-all resize-none"
              />
            </div>
            <button type="submit"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium text-white"
              style={{ background: "var(--gradient-border)" }}>
              {sent ? <><CheckCircle2 className="h-4 w-4" /> Sent — thanks!</> : <><Send className="h-4 w-4" /> Send message</>}
            </button>
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-sm text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Your message is queued — I'll reply within 24 hours.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-[var(--neon-purple)] focus:ring-2 focus:ring-[var(--neon-purple)]/30 transition-all"
      />
    </div>
  );
}

/* ============================== FOOTER ============================== */
function Footer() {
  return (
    <footer className="relative mt-20 pt-12 pb-8 px-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px"
           style={{ background: "linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)" }} />
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full blur-3xl"
             style={{ background: "radial-gradient(ellipse, rgba(160,32,240,0.3), transparent 70%)" }} />
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg pulse-ring"
                  style={{ background: "var(--gradient-border)" }}>
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <div>
              <div className="font-display font-bold text-gradient">Anwarr Ulhaq</div>
              <div className="text-xs text-muted-foreground">Technical Program Manager</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/anwarr-ulhaq" },
              { icon: Mail, href: "mailto:hello@example.com" },
              { icon: Download, href: "/resume.pdf" },
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                 className="glass rounded-full p-3 hover:scale-110 hover:border-white/40 transition-all">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Anwarr Ulhaq. Crafted with motion, light & care.
        </div>
      </div>
    </footer>
  );
}

/* ============================== SECTION PRIMITIVE ============================== */
function Section({ id, eyebrow, title, children }:
  { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] mb-4"
               style={{ color: "var(--neon-blue)" }}>
            <span className="h-px w-8" style={{ background: "var(--neon-blue)" }} />
            {eyebrow}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ============================== PAGE ============================== */
function Portfolio() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>
      <TechBackground />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Network_ />
        <Skills />
        <Certifications />
        <Education />
        <Research />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
