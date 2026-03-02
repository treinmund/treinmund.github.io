import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <section className="container flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="animate-fade-in-up text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Researcher · Practitioner · Educator
        </p>
        <h1 className="animate-fade-in-up delay-100 mt-6 font-display text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Dr. Alex Morgan
        </h1>
        <p className="animate-fade-in-up delay-200 mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          I study the intersection of human-computer interaction and AI ethics, working to
          build technologies that are equitable, transparent, and human-centered.
        </p>
        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="active:scale-[0.98] transition-transform">
            <Link to="/research">
              View Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="active:scale-[0.98] transition-transform">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Index;
