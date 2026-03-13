import Hero from "@/components/Hero";
import About from "@/components/About";
import Header from "@/components/ui/Header";
import Exp from "@/components/Exp";
import Proyects from "@/components/Proyects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <section className="min-h-screen">
      <Hero />
      <section className="relative">
        <Header />
        <div className="flex flex-col">
          <About />
          <Exp />
          <Proyects />
          <Contact />
        </div>
      </section>
    </section>
  );
}