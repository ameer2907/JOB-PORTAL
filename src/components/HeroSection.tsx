import { Search, MapPin, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { stats } from "@/data/mockData";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (location) params.set("loc", location);
    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-up font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Find Your Dream Job with the Right{" "}
            <span className="text-accent">Opportunities</span>
          </h1>
          <p className="mt-5 animate-fade-up text-lg text-primary-foreground/75 md:text-xl" style={{ animationDelay: "0.1s" }}>
            Discover thousands of job openings from top companies. Your next career move starts here.
          </p>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="mt-10 animate-fade-up rounded-2xl bg-card p-2 shadow-elevated md:flex md:items-center"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-1 items-center gap-2 px-3 py-2">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Job title or keyword"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <div className="hidden h-8 w-px bg-border md:block" />
            <div className="flex flex-1 items-center gap-2 px-3 py-2">
              <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Button type="submit" size="lg" className="mt-2 w-full bg-accent-gradient text-accent-foreground hover:opacity-90 md:mt-0 md:w-auto">
              <Search className="mr-2 h-4 w-4" />
              Search Jobs
            </Button>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-primary-foreground/60">
            <Layers className="h-4 w-4" />
            <span>Popular:</span>
            {["React Developer", "Data Analyst", "UX Designer", "Marketing"].map((tag) => (
              <button
                key={tag}
                onClick={() => { setQuery(tag); }}
                className="rounded-full border border-primary-foreground/20 px-3 py-0.5 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
