import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";
import nails from "@/assets/nails.jpg";
import tools from "@/assets/tools.jpg";
import pedicure from "@/assets/pedicure.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bela Studio – Makeup & Nails Course Online" },
      { name: "description", content: "Master professional makeup and nails from scratch, at your own pace, with a certificate. Turn your passion into income." },
      { property: "og:title", content: "Bela Studio – Makeup & Nails Course" },
      { property: "og:description", content: "Learn professional makeup, manicure and pedicure online with a certificate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TELEGRAM_URL = "https://t.me/belastudio";

const links = ["About", "Modules", "Reviews", "FAQ"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Star = () => <span className="text-gold">★</span>;

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  const modules = [
    { n: "01", t: "Skin Prep & Foundations", d: "Skin types, primers, color correction and a flawless base." },
    { n: "02", t: "Natural & Glam Makeup", d: "Everyday looks, smoky eyes, contour and bridal glam." },
    { n: "03", t: "Manicure Essentials", d: "Cuticle care, shaping, French and nude classics." },
    { n: "04", t: "Gel Nails & Nail Art", d: "Gel application, extensions and delicate designs." },
    { n: "05", t: "Elegant Pedicure", d: "Hygiene, spa rituals and a long-lasting polish." },
    { n: "06", t: "Build Your Beauty Business", d: "Pricing, Instagram, portfolio and loyal clients." },
  ];
  const reviews = [
    { n: "Jessica M.", r: "Now booking clients every weekend", q: "I started from zero. Three months later I have my own little studio at home." },
    { n: "Aisha K.", r: "Freelance makeup artist", q: "The glam module changed everything. Clear, beautiful lessons I could rewatch anytime." },
    { n: "Camila R.", r: "Nail technician", q: "My gel nails finally last. The business tips paid for the course in two weeks." },
  ];
  const faqs = [
    { q: "Do I need any experience?", a: "Not at all. The course starts from the very basics and guides you step by step." },
    { q: "How long do I have access?", a: "You get lifetime access, including all future updates." },
    { q: "Will I receive a certificate?", a: "Yes. After completing the modules you receive a Bela Studio certificate of completion." },
  ];

  return (
    <div className="overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-2xl font-semibold">Bela <span className="italic text-primary">Studio</span></a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-primary">{l}</a>)}
          </nav>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-rose hidden !px-5 !py-2.5 md:inline-flex">Chat on Telegram</a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="text-2xl md:hidden">{open ? "✕" : "☰"}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t px-5 py-5 md:hidden">
            {links.map((l) => <a key={l} onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`}>{l}</a>)}
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-rose">Chat on Telegram</a>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-24">
          <div className="reveal">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold">Online Course · Certificate Included</p>
            <h1 className="text-4xl leading-tight font-semibold md:text-6xl">Master Professional Makeup & Nails and <span className="italic text-primary">Turn Your Passion Into Income</span></h1>
            <p className="mt-6 max-w-md text-muted-foreground">Learn from scratch, at your own pace, with step-by-step video lessons and a certificate to launch your beauty career.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-rose">Chat on Telegram</a>
              <a href="#modules" className="btn-outline-rose">See the Modules</a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"><span><Star /><Star /><Star /><Star /><Star /></span> Loved by 2,000+ students</div>
          </div>
          <div className="reveal relative">
            <div className="absolute -top-6 -right-6 h-full w-full rounded-[2.5rem] bg-nude" />
            <img src={hero} alt="Woman with soft glam makeup holding a brush" width={1024} height={1280} className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-soft" />
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-card px-5 py-4 shadow-card">
              <p className="font-display text-2xl text-primary">60+</p><p className="text-xs text-muted-foreground">video lessons</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-card py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div className="reveal grid grid-cols-2 gap-4">
              <img src={nails} alt="Nude gel nails with gold nail art" loading="lazy" width={1024} height={1024} className="aspect-square rounded-3xl object-cover shadow-card" />
              <img src={pedicure} alt="Elegant rose pedicure" loading="lazy" width={1024} height={1024} className="mt-10 aspect-square rounded-3xl object-cover shadow-card" />
            </div>
            <div className="reveal">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">About the course</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Beauty skills that open doors</h2>
              <p className="mt-5 text-muted-foreground">Bela Studio brings makeup, manicure and pedicure together in one elegant program. Whether you want to care for yourself or start earning, you'll learn the techniques professionals use every day.</p>
              <ul className="mt-6 space-y-3">
                {["Lifetime access on any device", "Certificate of completion", "Private student community", "Business & pricing guidance"].map((i) => (
                  <li key={i} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-nude text-xs text-gold">✦</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="mx-auto max-w-6xl px-5 py-20">
          <div className="reveal mx-auto max-w-xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Curriculum</p>
            <h2 className="text-3xl font-semibold md:text-4xl">What you'll learn</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <div key={m.n} className="reveal rounded-3xl bg-card p-7 shadow-card transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-3xl text-rose">{m.n}</p>
                <h3 className="mt-3 text-xl font-semibold">{m.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
              </div>
            ))}
          </div>
          <img src={tools} alt="Makeup brushes, palette and nail polish" loading="lazy" width={1024} height={1024} className="reveal mt-12 h-64 w-full rounded-[2rem] object-cover shadow-soft md:h-96" />
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-nude/50 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="reveal text-center text-3xl font-semibold md:text-4xl">Our students say it best</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.n} className="reveal rounded-3xl bg-card p-7 shadow-card">
                  <div><Star /><Star /><Star /><Star /><Star /></div>
                  <blockquote className="mt-4 font-display text-lg italic">"{r.q}"</blockquote>
                  <figcaption className="mt-5 text-sm"><b className="font-medium">{r.n}</b><br /><span className="text-muted-foreground">{r.r}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-5 pb-24">
          <h2 className="reveal text-center text-3xl font-semibold md:text-4xl">Frequently asked questions</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="reveal rounded-2xl bg-card shadow-card">
                <button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium">
                  {f.q}<span className="shrink-0 text-xl text-primary">{faq === i ? "−" : "+"}</span>
                </button>
                {faq === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        <p className="font-display text-xl text-foreground">Bela <span className="italic text-primary">Studio</span></p>
        <p className="mt-2">© 2026 Bela Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
