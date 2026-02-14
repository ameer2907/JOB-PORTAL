import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", text: "To bridge the gap between talented professionals and forward-thinking companies, making the job search process seamless and rewarding for everyone." },
  { icon: Eye, title: "Our Vision", text: "A world where every person finds meaningful work that aligns with their skills, passion, and purpose — and every company finds the right talent to thrive." },
  { icon: Heart, title: "Our Values", text: "Transparency, inclusivity, and innovation drive everything we do. We believe in creating equal opportunities and empowering careers at every stage." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl">About JobPortal</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            We're on a mission to transform how people find jobs and how companies find talent.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-8 shadow-card text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gradient text-accent-foreground">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
