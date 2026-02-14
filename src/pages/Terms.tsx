import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Terms of Service</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 space-y-6">
          {[
            { t: "Acceptance of Terms", p: "By accessing or using Evolve Solutions, you agree to be bound by these terms. If you do not agree, please discontinue use of the platform." },
            { t: "User Accounts", p: "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account." },
            { t: "Job Listings", p: "Employers are responsible for the accuracy of job listings. Evolve Solutions reserves the right to remove listings that violate our policies." },
            { t: "Limitation of Liability", p: "Evolve Solutions is not liable for employment decisions made based on information provided on the platform." },
          ].map((s) => (
            <div key={s.t} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold text-foreground">{s.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Terms;
