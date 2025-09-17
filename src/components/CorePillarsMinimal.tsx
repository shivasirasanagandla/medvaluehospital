import { Link } from "react-router-dom";
import { pillars } from "@/data/pillars";

const CorePillarsMinimal = () => {
  // Desired display order for home page: Caring, Education & Training, Building
  const order: Record<string, number> = { caring: 0, education: 1, building: 2 };
  const displayPillars = pillars.slice().sort((a, b) => (order[a.slug] ?? 99) - (order[b.slug] ?? 99));
  return (
    <section id="pillars" className="py-16 medical-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in-up" style={{ animationDelay: '40ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Pillars</h2>
          <p className="text-muted-foreground mt-2">Foundation for healthcare excellence</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayPillars.map((p, idx) => (
            <div key={p.slug} className="rounded-2xl overflow-hidden medical-card pillar-interactive flex flex-col animate-fade-in-up" style={{ animationDelay: `${80 + idx * 60}ms` }}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img src={p.cardImage || p.heroImage} alt="" className="h-44 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-sm text-primary/80">{p.badge || "Pillar"}</div>
                <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.shortDescription}</p>
                <div className="mt-4 pt-2">
                  <Link
                    to={`/pillars/${p.slug}`}
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 interactive-hover"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillarsMinimal;
