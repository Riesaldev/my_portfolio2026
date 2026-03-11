import Lanyard from './ui/Lanyard';

export default function About() {
  return (
    <section className="min-h-screen w-screen h-auto relative bg-black">
      <h1 className="text-4xl font-bold text-primary flex items-center justify-center">About Me</h1>
      <main className="w-full grid grid-cols-2 gap-8 px-16 py-24">
        <section className="flex flex-col gap-6 ">
          <p className="font-bold tracking-wide font-mono text-[#9ca3af]">
            Knock knock.<br/>
            <span className="font-playfair text-[#f5f5f5]">— Adelante —</span><br/>
            responde una voz tranquila desde dentro.<br/>Abro la puerta.<br/>La sala es luminosa, moderna, con una mesa de madera clara y una pantalla apagada al fondo. Camino con paso firme, aunque siento esa chispa de adrenalina que siempre aparece antes de algo importante.<br/><span className="font-playfair text-[#f5f5f5]">
            — Buenos días —</span><br/>digo con una sonrisa.<br/><span className="font-playfair text-[#f5f5f5]">— Mi nombre es <span className="text-primary text-xl">Ricardo Estupiñán Alonso</span>. Vengo a postular al puesto de <span className="text-primary text-xl">Full‑Stack Developer</span>.—</span><br/>El entrevistador me invita a sentarme. Sus gestos son amables, profesionales.<br/>—<span className="font-playfair text-[#f5f5f5]">Encantado, Ricardo. Empecemos por lo esencial. ¿Quién eres como desarrollador?</span><br/>Respiro un segundo. Me gusta empezar por lo que realmente importa.<br/>—<span className="font-playfair text-[#f5f5f5]">Soy alguien que disfruta construir experiencias modernas que sorprendan y que sean intuitivas. <span className="text-primary text-xl">Me apasiona mezclar lógica con diseño, precisión con creatividad. Me encanta aprender tecnologías nuevas y aplicarlas para resolver problemas reales de forma elegante y eficiente</span>.</span><br/>El entrevistador asiente, interesado.<br/>— <span className="font-playfair text-[#f5f5f5]">¿Y qué te motiva?</span>—<br/>—<span className="font-playfair text-[#f5f5f5]">La sensación de ver algo cobrar vida. De tomar una idea, un concepto, un problema… y convertirlo en una solución funcional, clara y bonita. <span className="text-primary text-xl">Me gusta que las cosas funcionen, pero también que emocionen</span>.</span>—<br/>— <span className="font-playfair text-[#f5f5f5]">Suena a que disfrutas el proceso.</span>—<br/>— <span className="font-playfair text-[#f5f5f5]">Si, muchísimo. Llevo dos años desarrollando por cuenta propia, construyendo proyectos completos, desde el diseño hasta el despliegue. Trabajo con React, Next, Astro, Node, Express, animaciones con GSAP, y últimamente estoy explorando experiencias más fluidas y accesibles. Mi objetivo es siempre el mismo; crear algo que valga la pena.</span>—<br/>El entrevistador sonríe.<br/>— <span className="font-playfair text-[#f5f5f5]">Perfecto. Entonces pasemos a tu experiencia.</span>—
          </p>
        </section>
        <section className="flex items-center justify-center z-10">
          <div className="w-full h-auto flex justify-center ">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </section>
      </main>
    </section>
  );
}