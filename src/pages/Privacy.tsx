import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 space-y-6">
          {[
            { t: "Information We Collect", p: "We collect information you provide directly, such as your name, email, resume, and profile information when you register or apply for jobs." },
            { t: "How We Use Your Information", p: "Your data is used to match you with relevant job opportunities, communicate with employers, and improve our platform experience." },
            { t: "Data Protection", p: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure." },
            { t: "Your Rights", p: "You have the right to access, correct, or delete your personal data at any time. Contact us for any data-related requests." },
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

export default Privacy;
