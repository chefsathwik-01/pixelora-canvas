import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/919606185669?text=Hi%20Pixelora%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Get In Touch
          </p>
          <h2 className="mx-auto mb-4 max-w-lg text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tell us about your business
          </h2>
          <p className="mx-auto mb-12 max-w-md text-center text-sm text-muted-foreground">
            We'll help you figure out the right solution.
          </p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-5">
          {/* Form */}
          <ScrollReveal className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project..." rows={5} required className="mt-1.5" />
              </div>
              <Button type="submit" size="lg" disabled={loading} className="w-full transition-all duration-300 active:scale-[0.98] sm:w-auto">
                {loading ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </ScrollReveal>

          {/* Sidebar */}
          <ScrollReveal delay={0.15} className="flex flex-col justify-center gap-6 md:col-span-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 transition-all duration-300 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/10"
            >
              <MessageCircle className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
              <div>
                <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                <p className="text-xs text-muted-foreground">+91 9606185669</p>
              </div>
            </a>
            <a
              href="mailto:pixeloralabs@gmail.com"
              className="group flex items-center gap-3 rounded-lg border border-border/60 p-4 transition-all duration-300 hover:bg-muted hover:shadow-sm"
            >
              <Mail className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">pixeloralabs@gmail.com</p>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
