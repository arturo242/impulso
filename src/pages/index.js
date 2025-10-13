import CheckoutForm from "@/components/CheckoutForm";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function Home() {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch("/api/stripe-intent", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch(() => setClientSecret(null));
  }, []);

  const selectPricingValue = (value) => () => {
    const pricingSelect = document.getElementById("pricing");
    if (pricingSelect) {
      pricingSelect.value = value;
    }
  };

  console.log(clientSecret)
  const options = clientSecret
    ? {
      clientSecret,
      appearance: { theme: "night" },
      locale: "es",
    }
    : undefined;
  return (
    <>
      <Header />
      <div
        className={`md:max-w-[70vw] max-w-[95vw] mx-auto text-center`}
      >
        <div className="h-[100vh] flex flex-col justify-center gap-2">
          <h1 className="text-2xl font-bold md:text-4xl mb-6 text-primary-dark mt-30">Innova Center Ludoteca – Campamento Juan de Austria</h1>
          <p className="text-lg md:text-xl text-muted-foreground px-10 mt-10">Aprende, juega y crece rodeado de naturaleza.</p>
          <p className="text-lg md:text-xl px-10 mt-8">En la Ludoteca Innova Center, ofrecemos una propuesta única para las tardes: un espacio educativo y lúdico en plena naturaleza, dentro del entorno privilegiado del Campamento Juan de Austria, en Aguadulce.</p>
          <p className="text-lg md:text-xl px-10 mt-8">Aquí, cada tarde es una oportunidad para aprender de forma divertida, disfrutar del aire libre y crecer en valores a través del juego, el deporte y la creatividad.</p>
          <Link href="#inscripcion" className="inline-block mt-4 px-6 py-3 text-white btn-grad rounded-2xl w-50 mx-auto">¡Inscríbete ahora!</Link>
        </div>
        <section className="py-20 px-4" id="quienessomos">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="mt-12 text-left max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl">Quiénes somos</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En <strong>Ludoteca Innova Center</strong>, creemos en el poder del juego como herramienta de desarrollo integral. Somos un equipo multidisciplinar de educadores, monitores y profesionales con amplia experiencia en el ámbito educativo y del ocio infantil y juvenil.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra ludoteca se sitúa en el entorno natural del <strong>Campamento Juan de Austria (Aguadulce)</strong>, un lugar que nos permite combinar el aprendizaje con el aire libre, el juego con la calma, y el estudio con la creatividad.
              </p>

              <div className="mt-8 space-y-4">
                <h4 className="text-xl">Nuestra misión:</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ofrecer un espacio seguro, motivador y enriquecedor para niños, niñas y jóvenes de todas las edades, donde puedan desarrollarse emocional, social y cognitivamente mientras se divierten.
                </p>

                <h4 className="text-xl">Nuestros valores:</h4>
                <ul className="space-y-2 text-lg text-muted-foreground">
                  <li>• Educación desde el respeto</li>
                  <li>• Juego como motor del aprendizaje</li>
                  <li>• Inclusión y diversidad</li>
                  <li>• Naturaleza como aula viva</li>
                  <li>• Acompañamiento emocional y personalizado</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 position-absolute md:w-[40vw] w-[75vw] mx-auto pt-25" id="actividades">
          <h2 className="text-3xl md:text-4xl">🎯 Actividades</h2>
          <div className="glass-card bg-primary-radial p-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-primary-light">
            <div className="rounded-full bg-primary-light p-2">
              📘
            </div>
            <span className="text-xl font-semibold">Refuerzo escolar</span>
            <ul className="text-sm text-muted-foreground list-disc list-inside text-start">
              <li>Acompañamiento en la realización de deberes</li>
              <li>Técnicas de estudio</li>
              <li>Lectura comprensiva y escritura</li>
            </ul>
          </div>
          <div className="glass-card bg-primary-radial p-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-primary-light">
            <div className="rounded-full bg-primary-light p-2">
              🇬🇧
            </div>
            <span className="text-xl font-semibold">Inglés divertido</span>
            <ul className="text-sm text-muted-foreground list-disc list-inside text-start">
              <li>Juegos, canciones y dinámicas en inglés</li>
              <li>Aprendizaje natural y sin presión</li>
            </ul>
          </div>
          <div className="glass-card bg-primary-radial p-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-primary-light">
            <div className="rounded-full bg-primary-light p-2">
              🧠
            </div>
            <span className="text-xl font-semibold">Talleres creativos</span>
            <ul className="text-sm text-muted-foreground list-disc list-inside text-start">
              <li>Manualidades, ciencia, cocina, arte y reciclaje</li>
              <li>Estimulación sensorial y expresión libre</li>
            </ul>
          </div>
          <div className="glass-card bg-primary-radial p-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-primary-light">
            <div className="rounded-full bg-primary-light p-2">
              🏃‍♂️
            </div>
            <span className="text-xl font-semibold">Actividades al aire libre</span>
            <ul className="text-sm text-muted-foreground list-disc list-inside text-start">
              <li>Deportes colectivos</li>
              <li>Juegos tradicionales y cooperativos</li>
            </ul>
          </div>
          <div className="glass-card bg-primary-radial p-4 rounded-xl flex flex-col justify-center items-center gap-2 mx-2 border-1 border-primary-light">
            <div className="rounded-full bg-primary-light p-2">
              🎲
            </div>
            <span className="text-xl font-semibold">Juegos libres y dirigidos</span>
            <ul className="text-sm text-muted-foreground list-disc list-inside text-start">
              <li>Dinámicas de grupo</li>
              <li>Juegos simbólicos y de construcción</li>
              <li>Espacio para la socialización y el juego espontáneo</li>
            </ul>
          </div>
        </section>
        <section className="mt-20 pt-20" id="horarios">
          <h2 className="text-2xl font-semibold md:text-4xl mt-20 mb-4">Horarios y tarifas</h2>
          <div className="flex flex-col items-center gap-10 mt-8">
            <div className="flex gap-5 text-start flex-1">
              <div className="bg-indigo-950/40 flex items-center gap-2 rounded-lg p-4">
                <div>🕐</div>
                <div>
                  <div className="text-muted-foreground">Horario</div>
                  <div>16:00 - 20:00</div>
                </div>
              </div>
              <div className="bg-indigo-950/40 flex items-center gap-2 rounded-lg p-4">
                <div>📅</div>
                <div>
                  <div className="text-muted-foreground">Días</div>
                  <div>Lunes a viernes</div>
                </div>
              </div>
            </div>
            <div className="text-start flex md:flex-row flex-col gap-6 flex-2">
              <Link href="#inscripcion" onClick={selectPricingValue("semanal")} className="bg-primary-radial p-4 rounded-lg border-1 border-gray-500/50 block min-w-[350px] flex flex-col justify-between">
                <h3 className="text-2xl font-semibold">Bono semanal</h3>
                <p className="text-sm text-muted-foreground">5 días</p>
                <div className="text-4xl mt-6 mb-6">70€</div>
                <div className="px-6 py-3 text-white btn-grad rounded-xl">Reserva tu plaza</div>
              </Link>
              <Link href="#inscripcion" onClick={selectPricingValue("mensual")}  className="bg-primary-radial p-4 rounded-lg border-1 border-primary block min-w-[350px] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-semibold">Bono mensual</h3>
                  </div>
                  <div>
                    <span className="rounded-full px-3 py-1 text-xs font-semibold bg-primary">Oferta</span>
                  </div>
                </div>
                <div className="text-4xl mt-12 text-primary relative font-bold">250€ <span className="text-white tachado text-lg absolute">280€</span></div>

                <div className="mt-6 px-6 py-3 text-white btn-grad rounded-xl">Reserva tu plaza</div>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-2xl font-semibold md:text-4xl mt-20 mb-4">
                Profesionalidad, seguridad y diversión garantizada
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 rounded-lg p-4 bg-primary-radial border-1 border-primary">
                <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">✅</div>
                <p className="text-lg">Monitores cualificados con experiencia en educación y deporte.</p>
              </div>
              <div className="flex items-start gap-4 rounded-lg p-4 bg-primary-radial border-1 border-primary">
                <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">✅</div>
                <p className="text-lg">Entorno seguro y supervisado en el Campamento Juan de Austria.</p>
              </div>
              <div className="flex items-start gap-4 rounded-lg p-4 bg-primary-radial border-1 border-primary">
                <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">✅</div>
                <p className="text-lg">Actividades variadas que combinan deporte, deberes y talleres temáticos.</p>
              </div>
              <div className="flex items-start gap-4 rounded-lg p-4 bg-primary-radial border-1 border-primary">
                <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">✅</div>
                <p className="text-lg">Enfoque integral: diversión y aprendizaje van de la mano.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          

{/* <Gallery /> */}

        </section>
        {/* <section className="flex justify-center gap-12">
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
        </section> */}
        <section id="inscripcion" className="mt-20">
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
            </Elements>
          )}
        </section>

      </div>
          <Contact />
    </>
  );
}
