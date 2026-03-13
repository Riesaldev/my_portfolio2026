'use client';
import IconGlobe from "./ui/IconGlobe";
import { useAnimateText } from '../hooks/useAnimateText';


export default function Exp() {
  const expRef = useAnimateText({ delay: 0.5, duration: 0.3, stagger: 0.002 });

  return (
    <section className="min-h-screen w-screen h-auto relative p-8 bg-background" id="experience">
      <main className="w-full grid grid-cols-2 gap-8 px-12 py-12">
        <section className="flex items-start justify-center z-10">
          <div className="w-full h-auto flex justify-center">
            <IconGlobe />
          </div>
        </section>
        <section className="flex flex-col gap-6  px-14 items-center justify-center z-10">
          <p ref={expRef} className="font-bold tracking-wide font-mono text-[#9ca3af]">
            <span className="font-playfair text-[#f5f5f5]">— Bien, Ricardo —</span><br/>dice el entrevistador mientras revisa unas notas.<br/><span className="font-playfair text-[#f5f5f5]">— Me gustaría que hablemos de tu experiencia. ¿Cómo ha sido tu camino hasta aquí? —</span><br/>Me acomodo ligeramente en la silla. Es una pregunta que me gusta responder con honestidad.<br/><span className="font-playfair text-[#f5f5f5]">— Mi camino ha sido muy práctico.—</span> empiezo <span className="font-playfair text-[#f5f5f5]">—Llevo <span className="font-playfair text-[#f5f5f5]"><span className="text-primary text-xl">dos años</span> desarrollando por cuenta propia</span>, construyendo proyectos reales para clientes pero sobretodo para mi. Me he enfocado en crear <span className="text-primary text-xl">aplicaciones modernas, accesibles y con un enfoque muy fuerte en el cliente</span>. —<br/>— ¿Qué tipo de proyectos? —</span><br/>pregunta, interesado.<br/><span className="font-playfair text-[#f5f5f5]">— Desde plataformas educativas hasta aplicaciones interactivas. <span className="text-primary text-xl">Me gusta trabajar en proyectos que resuelvan problemas concretos</span>. Por ejemplo, he desarrollado aplicaciones para instituciones suecas, integrando traducciones contextuales, interfaces amigables y experiencias fluidas con transiciones modernas. —</span><br/>El entrevistador asiente, tomando nota.<br/><span className="font-playfair text-[#f5f5f5]">— ¿Y tu formación? —<br/> — Completé un <span className="text-primary text-xl">bootcamp full‑stack de Hackaboss</span>, donde reforcé bases sólidas en React, Node, bases de datos y arquitectura. Ahora estoy en proceso de obtener una titulación acreditada en Suecia, ya sea vía YH o universidad, para alinearme completamente con el mercado local. Me gusta aprender de forma continua, así que <span className="text-primary text-xl">siempre estoy explorando nuevas tecnologías y patrones</span>. —<br/>— ¿Qué tecnologías manejas con más comodidad? —<br/>— <span className="text-primary text-xl">React, Next.js, Node+Express, MySQL, Astro, Tailwind </span> y últimamente estoy profundizando en animaciones avanzadas y experiencias más inmersivas con <span className="text-primary text-xl">Gsap y Threejs</span>. También trabajo mucho con <span className="text-primary text-xl">i18n</span> y automatización de flujos de traducción, porque me interesa que las aplicaciones sean realmente globales o <span className="text-primary text-xl">Web Audio API</span> para experiencias sonoras interactivas. Ademas ,gracias a mi formacion superior en esculura, me manejo bien con aplicaciones de modelado y diseño <span className="text-primary text-xl">Blender, Figma, Canva o Photoshop</span> —</span><br/>—El entrevistador sonríe.<br/><span className="font-playfair text-[#f5f5f5]">— Suena a que tienes una base sólida y una <span className="text-primary text-xl">mentalidad muy orientada al detalle</span>. Me gustaría ver algunos de tus proyectos. ¿Podrías mostrármelos? —</span><br/>Asiento con confianza.—<br/><span className="font-playfair text-[#f5f5f5]">— Claro. Encantado. —</span>
          </p>
        </section>
      </main>
    </section>

  );
}