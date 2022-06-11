import { useState } from "react";
import Navbar from "../components/Navbar";

const CreerProduit = props => {

    const [name , setName] = useState("")
    const [description , setDescription] = useState("")
    const [imageURL , setImageURL] = useState("")
    const [quantity , setQuantity] = useState(0)
    const [price , setPrice] = useState(0)

    return (
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6 relative">
                <img src="/ajouterPrduit.jpg" className="miw-blend-darken h-[500px] object-contain opacity-40"/>
                <form className="h-[500px] absolute w-[600px] rounded-xl text-left items-start shadow-md flex flex-col space-y-4 bg-white/80 p-6">
                    <div className="flex flex-col space-y-3 text-center w-full">
                        <div className='text-[30px] font-semibold text-[#2EAC33]'>Ajouter un produit</div>
                        <div className="italic text-[16px]">Les champs avec * sont obligatoires</div>
                    </div>
                    <div className="flex flex-rox space-x-4 items-center justify-center">
                        <div className="text-[#2EAC33] text-[18px]">Nom * :</div>
                        <input
                            className="h-[30px] w-[460px] bg-white/30 rounded-md shadow-md outline-none px-3"
                            placeholder="Nom ..."
                            onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col space-y-2 ">
                        <div className="text-[#2EAC33] text-[18px]">Description * :</div>
                        <textarea
                            placeholder="Description ..."
                            className="resize-none outline-none bg-white/30 h-[100px] w-[550px] rounded-md shadow-md p-3"
                            onChange={(e)=> setDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-rox space-x-4 items-center justify-center">
                        <div className="text-[#2EAC33] text-[18px]">prix * :</div>
                        <input
                            placeholder="Prix ..."
                            className="h-[30px] bg-white/30 w-[450px] rounded-md shadow-md outline-none px-3"
                            onChange={(e)=> setPrice(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-rox space-x-4 items-center justify-center">
                        <div className="text-[#2EAC33] text-[18px]">Quantitée :</div>
                        <input
                            placeholder="Quantitée ..."
                            className="h-[30px] bg-white/30 w-[420px] rounded-md shadow-md outline-none px-3"
                            onChange={(e)=> setQuantity(e.target.value)}
                        />
                    </div>
                    <button
                        className="h-[30px] text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto "
                    >
                        Suivant
                    </button>
                </form>
            </div>
        </div>
    )
}
export default CreerProduit;