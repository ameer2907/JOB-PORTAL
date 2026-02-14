import { Search, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Advanced filters and AI-powered recommendations to match you with the perfect role.",
  },
  {
    icon: Shield,
    title: "Verified Companies",
    description: "Every employer is vetted to ensure legitimate opportunities and a safe job-seeking experience.",
  },
  {
    icon: Zap,
    title: "Quick Apply",
    description: "Apply to multiple jobs with a single click. Your profile does the heavy lifting.",
  },
  {
    icon: Users,
    title: "Career Support",
    description: "Access resources, resume tools, and expert advice to advance your career.",
  },
];

const WhyChooseUs = () => (
  <section className="bg-subtle-gradient py-20">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Why Choose <span className="text-gradient">JobPortal</span>
        </h2>
        <p className="mt-3 text-muted-foreground">Everything you need for a successful job search</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-xl bg-card p-6 shadow-card transition-all hover:shadow-card-hover text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gradient text-accent-foreground transition-transform group-hover:scale-110">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
