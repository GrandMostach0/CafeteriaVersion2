import { useState } from "react";
function NavBar() {
    return (
        <div className="border-none bg-[#4a4039] flex items-center justify-between p-3">
            <p className="font-bold text-2xl">PLACE AND DELIRIOS</p>

            <nav className="">
                <a className="item-nav" href="">Nosotros</a>
                <a className="item-nav" href="">Horario</a>
                <a className="item-nav" href="">Productos</a>
                <a className="item-nav" href="">Ubicación</a>
                <a className="item-nav" href="">Iniciar Sesión</a>
                <a className="item-nav" href="">Registrarse</a>
            </nav>
        </div>
    )
}

export default NavBar;