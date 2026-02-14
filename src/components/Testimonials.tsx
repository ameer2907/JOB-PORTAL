import { testimonials } from "@/data/mockData";
import { Quote } from "lucide-react";

const Testimonials = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          What People <span className="text-gradient">Say</span>
        </h2>
        <p className="mt-3 text-muted-foreground">Success stories from our community</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
            <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
            <p className="text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gradient text-xs font-bold text-accent-foreground">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} at {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
