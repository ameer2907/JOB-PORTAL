import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/mockData";

const FeaturedJobs = () => {
  const featured = jobs.filter((j) => j.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Featured <span className="text-gradient">Jobs</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Hand-picked opportunities from top employers</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((job) => (
            <Link
              key={job.id}
              to={`/jobs/${job.id}`}
              className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:border-primary/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary font-display text-sm font-bold text-secondary-foreground">
                {job.companyLogo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  <Bookmark className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
                  <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" />{job.salary}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{job.posted}</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{job.type}</span>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">{job.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/jobs">View All Jobs →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
