import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPillarBySlug } from "@/data/pillars";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, CheckCircle, Map, Shield, Sun, Heart, Users, Cpu, Wrench, Activity, Stethoscope, Building2, Ruler, ClipboardCheck, Layers } from "lucide-react";

// Small helper to animate numbers like "+18%" or "12–18 mo" by counting up the first number
const useInView = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.25 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const parseNumeric = (v: string): { prefix: string; num: number; suffix: string } => {
  const match = v.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/); // prefix, number, suffix
  if (!match) return { prefix: "", num: 0, suffix: v };
  const [, prefix, numStr, suffix] = match;
  return { prefix, num: parseFloat(numStr), suffix };
};

const CountUpValue = ({ value, duration = 1200 }: { value: string; duration?: number }) => {
  const { prefix, num, suffix } = parseNumeric(value);
  const [ref, inView] = useInView<HTMLDivElement>();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const progress = Math.min(1, (t - start) / duration);
      setDisplay(Number((num * progress).toFixed(2)));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, num, duration]);

  return (
    <div ref={ref} className="text-lg font-bold tabular-nums">
      {prefix}
      {Number.isFinite(num) ? (Number.isInteger(num) ? Math.round(display) : display.toFixed(2)) : value}
      {suffix}
    </div>
  );
};

const PillarDetail = () => {
  const { slug } = useParams();
  const pillar = getPillarBySlug(slug || "");

  if (!pillar) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold">Pillar not found</h1>
            <p className="mt-2 text-muted-foreground">We couldn't find the pillar you were looking for.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/" className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Go Home</Link>
              <a href="/#pillars" className="rounded-md border px-4 py-2 hover:bg-accent">View Core Pillars</a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const [open, setOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isParallaxEnabled, setIsParallaxEnabled] = useState(false);

  useEffect(() => {
    // Enable parallax only on devices with fine pointer (desktops)
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      const mq = window.matchMedia('(pointer: fine)');
      setIsParallaxEnabled(mq.matches);
      const handler = (e: MediaQueryListEvent) => setIsParallaxEnabled(e.matches);
      mq.addEventListener?.('change', handler);
      return () => mq.removeEventListener?.('change', handler);
    }
  }, []);

  const getAccent = () => {
    const slug = pillar.slug;
    if (slug === "building") {
      return {
        badge: "bg-primary/15 text-primary",
        overlay: "from-medical-blue/20",
      };
    }
    if (slug === "caring") {
      return {
        badge: "bg-medical-teal/15 text-medical-teal",
        overlay: "from-medical-teal/20",
      };
    }
    if (slug === "education") {
      return {
        badge: "bg-trust-blue/15 text-foreground",
        overlay: "from-trust-blue/20",
      };
    }
    if (slug === "patient-design") {
      return {
        badge: "bg-pink-500/15 text-pink-500",
        overlay: "from-pink-500/20",
      };
    }
    return { badge: "bg-primary/15 text-primary", overlay: "from-black/10" };
  };
  const accent = getAccent();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className={`border-b bg-gradient-to-b from-background via-secondary/20 to-background`}>
          <div className="container mx-auto px-4 py-10 md:py-14 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${accent.badge} text-sm`}>
                {pillar.badge || "Pillar"}
              </div>
              {pillar.slug === "caring" && (
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-teal/15 text-medical-teal text-xs">
                  Patient‑Centric Design
                </div>
              )}
              <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">{pillar.title}</h1>
              <p className="mt-3 text-muted-foreground max-w-prose">{pillar.shortDescription}</p>
              {pillar.intro && (
                <p className="mt-3 text-sm md:text-base text-muted-foreground/90 max-w-prose">
                  {pillar.intro}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => setOpen(true)} className="rounded-md border px-4 py-2 hover:bg-accent">
                  Quick Peek
                </button>
                <Link to="/start-building" className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">Start Your Project</Link>
                <a href="/#pillars" className="rounded-md border px-4 py-2 hover:bg-accent">Back to Pillars</a>
              </div>
              {pillar.slug === "caring" && (
                <p className="mt-3 text-sm text-muted-foreground">
                  For any query please reach –
                  <a href="https://valuemedclinics.com" target="_blank" rel="noreferrer" className="ml-1 underline text-medical-teal hover:text-medical-teal/80">
                    ValueMed – Superspeciality Clinic in Bachupally, Hyderabad
                  </a>
                </p>
              )}
            </div>
            <div
              className="rounded-2xl border bg-card p-2 shadow-card relative overflow-hidden"
              onMouseMove={isParallaxEnabled ? (e) => {
                const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                const rx = (e.clientX - rect.left) / rect.width - 0.5;
                const ry = (e.clientY - rect.top) / rect.height - 0.5;
                setTilt({ x: rx * 6, y: ry * 6 });
              } : undefined}
              onMouseLeave={isParallaxEnabled ? () => setTilt({ x: 0, y: 0 }) : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pillar.detailImage || pillar.heroImage}
                alt={pillar.title}
                className="w-full h-[260px] md:h-[340px] object-cover rounded-xl transition-transform duration-200"
                style={{ transform: isParallaxEnabled ? `translate3d(${tilt.x}px, ${tilt.y}px, 0)` : undefined }}
              />
              <div className={`pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t ${accent.overlay} via-transparent to-transparent`} />
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              {/* Highlights */}
              {pillar.highlights && pillar.highlights.length > 0 && (
                <div className="rounded-xl border bg-card p-6 shadow-card animate-fade-in-up" style={{ animationDelay: '60ms' }}>
                  <h2 className="text-2xl font-semibold">What makes this pillar unique?</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pillar.slug === "caring"
                      ? pillar.highlights.map((h, i) => {
                          const icon = (() => {
                            const t = h.toLowerCase();
                            if (t.includes("wayfinding")) return <Map className="h-4 w-4" />;
                            if (t.includes("privacy") || t.includes("safety")) return <Shield className="h-4 w-4" />;
                            if (t.includes("material") || t.includes("light") || t.includes("healing")) return <Sun className="h-4 w-4" />;
                            if (t.includes("dignity") || t.includes("comfort") || t.includes("patient")) return <Heart className="h-4 w-4" />;
                            if (t.includes("humanized") || t.includes("humanised") || t.includes("human")) return <Users className="h-4 w-4" />;
                            return <CheckCircle className="h-4 w-4" />;
                          })();
                          return (
                            <span key={i} className="px-3 py-1 rounded-full bg-medical-teal/10 text-medical-teal text-sm inline-flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: `${100 + i * 40}ms` }}>
                              {icon}
                              {h}
                            </span>
                          );
                        })
                      : pillar.highlights.map((h, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm animate-fade-in-up" style={{ animationDelay: `${100 + i * 40}ms` }}>
                            {h}
                          </span>
                        ))}
                  </div>
                </div>
              )}

              {(() => {
                const sections = [...pillar.sections];
                if (pillar.slug === "caring") {
                  // Reorder to Tenets → Care → Phases and render with rich UI
                  const tenets = sections.find((s) => /tenet/i.test(s.heading));
                  const care = sections.find((s) => /patient\-?centered|patient\-?centric|care/i.test(s.heading));
                  const phases = sections.find((s) => /phase/i.test(s.heading));
                  const rest = sections.filter((s) => s !== tenets && s !== care && s !== phases);

                  const iconMap = (text: string) => {
                    const t = text.toLowerCase();
                    if (t.includes('wayfinding') || t.includes('signage')) return Map;
                    if (t.includes('barrier') || t.includes('family') || t.includes('caregiver')) return Users;
                    if (t.includes('acoustic') || t.includes('privacy')) return Shield;
                    if (t.includes('daylight') || t.includes('green') || t.includes('warm')) return Sun;
                    if (t.includes('dignity') || t.includes('comfort') || t.includes('patient')) return Heart;
                    if (t.includes('safety') || t.includes('standards')) return Shield;
                    if (t.includes('pathway') || t.includes('humanized') || t.includes('humanised')) return Users;
                    return CheckCircle;
                  };

                  const out: JSX.Element[] = [];

                  if (tenets) {
                    out.push(
                      <div key="caring-tenets" className="rounded-xl bg-gradient-card shadow-medical border p-6 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `120ms` }}>
                        <div className="flex items-start gap-3">
                          <div className="rounded-xl bg-medical-teal/15 text-medical-teal p-3"><Map className="h-6 w-6" /></div>
                          <div>
                            <h2 className="text-2xl font-semibold">{tenets.heading}</h2>
                            <p className="mt-2 text-muted-foreground">{tenets.body}</p>
                          </div>
                        </div>
                        {tenets.bullets && (
                          <div className="mt-5 grid sm:grid-cols-2 gap-3">
                            {tenets.bullets.map((b, i) => {
                              const Icon = iconMap(b);
                              return (
                                <div key={i} className="flex items-start gap-2 rounded-lg border bg-card p-3 animate-fade-in-up" style={{ animationDelay: `${160 + i * 40}ms` }}>
                                  <div className="mt-0.5 rounded-md bg-medical-teal/10 text-medical-teal p-1"><Icon className="h-4 w-4" /></div>
                                  <div className="text-sm text-foreground">{b}</div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  if (care) {
                    out.push(
                      <div key="caring-care" className="rounded-xl bg-gradient-card shadow-medical border p-6 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `200ms` }}>
                        <div className="flex items-start gap-3">
                          <div className="rounded-xl bg-medical-teal/15 text-medical-teal p-3"><Heart className="h-6 w-6" /></div>
                          <div>
                            <h2 className="text-2xl font-semibold">{care.heading}</h2>
                            <p className="mt-2 text-muted-foreground">{care.body}</p>
                          </div>
                        </div>
                        {care.bullets && (
                          <div className="mt-5 grid sm:grid-cols-2 gap-3">
                            {care.bullets.map((b, i) => {
                              const Icon = iconMap(b);
                              return (
                                <div key={i} className="flex items-start gap-2 rounded-lg border bg-card p-3 animate-fade-in-up" style={{ animationDelay: `${240 + i * 40}ms` }}>
                                  <div className="mt-0.5 rounded-md bg-medical-teal/10 text-medical-teal p-1"><Icon className="h-4 w-4" /></div>
                                  <div className="text-sm text-foreground">{b}</div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  if (phases) {
                    out.push(
                      <div key="caring-phases" className="rounded-xl border bg-card p-6 shadow-card animate-fade-in-up" style={{ animationDelay: `280ms` }}>
                        <div className="flex items-start gap-3">
                          <div className="rounded-xl bg-medical-teal/15 text-medical-teal p-3"><Shield className="h-6 w-6" /></div>
                          <div>
                            <h2 className="text-2xl font-semibold">{phases.heading}</h2>
                            <p className="mt-2 text-muted-foreground">{phases.body}</p>
                          </div>
                        </div>
                        {phases.bullets && (
                          <div className="mt-6">
                            <div className="relative">
                              <div className="absolute left-4 right-4 top-5 h-0.5 bg-muted" />
                              <div className="grid md:grid-cols-5 gap-6">
                                {phases.bullets.map((p, i) => (
                                  <div key={i} className="relative flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${320 + i * 80}ms` }}>
                                    <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-medical-teal text-white shadow">
                                      {i + 1}
                                    </div>
                                    <div>
                                      <div className="font-medium">{p}</div>
                                      <div className="text-xs text-muted-foreground">Step {i + 1}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  rest.forEach((sec, idx) => {
                    out.push(
                      <div key={`caring-rest-${idx}`} className="rounded-xl border bg-card p-6 shadow-card animate-fade-in-up" style={{ animationDelay: `${320 + idx * 80}ms` }}>
                        <h2 className="text-2xl font-semibold">{sec.heading}</h2>
                        <p className="mt-2 text-muted-foreground">{sec.body}</p>
                        {sec.bullets && (
                          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                            {sec.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 animate-fade-in-up" style={{ animationDelay: `${360 + i * 50}ms` }}>
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  });

                  return out;
                }
                if (pillar.slug === "building") {
                  const approach = sections.find((s) => /approach/i.test(s.heading));
                  const phases = sections.find((s) => /phase/i.test(s.heading));
                  const rest = sections.filter((s) => s !== approach && s !== phases);

                  const renderApproach = (sec?: typeof sections[number], idxBase = 0) => {
                    if (!sec) return null;
                    const bullets = sec.bullets || [];
                    const iconFor = (text: string) => {
                      const t = text.toLowerCase();
                      if (t.includes('master') || t.includes('planning')) return Ruler;
                      if (t.includes('architect')) return Building2;
                      if (t.includes('mep') || t.includes('biomedical')) return Wrench;
                      if (t.includes('digital') || t.includes('health')) return Cpu;
                      return CheckCircle;
                    };
                    return (
                      <div key={`building-approach`} className="rounded-xl bg-gradient-card shadow-medical border p-6 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${120 + idxBase * 80}ms` }}>
                        <div className="absolute -top-6 -right-6 opacity-20">
                          <Layers className="h-24 w-24" />
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="rounded-xl bg-primary/15 text-primary p-3">
                            <Building2 className="h-6 w-6" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold">{sec.heading}</h2>
                            <p className="mt-2 text-muted-foreground">{sec.body}</p>
                          </div>
                        </div>
                        {bullets.length > 0 && (
                          <div className="mt-5 grid sm:grid-cols-2 gap-3">
                            {bullets.map((b, i) => {
                              const Icon = iconFor(b);
                              return (
                                <div key={i} className="flex items-start gap-2 rounded-lg border bg-card p-3 animate-fade-in-up" style={{ animationDelay: `${160 + i * 40}ms` }}>
                                  <div className="mt-0.5 rounded-md bg-primary/10 text-primary p-1"><Icon className="h-4 w-4" /></div>
                                  <div className="text-sm text-foreground">{b}</div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  };

                  const renderPhases = (sec?: typeof sections[number], idxBase = 1) => {
                    if (!sec) return null;
                    const bullets = sec.bullets || [];
                    return (
                      <div key={`building-phases`} className="rounded-xl border bg-card p-6 shadow-card animate-fade-in-up" style={{ animationDelay: `${120 + idxBase * 80}ms` }}>
                        <div className="flex items-start gap-3">
                          <div className="rounded-xl bg-primary/15 text-primary p-3"><ClipboardCheck className="h-6 w-6" /></div>
                          <div>
                            <h2 className="text-2xl font-semibold">{sec.heading}</h2>
                            <p className="mt-2 text-muted-foreground">{sec.body}</p>
                          </div>
                        </div>
                        {bullets.length > 0 && (
                          <div className="mt-6">
                            <div className="relative">
                              <div className="absolute left-4 right-4 top-5 h-0.5 bg-muted" />
                              <div className="grid md:grid-cols-4 gap-6">
                                {bullets.map((p, i) => (
                                  <div key={i} className="relative flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${200 + i * 80}ms` }}>
                                    <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
                                      {i + 1}
                                    </div>
                                    <div>
                                      <div className="font-medium">{p}</div>
                                      <div className="text-xs text-muted-foreground">Phase {i + 1}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  };

                  const rendered: JSX.Element[] = [];
                  rendered.push(renderApproach(approach, 0) as any);
                  rendered.push(renderPhases(phases, 1) as any);
                  rest.forEach((sec, idx) => {
                    rendered.push(
                      <div key={`building-rest-${idx}`} className="rounded-xl border bg-card p-6 shadow-card animate-fade-in-up" style={{ animationDelay: `${160 + idx * 80}ms` }}>
                        <h2 className="text-2xl font-semibold">{sec.heading}</h2>
                        <p className="mt-2 text-muted-foreground">{sec.body}</p>
                        {sec.bullets && (
                          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                            {sec.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 animate-fade-in-up" style={{ animationDelay: `${200 + i * 50}ms` }}>
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  });
                  return rendered;
                }
                if (pillar.slug === "education") {
                  const pathways = sections.find((s) => /professional\s+pathways|pathways/i.test(s.heading));
                  const rest = sections.filter((s) => s !== pathways);
                  const iconMap = (text: string) => {
                    const t = text.toLowerCase();
                    if (t.includes('learning')) return BookOpen;
                    if (t.includes('exam')) return CheckCircle;
                    if (t.includes('skill')) return Activity;
                    if (t.includes('career') || t.includes('mentor')) return Stethoscope;
                    return CheckCircle;
                  };
                  const out: JSX.Element[] = [];
                  if (pathways) {
                    out.push(
                      <div key="education-pathways" className="rounded-xl bg-gradient-card shadow-medical border p-6 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `120ms` }}>
                        <div className="flex items-start gap-3">
                          <div className="rounded-xl bg-primary/15 text-primary p-3">
                            <BookOpen className="h-6 w-6" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold">{pathways.heading}</h2>
                            <p className="mt-2 text-muted-foreground">{pathways.body}</p>
                          </div>
                        </div>
                        {pathways.bullets && pathways.bullets.length > 0 && (
                          <div className="mt-5 grid sm:grid-cols-2 gap-3">
                            {pathways.bullets.map((b, i) => {
                              const Icon = iconMap(b);
                              return (
                                <div key={i} className="flex items-start gap-2 rounded-lg border bg-card p-3 animate-fade-in-up" style={{ animationDelay: `${160 + i * 40}ms` }}>
                                  <div className="mt-0.5 rounded-md bg-primary/10 text-primary p-1"><Icon className="h-4 w-4" /></div>
                                  <div className="text-sm text-foreground">{b}</div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }
                  rest.forEach((sec, idx) => {
                    out.push(
                      <div key={`education-rest-${idx}`} className="rounded-xl border bg-card p-6 shadow-card animate-fade-in-up" style={{ animationDelay: `${160 + idx * 80}ms` }}>
                        <h2 className="text-2xl font-semibold">{sec.heading}</h2>
                        <p className="mt-2 text-muted-foreground">{sec.body}</p>
                        {sec.bullets && (
                          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                            {sec.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 animate-fade-in-up" style={{ animationDelay: `${200 + i * 50}ms` }}>
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  });
                  return out;
                }
                return sections.map((sec, idx) => (
                  <div key={idx} className="rounded-xl border bg-card p-6 shadow-card animate-fade-in-up" style={{ animationDelay: `${120 + idx * 80}ms` }}>
                    <h2 className="text-2xl font-semibold">{sec.heading}</h2>
                    <p className="mt-2 text-muted-foreground">{sec.body}</p>
                    {sec.bullets && (
                      <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                        {sec.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 animate-fade-in-up" style={{ animationDelay: `${160 + i * 50}ms` }}>
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ));
              })()}

              {/* Execution Timeline */}
              {(() => {
                if (pillar.slug === 'caring') return null; // caring renders phases inline above
                const timelineSection = pillar.sections.find((s) => /phase|timeline/i.test(s.heading));
                const phases = timelineSection?.bullets ?? [];
                if (!phases.length) return null;
                return (
                  <div className="rounded-xl border bg-card p-6 shadow-card animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <h2 className="text-2xl font-semibold">Execution Timeline</h2>
                    <div className="mt-6">
                      <div className="relative">
                        <div className="absolute left-4 right-4 top-5 h-0.5 bg-muted" />
                        <div className="grid md:grid-cols-4 gap-6">
                          {phases.map((p, i) => (
                            <div key={i} className="relative flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${240 + i * 80}ms` }}>
                              <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
                                {i + 1}
                              </div>
                              <div>
                                <div className="font-medium">{p}</div>
                                <div className="text-xs text-muted-foreground">Phase {i + 1}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Education Programs (boxes) */}
              {pillar.slug === "education" && (
                <div className="rounded-xl border bg-card p-6 shadow-card animate-fade-in-up" style={{ animationDelay: '240ms' }}>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-semibold">Postgraduate Medical Pathways (Beyond NEET-PG)</h2>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "MRCP (UK) – Membership of the Royal College of Physicians",
                      "MRCS (UK) – Membership of the Royal College of Surgeons",
                      "MRCOG – Obstetrics and Gynaecology",
                      "MRCPCh – Paediatrics",
                      "MRCEM – Emergency Medicine",
                      "MRCPsych – Psychiatry",
                      "FRCR – Clinical Radiology",
                      "FRCR – Clinical Oncology",
                    ].map((text, i) => (
                      <div key={text} className="rounded-lg border bg-background p-4 hover:shadow-card transition-shadow animate-fade-in-up" style={{ animationDelay: `${280 + i * 40}ms` }}>
                        <div className="text-sm text-foreground">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {pillar.faqs && pillar.faqs.length > 0 && (
                <div className="rounded-xl border bg-card p-6 shadow-card">
                  <h2 className="text-2xl font-semibold">FAQs</h2>
                  <Accordion type="single" collapsible className="mt-3 divide-y">
                    {pillar.faqs.map((f, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                        <AccordionContent>{f.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>
            <aside className="space-y-4">
              {/* Stats */}
              {pillar.stats && pillar.stats.length > 0 && (
                <div className="rounded-xl border bg-gradient-card p-6 shadow-medical">
                  <div className="text-sm text-muted-foreground">Key Metrics</div>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {pillar.stats.map((s, i) => (
                      <div key={i} className="rounded-lg border bg-background p-3 text-center">
                        <CountUpValue value={s.value} />
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="rounded-xl border bg-gradient-card p-6 shadow-medical">
                <div className="text-sm text-muted-foreground">Need guidance?</div>
                <div className="mt-1 font-semibold">Talk to our experts</div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a href="tel:+919701876584" className="rounded-md bg-primary px-4 py-2 text-primary-foreground text-center hover:bg-primary/90">Call</a>
                  <a href="mailto:info@valuemedhealthcare.com" className="rounded-md border px-4 py-2 text-center hover:bg-accent">Email</a>
                </div>
              </div>
              <div className="rounded-xl border bg-card p-4 shadow-card text-sm">
                <div className="font-medium">Related</div>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li><Link to="/pillars/building" className="hover:text-primary">Building</Link></li>
                  <li><Link to="/pillars/caring" className="hover:text-primary">Caring</Link></li>
                  <li><Link to="/pillars/education" className="hover:text-primary">Education & Training</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      {/* Quick Peek Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{pillar.title}</DialogTitle>
            <DialogDescription>{pillar.tagline}</DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-4">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={pillar.modalImage || pillar.detailImage || pillar.heroImage} alt="" className="w-full h-56 object-cover rounded-lg border" />
            <div className="space-y-3 text-sm text-muted-foreground">
              {pillar.quickPeek && pillar.quickPeek.length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {pillar.quickPeek.map((item, idx) => {
                    const IconEl = (() => {
                      const key = item.icon.toLowerCase();
                      if (key === 'map') return Map;
                      if (key === 'shield') return Shield;
                      if (key === 'cpu') return Cpu;
                      if (key === 'wrench') return Wrench;
                      if (key === 'sun') return Sun;
                      if (key === 'users') return Users;
                      if (key === 'book') return BookOpen;
                      if (key === 'check') return CheckCircle;
                      if (key === 'activity') return Activity;
                      if (key === 'stethoscope') return Stethoscope;
                      return CheckCircle;
                    })();
                    return (
                      <div key={idx} className="flex items-start gap-3 rounded-md border bg-background p-3">
                        <div className="mt-0.5 rounded-md bg-primary/10 text-primary p-1">
                          <IconEl className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{item.title}</div>
                          <div className="text-muted-foreground text-xs">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-3">
                  {pillar.sections[0] && (
                    <>
                      <div className="text-foreground font-medium">{pillar.sections[0].heading}</div>
                      <p>{pillar.sections[0].body}</p>
                      {pillar.sections[0].bullets && (
                        <ul className="list-disc pl-5">
                          {pillar.sections[0].bullets!.slice(0, 4).map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default PillarDetail;
