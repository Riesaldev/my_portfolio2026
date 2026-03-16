'use client';
import IconGlobe from "./ui/IconGlobe";
import { useAnimateText } from '../hooks/useAnimateText';


export default function Exp() {
  const expRef = useAnimateText({ delay: 0.8, duration: 0.6, stagger: 0.008  });

  return (
    <section label="Experience Section" className="min-h-screen w-screen h-auto relative p-8 bg-background" id="experience">
      <main className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 px-12 py-12">
        <section label="Aside Section" className="flex items-start justify-center z-10">
          <div className="w-full h-auto flex justify-center">
            <IconGlobe />
          </div>
        </section>
        <section className="flex flex-col gap-6  px-14 items-center justify-center z-10">
          <p ref={expRef} className="font-bold tracking-wide font-mono text-[#9ca3af]">
            <span className="font-playfair text-[#f5f5f5] text-lg">— Well, Ricardo,</span>
            <br />
            the interviewer says while checking some notes.
            <br />
            <span className="font-playfair text-[#f5f5f5] text-lg">— I´d like to talk about your experience. How has your journey been so far?</span>
            <br />
            I settle slightly in my chair. It´s a question I like to answer with honesty.
            <br />
            <span className="font-playfair text-[#f5f5f5] text-lg">— My path has been very practical,</span> I begin. <span className="font-playfair text-[#f5f5f5] text-lg">— I´ve been <span className="text-secondary text-lg">developing independently for two years</span>, building real projects for clients but mostly for myself. I´ve focused on creating <span className="text-secondary text-lg">modern and accessible applications with a very strong focus on the user.</span> —<br />— What kind of projects?</span>
            <br />
            they ask, interested.
            <br />
            <span className="font-playfair text-[#f5f5f5] text-lg">— From educational platforms to interactive applications. <span className="text-secondary text-lg">I like working on projects that solve concrete problems</span>. For example, I have developed applications for Swedish institutions, integrating contextual translations, friendly interfaces, and fluid experiences with modern transitions.</span>
            <br />
            The interviewer nods, taking notes.
            <br />
            <span className="font-playfair text-[#f5f5f5] text-lg">— And your training?
              <br /> — I completed a <span className="text-secondary text-lg">Full-Stack bootcamp at Hackaboss</span>, where I reinforced solid foundations in React, Node, databases, and architecture. Now I am in the process of obtaining an accredited qualification in Sweden, either via YH or university, to fully align myself with the local market. I like to learn continuously, so <span className="text-secondary text-lg">I am always exploring new technologies and patterns.</span>
              <br />— Which technologies do you handle most comfortably?
              <br />— <span className="text-secondary text-lg">React, Next.js, Node+Express, MySQL, Astro, Tailwind</span> and lately I´ve been deepening my knowledge in advanced animations and more immersive experiences with <span className="text-secondary text-lg">Gsap and Threejs</span>. I also work a lot with <span className="text-secondary text-lg">i18n</span> and translation flow automation, because I´m interested in making applications truly global, or <span className="text-secondary text-lg">Web Audio API</span> for interactive sound experiences. Additionally, thanks to my higher education in sculpture, I handle modeling and design applications well; <span className="text-secondary text-lg">Blender, Figma, Canva, or Photoshop.</span></span>
            <br />
            The interviewer smiles.
            <br />
            <span className="font-playfair text-[#f5f5f5] text-lg">— It sounds like you have a solid foundation and a <span className="text-secondary text-lg">very detail-oriented mindset</span>. I´d like to see some of your projects. Could you show them to me?</span>
            <br />
            I nod with confidence.
            <br />
            <span className="font-playfair text-[#f5f5f5] text-lg">— Of course. I´d be happy to.</span>
          </p>
        </section>
      </main>
    </section>

  );
}