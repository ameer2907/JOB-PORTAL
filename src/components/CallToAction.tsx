import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => (
  <section className="bg-hero-gradient py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
        Ready to Take the Next Step?
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
        Whether you're looking for your dream job or the perfect candidate, we're here to help you succeed.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg" variant="secondary" className="font-semibold">
          <Link to="/jobs">
            Browse Jobs <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CallToAction;
