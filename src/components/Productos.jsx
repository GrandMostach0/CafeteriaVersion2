import { useState } from "react";
import CardProductos from "./CardProductos";

const opcionesProductos = ['Cafés', 'Postres', 'Bebidas', 'Mercancías']

function Productos() {

    const [opSelecionado, setOpSelecionado] = useState(0);
    return (
        <section className="mt-10 text-center">
            <h2>Nuestra Selección</h2>
            <p>Cada bebida es una obra maestra, elaborada con ingredientes premium y técnicas perfeccionadas a lo largo de generaciones</p>

            <div className="border-none py-2 px-4 rounded-2xl bg-[#1f1b17] inline-block my-5">
                {opcionesProductos.map((prod, index) => (
                    <p
                        key={index}
                        className={`inline-block mx-2 px-3 py-1 cursor-pointer rounded-2xl
                            ${opSelecionado === index ? 'bg-[#c5bcac] text-[#1f1b17]' : ''}`}
                        onClick={() => setOpSelecionado(index)}
                    >
                        {prod}
                    </p>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-10">
                <CardProductos />
                <CardProductos />
                <CardProductos />
                <CardProductos />
                <CardProductos />
                <CardProductos />
            </div>

        </section>
    )
}

export default Productos;