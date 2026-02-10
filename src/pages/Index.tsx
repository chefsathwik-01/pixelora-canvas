import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <WhoWeHelp />
      <Services />
      <WhyUs />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
