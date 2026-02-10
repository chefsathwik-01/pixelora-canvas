import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Structured Process",
    desc: "From discovery to launch, every project follows a clear roadmap — no guesswork, no surprises.",
  },
  {
    title: "Clarity Over Complexity",
    desc: "We strip away the noise. Your message comes through loud and clear to every visitor.",
  },
  {
    title: "Long‑Term Support",
    desc: "We don't disappear after launch. Ongoing guidance and updates keep your site performing.",
  },
  {
    title: "Results‑Driven Design",
    desc: "Aesthetic decisions serve business goals. Every pixel has a purpose.",
  },
];

const WhyUs = () => (
  <section id="why" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">
        Why Pixelora Labs
      </p>
      <h2 className="mx-auto mb-12 max-w-lg text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        A partner you can count on
      </h2>

      <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
        {points.map((p) => (
          <div key={p.title} className="flex gap-4">
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
