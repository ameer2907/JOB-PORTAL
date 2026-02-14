import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PostJob = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "", company: "", location: "", type: "Full-time", salary: "", experience: "", category: "IT & Software", description: "", requirements: "",
  });

  const update = (key: string, value: string) => setForm({ ...form, [key]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Job posted!", description: "Your job listing is now live." });
      setForm({ title: "", company: "", location: "", type: "Full-time", salary: "", experience: "", category: "IT & Software", description: "", requirements: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="bg-hero-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Post a Job</h1>
            <p className="mt-2 text-primary-foreground/70">Reach thousands of qualified candidates</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-2xl px-4">
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-elevated">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Job Title</label>
                  <input type="text" required maxLength={100} value={form.title} onChange={(e) => update("title", e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. Senior Developer" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Company Name</label>
                  <input type="text" required maxLength={100} value={form.company} onChange={(e) => update("company", e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your Company" />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Location</label>
                  <input type="text" required maxLength={100} value={form.location} onChange={(e) => update("location", e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. New York, NY" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Salary Range</label>
                  <input type="text" required maxLength={50} value={form.salary} onChange={(e) => update("salary", e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. $80k - $120k" />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Job Type</label>
                  <select value={form.type} onChange={(e) => update("type", e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Full-time</option><option>Part-time</option><option>Remote</option><option>Contract</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Experience</label>
                  <input type="text" required maxLength={50} value={form.experience} onChange={(e) => update("experience", e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. 3+ years" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Category</label>
                  <select value={form.category} onChange={(e) => update("category", e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    {["IT & Software", "Data Science", "Marketing", "Design", "Finance", "Healthcare", "Education", "Management"].map((c) => (<option key={c}>{c}</option>))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Job Description</label>
                <textarea required maxLength={2000} rows={5} value={form.description} onChange={(e) => update("description", e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Describe the role, responsibilities..." />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Requirements (one per line)</label>
                <textarea required maxLength={1000} rows={4} value={form.requirements} onChange={(e) => update("requirements", e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="5+ years experience&#10;React proficiency&#10;..." />
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90" size="lg">
                {loading ? "Publishing..." : "Publish Job"}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PostJob;
