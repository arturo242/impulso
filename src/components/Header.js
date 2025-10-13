
const Header = () => (
    <header className='fixed blurred w-full bg-primary-radial flex justify-between items-center p-8 shadow-xl'>
        <a href="/" className='text-white no-underline'>Logo</a>
        <nav className="">
            <ul className='flex items-center list-none m-0 p-0 gap-4'>
                <li>
                    <a href="#quienessomos" className='font-semibold text-white no-underline hover:text-primary-light'>Quiénes somos</a>
                </li>
                <li>
                    <a href="#actividades" className='font-semibold text-white no-underline hover:text-primary-light'>Actividades</a>
                </li>
                <li>
                    <a href="#horarios" className='font-semibold text-white no-underline hover:text-primary-light'>Horarios y tarifas</a>
                </li>
                {/* <li>
                    <a href="#galeria" className='font-semibold text-white no-underline hover:text-primary-light'>Galería</a>
                </li> */}
                <li>
                    <a href="#inscripcion" className='font-semibold text-white no-underline hover:text-primary-light'>Inscripciones</a>
                </li>
                <li>
                    <a href="#contacto" className='font-semibold text-white no-underline hover:text-primary-light'>Contacto</a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;