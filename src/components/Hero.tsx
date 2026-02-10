import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    style={{
      background: "linear-gradient(160deg, hsl(220 20% 8%) 0%, hsl(180 30% 10%) 50%, hsl(220 20% 8%) 100%)",
    }}
  >
    {/* Animated teal glow */}
    <motion.div
      animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.35, 0.25] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
      style={{ background: "radial-gradient(circle, hsl(174 62% 42% / 0.5), transparent 70%)" }}
    />
    <motion.div
      animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full blur-[120px]"
      style={{ background: "hsl(174 62% 42% / 0.3)" }}
    />
    <div className="pointer-events-none absolute top-0 right-0 h-[250px] w-[350px] rounded-full opacity-15 blur-[100px]" style={{ background: "hsl(174 62% 50% / 0.25)" }} />

    <div className="container relative z-10 mx-auto px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 text-sm font-medium uppercase tracking-[0.25em]"
          style={{ color: "hsl(174 40% 55%)" }}
        >
          Digital Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl"
          style={{ color: "hsl(174 50% 55%)" }}
        >
          We don't just build websites.
          <br />
          <span style={{ color: "hsl(174 45% 65%)" }}>We build business tools.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed"
          style={{ color: "hsl(210 15% 70%)" }}
        >
          Pixelora Labs helps businesses create fast, structured,
          conversion‑focused websites that actually drive growth — not just
          impressions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Button
            size="lg"
            asChild
            className="rounded-lg px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
          >
            <a href="#contact">
              Get a free website consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <a
            href="#services"
            className="text-sm font-medium transition-colors duration-300 hover:underline"
            style={{ color: "hsl(174 35% 55%)" }}
          >
            View our work →
          </a>
        </motion.div>
      </div>
    </div>

    {/* Bottom fade */}
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
      style={{
        background: "linear-gradient(to top, hsl(var(--background)), transparent)",
      }}
    />
  </section>
);

export default Hero;
