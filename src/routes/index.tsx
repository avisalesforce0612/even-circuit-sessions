import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Music2,
  MapPin,
  Calendar,
  Users,
  Mic2,
  Guitar,
  Instagram,
  MessageCircle,
  Mail,
  ArrowRight,
  Sparkles,
  Clock,
  Coffee,
  ChevronDown,
} from "lucide-react";

import heroImg from "@/assets/hero-jam.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import facesAsset from "@/assets/the-faces.png.asset.json";

const OG_IMAGE =
  "https://id-preview--9b916484-49eb-4de2-88cb-f210e47d0f43.lovable.app/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Event Circuit — Saturday Jams in Gurugram" },
      {
        name: "description",
        content:
          "A small, warm music collective jamming every Saturday in Gurugram. Six to seven players, one room, zero pressure. Come play, sing, or just listen.",
      },
      { property: "og:title", content: "The Event Circuit — Saturday Jams in Gurugram" },
      {
        property: "og:description",
        content:
          "Intimate Saturday jam sessions in Gurugram. Guitars, cajons, vocals, keys — and the people who love them. RSVP for the next circle.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Landing,
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#faces", label: "The Faces" },
  { href: "#how", label: "How it works" },
  { href: "#sessions", label: "Sessions" },
  { href: "#gallery", label: "Highlights" },
  { href: "#faq", label: "FAQ" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Faces />
      <HowItWorks />
      <Sessions />
      <Gallery />
      <FAQ />
      <RSVP />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary p-1.5 md:h-11 md:w-11">
            <img
              src="/logo.png"
              alt="The Event Circuit"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            The Event Circuit
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#rsvp"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
        >
          RSVP <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-24 md:pt-40 md:pb-32">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="animate-[fade-up_0.9s_ease-out_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Saturday nights · Gurugram · Est. 2023
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            A small room.<br />
            <span className="bg-[image:var(--gradient-warm)] bg-clip-text text-transparent">
              Six players.
            </span>
            <br />One big sound.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The Event Circuit is a weekly jam circle in Gurugram — six or seven
            people, warm lights, an acoustic first vibe, and songs that pass
            around the room until nobody wants to leave.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#rsvp"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Join the next jam
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:bg-card"
            >
              How it works
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "42", v: "Sessions" },
              { k: "160+", v: "Players" },
              { k: "6–7", v: "Per circle" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <img
              src={heroImg}
              alt="A circle of musicians jamming under warm string lights"
              width={1920}
              height={1280}
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3 backdrop-blur">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Next circle</p>
                <p className="mt-0.5 font-display text-lg font-semibold">Sat · 8:00 PM</p>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-semibold text-primary-foreground animate-[pulse-glow_3s_ease-in-out_infinite]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" /> 3 spots left
              </span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rotate-[-6deg] rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)] md:block">
            <p className="font-display text-sm">"Best 3 hours of my week."</p>
            <p className="mt-1 text-xs text-muted-foreground">— Aditi, vocalist</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Acoustic first",
    "No ego · No audition",
    "BYO Instrument",
    "Chai + Songs",
    "Small circle",
    "Every Saturday",
    "Gurugram sector 29",
    "Originals welcome",
  ];
  return (
    <div className="relative border-y border-border bg-card/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_35s_linear_infinite] gap-10 pr-10">
          {[...items, ...items].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-3 font-display text-lg font-medium text-muted-foreground"
            >
              {t}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">About</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            A collective, not a stage.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            We started as four friends passing a guitar around a rooftop in DLF Phase 3.
            Two years later, The Event Circuit is a small, deliberately-tiny music
            community that meets every Saturday to play the songs we love, and a
            few we're still figuring out.
          </p>
          <p>
            Circles cap at seven so everyone gets space and a turn. We keep it
            acoustic-leaning, warm, and phone-down. Come with a guitar, a cajon,
            a voice, or just good ears.
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { icon: Users, label: "6–7 per circle" },
          { icon: Guitar, label: "Acoustic first" },
          { icon: Coffee, label: "Chai on the house" },
          { icon: Mic2, label: "Originals welcome" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/50"
          >
            <Icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            <p className="mt-4 font-display text-base font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- THE FACES ---------------- */
function Faces() {
  const members = [
    { name: "Puneet", role: "Singer", side: "left" as const },
    { name: "Avi", role: "Guitarist · Singer · Songwriter · Composer", side: "left" as const },
    { name: "Tushank", role: "Singer · Leader of the group", side: "right" as const, leader: true },
    { name: "Gulshan", role: "Guitarist · Singer", side: "right" as const },
  ];

  // Face positions on the portrait (percentages, left→right in the photo).
  const tags = [
    { name: "Puneet", role: "Singer", x: 18, y: 34, side: "left" as const },
    { name: "Avi", role: "Guitarist · Singer · Songwriter · Composer", x: 40, y: 30, side: "left" as const },
    { name: "Tushank", role: "Singer · Leader", x: 60, y: 32, side: "right" as const, leader: true },
    { name: "Gulshan", role: "Guitarist · Singer", x: 82, y: 30, side: "right" as const },
  ];

  const [reveal, setReveal] = useState(false);

  return (
    <section id="faces" className="relative overflow-hidden border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">The Faces</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Four voices. One circuit.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              These are the people who keep the Saturday circle alive — singers,
              guitarists, songwriters, and the quiet leader who makes sure the
              song keeps moving.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {members.map((m) => (
                <div
                  key={m.name}
                  className={`rounded-2xl border border-border bg-background/70 p-5 transition-colors hover:border-primary/50 ${
                    m.leader ? "ring-1 ring-primary/30" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-warm)] font-display text-sm font-bold text-primary-foreground">
                      {m.name[0]}
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold">
                        {m.name}
                        {m.leader && (
                          <span className="ml-2 align-middle text-xs font-medium text-primary">
                            (Leader)
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">{m.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              <img
                src={facesAsset.url}
                alt="The Event Circuit members: Puneet, Avi, Tushank, and Gulshan"
                width={1080}
                height={1920}
                className="h-[520px] w-full object-cover object-top md:h-[640px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Tron overlay */}
              <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                  reveal ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!reveal}
              >
                {/* scanline */}
                <div
                  className={`absolute inset-x-0 h-[2px] bg-primary/70 shadow-[0_0_18px_2px_color-mix(in_oklab,_var(--primary)_90%,_transparent)] ${
                    reveal ? "animate-[scan_2.2s_ease-in-out_infinite]" : ""
                  }`}
                  style={{ top: 0 }}
                />
                {/* grid */}
                <div
                  className="absolute inset-0 opacity-30 mix-blend-screen"
                  style={{
                    backgroundImage:
                      "linear-gradient(color-mix(in_oklab,_var(--primary)_35%,_transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in_oklab,_var(--primary)_35%,_transparent) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />
                {/* corner brackets */}
                {(["tl", "tr", "bl", "br"] as const).map((c) => (
                  <span
                    key={c}
                    className={`absolute h-6 w-6 border-primary ${
                      c === "tl"
                        ? "left-3 top-3 border-l-2 border-t-2"
                        : c === "tr"
                          ? "right-3 top-3 border-r-2 border-t-2"
                          : c === "bl"
                            ? "bottom-3 left-3 border-b-2 border-l-2"
                            : "bottom-3 right-3 border-b-2 border-r-2"
                    }`}
                  />
                ))}

                {/* face tags */}
                {tags.map((t, i) => (
                  <div
                    key={t.name}
                    className="absolute"
                    style={{
                      left: `${t.x}%`,
                      top: `${t.y}%`,
                      transform: "translate(-50%, -50%)",
                      transitionDelay: `${150 + i * 120}ms`,
                    }}
                  >
                    {/* reticle */}
                    <div
                      className={`relative h-16 w-16 rounded-full border border-primary/80 shadow-[0_0_20px_color-mix(in_oklab,_var(--primary)_70%,_transparent)] transition-all duration-500 ${
                        reveal ? "scale-100 opacity-100" : "scale-50 opacity-0"
                      }`}
                      style={{ transitionDelay: `${150 + i * 120}ms` }}
                    >
                      <span className="absolute inset-2 rounded-full border border-primary/40" />
                      <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                      {/* connector line */}
                      <span
                        className={`absolute top-1/2 h-px bg-primary/80 shadow-[0_0_8px_color-mix(in_oklab,_var(--primary)_90%,_transparent)] ${
                          t.side === "left" ? "right-full" : "left-full"
                        }`}
                        style={{ width: "44px" }}
                      />
                    </div>
                    {/* label card */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        t.side === "left"
                          ? "right-[calc(100%+52px)] text-right"
                          : "left-[calc(100%+52px)] text-left"
                      } whitespace-nowrap rounded-md border border-primary/60 bg-background/85 px-3 py-2 backdrop-blur-sm shadow-[0_0_18px_color-mix(in_oklab,_var(--primary)_35%,_transparent)] transition-all duration-500 ${
                        reveal
                          ? "opacity-100 translate-x-0"
                          : `opacity-0 ${t.side === "left" ? "translate-x-2" : "-translate-x-2"}`
                      }`}
                      style={{ transitionDelay: `${300 + i * 120}ms` }}
                    >
                      <p className="font-display text-sm font-semibold text-primary">
                        {t.name}
                        {t.leader && (
                          <span className="ml-1 text-[10px] uppercase tracking-widest text-accent">
                            · Lead
                          </span>
                        )}
                      </p>
                      <p className="text-[11px] text-foreground/80">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Who's who button */}
              <button
                type="button"
                onClick={() => setReveal((v) => !v)}
                className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-primary/60 bg-background/70 px-4 py-2 font-display text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-md transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_color-mix(in_oklab,_var(--primary)_70%,_transparent)]"
                aria-pressed={reveal}
              >
                <Sparkles className="h-3.5 w-3.5" />
                {reveal ? "Hide" : "Who's who?"}
              </button>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rotate-[-4deg] rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)] md:block">
              <p className="font-display text-sm">"Tushank keeps the circle in tune."</p>
              <p className="mt-1 text-xs text-muted-foreground">— The rest of the circuit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "RSVP for Saturday",
      body: "Drop your name and instrument. We'll confirm your spot by Thursday — first come, first in.",
    },
    {
      n: "02",
      title: "Show up at 8 PM",
      body: "Small venue in Gurugram (address shared on confirm). Warm lights, cold drinks, 6–7 humans.",
    },
    {
      n: "03",
      title: "Pass the song around",
      body: "Anyone can start a tune. The rest of the circle finds their part. No auditions, no setlists.",
    },
  ];
  return (
    <section id="how" className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">How it works</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight md:text-5xl">
              Three steps, one Saturday, one very good room.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            No experience bar. If you can play a chord, tap a beat, or hum in
            tune — you're in.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative overflow-hidden rounded-3xl border border-border bg-background p-8 transition-transform hover:-translate-y-1"
            >
              <span className="font-mono text-sm text-primary">{s.n}</span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
              <span className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[image:var(--gradient-warm)] opacity-10 blur-2xl" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- SESSIONS ---------------- */
function Sessions() {
  const sessions = [
    { date: "Sat, Aug 01", theme: "Bollywood Unplugged", spots: "3 spots left", tag: "Open" },
    { date: "Sat, Aug 08", theme: "Indie Folk Circle", spots: "5 spots left", tag: "Open" },
    { date: "Sat, Aug 15", theme: "Originals Night", spots: "Waitlist only", tag: "Full" },
    { date: "Sat, Aug 22", theme: "90s Rock Revival", spots: "6 spots left", tag: "Open" },
  ];
  return (
    <section id="sessions" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Upcoming sessions</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Pick a Saturday.
          </h2>
        </div>
        <a
          href="#rsvp"
          className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Can't see a date? Ping us →
        </a>
      </div>

      <ul className="mt-12 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card/40">
        {sessions.map((s) => {
          const full = s.tag === "Full";
          return (
            <li
              key={s.date}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 transition-colors hover:bg-card md:grid-cols-[160px_minmax(0,1fr)_140px_auto]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Calendar className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate font-mono text-sm text-muted-foreground">{s.date}</span>
              </div>
              <p className="col-span-2 min-w-0 truncate font-display text-lg font-semibold md:col-span-1">
                {s.theme}
              </p>
              <span className="hidden text-sm text-muted-foreground md:inline">{s.spots}</span>
              <a
                href="#rsvp"
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  full
                    ? "border border-border text-muted-foreground"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {full ? "Waitlist" : "RSVP"} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const imgs = [
    { src: gal1, alt: "Hands strumming an acoustic guitar", span: "row-span-2" },
    { src: gal2, alt: "Musicians laughing during a jam", span: "" },
    { src: gal3, alt: "A cajon and microphone under warm light", span: "" },
    { src: gal4, alt: "A singer in warm amber spotlight", span: "row-span-2" },
  ];
  return (
    <section id="gallery" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Highlights</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Warm rooms. Loud smiles.
            </h2>
          </div>
        </div>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          {imgs.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Do I need to be a great musician?",
      a: "Nope. If you can hold a chord, keep time, or carry a tune, that's plenty. We keep the circle small so everyone has room.",
    },
    {
      q: "What if I don't have an instrument?",
      a: "Come anyway. We usually have a spare guitar, a cajon, and a shaker or two floating around. Voices are always welcome.",
    },
    {
      q: "Where exactly does it happen?",
      a: "A cozy studio space near Sector 29, Gurugram. Exact address is shared with confirmed RSVPs on Thursday.",
    },
    {
      q: "Is there a cover charge?",
      a: "A small ₹300 contribution covers the space, chai, and snacks. Nobody's making money — it just keeps the lights on.",
    },
    {
      q: "Can I bring a friend?",
      a: "Please do — just RSVP for both. We cap at seven players per circle so we know who to expect.",
    },
  ];
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-24 md:py-32">
      <p className="text-xs uppercase tracking-[0.25em] text-primary">FAQ</p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
        Questions, answered.
      </h2>
      <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-card/40">
        {faqs.map((f, i) => (
          <details key={i} className="group p-6 open:bg-card/60">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-display text-lg font-semibold">{f.q}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------------- RSVP ---------------- */
function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", instrument: "", date: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative overflow-hidden border-y border-border">
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">RSVP</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Save your seat in the circle.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Drop your details and we'll confirm your spot by Thursday. Or, if
            you'd rather just say hi, hit us on WhatsApp or Instagram.
          </p>

          <div className="mt-10 space-y-4">
            <SocialRow icon={MessageCircle} label="WhatsApp" value="+91 98••• •••••" href="#" />
            <SocialRow icon={Instagram} label="Instagram" value="@theeventcircuit" href="#" />
            <SocialRow icon={Mail} label="Email" value="hello@eventcircuit.in" href="mailto:hello@eventcircuit.in" />
            <SocialRow icon={MapPin} label="Location" value="Warehouse, Sector 29, Gurugram" href="#" />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
          {submitted ? (
            <div className="grid min-h-[420px] place-items-center text-center">
              <div>
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-warm)] text-primary-foreground">
                  <Music2 className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">You're on the list.</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  We'll ping you on Thursday with the address and a soft
                  playlist to warm up with. See you Saturday.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <Field
                label="Your name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Riya Malhotra"
                required
              />
              <Field
                label="Email or phone"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@domain.com"
                required
              />
              <Field
                label="What do you play?"
                value={form.instrument}
                onChange={(v) => setForm({ ...form, instrument: v })}
                placeholder="Guitar, vocals, cajon, just listening…"
              />
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Which Saturday?
                </label>
                <select
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-primary/40 transition focus:ring-2"
                >
                  <option value="">Pick a date</option>
                  <option>Sat, Aug 01 — Bollywood Unplugged</option>
                  <option>Sat, Aug 08 — Indie Folk Circle</option>
                  <option>Sat, Aug 22 — 90s Rock Revival</option>
                </select>
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01]"
              >
                Reserve my seat
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> Confirmation by Thursday · Free to cancel
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
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-primary/40 transition focus:ring-2"
      />
    </div>
  );
}

function SocialRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Music2;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-4 transition-colors hover:border-primary/50 hover:bg-card"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-[image:var(--gradient-warm)] group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="truncate font-display text-base font-semibold">{value}</p>
      </div>
    </a>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
        <div className="flex items-center gap-2 font-display text-sm">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[image:var(--gradient-warm)] text-primary-foreground">
            <Music2 className="h-3.5 w-3.5" />
          </span>
          The Event Circuit · Gurugram
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Event Circuit — Made with warmth, chai and reverb.
        </p>
      </div>
    </footer>
  );
}
