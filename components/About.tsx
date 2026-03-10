import Header from "./ui/Header";


export default function About() {
  return (
    <section className="min-h-screen w-screen h-auto relative overflow-hidden bg-black">
      <Header/>
      <main className="w-full grid grid-cols-2 gap-8 px-16 py-24">
        <section className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold tracking-wide font-playfair text-white">
            About Me
          </h2>
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-lg text-white leading-relaxed">
            Hi! I`m RIESAL, a passionate web developer with a love for creating beautiful and functional websites. With a background in computer science and a keen eye for design, I enjoy bringing ideas to life through code.
          </p>
          <p className="text-lg text-white leading-relaxed">
            I specialize in front-end development, using technologies like React, Next.js, and Tailwind CSS to build responsive and user-friendly interfaces. I`m always eager to learn new technologies and stay up-to-date with the latest trends in web development.
          </p>
        </section>
      </main>
    </section>

  );
}