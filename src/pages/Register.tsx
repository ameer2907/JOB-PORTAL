import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", role: "jobseeker" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast({ title: "Passwords don't match", description: "Please make sure both passwords are the same.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Account created!", description: "Welcome to Evolve Solutions." });
    }, 1000);
  };

  const update = (key: string, value: string) => setForm({ ...form, [key]: value });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex items-center justify-center py-20">
        <div className="mx-auto w-full max-w-md px-4">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-elevated">
            <div className="mb-6 flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient">
                <Briefcase className="h-6 w-6 text-accent-foreground" />
              </div>
              <h1 className="font-display text-2xl font-bold text-foreground">Create Account</h1>
              <p className="mt-1 text-sm text-muted-foreground">Join Evolve Solutions today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">I am a</label>
                <div className="flex gap-3">
                  {[
                    { value: "jobseeker", label: "Job Seeker" },
                    { value: "recruiter", label: "Recruiter" },
                  ].map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => update("role", r.value)}
                      className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                        form.role === r.value
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-input text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    maxLength={128}
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Min 8 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Confirm Password</label>
                <input
                  type="password"
                  required
                  maxLength={128}
                  value={form.confirmPassword}
                  onChange={(e) => update("confirmPassword", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90"
              >
                {loading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
