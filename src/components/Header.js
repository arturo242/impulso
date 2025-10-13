import Link from "next/link";

const Header = () => (
    <header className='fixed blurred w-full bg-primary-radial flex justify-between items-center p-8 shadow-xl'>
        <Link href="/" className='text-white no-underline'>Logo</Link>
        <nav className="">
            <ul className='flex items-center list-none m-0 p-0 gap-4'>
                <li>
                    <Link href="#quienessomos" className='font-semibold text-white no-underline hover:text-primary-light'>Quiénes somos</Link>
                </li>
                <li>
                    <Link href="#actividades" className='font-semibold text-white no-underline hover:text-primary-light'>Actividades</Link>
                </li>
                <li>
                    <Link href="#horarios" className='font-semibold text-white no-underline hover:text-primary-light'>Horarios y tarifas</Link>
                </li>
                {/* <li>
                    <Link href="#galeria" className='font-semibold text-white no-underline hover:text-primary-light'>Galería</Link>
                </li> */}
                <li>
                    <Link href="#inscripcion" className='font-semibold text-white no-underline hover:text-primary-light'>Inscripciones</Link>
                </li>
                <li>
                    <Link href="#contacto" className='font-semibold text-white no-underline hover:text-primary-light'>Contacto</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;