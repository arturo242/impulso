
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const isMd = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;
    const [menuOpen, setMenuOpen] = useState(isMd ? true : false);

    useEffect(() => {
        const handleResize = () => {
            const md = window.matchMedia("(min-width: 768px)").matches;
            setMenuOpen(md ? true : false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []); return (
        <header className="fixed blurred w-full bg-primary-radial flex justify-between p-4 md:p-8 shadow-xl z-50">
            <Link href="/" className="text-white no-underline text-lg font-bold">Logo</Link>

            <nav className="text-end">
                <button
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul
                    className={`
                       flex items-center list-none m-0 p-0 gap-4 flex-col md:flex-row
                        ${menuOpen ? "flex" : "hidden"}
                    `}
                >
                    <li>
                        <Link href="#quienessomos" className="font-semibold text-white no-underline hover:text-primary-light" onClick={() => setMenuOpen(false)}>Quiénes somos</Link>
                    </li>
                    <li>
                        <Link href="#actividades" className="font-semibold text-white no-underline hover:text-primary-light" onClick={() => setMenuOpen(false)}>Actividades</Link>
                    </li>
                    <li>
                        <Link href="#horarios" className="font-semibold text-white no-underline hover:text-primary-light" onClick={() => setMenuOpen(false)}>Horarios y tarifas</Link>
                    </li>
                    {/* <li>
                        <Link href="#galeria" className="font-semibold text-white no-underline hover:text-primary-light" onClick={() => setMenuOpen(false)}>Galería</Link>
                    </li> */}
                    <li>
                        <Link href="#inscripcion" className="font-semibold text-white no-underline hover:text-primary-light" onClick={() => setMenuOpen(false)}>Inscripciones</Link>
                    </li>
                    <li>
                        <Link href="#contacto" className="font-semibold text-white no-underline hover:text-primary-light" onClick={() => setMenuOpen(false)}>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;