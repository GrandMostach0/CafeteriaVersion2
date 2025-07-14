
export const CardCarusel = ({image, title, description}) => {
    return(
        <div className="rounded-2xl flex items-center justify-between py-5 px-2 bg-gradient-to-b from-[#4a40398d] shadow-2xl mb-10">
            <img className="w-[60%] rounded-2xl" src={ image } alt="imageCard" />
            
            <div>
                <h3>{ title }</h3>
                <p> { description } </p>
            </div>
        </div>
    )
}