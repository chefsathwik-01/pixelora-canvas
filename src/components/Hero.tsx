import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section
    id="home"
    className="relative overflow-hidden bg-secondary/40 py-24 md:py-36"
  >
    {/* Abstract gradient blobs */}
    <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
    <div className="pointer-events-none absolute -bottom-20 right-0 h-[300px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

    <div className="container relative mx-auto px-4 text-center md:px-8">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
        Digital Agency
      </p>
      <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
        Websites that help businesses grow&nbsp;— not just look good
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        We design and build clean, fast, conversion‑centric websites that turn
        visitors into customers — so you can focus on running your business.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <a href="#contact">
            Get Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#services">See Our Services</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
