
import IconGlobe from "./ui/IconGlobe";

export default function Exp() {
  return (
    <section className="min-h-screen w-screen h-auto relative bg-background">
      <main className="w-full grid grid-cols-2 gap-8 px-16 py-24">
        <section className="flex items-start justify-center z-10">
          <div className="w-full h-auto flex justify-center">
            <IconGlobe />
          </div>
        </section>
        <section className="flex flex-col gap-6 ">
          <p className="font-bold tracking-wide font-mono text-[#9ca3af]">
            <span className="font-playfair text-[#f5f5f5]">— Bien, Ricardo —</span><br/>dice el entrevistador mientras revisa unas notas.<br/><span className="font-playfair text-[#f5f5f5]">— Me gustaría que hablemos de tu experiencia. ¿Cómo ha sido tu camino hasta aquí?—</span><br/>Me acomodo ligeramente en la silla. Es una pregunta que me gusta responder con honestidad.<br/><span className="font-playfair text-[#f5f5f5]">— Mi camino ha sido muy práctico.—</span> empiezo <span className="font-playfair text-[#f5f5f5]">—Llevo <span className="font-playfair text-[#f5f5f5]">dos años desarrollando por cuenta propia</span>, construyendo proyectos reales para instituciones y clientes. Me he enfocado en crear aplicaciones modernas, accesibles y con un enfoque muy fuerte en la experiencia de usuario.<br/>— ¿Qué tipo de proyectos? —</span><br/>pregunta, interesado.<br/><span className="font-playfair text-[#f5f5f5]">— Desde plataformas educativas hasta herramientas internas para organizaciones. Me gusta trabajar en proyectos que resuelvan problemas concretos. Por ejemplo, he desarrollado aplicaciones para instituciones suecas, integrando traducciones contextuales, interfaces amigables para niños y experiencias fluidas con animaciones modernas.—</span><br/>El entrevistador asiente, tomando nota.<br/><span className="font-playfair text-[#f5f5f5]">— ¿Y tu formación?—<br/> —Completé un bootcamp full‑stack en Hackaboss, donde reforcé bases sólidas en React, Node, bases de datos y arquitectura. Ahora estoy en proceso de obtener una titulación acreditada en Suecia, ya sea vía YH o universidad, para alinearme completamente con el mercado local. Me gusta aprender de forma continua, así que siempre estoy explorando nuevas tecnologías y patrones.—<br/>—¿Qué tecnologías manejas con más comodidad?—<br/> React, Next.js, Node+Express, MySQL, Astro… y últimamente estoy profundizando en animaciones avanzadas y experiencias más inmersivas. También trabajo mucho con i18n y automatización de flujos de traducción, porque me interesa que las aplicaciones sean realmente globales o Web Audio API para experiencias sonoras interactivas.—</span><br/>—El entrevistador sonríe.<br/><span className="font-playfair text-[#f5f5f5]">— Suena a que tienes una base sólida y una mentalidad muy orientada al detalle. Me gustaría ver algunos de tus proyectos. ¿Podrías mostrármelos?</span><br/>Asiento con confianza.—<br/><span className="font-playfair text-[#f5f5f5]">— Claro. Encantado.</span>
          </p>
        </section>
      </main>
    </section>

  );
}