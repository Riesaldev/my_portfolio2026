'use client';
import ContactForm from "./ui/Form";
import { useAnimateText } from '../hooks/useAnimateText';
import Footer from "./ui/Footer";

export default function Contact() {
  const aboutRef = useAnimateText({ delay: 0.5, duration: 0.3, stagger: 0.002 });

  return (
  <section className="min-h-screen w-screen h-auto relative bg-background py-16">
      <h1 className="text-4xl font-bold text-primary flex items-center justify-center">Contact</h1>
      <main className="w-full grid grid-cols-2 gap-8 px-16 py-24">
        <section className="flex flex-col gap-6 px-14 items-center justify-center z-10">
          <p ref={aboutRef} className="font-bold tracking-wide font-mono text-[#9ca3af]">El entrevistador cierra su libreta con un gesto suave. La sala queda en un silencio cómodo, de esos que no pesan, sino que confirman que todo ha fluido bien.<br/><span className="font-playfair text-[#f5f5f5]">— Ricardo —<br/></span> dice con una sonrisa sincera, <span className="font-playfair text-[#f5f5f5]"><br/>— ha sido una conversación muy interesante. Me gusta tu forma de pensar, tu enfoque en la experiencia y la claridad con la que explicas tus decisiones. Gracias por mostrarme tu trabajo.—<br/></span> Asiento agradecido.<br/><span className="font-playfair text-[#f5f5f5]">— Gracias a ti por el tiempo. Ha sido un placer.—<br/>— Antes de terminar —</span><br/>continúa mientras se inclina ligeramente hacia adelante,<br/><span className="font-playfair text-[#f5f5f5]">— me gustaría saber cómo puedo contactarte si queremos avanzar contigo en el proceso.—</span><br/>Sonrío. Es el momento perfecto.<span className="font-playfair text-[#f5f5f5]"><br/>— Por supuesto. Aquí tienes mis datos. Puedes escribirme cuando quieras. Estoy siempre abierto a conversar, colaborar y seguir construyendo cosas que valgan la pena.—<br/></span>El entrevistador asiente, satisfecho.<br/><span className="font-playfair text-[#f5f5f5]">— Excelente. Entonces seguimos en contacto. —<br/></span> Nos despedimos con un apretón de manos firme y una sonrisa. Mientras salgo de la sala, siento una mezcla de alivio y emoción. Sé que esta conversación es solo el comienzo de algo nuevo, y estoy listo para lo que venga.
          </p>
        </section>
        <section className="flex items-center justify-center z-10">
          <div className="w-full h-auto flex justify-center bg-[#FF7CE5]/10 backdrop-blur-2xl rounded-2xl border-2 border-[#00e0ff]/40 p-8">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}