import ImageBanner from '../assets/Images/cafeBanner.png'
export const Hero = () => {
    return (
        <div className="h-[80vh] mb-10 flex items-center justify-center gap-6 px-20 bg-gradient-to-b from-[#4a4039] to-[#2d2621]">
            <div className='text-center max-w-[60%]'>
                <h1 className='text-5xl font-bold leading-14'>TODA NUESTRA TRADICIÓN HASTA TU HOGAR</h1>
                <p className='text-lg my-3'>¡La calidad que te ha enamorado ahora puedes disfrutarlo en donde estés!</p>
                <button className='border colorButton cursor-pointer text-sm font-semibold'>Disfrutar Ahora</button>
            </div>
            <div className='text-center'>
                <img className='w-[350px]' src={ImageBanner} alt="Imagen Banner" />
            </div>
        </div>
    )
}