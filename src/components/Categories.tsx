import { categories } from "@/data/mockData";
import { Link } from "react-router-dom";

const Categories = () => (
  <section className="bg-subtle-gradient py-20">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Browse by <span className="text-gradient">Category</span>
        </h2>
        <p className="mt-3 text-muted-foreground">Explore opportunities across industries</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/jobs?cat=${encodeURIComponent(cat.name)}`}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:border-primary/30"
          >
            <span className="text-3xl">{cat.icon}</span>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-muted-foreground">{cat.count.toLocaleString()} open positions</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
