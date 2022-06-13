import { useState } from "react"
import Model from "../../components/Model"
import Navbar from "../../components/Navbar"
import Edit from "../../Icons/Edit"
import Trash from "../../Icons/Trash"
import Link from "next/link"

const commandeId  = props => {

    const date = "22/05/2021"
    const etat = "en attente"
    const total = 20202
    const produits = [
        {
            id : 1 ,
            name : "Doliprane",
            quantity : 50,
            price : 150
        },
        {
            id : 2 ,
            name : "Paracétamol",
            quantity : 50,
            price : 150
        },
        {
            id : 3 ,
            name : "Ventoline",
            quantity : 50,
            price : 150
        },
        {
            id : 4 ,
            name : "Rhumafed",
            quantity : 50,
            price : 150
        },   
    ]

    const [modifierBoutton , setModiferBoutton] = useState(false)
    const [qttProductModifier , setQttProductModifier] = useState(null)
    const [idProductModifier , setIdProductModifier] = useState(null)
    const [validated , setValidated] = useState(null)
    const userType = "client"

    return(
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] text-[20px] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6">
                <div className="min-h-[70vh] h-fit p-6 w-[50vw] rounded-xl shadow-xl bg-white/60 flex flex-col space-y-4 items-center justify-center backdrop-blur-sm relative">
                    <div className="flex flex-row text-center space-x-2 text-[28px]">
                        <div className="text-[#2EAC33] font-semibold]">La commande du :</div>
                        <div className="text-stone-500">{date}</div>
                    </div>
                    <div className="flex flex-row space-x-16 text-[18px]">
                        <div className="flex flex-row space-x-2">
                            <div className="font-semibold">Etat :</div>
                            <div>{etat}</div>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className="font-semibold">total :</div>
                            <div>{total} DA</div>
                        </div>
                    </div>
                    <div className="flex flex-col text-[18px] space-y-4">
                        <div className="flex flex-row space-x-[60%]">
                            <div className="font-semibold">Produits commandés</div>
                            <button
                                onClick={(e) => setSupprimerProduit(true)}
                            >
                                <Trash/>
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-6">
                            {
                                produits.map((el , index) => {
                                    return(
                                        <div className="h-[120px] w-[120px] rounded-md shadow-md bg-white/50 backdrop-blur-sm flex flex-col items-center p-2 space-y-2 text-[11px] relative">
                                            {modifierBoutton&&
                                                <button 
                                                    onClick={(e) => setIdProductModifier(el.id)}
                                                    className='top-1 left-2 absolute'
                                                >
                                                    <Edit/> 
                                                </button>
                                            }
                                            <div className=" text-[14px] break-all text-[#2EAC33] font-semibold">{el.name}</div>
                                            <div className="flex flex-row">
                                                <div>Quantitée :</div>
                                                {
                                                    idProductModifier === el.id ?
                                                    <input
                                                        className="h-[16px] w-[35px] shadow-md bg-slate-100 rounded-sm p-1 outline-none" 
                                                        placeholder={el.id}
                                                        type = "number"
                                                        min="1"
                                                        max="15"
                                                        onChange = {(e) => setQttProductModifier(e.target.value)}
                                                    />
                                                    :
                                                    <div>{el.quantity}</div>
                                                }
                                            </div>
                                            <div className="flex flex-row">
                                                <div>Prix :</div>
                                                <div>{el.price}</div>
                                            </div>
                                            {
                                                idProductModifier === el.id ? 
                                                <button className="h-[16px] text-[11px] w-fit px-2 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto">Valider</button>
                                                 : 
                                                <Link href={`/productlist/${el.id}`}>
                                                    <button 
                                                        className="h-[16px] text-[11px] w-fit px-2 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto"
                                                    >
                                                        Voir plus
                                                    </button>
                                                </Link>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {
                        userType === "client"&&
                        <div>
                            <div 
                                className="absolute bottom-4 left-6 cursor-pointer h-[30px] text-[18px] w-fit px-2 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white"
                                onClick={(e) => setModiferBoutton(true)}
                            >
                                Modifier
                            </div>
                            <div 
                                className="absolute bottom-4 right-6 cursor-pointer h-[30px] text-[18px] w-fit px-2 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white"
                            >
                                Supprimer
                            </div>
                        </div>
                    }
                    {
                        userType === "admin"&&
                        <div 
                                className="absolute bottom-4 rignt-6 cursor-pointer h-[30px] text-[18px] w-fit px-2 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white"
                                onClick={(e) => setValidated(true)}
                            >
                                Approuver
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}
export default commandeId