import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-gradient">
              <Briefcase className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="font-display text-xl font-bold">JobPortal</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            Connecting talent with opportunity. Find your dream job or the perfect candidate — all in one place.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider opacity-60">For Job Seekers</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/jobs" className="hover:opacity-100 transition-opacity">Browse Jobs</Link></li>
            <li><Link to="/companies" className="hover:opacity-100 transition-opacity">Companies</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Career Resources</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Salary Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider opacity-60">For Employers</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Post a Job</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Pricing</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Recruiting Solutions</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Employer Branding</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider opacity-60">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-navy-foreground/10 pt-8 text-center text-sm opacity-50">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
