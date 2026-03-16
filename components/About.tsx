'use client';
import Lanyard from './ui/Lanyard';
import { useAnimateText } from '../hooks/useAnimateText';

export default function About() {
  const aboutRef = useAnimateText<HTMLParagraphElement>({ delay: 0.8, duration: 0.6, stagger: 0.008 });

  return (
    <section id="about" className="min-h-screen h-auto relative bg-black p-4 md:p-8 overflow-hidden w-full">
      <main className="w-full grid lg:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-16 py-12">
        <section className="flex flex-col gap-6 items-center justify-center z-10 w-full">
          <p
            ref={aboutRef}
            className="font-bold tracking-wide font-mono text-[#9ca3af] w-full whitespace-pre-line text-sm md:text-base"
          >
            Knock knock.<br/>
            <span className="font-playfair text-[#f5f5f5] text-lg">— Come in</span><br/>
            a calm voice answers from inside.<br/>
            I open the door.<br/>
            The room is bright and modern, with a light wood table and a dark screen in the background. I walk in with a steady pace, though I feel that spark of adrenaline that always appears before something important.<br/>
            <span className="font-playfair text-[#f5f5f5] text-lg">
              — Good morning.
            </span><br/>
            I say with a smile.<br/>
            <span className="font-playfair text-[#f5f5f5] text-lg">
              — My name is <span className="text-secondary text-lg">Ricardo Estupiñán Alonso</span>. I´m here to apply for the <span className="text-secondary text-lg">Full‑Stack Developer</span> position.
            </span><br/>
            The interviewer invites me to sit down. Their gestures are kind and professional.<br/>
            —<span className="font-playfair text-[#f5f5f5] text-lg">Nice to meet you, Ricardo. Let´s start with the essentials. Who are you as a developer?</span><br/>
            I take a breath for a second. I like to start with what really matters.<br/>
            —<span className="font-playfair text-[#f5f5f5] text-lg">
              I am someone who enjoys building modern experiences that are both surprising and intuitive.<br/> <span className="text-secondary text-lg">I am passionate about mixing logic with design, precision with creativity. I love learning new technologies and applying them to solve real-world problems in an elegant and efficient way.</span>
            </span><br/>
            The interviewer nods, interested.<br/>
            — <span className="font-playfair text-[#f5f5f5] text-lg">And what motivates you?</span><br/>
            —<span className="font-playfair text-[#f5f5f5] text-lg">
              The feeling of seeing something come to life. Taking an idea, a concept, a problem... and turning it into a functional, clear, and beautiful solution. <span className="text-secondary text-lg">I like things to work, but also to evoke emotion.</span>
            </span><br/>
            — <span className="font-playfair text-[#f5f5f5] text-lg">It sounds like you enjoy the process.</span><br/>
            — <span className="font-playfair text-[#f5f5f5] text-lg">
              Yes, very much. I´ve been developing independently for two years, building complete projects from design to deployment. I work with React, Next, Astro, Node, Express, animations with GSAP, and lately, I´ve been exploring more fluid and accessible experiences. My goal is always the same: to create something worth it.
            </span><br/>
            The interviewer smiles.<br/>
            — <span className="font-playfair text-[#f5f5f5] text-lg">Perfect. Then let´s move on to your experience.</span>
          </p>
        </section>

        <section className="flex items-center justify-center z-10 min-h-100 md:min-h-150">
          <div className="w-full h-full flex justify-center bg-[url('/assets/back.png')] bg-cover rounded-2xl overflow-hidden">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </section>
      </main>
    </section>
  );
}
