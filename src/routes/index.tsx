import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Briefcase, GraduationCap, Award, BookOpen, Quote, Mail, Linkedin, MapPin,
  Sparkles, Rocket, TrendingUp, Users, Target, Zap, ArrowUpRight, Calendar,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anwarr Ulhaq — Technical Program Manager" },
      { name: "description", content: "Portfolio of Anwarr Ulhaq — scaling 200+ startups with PMP-certified program management." },
    ],
  }),
  component: Portfolio,
});

/* ---------------- Animated Tech Background ---------------- */
function TechBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-40" />
      {/* Orbs */}
      <div className="orb absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.6 0.28 285 / 0.6), transparent 70%)" }} />
      <div className="orb absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.62 0.28 330 / 0.5), transparent 70%)", animationDelay: "3s" }} />
      <div className="orb absolute bottom-0 left-1/3 h-80 w-80 rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.7 0.25 255 / 0.45), transparent 70%)", animationDelay: "6s" }} />
      {/* Beams */}
      <div className="absolute inset-0">
        {[0, 2, 4, 6].map((d) => (
          <div key={d} className="beam" style={{ top: `${15 + d * 15}%`, animationDelay: `${d}s` }} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Nav ---------------- */
const NAV = [
  ["About", "about"], ["Impact", "impact"], ["Experience", "experience"],
  ["Skills", "skills"], ["Education", "education"], ["Certifications", "certs"],
  ["Blog", "blog"], ["Contact", "contact"],
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
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all ${scrolled ? "rounded-2xl glass" : ""}`}
           style={scrolled ? { boxShadow: "var(--shadow-card)" } : {}}>
        <div className="flex items-center justify-between py-2">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-8 w-8 place-items-center rounded-lg pulse-glow"
                  style={{ background: "var(--gradient-border)" }}>
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-gradient">Anwarr Ulhaq</span>
          </a>
          <ul className="hidden lg:flex items-center gap-1 text-sm">
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
             className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
             style={{ background: "var(--gradient-border)", boxShadow: "var(--shadow-glow)" }}>
            Let's talk <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <motion.div style={{ y }} className="text-center max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium glass mb-8">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Open to global opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
          <span className="block shimmer-text">Anwarr Ulhaq</span>
          <span className="block text-gradient mt-2">Building Startup Ecosystems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Technical Program Manager working at the intersection of <span className="text-foreground">venture operations</span>,
          incubation, and tech innovation. PMP-certified, 200+ startups scaled.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4">
          <a href="#experience"
             className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium text-white transition-transform hover:scale-105"
             style={{ background: "var(--gradient-border)", boxShadow: "var(--shadow-glow)" }}>
            View experience <Rocket className="h-4 w-4" />
          </a>
          <a href="#contact"
             className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium glass hover:border-white/40 transition-all">
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Rawalpindi, Pakistan</span>
          <span className="hidden sm:inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> /in/anwarr-ulhaq</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <Section id="about" eyebrow="About" title={<>Program management at the <span className="text-gradient">edge of innovation</span></>}>
      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
        Over 5+ years at PITB Incubation Wing, contributing to the design and execution of incubation
        and acceleration programs supporting <span className="text-foreground">200+ startups</span> across
        fintech, AI, edtech, AR/VR, and digital commerce. Portfolio startups have collectively generated
        <span className="text-foreground"> PKR 300M+ in revenue</span> and secured
        <span className="text-foreground"> PKR 220M+ in investment</span>.
      </motion.p>
    </Section>
  );
}

/* ---------------- Metrics ---------------- */
const METRICS = [
  { value: "200+", label: "Startups Supported", icon: Rocket },
  { value: "PKR 300M+", label: "Revenue Generated", icon: TrendingUp },
  { value: "PKR 220M+", label: "Investment Raised", icon: Target },
  { value: "10,000+", label: "Individuals Trained", icon: Users },
  { value: "500+", label: "Internships Facilitated", icon: Briefcase },
  { value: "1,500+", label: "Jobs Created", icon: Zap },
];
function Impact() {
  return (
    <Section id="impact" eyebrow="Key Impact" title={<>Numbers that tell the <span className="text-gradient">story</span></>}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="border-gradient rounded-2xl p-6 group relative overflow-hidden">
            <m.icon className="h-7 w-7 mb-4 transition-colors group-hover:text-secondary"
                    style={{ color: "var(--neon-blue)" }} />
            <div className="text-3xl sm:text-4xl font-display font-bold text-gradient">{m.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Experience (scroll cards) ---------------- */
const EXPERIENCE = [
  {
    role: "Technical Program Manager / Tech Incubation Manager",
    org: "PITB Incubation Wing — Punjab IT Board",
    period: "Jan 2021 – Present · 5+ yrs",
    location: "Rawalpindi, Pakistan",
    bullets: [
      "Led incubation & acceleration programs for 200+ startups across fintech, AI, edtech, AR/VR, and digital commerce.",
      "Implemented KPI tracking systems and milestone-based frameworks for startup performance & accountability.",
      "Enabled portfolio startups to generate PKR 300M+ revenue and raise PKR 220M+ investment.",
      "Shifted program model from event-driven to outcome-driven execution.",
      "Contributed to 1,500+ jobs created, 10,000+ trained, 500+ internships facilitated.",
    ],
  },
  {
    role: "Project Consultant",
    org: "Ignite — National Technology Fund",
    period: "Jan 2026 – Feb 2026 · Contract",
    location: "Islamabad · Hybrid",
    bullets: [
      "Contributed to innovation-focused initiatives within Pakistan's national tech funding ecosystem.",
      "Supported program-level execution in a high-stakes public-sector innovation environment.",
    ],
  },
  {
    role: "Founder & Program Director",
    org: "Brainiac's Digitalized Education System",
    period: "Aug 2019 – Dec 2025 · 6+ yrs",
    location: "Mardan, KP",
    bullets: [
      "Founded a digital education initiative focused on tech awareness and skill development.",
      "Designed workshops on AI awareness, digital tools, and entrepreneurial thinking.",
      "Built access pathways for students to engage with industry-relevant digital learning.",
    ],
  },
  {
    role: "Marketing & Digital Channel Manager",
    org: "Dars Ul Quran",
    period: "Nov 2018 – Present · Part-time",
    location: "Mardan, KP",
    bullets: [
      "Managed digital content strategy and publishing workflows.",
      "Improved audience engagement through structured content planning.",
    ],
  },
  {
    role: "Provincial Coordinator",
    org: "Million Smiles Foundation",
    period: "Jan 2015 – Jul 2021 · 6+ yrs",
    location: "Khyber Pakhtunkhwa",
    bullets: [
      "Led regional coordination of youth-led welfare initiatives aligned with SDGs.",
      "Executed 15+ large-scale welfare initiatives across districts.",
    ],
  },
  {
    role: "Visiting Lecturer",
    org: "ANSI Degree College Mardan",
    period: "Dec 2020 – Jan 2021 · Part-time",
    location: "Pakistan",
    bullets: [
      "Delivered lectures to MBA & BBA students on management and entrepreneurship.",
      "Supported planning for a national-level entrepreneurship event.",
    ],
  },
  {
    role: "Assistant Operations Manager (Internship)",
    org: "The Bank of Khyber",
    period: "Aug 2018 – Sep 2019",
    location: "Mardan, KP",
    bullets: [
      "Managed branch operations within a regulated financial environment.",
      "Built strong foundation in governance, risk awareness, operational discipline.",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>A track record of <span className="text-gradient">execution</span></>}>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px"
             style={{ background: "linear-gradient(to bottom, transparent, var(--neon-blue), var(--neon-purple), var(--neon-pink), transparent)" }} />
        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.org}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex ${i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 mt-6 z-10">
                <div className="h-4 w-4 rounded-full pulse-glow"
                     style={{ background: "var(--gradient-border)" }} />
              </div>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className={`ml-12 sm:ml-0 sm:w-[46%] border-gradient rounded-2xl p-6 ${i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"}`}>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3.5 w-3.5" />
                  {exp.period}
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

/* ---------------- Skills — Circular Gallery ---------------- */
const SKILLS = [
  "Program & Project Management", "Startup Incubation & Acceleration",
  "KPI Tracking & Performance", "Cross-functional Stakeholder Mgmt",
  "Milestone-Based Program Design", "Ecosystem Development",
  "Founder Support & Investment Readiness", "Public Sector Innovation",
  "Digital Transformation Strategy",
];
function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const smoothRotate = useSpring(rotate, { stiffness: 50, damping: 20 });
  const counterRotate = useTransform(smoothRotate, (v) => -v);

  return (
    <Section id="skills" eyebrow="Core Competencies" title={<>Skills in <span className="text-gradient">orbit</span></>}>
      <div ref={containerRef} className="relative h-[600px] sm:h-[700px] flex items-center justify-center">
        {/* Center */}
        <motion.div
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8 }}
          className="absolute z-10 grid h-32 w-32 sm:h-44 sm:w-44 place-items-center rounded-full pulse-glow"
          style={{ background: "var(--gradient-border)" }}>
          <div className="text-center text-white">
            <Sparkles className="h-6 w-6 mx-auto mb-1" />
            <div className="text-xs sm:text-sm font-semibold leading-tight px-2">Program<br />Management</div>
          </div>
        </motion.div>

        {/* Orbit rings */}
        <div className="spin-slow absolute h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full border border-white/10" />
        <div className="absolute h-[480px] w-[480px] sm:h-[620px] sm:w-[620px] rounded-full border border-white/5" />

        {/* Skills positioned in a circle */}
        <motion.div style={{ rotate: smoothRotate }} className="absolute h-full w-full">
          {SKILLS.map((skill, i) => {
            const angle = (i / SKILLS.length) * Math.PI * 2;
            const r = typeof window !== "undefined" && window.innerWidth < 640 ? 220 : 290;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring" }}
                whileHover={{ scale: 1.1, zIndex: 20 }}
                className="absolute top-1/2 left-1/2"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                <motion.div style={{ rotate: counterRotate }}
                  className="glass rounded-full px-4 py-2 text-xs sm:text-sm font-medium whitespace-nowrap cursor-default"
                  >
                  {skill}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- Education ---------------- */
const EDUCATION = [
  { degree: "MBA — Finance", school: "Abdul Wali Khan University Mardan", period: "2016 – 2020", note: "CGPA: 3.27 · Focused on corporate finance, investment analysis, financial governance." },
  { degree: "MA — International Relations & Affairs", school: "Abdul Wali Khan University Mardan", period: "2020 – 2022", note: "1st Division · Governance, policy analysis, institutional strategy." },
  { degree: "BA — Economics & Political Science", school: "Abdul Wali Khan University Mardan", period: "2015 – 2017", note: "2nd Division" },
  { degree: "ACCA — Business & Accounting Coursework", school: "Professional Academy of Commerce", period: "2013 – 2014", note: "Accounting, financial reporting, business law." },
];
function Education() {
  return (
    <Section id="education" eyebrow="Education" title={<>Academic <span className="text-gradient">foundations</span></>}>
      <div className="grid sm:grid-cols-2 gap-5">
        {EDUCATION.map((ed, i) => (
          <motion.div
            key={ed.degree}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="border-gradient rounded-2xl p-6 relative overflow-hidden group">
            <GraduationCap className="absolute -right-6 -top-6 h-24 w-24 opacity-5 transition-opacity group-hover:opacity-20" />
            <div className="text-xs text-muted-foreground mb-2">{ed.period}</div>
            <h3 className="text-lg font-semibold mb-1">{ed.degree}</h3>
            <div className="text-sm mb-3" style={{ color: "var(--neon-blue)" }}>{ed.school}</div>
            <p className="text-sm text-muted-foreground">{ed.note}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Certifications — Marquee ---------------- */
const CERTS = [
  "AI in Project Management — PMI", "Google Project Management",
  "Innovation & Entrepreneurship — Tec de Monterrey", "Google Business Intelligence",
  "Google Digital Marketing & E-commerce", "Creating a Tech Startup — HEC Paris",
  "Digital Business Models — Lund University", "Managerial Economics — UIUC",
  "Investment Management — Univ. of Geneva", "Financial Management — UIUC",
  "FinTech — HKUST", "Excel Skills for Business — Macquarie",
  "Presentation Skills — NIC Peshawar", "Microsoft Office — HEC",
];
function Certifications() {
  const doubled = [...CERTS, ...CERTS];
  return (
    <Section id="certs" eyebrow="Licenses & Certifications" title={<>Continuously <span className="text-gradient">leveling up</span></>}>
      <div className="relative overflow-hidden py-4"
           style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
        <div className="marquee flex gap-4 w-max">
          {doubled.map((c, i) => (
            <div key={i} className="glass rounded-full px-5 py-3 text-sm whitespace-nowrap inline-flex items-center gap-2">
              <Award className="h-4 w-4" style={{ color: "var(--neon-purple)" }} />
              {c}
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden py-4 mt-2"
           style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
        <div className="marquee flex gap-4 w-max" style={{ animationDirection: "reverse", animationDuration: "40s" }}>
          {doubled.map((c, i) => (
            <div key={i} className="glass rounded-full px-5 py-3 text-sm whitespace-nowrap inline-flex items-center gap-2">
              <Award className="h-4 w-4" style={{ color: "var(--neon-pink)" }} />
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* Publications & Recommendations */}
      <div className="grid lg:grid-cols-2 gap-6 mt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="border-gradient rounded-2xl p-8">
          <BookOpen className="h-6 w-6 mb-4" style={{ color: "var(--neon-blue)" }} />
          <h3 className="text-xl font-semibold mb-4">Publications & Research</h3>
          <div className="space-y-4 text-sm">
            <div>
              <div className="font-medium">Earnings Quality & Stock Returns Analysis</div>
              <div className="text-muted-foreground">Intl. Conference on Issues in Management & Social Sciences · Aug 2020</div>
            </div>
            <div>
              <div className="font-medium">Impact of Training on SME Performance</div>
              <div className="text-muted-foreground">International Review of Basic and Applied Sciences · Jun 2020</div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="border-gradient rounded-2xl p-8">
          <Quote className="h-6 w-6 mb-4" style={{ color: "var(--neon-pink)" }} />
          <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
          <div className="space-y-5 text-sm">
            <blockquote className="border-l-2 pl-4 italic text-muted-foreground" style={{ borderColor: "var(--neon-purple)" }}>
              "Anwar has an exceptional ability to bridge technology, business strategy, and startup development."
              <div className="not-italic mt-2 text-xs text-foreground">— Noushin Paracha · CEO & Founder</div>
            </blockquote>
            <blockquote className="border-l-2 pl-4 italic text-muted-foreground" style={{ borderColor: "var(--neon-pink)" }}>
              "He combines strategic thinking with practical execution. His mentorship strengthened my decision-making and confidence."
              <div className="not-italic mt-2 text-xs text-foreground">— Sadeeq Khan · Senior Program Manager</div>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- Blog (placeholder) ---------------- */
function Blog() {
  const placeholders = [
    { tag: "Coming soon", title: "Outcome-driven incubation: shifting from events to results", date: "Soon" },
    { tag: "Coming soon", title: "What KPI systems actually move the needle for early-stage startups", date: "Soon" },
    { tag: "Coming soon", title: "Lessons from scaling 200+ founders across emerging markets", date: "Soon" },
  ];
  return (
    <Section id="blog" eyebrow="Blog" title={<>Articles & <span className="text-gradient">field notes</span></>}>
      <p className="text-muted-foreground max-w-2xl mb-10">
        Long-form writing on program management, startup ecosystems, and operating in public-sector innovation.
        New articles drop here soon.
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        {placeholders.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="border-gradient rounded-2xl p-6 group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                 style={{ background: "radial-gradient(circle at top right, oklch(0.62 0.28 330 / 0.2), transparent 60%)" }} />
            <div className="relative">
              <div className="inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full mb-4"
                   style={{ background: "oklch(0.62 0.28 330 / 0.15)", color: "var(--neon-pink)" }}>
                {p.tag}
              </div>
              <h3 className="font-semibold text-lg leading-snug mb-4 group-hover:text-gradient transition-all">
                {p.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.date}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's <span className="text-gradient">build something</span></>}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="border-gradient rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40"
             style={{ background: "radial-gradient(ellipse at center, oklch(0.62 0.28 330 / 0.3), transparent 70%)" }} />
        <div className="relative">
          <h3 className="text-3xl sm:text-5xl font-display font-bold mb-6">
            Open to <span className="text-gradient">global opportunities</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Program/Project Management · Operations & Strategy · Startup & Venture Ecosystems · Technical Program Management
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://linkedin.com/in/anwarr-ulhaq" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium text-white transition-transform hover:scale-105"
               style={{ background: "var(--gradient-border)", boxShadow: "var(--shadow-glow)" }}>
              <Linkedin className="h-5 w-5" /> Connect on LinkedIn
            </a>
            <a href="mailto:hello@example.com"
               className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium glass">
              <Mail className="h-5 w-5" /> Send an email
            </a>
          </div>
        </div>
      </motion.div>
      <footer className="mt-16 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Anwarr Ulhaq · Crafted with motion & care.
      </footer>
    </Section>
  );
}

/* ---------------- Section primitive ---------------- */
function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] mb-4"
               style={{ color: "var(--neon-blue)" }}>
            <span className="h-px w-8" style={{ background: "var(--neon-blue)" }} />
            {eyebrow}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
function Portfolio() {
  return (
    <>
      <TechBackground />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
