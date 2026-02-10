const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border/60 bg-background py-10">
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:px-8 md:text-left">
      <p className="text-sm font-bold tracking-tight text-foreground">
        PIXELORA <span className="text-primary">LABS</span>
      </p>
      <nav className="flex gap-6">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {l.label}
          </a>
        ))}
      </nav>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Pixelora Labs. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
