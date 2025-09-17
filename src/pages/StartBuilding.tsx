import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMemo, useState } from "react";

const StartBuilding = () => {
  // Wizard steps definition
  const steps = [
    { key: "basics", title: "Basics" },
    { key: "scope", title: "Scope" },
    { key: "accreditation", title: "Accreditation" },
    { key: "timeline", title: "Timeline & Budget" },
    { key: "summary", title: "Summary" },
  ] as const;

  type StepKey = typeof steps[number]["key"];

  const [current, setCurrent] = useState<StepKey>("basics");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    city: "",
    type: "",
    scope: [] as string[],
    accreditation: [] as string[],
    timeline: "",
    budget: "",
    details: "",
  });

  const stepIndex = steps.findIndex(s => s.key === current);
  const progress = Math.round(((stepIndex + 1) / steps.length) * 100);

  const toggleMulti = (field: "scope" | "accreditation", value: string) => {
    setForm(prev => {
      const exists = prev[field].includes(value);
      const next = exists
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value];
      return { ...prev, [field]: next };
    });
  };

  const next = () => setCurrent(steps[Math.min(stepIndex + 1, steps.length - 1)].key);
  const prev = () => setCurrent(steps[Math.max(stepIndex - 1, 0)].key);

  // Simple estimations to make the page feel smart
  const estimates = useMemo(() => {
    let months = 2; // base
    let score = 0;

    if (form.type.includes("Hospital")) months += 6;
    if (form.type.includes("Medical College")) months += 9;
    if (form.scope.includes("Architecture")) months += 2;
    if (form.scope.includes("Equipment")) months += 2;
    if (form.scope.includes("Operations")) months += 3;
    if (form.scope.includes("Recruitment")) months += 2;

    if (form.accreditation.includes("NABH")) score += 2;
    if (form.accreditation.includes("NABL")) score += 2;
    if (form.accreditation.includes("JCI")) score += 4;

    const complexity = score >= 6 ? "High" : score >= 3 ? "Medium" : "Standard";
    const phases = [
      "Feasibility & Planning",
      "Architecture & Design",
      "Licensing & Approvals",
      "Commissioning & Operations",
    ];

    return { months, complexity, phases };
  }, [form.type, form.scope, form.accreditation]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate backend/email later
    console.log("Project Request", form, estimates);
    setCurrent("summary");
  };

  const StepBadge = ({ active, done }: { active?: boolean; done?: boolean }) => (
    <span className={`h-2 w-2 rounded-full inline-block ${done ? "bg-primary" : active ? "bg-primary/60" : "bg-muted-foreground/30"}`} />
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero distinct visual */}
        <section className="border-b bg-gradient-to-b from-background via-secondary/20 to-background">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Project Builder Wizard
                </h1>
                <p className="mt-3 text-muted-foreground max-w-prose">
                  An interactive, step‑by‑step planner to shape your healthcare project and instantly
                  preview timelines and complexity.
                </p>
                <div className="mt-4 flex gap-3 text-sm">
                  <span className="px-3 py-1 rounded-full bg-primary/15 text-primary">Smart Estimates</span>
                  <span className="px-3 py-1 rounded-full bg-trust-blue/15 text-foreground">Accreditation Ready</span>
                  <span className="px-3 py-1 rounded-full bg-medical-green/15 text-foreground">End‑to‑End</span>
                </div>
              </div>
              <div className="md:w-80">
                <div className="rounded-xl border bg-card p-4 shadow-card">
                  <div className="text-sm mb-2">Progress</div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    {steps.map((s, i) => (
                      <StepBadge key={s.key} active={i === stepIndex} done={i < stepIndex} />
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    Live Summary updates as you fill each step.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wizard Layout */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-3">
            {/* Left: Steps */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tabs/Steps header */}
              <div className="flex flex-wrap gap-2">
                {steps.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => setCurrent(s.key)}
                    className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                      i === stepIndex ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {i + 1}. {s.title}
                  </button>
                ))}
              </div>

              <form onSubmit={submit} className="rounded-xl border bg-card p-6 shadow-card space-y-6">
                {current === "basics" && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <input value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} required className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <input type="email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} required className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone *</label>
                      <input value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} required className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Organization</label>
                      <input value={form.organization} onChange={e=>setForm({ ...form, organization: e.target.value })} className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">City *</label>
                      <input value={form.city} onChange={e=>setForm({ ...form, city: e.target.value })} required className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Project Type *</label>
                      <select value={form.type} onChange={e=>setForm({ ...form, type: e.target.value })} required className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select</option>
                        <option>Multi‑Specialty Hospital</option>
                        <option>Specialty Hospital</option>
                        <option>Clinic / Polyclinic</option>
                        <option>Diagnostic Center</option>
                        <option>Medical College</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {current === "scope" && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {["Feasibility", "Architecture", "Equipment", "Licensing", "Operations", "Recruitment"].map(item => (
                      <label key={item} className="flex items-center gap-3 rounded-lg border p-3 hover:bg-accent">
                        <input type="checkbox" checked={form.scope.includes(item)} onChange={()=>toggleMulti("scope", item)} />
                        <span>{item}</span>
                      </label>
                    ))}
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-medium">Additional Details</label>
                      <textarea value={form.details} onChange={e=>setForm({ ...form, details: e.target.value })} rows={4} className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>
                  </div>
                )}

                {current === "accreditation" && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {["NABH", "NABL", "JCI"].map(item => (
                      <label key={item} className="flex items-center gap-3 rounded-lg border p-3 hover:bg-accent">
                        <input type="checkbox" checked={form.accreditation.includes(item)} onChange={()=>toggleMulti("accreditation", item)} />
                        <span>{item}</span>
                      </label>
                    ))}
                    <div className="md:col-span-2 text-sm text-muted-foreground">
                      Selecting accreditation helps us tailor documentation, quality indicators, and compliance pathways.
                    </div>
                  </div>
                )}

                {current === "timeline" && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Desired Timeline</label>
                      <select value={form.timeline} onChange={e=>setForm({ ...form, timeline: e.target.value })} className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select</option>
                        <option>0–3 months</option>
                        <option>3–6 months</option>
                        <option>6–12 months</option>
                        <option>12+ months</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Estimated Budget</label>
                      <select value={form.budget} onChange={e=>setForm({ ...form, budget: e.target.value })} className="w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select</option>
                        <option>Under ₹5 Cr</option>
                        <option>₹5–20 Cr</option>
                        <option>₹20–50 Cr</option>
                        <option>₹50–100 Cr</option>
                        <option>₹100+ Cr</option>
                      </select>
                    </div>
                  </div>
                )}

                {current === "summary" && (
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4 bg-background">
                      <div className="font-semibold mb-2">Project Summary</div>
                      <div className="text-sm grid md:grid-cols-2 gap-2">
                        <div><span className="text-muted-foreground">Type:</span> {form.type || "—"}</div>
                        <div><span className="text-muted-foreground">City:</span> {form.city || "—"}</div>
                        <div className="md:col-span-2"><span className="text-muted-foreground">Scope:</span> {form.scope.length ? form.scope.join(", ") : "—"}</div>
                        <div className="md:col-span-2"><span className="text-muted-foreground">Accreditation:</span> {form.accreditation.length ? form.accreditation.join(", ") : "—"}</div>
                        <div><span className="text-muted-foreground">Timeline:</span> {form.timeline || "—"}</div>
                        <div><span className="text-muted-foreground">Budget:</span> {form.budget || "—"}</div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4 bg-background">
                      <div className="font-semibold mb-2">Smart Estimate</div>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary">~{estimates.months} months</span>
                        <span className="px-2.5 py-1 rounded-full bg-accent">Complexity: {estimates.complexity}</span>
                      </div>
                      <div className="mt-3 grid gap-2 text-sm">
                        {estimates.phases.map((p, idx) => (
                          <div key={p} className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <div className="flex-1">{idx + 1}. {p}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button type="button" onClick={()=>setCurrent("basics")} className="rounded-md border px-4 py-2 hover:bg-accent">Edit Basics</button>
                      <button type="button" onClick={()=>setCurrent("scope")} className="rounded-md border px-4 py-2 hover:bg-accent">Edit Scope</button>
                      <button type="button" onClick={()=>setCurrent("accreditation")} className="rounded-md border px-4 py-2 hover:bg-accent">Edit Accreditation</button>
                    </div>
                    <div className="pt-2">
                      <a href={`mailto:info@valuemedhealthcare.com?subject=Project%20Request%20-%20${encodeURIComponent(form.type || "Healthcare Project")}`}
                         className="inline-flex items-center rounded-md bg-foreground px-5 py-3 text-white hover:opacity-90">
                        Email This Plan
                      </a>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-2">
                  <button type="button" onClick={prev} disabled={stepIndex === 0} className="rounded-md border px-4 py-2 disabled:opacity-50 hover:bg-accent">
                    Back
                  </button>
                  {current !== "summary" ? (
                    <button type="button" onClick={next} className="rounded-md bg-primary px-5 py-2.5 text-primary-foreground hover:bg-primary/90">
                      Continue
                    </button>
                  ) : (
                    <button type="submit" className="rounded-md bg-primary px-5 py-2.5 text-primary-foreground hover:bg-primary/90">
                      Submit Request
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Right: Live summary */}
            <aside className="space-y-4 lg:sticky lg:top-24 h-fit">
              <div className="rounded-xl border bg-gradient-card p-6 shadow-medical">
                <div className="text-sm text-muted-foreground">Live Summary</div>
                <div className="mt-2 font-semibold">{form.type || "Your Project"}</div>
                <div className="mt-2 text-sm text-muted-foreground">{form.city || "City TBD"}</div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg border bg-background p-3">
                    <div className="text-xs text-muted-foreground">Estimate</div>
                    <div className="font-semibold">~{estimates.months} months</div>
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    <div className="text-xs text-muted-foreground">Complexity</div>
                    <div className="font-semibold">{estimates.complexity}</div>
                  </div>
                  <div className="col-span-2 rounded-lg border bg-background p-3">
                    <div className="text-xs text-muted-foreground mb-1">Scope</div>
                    <div>{form.scope.length ? form.scope.join(", ") : "Select scope"}</div>
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    <div className="text-xs text-muted-foreground">Timeline</div>
                    <div className="font-semibold">{form.timeline || "—"}</div>
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    <div className="text-xs text-muted-foreground">Budget</div>
                    <div className="font-semibold">{form.budget || "—"}</div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href={`tel:+919701876584`}
                    className="rounded-md bg-primary px-4 py-2 text-primary-foreground text-center hover:bg-primary/90"
                  >
                    Call
                  </a>
                  <a
                    href={`https://wa.me/919701876584?text=${encodeURIComponent(
                      `Hello ValueMed,%0A` +
                      `I'm ${form.name || "(Your Name)"} from ${form.organization || "(Organization)"}.%0A` +
                      `Project: ${form.type || "(Type)"} in ${form.city || "(City)"}.%0A` +
                      `Scope: ${form.scope.length ? form.scope.join(", ") : "(Select Scope)"}.%0A` +
                      `Accreditation: ${form.accreditation.length ? form.accreditation.join(", ") : "(Optional)"}.%0A` +
                      `Timeline: ${form.timeline || "(Timeline)"}, Budget: ${form.budget || "(Budget)"}.%0A` +
                      `Please schedule a discovery call.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border px-4 py-2 text-center hover:bg-accent"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:info@valuemedhealthcare.com?subject=${encodeURIComponent(
                      `Discovery Call - ${form.type || "Healthcare Project"}`
                    )}&body=${encodeURIComponent(
                      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nOrganization: ${form.organization}\nCity: ${form.city}\n\nProject Type: ${form.type}\nScope: ${form.scope.join(", ")}\nAccreditation: ${form.accreditation.join(", ")}\nTimeline: ${form.timeline}\nBudget: ${form.budget}\n\nDetails:\n${form.details}\n\nPlease suggest available slots for a discovery call.`
                    )}`}
                    className="rounded-md border px-4 py-2 text-center hover:bg-accent"
                  >
                    Email
                  </a>
                </div>
              </div>
              <div className="rounded-xl border bg-card p-4 shadow-card text-sm">
                <div className="font-medium">Why this is different</div>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Interactive planner with instant feedback</li>
                  <li>• Accreditation-aware planning</li>
                  <li>• Phase-based execution roadmap</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StartBuilding;
