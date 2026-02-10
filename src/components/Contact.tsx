import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";

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
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Get In Touch
        </p>
        <h2 className="mx-auto mb-12 max-w-lg text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Let's talk about your project
        </h2>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-5">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 md:col-span-3">
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
            <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Sending…" : "Send Message"}
            </Button>
          </form>

          {/* Sidebar */}
          <div className="flex flex-col justify-center gap-6 md:col-span-2">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Email us</p>
                <a href="mailto:hello@pixeloralabs.com" className="text-sm text-muted-foreground hover:text-primary">
                  hello@pixeloralabs.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">WhatsApp</p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
