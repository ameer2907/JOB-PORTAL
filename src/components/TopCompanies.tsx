import { companies } from "@/data/mockData";
import { MapPin } from "lucide-react";

const TopCompanies = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Top <span className="text-gradient">Companies</span> Hiring
        </h2>
        <p className="mt-3 text-muted-foreground">Join the teams shaping the future</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {companies.map((c) => (
          <div
            key={c.id}
            className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-card transition-all hover:shadow-card-hover hover:border-primary/30"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary font-display text-lg font-bold text-secondary-foreground transition-transform group-hover:scale-110">
              {c.logo}
            </div>
            <h3 className="font-display font-semibold text-foreground">{c.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{c.industry}</p>
            <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />{c.location}
            </div>
            <span className="mt-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {c.openPositions} open positions
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TopCompanies;
