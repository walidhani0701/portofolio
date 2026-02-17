import { useState, useEffect } from "react";
const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold bg-zinc-900 text-white p-1  md:bg-transparent ">portofolio</h1>
            </div>

            <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2
                -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-zinc-900 p-4  
                md:bg-transparent transition-all md:transition-none ${active ? "top-0 opacity-100" : "-top-10 opacity-0"
                }`} >
                <li>
                    <a href="#" className="sm:text-lg text-base font-medium hover:bg-red-600 rounded-2xl " >Beranda</a>
                </li>
                <li>
                    <a href="#tentang" className="sm:text-lg text-base font-medium hover:bg-red-600 rounded-2xl ">Tentang</a>
                </li>
                <li>
                    <a href="#education" className="sm:text-lg text-base font-medium hover:bg-red-600 rounded-2xl ">Pendidikan & Pengalaman</a>
                </li>
                <li>
                    <a href="#proyek" className="sm:text-lg text-base font-medium hover:bg-red-600 rounded-2xl ">Proyek</a>
                </li>
                {/* <li>
                    <a href="#kontak" className="sm:text-lg text-base font-medium hover:bg-red-600 rounded-2xl ">Kontak</a>
                </li> */}
            </ul>
        </div>

    )
}

export default Navbar