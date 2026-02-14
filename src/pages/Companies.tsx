import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companies } from "@/data/mockData";
import { MapPin } from "lucide-react";

const Companies = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Top Companies</h1>
          <p className="mt-2 text-primary-foreground/70">Discover companies that are actively hiring</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3">
          {companies.map((c) => (
            <div key={c.id} className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-card transition-all hover:shadow-card-hover hover:border-primary/30">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary font-display text-2xl font-bold text-secondary-foreground transition-transform group-hover:scale-110">
                {c.logo}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.industry}</p>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />{c.location}
              </div>
              <span className="mt-4 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                {c.openPositions} open positions
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Companies;
