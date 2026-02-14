import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Briefcase, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-32">
          <h1 className="font-display text-2xl font-bold text-foreground">Job Not Found</h1>
          <Button asChild className="mt-4" variant="outline">
            <Link to="/jobs"><ArrowLeft className="mr-2 h-4 w-4" />Back to Jobs</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="bg-hero-gradient py-12">
          <div className="container mx-auto px-4">
            <Link to="/jobs" className="mb-4 inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Jobs
            </Link>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card/20 font-display text-xl font-bold text-primary-foreground">
                  {job.companyLogo}
                </div>
                <div>
                  <h1 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">{job.title}</h1>
                  <p className="text-primary-foreground/70">{job.company}</p>
                </div>
              </div>
              <Button size="lg" className="bg-accent-gradient text-accent-foreground hover:opacity-90 w-full md:w-auto">
                Apply Now
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h2 className="font-display text-lg font-semibold text-foreground">Job Description</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.description}</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h2 className="font-display text-lg font-semibold text-foreground">Requirements</h2>
                <ul className="mt-3 space-y-2">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-sm font-semibold text-foreground">Job Overview</h3>
                <div className="mt-4 space-y-4">
                  {[
                    { icon: DollarSign, label: "Salary", value: job.salary },
                    { icon: MapPin, label: "Location", value: job.location },
                    { icon: Briefcase, label: "Experience", value: job.experience },
                    { icon: Clock, label: "Posted", value: job.posted },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{job.type}</span>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">{job.category}</span>
                </div>
              </div>

              <Button size="lg" className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90">
                Apply Now
              </Button>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
