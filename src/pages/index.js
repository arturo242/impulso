import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`sm:max-w-[60vw] max-w-[90vw] mx-auto text-center py-20`}
    >
      <h1 className="text-4xl font-semibold md:text-6xl mb-6">¡Tardes inolvidables con Impulso en plena naturaleza de Aguadulce!</h1>
      <p className="text-xl md:text-2xl text-muted-foreground px-10">En el Campamento Juan de Austria, tus hijos disfrutarán de deporte, aprendizaje y diversión cada tarde en un entorno seguro y profesional.</p>
      <Link href="#inscripcion" className="inline-block mt-4 px-6 py-3 text-white btn-grad rounded-2xl">¡Inscríbete ahora!</Link>
      <Image
        src="/1.jpeg"
        alt="Campamento Juan de Austria"
        width={800}
        height={100}
        className="w-full h-[400px] object-cover rounded-lg mt-10"
      />

      <h2 className="text-primary-light text-2xl font-semibold md:text-4xl mt-20 mb-4">Impulso: una tarde diferente en Aguadulce</h2>
      <p className="text-sm md:text-lg text-muted-foreground px-10">En Impulso, combinamos deporte, talleres temáticos y apoyo con los deberes en el Campamento Juan de Austria, creando un espacio donde los niños pueden aprender, explorar y divertirse de manera segura. Nuestro equipo está formado por profesionales comprometidos con el desarrollo integral de cada participante.</p>
      <h2 className="text-primary-light text-2xl font-semibold md:text-4xl mt-20 mb-8">Lo que tus hijos vivirán cada tarde en Impulso</h2>
      <section className="flex flex-col md:flex-row gap-4 md:gap-0 position-absolute">
        <div className="glass-card bg-primary-radial p-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-emerald-200/20">
          <div className="rounded-full bg-neutral-900 p-2">
            🏃
          </div>
          <span className="text-xl font-semibold">Deporte</span>
          <p className="text-sm text-muted-foreground">Actividades físicas y juegos al aire libre que fomentan la salud y el trabajo en equipo.</p>
        </div>
        <div className="glass-card bg-primary-radial p-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-emerald-200/20">
          <div className="rounded-full bg-neutral-900 p-2">
            📚
          </div>
          <span className="text-xl font-semibold">Aprendizaje</span>
          <p className="text-sm text-muted-foreground">Apoyo con deberes y talleres educativos para estimular creatividad y pensamiento crítico.</p>
        </div>
        <div className="glass-card bg-primary-radial p-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-emerald-500/20">
          <div className="rounded-full bg-neutral-900 p-2">
            ❤️
          </div>
          <span className="text-xl font-semibold">Diversión</span>
          <p className="text-sm text-muted-foreground">Talleres temáticos y dinámicas que garantizan risas y experiencias inolvidables.</p>
        </div>
        <div className="glass-card bg-primary-radial p-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-emerald-500/20">
          <div className="rounded-full bg-neutral-900 p-2">
            🛡️
          </div>
          <span className="text-xl font-semibold">Seguridad</span>
          <p className="text-sm text-muted-foreground">Monitores profesionales y protocolos de seguridad en el Campamento Juan de Austria.</p>
        </div>
      </section>
      <section className="mt-20">
      <h2>Horarios flexibles y precios accesibles en Aguadulce</h2>
      <p>Nuestras actividades se realizan de lunes a viernes, de 16:00 a 20:00, para niños de 4 a 12 años.</p>
      <div className="flex items-center justify-center gap-8 mt-20">
        <div className="flex flex-col gap-4">
          <div className="bg-neutral-800 flex items-center gap-2 rounded-lg p-4">
            <div>🕐</div>
            <div>
              <div className="text-muted-foreground">Horario</div>
              <div>16:00 - 20:00</div>
            </div>
          </div>
          <div className="bg-neutral-800 flex items-center gap-2 rounded-lg p-4">
            <div>📅</div>
            <div>
              <div className="text-muted-foreground">Días</div>
              <div>Lunes a viernes</div>
            </div>
          </div>
          <div className="bg-neutral-800 flex items-center gap-2 rounded-lg p-4">
            <div>👥</div>
            <div>
              <div className="text-muted-foreground">Edades</div>
              <div>4 a 12 años</div>
            </div>
          </div>
        </div>
        <div>
          <Link href="#inscripcion" className="bg-primary-radial p-4 rounded-lg border-1 border-emerald-500/20 block">
            <h3>Semana</h3>
            <p>Perfecto para probar</p>
            <span>70€</span>
            <div>Reserva tu plaza hoy</div>
          </Link>
        </div>
      </div>
      </section>
    </div>
  );
}
