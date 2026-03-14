'use client';
import Lanyard from './ui/Lanyard';
import { useAnimateText } from '../hooks/useAnimateText';

export default function About() {
  const aboutRef = useAnimateText({ delay: 0.8, duration: 0.6, stagger: 0.008 });

  return (
    <section id="about" className="min-h-screen h-auto relative mt-8 bg-black p-8 overflow-x-visible w-full">
      <main className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-16 py-12">
        <section className="flex flex-col gap-6 items-center justify-center z-10 w-full">
          <p
            ref={aboutRef}
            className="font-bold tracking-wide font-mono text-[#9ca3af] w-full whitespace-pre-line"
          >
            Knock knock.<br/>
            <span className="font-playfair text-[#f5f5f5]">— Adelante</span><br/>
            responde una voz tranquila desde dentro.<br/>
            Abro la puerta.<br/>
            La sala es luminosa, moderna, con una mesa de madera clara y una pantalla apagada al fondo.Camino con paso firme, aunque siento esa chispa de adrenalina que siempre aparece antes de algo importante.<br/>
            <span className="font-playfair text-[#f5f5f5]">
              — Buenos días.
            </span><br/>
            digo con una sonrisa.<br/>
            <span className="font-playfair text-[#f5f5f5]">
              — Mi nombre es <span className="text-primary text-xl">Ricardo Estupiñán Alonso</span>. Vengo a postular al puesto de <span className="text-primary text-xl">Full‑Stack Developer.</span>
            </span><br/>
            El entrevistador me invita a sentarme. Sus gestos son amables, profesionales.<br/>
            —<span className="font-playfair text-[#f5f5f5]">Encantado, Ricardo. Empecemos por lo esencial. ¿Quién eres como desarrollador?</span><br/>
            Respiro un segundo. Me gusta empezar por lo que realmente importa.<br/>
            —<span className="font-playfair text-[#f5f5f5]">
              Soy alguien que disfruta construir experiencias modernas que sorprendan y que sean intuitivas.<br/> <span className="text-primary text-xl">Me apasiona mezclar lógica con diseño, precisión con creatividad. Me encanta aprender tecnologías nuevas y aplicarlas para resolver problemas reales de forma elegante y eficiente.</span>
            </span><br/>
            El entrevistador asiente, interesado.<br/>
            — <span className="font-playfair text-[#f5f5f5]">¿Y qué te motiva?</span><br/>
            —<span className="font-playfair text-[#f5f5f5]">
              La sensación de ver algo cobrar vida. De tomar una idea, un concepto, un problema… y convertirlo en una solución funcional, clara y bonita. <span className="text-primary text-xl">Me gusta que las cosas funcionen, pero también que emocionen.</span>
            </span><br/>
            — <span className="font-playfair text-[#f5f5f5]">Suena a que disfrutas el proceso.</span><br/>
            — <span className="font-playfair text-[#f5f5f5]">
              Si, muchísimo. Llevo dos años desarrollando por cuenta propia, construyendo proyectos completos, desde el diseño hasta el despliegue. Trabajo con React, Next, Astro, Node, Express, animaciones con GSAP, y últimamente estoy explorando experiencias más fluidas y accesibles. Mi objetivo es siempre el mismo; crear algo que valga la pena.
            </span><br/>
            El entrevistador sonríe.<br/>
            — <span className="font-playfair text-[#f5f5f5]">Perfecto. Entonces pasemos a tu experiencia.</span>
          </p>
        </section>

        <section className="flex items-center justify-center z-10">
          <div className="w-full h-auto flex justify-center bg-[url('/assets/back.png')] bg-cover rounded-2xl">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </section>
      </main>
    </section>
  );
}
