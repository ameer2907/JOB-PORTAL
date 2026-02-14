import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, FileText, BarChart3, Headphones } from "lucide-react";

const services = [
  { icon: Users, title: "Talent Acquisition", description: "End-to-end recruitment solutions to help you find the best talent. From sourcing to onboarding, we handle it all." },
  { icon: FileText, title: "Resume Building", description: "Professional resume writing and optimization services to help job seekers stand out in competitive markets." },
  { icon: BarChart3, title: "Career Consulting", description: "Expert career guidance, salary negotiation tips, and personalized career path planning for professionals at every stage." },
  { icon: Headphones, title: "HR Solutions", description: "Comprehensive HR consulting including employee engagement, compliance, and workforce planning for growing businesses." },
];

const Services = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            Comprehensive solutions for job seekers and employers alike.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-card-hover hover:border-primary/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gradient text-accent-foreground transition-transform group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Services;
