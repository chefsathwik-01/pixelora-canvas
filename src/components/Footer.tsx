import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919606185669?text=Hi%20Pixelora%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer
    className="border-t py-12"
    style={{
      backgroundColor: "hsl(220 20% 8%)",
      borderColor: "hsl(220 15% 15%)",
    }}
  >
    <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:px-8 md:text-left">
      <p className="text-sm font-bold tracking-tight" style={{ color: "hsl(0 0% 90%)" }}>
        PIXELORA <span className="text-primary">LABS</span>
      </p>

      <nav className="flex flex-wrap justify-center gap-6">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm transition-colors hover:text-primary"
            style={{ color: "hsl(210 10% 55%)" }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="mailto:pixeloralabs@gmail.com"
          className="text-xs transition-colors hover:text-primary"
          style={{ color: "hsl(210 10% 55%)" }}
        >
          pixeloralabs@gmail.com
        </a>
        <Button size="sm" variant="outline" asChild className="border-primary/30 text-primary hover:bg-primary/10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-1 h-3.5 w-3.5" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
    <p className="mt-8 text-center text-xs" style={{ color: "hsl(210 10% 40%)" }}>
      © {new Date().getFullYear()} Pixelora Labs. All rights reserved.
    </p>
  </footer>
);

export default Footer;
