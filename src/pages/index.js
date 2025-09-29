import CheckoutForm from "@/components/CheckoutForm";
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
      <Image
        src="/2.jpg"
        alt="Campamento Juan de Austria"
        width={800}
        height={100}
        className="w-full h-[400px] object-cover rounded-lg mt-10"
      />
      <section className="mt-20">
        <h2 className="text-primary-light text-2xl font-semibold md:text-4xl mt-20 mb-4">Horarios flexibles y precios accesibles en Aguadulce</h2>
        <p className="text-sm md:text-lg text-muted-foreground px-10">Nuestras actividades se realizan de lunes a viernes, de 16:00 a 20:00, para niños de 4 a 12 años.</p>
        <div className="flex lg:flex-row flex-col items-center justify-around gap-10 mt-20">
          <div className="flex lg:flex-col gap-5 text-start flex-1">
            <div className="bg-emerald-950/40 flex items-center gap-2 rounded-lg p-4">
              <div>🕐</div>
              <div>
                <div className="text-muted-foreground">Horario</div>
                <div>16:00 - 20:00</div>
              </div>
            </div>
            <div className="bg-emerald-950/40 flex items-center gap-2 rounded-lg p-4">
              <div>📅</div>
              <div>
                <div className="text-muted-foreground">Días</div>
                <div>Lunes a viernes</div>
              </div>
            </div>
            <div className="bg-emerald-950/40 flex items-center gap-2 rounded-lg p-4">
              <div>👥</div>
              <div>
                <div className="text-muted-foreground">Edades</div>
                <div>4 a 12 años</div>
              </div>
            </div>
          </div>
          <div className="min-w-[400px] text-start flex flex-col gap-6 flex-2">
            <Link href="#inscripcion" className="bg-primary-radial p-4 rounded-lg border-1 border-gray-500/50 hover:border-emerald-500/70 block w-full">
              <h3 className="text-2xl font-semibold">Semana</h3>
              <p className="text-sm text-muted-foreground">Perfecto para probar</p>
              <div className="text-4xl mt-6 mb-6">70€</div>
              <div className="px-6 py-3 text-white btn-grad rounded-xl">Reserva tu plaza hoy</div>
            </Link>
            <Link href="#inscripcion" className="bg-primary-radial p-4 rounded-lg border-1 border-emerald-500/70 block w-full">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-semibold">Mes completo</h3>
                  <p className="text-sm text-muted-foreground">Perfecto para probar</p>
                </div>
                <div>
                  <span className="rounded-full border px-2.5 py-0.5 text-xs font-semibold text-emerald-500 border-emerald-500/70">Oferta</span>
                </div>
              </div>
              <div className="text-4xl mt-6 mb-2 text-primary">200€</div>
              <p className="text-sm text-muted-foreground">
                Primeras 20 inscripciones
              </p>
              <p className="text-sm text-muted-foreground">
                220€ una vez agotadas las primeras inscripciones
              </p>
              <div className="mt-6 px-6 py-3 text-white btn-grad rounded-xl">Reserva tu plaza hoy</div>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-primary-light text-2xl font-semibold md:text-4xl mt-20 mb-4">
              Profesionalidad, seguridad y diversión garantizada
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 rounded-lg p-4 bg-primary-radial border-1 border-emerald-500/20">
              <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">✅</div>
              <p className="text-lg">Monitores cualificados con experiencia en educación y deporte.</p>
            </div>
            <div className="flex items-start gap-4 rounded-lg p-4 bg-primary-radial border-1 border-emerald-500/20">
              <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">✅</div>
              <p className="text-lg">Entorno seguro y supervisado en el Campamento Juan de Austria.</p>
            </div>
            <div className="flex items-start gap-4 rounded-lg p-4 bg-primary-radial border-1 border-emerald-500/20">
              <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">✅</div>
              <p className="text-lg">Actividades variadas que combinan deporte, deberes y talleres temáticos.</p>
            </div>
            <div className="flex items-start gap-4 rounded-lg p-4 bg-primary-radial border-1 border-emerald-500/20">
              <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">✅</div>
              <p className="text-lg">Enfoque integral: diversión y aprendizaje van de la mano.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center gap-12">
        <div className="flex flex-col justify-center">
          <Image
            src="/avatar-1.avif"
            alt="Campamento Juan de Austria"
            width={250}
            height={250}
            className="object-cover rounded-full mt-10"
          />
          <div className="mt-4 text-muted-foreground">Adri</div>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src="/avatar-2.avif"
            alt="Campamento Juan de Austria"
            width={250}
            height={250}
            className="object-cover rounded-full mt-10"
          />
          <div className="mt-4 text-muted-foreground">Alex</div>
        </div>
      </section>
      <section id="inscripcion" className="mt-20">
        {/* <CheckoutForm /> */}
      </section>
    </div>
  );
}
