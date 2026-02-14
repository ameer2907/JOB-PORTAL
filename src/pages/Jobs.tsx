import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin, Clock, DollarSign, Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobTypes = ["All", "Full-time", "Part-time", "Remote", "Contract"];

const Jobs = () => {
  const [searchParams] = useSearchParams();
  const initialQ = searchParams.get("q") || "";
  const initialCat = searchParams.get("cat") || "";

  const [query, setQuery] = useState(initialQ);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [showFilters, setShowFilters] = useState(false);

  const allCategories = useMemo(() => ["All", ...new Set(jobs.map((j) => j.category))], []);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const matchQ = !query || j.title.toLowerCase().includes(query.toLowerCase()) || j.company.toLowerCase().includes(query.toLowerCase());
      const matchType = selectedType === "All" || j.type === selectedType;
      const matchCat = !selectedCategory || selectedCategory === "All" || j.category === selectedCategory;
      return matchQ && matchType && matchCat;
    });
  }, [query, selectedType, selectedCategory]);

  const clearFilters = () => {
    setQuery("");
    setSelectedType("All");
    setSelectedCategory("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-hero-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Find Your Perfect Job
            </h1>
            <p className="mt-2 text-primary-foreground/70">
              {filtered.length} opportunities available
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-10">
          {/* Search & filters bar */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 shadow-card">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs or companies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery("")}>
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </div>

          <div className="flex flex-col gap-8 md:flex-row">
            {/* Sidebar filters */}
            <aside className={`w-full shrink-0 md:w-56 ${showFilters ? "block" : "hidden md:block"}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 font-display text-sm font-semibold text-foreground">Job Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {jobTypes.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedType(t)}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                          selectedType === t
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-display text-sm font-semibold text-foreground">Category</h3>
                  <div className="flex flex-col gap-1">
                    {allCategories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedCategory(c === "All" ? "" : c)}
                        className={`rounded-md px-3 py-1.5 text-left text-xs font-medium transition-colors ${
                          (selectedCategory === c || (!selectedCategory && c === "All"))
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {(query || selectedType !== "All" || selectedCategory) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-destructive">
                    Clear All Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Job list */}
            <div className="flex-1 space-y-4">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-border bg-card p-12 text-center shadow-card">
                  <p className="text-muted-foreground">No jobs match your criteria. Try adjusting filters.</p>
                </div>
              ) : (
                filtered.map((job) => (
                  <Link
                    key={job.id}
                    to={`/jobs/${job.id}`}
                    className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:border-primary/30"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary font-display text-sm font-bold text-secondary-foreground">
                      {job.companyLogo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
                        <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" />{job.salary}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{job.posted}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{job.type}</span>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">{job.experience}</span>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
