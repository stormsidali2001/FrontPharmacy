import { useState } from "react";
import Navbar from "../../components/Navbar";

const IdProduit = props => {
   
    const [name , setName ] = useState("Doliprane")
    const [imageURL , setImageURL] = useState("/doliprane.png")
    const [modifier ,setModifier] = useState(false)
    const [description , setDescription] = useState('mlih lel hama l wja3 rass l koulech dwa hayel')
    const [prix , setPrix] = useState(50)
    const [quantite , setQuantite] = useState(60)

    return (
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] text-[20px] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6 relative">
                <div  className='text-[30px] font-semibold text-[#2EAC33]'>Détails du produit : {name}</div>
                <div className="bg-white/60 shadow-lg rounded-lg justify-center pt-12 h-[450px] w-[800px] flex flex-row space-x-12">
                    <div className="flex flex-col space-y-3">
                        <div className="flex flex-row space-x-2">
                            <div className='text-[20px] text-[#2EAC33]'>Nom :</div>
                            {
                                modifier === false ?
                                 <div>{name}</div>
                                 :
                                 <input 
                                    className="h-[35px] px-3 w-[400px] rounded-md shadow-md outline-none text-[18px] bg-white "
                                    value={name}
                                    onChange={(e)=> setName(e.target.value)}
                                 />
                            }
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className='text-[20px] text-[#2EAC33]'>Description :</div>
                            {
                                modifier === false ?
                                 <div className="max-w-[480px]">{description}</div>
                                 :
                                 <textarea 
                                    className="resize-none p-3 h-[100px] w-[480px] rounded-md shadow-md outline-none text-[18px] bg-white"
                                    value={description}
                                    onChange={(e)=> setDescription(e.target.value)}
                                 />
                            }
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className='text-[20px] text-[#2EAC33]'>Prix :</div>
                            {
                                modifier === false ?
                                 <div>{prix}</div>
                                 :
                                 <input
                                    className="h-[35px] w-[400px] px-3 rounded-md shadow-md outline-none text-[20px] bg-white "
                                    value={prix}
                                    onChange={(e)=> setPrix(e.target.value)}
                                    type='number'
                                    min='0'
                                    max='10000'
                                 />
                            }
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className='text-[20px] text-[#2EAC33]'>Quantitée :</div>
                            {
                                modifier === false ?
                                 <div>{quantite}</div>
                                 :
                                 <input
                                    className="h-[35px] px-3 w-[350px] rounded-md shadow-md outline-none text-[20px] bg-white "
                                    value={quantite}
                                    onChange={(e)=> setQuantite(e.target.value)}
                                    type='number'
                                    min='0'
                                    max='10000'
                                 />
                            }
                        </div>
                    </div>
                    <div>
                        <img src = {imageURL} className="h-[250px] object-contain miw-blend-darken"/>
                        <button 
                            className="h-[30px] text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto"
                            onClick={(e)=> setModifier(!modifier)}
                        >
                            {modifier === false ? "Modifier" : "Valider"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IdProduit;