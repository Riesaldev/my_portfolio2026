import Hero from "@/components/Hero";
import About from "@/components/About";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
  <Hero />
  <section className="relative">
    <Header className="sticky top-0 z-30" />
    <div className="flex flex-col">
      <About />
    </div>
  </section>
</main>

  );
}