import { Building2, Briefcase, Rocket, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const audiences = [
  {
    icon: Building2,
    title: "Local Businesses",
    desc: "Attract more foot traffic and local customers with a polished online presence.",
  },
  {
    icon: Briefcase,
    title: "SMEs",
    desc: "Scale your brand with a website built for growth, credibility, and conversions.",
  },
  {
    icon: Rocket,
    title: "Startups",
    desc: "Launch fast with a lean, high‑impact site that communicates your vision clearly.",
  },
  {
    icon: User,
    title: "Professionals",
    desc: "Showcase your expertise and build trust with a clean personal or portfolio site.",
  },
];

const WhoWeHelp = () => (
  <section id="audience" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Who We Help
        </p>
        <h2 className="mx-auto mb-12 max-w-lg text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Built for businesses like yours
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((a, i) => (
          <ScrollReveal key={a.title} delay={i * 0.08}>
            <Card className="group border-border/60 bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-start gap-3 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeHelp;
