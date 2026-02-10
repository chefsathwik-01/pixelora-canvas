import { Globe, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Professional, mobile‑ready websites that clearly communicate your value and guide visitors to take action.",
  },
  {
    icon: Target,
    title: "Conversion‑Focused Design",
    desc: "Every layout decision is intentional — designed to turn traffic into leads, bookings, or sales.",
  },
  {
    icon: Zap,
    title: "Performance & SEO‑Ready Builds",
    desc: "Lightning‑fast load times and search‑engine‑optimised foundations so your site gets found and keeps visitors.",
  },
];

const Services = () => (
  <section id="services" className="bg-secondary/40 py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">
        What We Do
      </p>
      <h2 className="mx-auto mb-12 max-w-lg text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Services designed around results
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <Card
            key={s.title}
            className="group border-border/60 bg-card transition-shadow hover:shadow-lg"
          >
            <CardContent className="flex flex-col items-start gap-4 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
