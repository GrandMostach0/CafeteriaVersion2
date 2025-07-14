import Cafe1 from '../assets/Images/cafe1.jpg'
function CardProductos() {
    return (
        <div className='border border-amber-50/20 rounded-2xl overflow-hidden hover:scale-105'>
            <img className='w-full object-contain h-[200px]' src={Cafe1} alt="ImageProducto" />

            <div className='text-left p-2'>
                <h2 className='font-bold text-xl text-center'>Chocolate Real especiado caliente</h2>
                <p className='text-pretty my-2'>Cacao puro mezclado con especias (canela, romero, anís, clavo, pimienta Tabasco, chile de árbol, vainilla, almendras y achiote) y posteriormente licuado con agua o leche.</p>
                <span className='rounded-2xl px-2 py-0.5 bg-[#a67c52]'>$80.00 pesos</span>
            </div>
        </div>
    )
}

export default CardProductos;