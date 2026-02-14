import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="bg-hero-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl">Get in Touch</h1>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Contact Information</h2>
                <p className="mt-2 text-sm text-muted-foreground">Reach out to us through any of these channels.</p>
              </div>
              {[
                { icon: Mail, label: "Email", value: "hello@jobportal.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Address", value: "123 Career Street, San Francisco, CA 94105" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-8 shadow-card space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <Button type="submit" className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
