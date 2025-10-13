import Link from 'next/link';
import React from 'react';

const Contact = () => (
    <footer id="contacto" className="mt-20 blurred w-full bg-primary-radial flex flex-col justify-between items-center p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-primary-light">Contacto</h2>
        <div className='text-start'>
            <p>📍Estamos en el <Link href="https://maps.app.goo.gl/4HMyrbKKcorEjcbJ6" className="font-xl font-semibold text-white no-underline text-primary-light">Campamento Juan de Austria, Aguadulce</Link></p>
            <p>📧 Email: <Link href="mailto:ludotecaimpulso@gmail.com" className="font-xl font-semibold text-white no-underline text-primary-light">ludotecaimpulso@gmail.com</Link></p>
            <p>📸 Instagram: <Link href="https://www.instagram.com/ludotecaimpulso/" className="font-xl font-semibold text-white no-underline text-primary-light">ludotecaimpulso</Link></p>
            <p>🕘 Horario de atención:
Lunes a viernes – 10:00 a 14:00 h / 16:00 a 20:00 h</p>
        </div>
    </footer>
);

export default Contact;