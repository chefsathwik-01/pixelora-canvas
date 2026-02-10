import { Globe, Bot, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Business-focused websites that are fast, responsive, SEO-ready, and built for trust, clarity, and conversions.",
  },
  {
    icon: Bot,
    title: "AI Chatbots for Business",
    desc: "Handle FAQs, qualify leads, and support customers — integrated directly into your website, simple and reliable.",
  },
  {
    icon: Cpu,
    title: "AI Agents for Workflow Automation",
    desc: "Automate repetitive tasks and streamline internal workflows to improve efficiency and response time.",
  },
];

const Services = () => (
  <section id="services" className="bg-secondary/40 py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          What We Do
        </p>
        <h2 className="mx-auto mb-12 max-w-lg text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Services designed around results
        </h2>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1}>
            <Card className="group border-border/60 bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-start gap-4 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      {/* Pricing CTA */}
      <ScrollReveal delay={0.2}>
        <div className="mx-auto mt-16 max-w-lg text-center">
          <p className="text-lg font-semibold text-foreground">Every business is different.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Pricing depends on your goals and requirements.
          </p>
          <Button size="lg" asChild className="mt-6 px-8 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]">
            <a href="https://wa.me/919606185669?text=Hi%20Pixelora%20Labs%2C%20I%27d%20like%20to%20know%20about%20pricing." target="_blank" rel="noopener noreferrer">
              Get pricing on WhatsApp
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Services;
