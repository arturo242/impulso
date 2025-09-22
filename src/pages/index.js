import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`sm:max-w-[60vw] max-w-[90vw] mx-auto text-center py-20`}
    >
      <h1 className="text-4xl font-semibold md:text-6xl mb-6">¡Tardes inolvidables con Impulso en plena naturaleza de Aguadulce!</h1>
      <p className="text-xl md:text-2xl text-muted-foreground px-10">En el Campamento Juan de Austria, tus hijos disfrutarán de deporte, aprendizaje y diversión cada tarde en un entorno seguro y profesional.</p>
      <Link href="#inscripcion" className="inline-block mt-4 px-6 py-3 text-white bg-primary rounded-2xl shadow-xl hover:shadow-neutral-100/20">¡Inscríbete ahora!</Link>
      <Image
        src="/1.jpeg"
        alt="Campamento Juan de Austria"
        width={800}
        height={100}
        className="w-full h-[400px] object-cover rounded-lg mt-10"
      />

      <h2 className="text-2xl font-semibold md:text-4xl mt-20 mb-4">Impulso: una tarde diferente en Aguadulce</h2>
      <p className="text-sm md:text-lg text-muted-foreground px-40">En Impulso, combinamos deporte, talleres temáticos y apoyo con los deberes en el Campamento Juan de Austria, creando un espacio donde los niños pueden aprender, explorar y divertirse de manera segura. Nuestro equipo está formado por profesionales comprometidos con el desarrollo integral de cada participante.</p>
      <h2 className="text-2xl font-semibold md:text-4xl mt-20 mb-4">Lo que tus hijos vivirán cada tarde en Impulso</h2>
      <section className="flex flex-col md:flex-row gap-4 md:gap-0">
        <div className="glass-card bg-neutral-800 px-8 py-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-emerald-500/20">
          <div className="rounded-full bg-neutral-900 p-2">
            🏃
          </div>
          <span className="text-xl font-semibold">Deporte</span>
          <p className="text-sm text-muted-foreground">Actividades físicas y juegos al aire libre que fomentan la salud y el trabajo en equipo.</p>
        </div>
        <div className="glass-card bg-neutral-800 px-8 py-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-emerald-500/20">
          <div className="rounded-full bg-neutral-900 p-2">
            📚
          </div>
          <span className="text-xl font-semibold">Aprendizaje</span>
          <p className="text-sm text-muted-foreground">Apoyo con deberes y talleres educativos para estimular creatividad y pensamiento crítico.</p>
        </div>
        <div className="glass-card bg-neutral-800 px-8 py-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-emerald-500/20">
          <div className="rounded-full bg-neutral-900 p-2">
            ❤️
          </div>
          <span className="text-xl font-semibold">Diversión</span>
          <p className="text-sm text-muted-foreground">Talleres temáticos y dinámicas que garantizan risas y experiencias inolvidables.</p>
        </div>
        <div className="glass-card bg-neutral-800 px-8 py-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-emerald-500/20">
          <div className="rounded-full bg-neutral-900 p-2">
            🛡️
          </div>
          <span className="text-xl font-semibold">Seguridad</span>
          <p className="text-sm text-muted-foreground">Monitores profesionales y protocolos de seguridad en el Campamento Juan de Austria.</p>
        </div>
      </section>
    </div>
  );
}
