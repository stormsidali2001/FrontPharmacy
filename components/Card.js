const Card = ({bgImage , title , text , price, button ,image ,open , setOpen , setProduitSelectionne , el}) => {
    return(
        <div className={`h-fit max-h-[300px] max-w-[250px] flex items-center justify-center w-fit p-6 bg-white shadow-lg rounded-xl relative`}>
            {bgImage ? 
                <img src={bgImage} className='mix-blend-darken object-contain w-full'/> : ""
            }
            <div className="absolute top-3 h-full w-full flex flex-col items-center justify-center space-y-2">
                <div className="font-semibold text-[20px]">{title}</div>
                {
                    image ?<img src={image} className='object-contain w-[70%] max-h-[35%]'/> : ""
                }
                <div className="text-[11px] w-[80%]">{text}</div>
                {
                    price ? <div className="text-[13px] text-[#2EAC33]">Prix : {price} DA</div> : ""
                }
                <button 
                    className="h-[22px] text-[13px] w-fit px-4 rounded-md shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white flex flex-row items-center justify-center space-x-4"
                    onClick={(e) => {setProduitSelectionne(el.id); setOpen(!open)}}
                >
                    {button}
                </button>
            </div>
        </div>
    )
}
export default Card