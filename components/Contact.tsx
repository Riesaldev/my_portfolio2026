'use client';
import ContactForm from "./ui/Form";
import { useAnimateText } from '../hooks/useAnimateText';

export default function Contact() {
  const aboutRef = useAnimateText({ delay: 0.8, duration: 0.6, stagger: 0.008  });

  return (
  <section label="Contact Section" id="contact" className="min-h-screen w-full h-auto relative bg-background py-16 overflow-hidden">
      <main className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 mb-6 md:px-16 py-12 md:py-24">
        <section label="Aside Section" className="flex flex-col gap-6 items-center justify-center z-10 w-full">
          <p ref={aboutRef} className="font-bold tracking-wide font-mono text-[#9ca3af] text-sm md:text-base">
            The interviewer closes their notebook with a gentle gesture. The room falls into a comfortable silence, the kind that doesn´t feel heavy, but confirms that everything has flowed well.
            <br/>
            <span className="font-playfair text-[#f5f5f5] text-lg">
              — Ricardo.
              <br/>
            </span> 
            they say with a sincere smile, 
            <span className="font-playfair text-[#f5f5f5] text-lg">
              <br/>
              — it has been a very interesting conversation. I like your way of thinking, your focus on experience, and the clarity with which you explain your decisions. Thank you for showing me your work.
              <br/>
            </span> 
            I nod gratefully.
            <br/>
            <span className="font-playfair text-[#f5f5f5] text-lg">
              — Thank you for your time. It has been a pleasure.
              <br/>
              — Before we finish,
            </span>
            <br/>
            they continue while leaning slightly forward,
            <br/>
            <span className="font-playfair text-[#f5f5f5] text-lg">
              — I would like to know how I can contact you if we want to move forward with you in the process.
            </span>
            <br/>
            I smile. It´s the perfect moment.
            <span className="font-playfair text-[#f5f5f5] text-lg"><br/>— Of course. Here are my details. You can write to me anytime. I am always open to talking, collaborating, and continuing to build things that are worth it.<br/></span>The interviewer nods, satisfied.<br/><span className="font-playfair text-[#f5f5f5] text-lg">— Excellent. Then we´ll stay in touch. <br/></span>We say goodbye with a firm handshake and a smile. As I leave the room, I feel a mix of relief and excitement. I know this conversation is just the beginning of something new, and I am ready for whatever comes next.
          </p>
        </section>
        <section className="flex items-center justify-center z-10">
          <div className="w-full max-w-xl h-auto flex justify-center bg-[#FF7CE5]/10 backdrop-blur-2xl rounded-2xl border-2 border-[#00e0ff]/40 p-6 md:p-8 mt-6 lg:mt-0">
            <ContactForm />
          </div>
        </section>
      </main>
    </section>
  );
}