import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  { id: "1", title: "10 Tips to Ace Your Next Technical Interview", excerpt: "Prepare for your dream tech job with these proven strategies that top candidates use to stand out.", date: "Feb 10, 2026", category: "Career Tips" },
  { id: "2", title: "The Future of Remote Work in 2026", excerpt: "How companies are adapting to hybrid and remote-first models, and what it means for job seekers.", date: "Feb 5, 2026", category: "Industry Trends" },
  { id: "3", title: "Building a Standout LinkedIn Profile", excerpt: "Your LinkedIn is your digital resume. Learn how to optimize every section for maximum visibility.", date: "Jan 28, 2026", category: "Career Tips" },
  { id: "4", title: "Top 5 In-Demand Skills for Data Scientists", excerpt: "Stay ahead of the curve by mastering these essential data science skills that employers value most.", date: "Jan 20, 2026", category: "Skills" },
  { id: "5", title: "How to Negotiate Your Salary Like a Pro", excerpt: "Don't leave money on the table. Learn the art and science of salary negotiation from HR experts.", date: "Jan 12, 2026", category: "Career Tips" },
  { id: "6", title: "The Rise of AI in Recruitment", excerpt: "Artificial intelligence is transforming how companies hire. Here's what it means for candidates.", date: "Jan 5, 2026", category: "Industry Trends" },
];

const Blog = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Blog & Resources</h1>
          <p className="mt-2 text-primary-foreground/70">Career tips, industry insights, and job search strategies</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group flex flex-col rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover hover:border-primary/30 overflow-hidden">
              <div className="h-40 bg-subtle-gradient" />
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{post.category}</span>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                  <span className="flex items-center gap-1 text-primary font-medium group-hover:underline">
                    Read more <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Blog;
