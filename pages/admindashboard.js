import { useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Link from "next/link";

const AdminDashboard = props => {

    const [recherche , setRecherche] = useState("")
    const ProductData = [
        {
            id : 1,
            name : "Doliprane",
            price : "50",
            quantity : "60"
        },
        {
            id : 5,
            name : "Doliprane",
            price : "50",
            quantity : "60"
        },
        {
            id : 7,
            name : "Doliprane",
            price : "50",
            quantity : "60"
        },
        {
            id : 10,
            name : "Doliprane",
            price : "50",
            quantity : "60"
        },
        {
            id : 25,
            name : "Doliprane",
            price : "50",
            quantity : "60"
        },
        {
            id : 75,
            name : "Doliprane",
            price : "50",
            quantity : "60"
        }, 
    ]

    const commandeData = [
        {
            id : 75,
            firstName : "sidali",
            lastName : "assoul",
            produit : "Doliprane",
            quantity : "60"
        }, 
    ]

    return(
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] flex font-mono justify-center bg-[#EBFFEF] relative">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6">
                <div className='text-[35px] font-semibold text-[#2EAC33]'>Centre de contrôl</div>
                <div className="flex flex-row space-x-2 items-center justify-center">
                    <input 
                        className="h-[40px] lg:w-[40vw] text-[18px] md:w-[50vw] px-2 outline-none w-[70vw] rounded-lg shadow-lg"
                        placeholder="Rechercher médicament / commande ..."
                        onChange={(e) => setRecherche(e.target.value)}
                    />
                    <button  className='h-[40px] text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white flex items-center justify-center flex-row space-x-4'>Rechercher</button>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="w-[48vw] h-[100%] flex flex-col space-y-2 justify-center border-r-2 border-[#2EAC33]">
                        <div className="flex flex-row items-center space-x-[50%]">
                            <div className="text-[25px] text-[#2EAC33]">Produits</div>
                            <Link href="/creerproduit">
                                <button 
                                    className="h-[30px] mt-2 text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white"
                                >
                                    Créer Produit
                                </button>
                            </Link>
                        </div>
                        <div></div>
                        <div className="flex flex-row items-center space-x-[54%]">
                            <div className="text-[25px] font-light text-[#2EAC33]">Stock</div>
                            <Link href="/productlist">
                                <button className="h-[30px] text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white">Consulter stock</button>
                            </Link>
                        </div>
                        <div className="text-[25px] font-light text-[#2EAC33]">Derniers produits</div>
                        <div className="flex flex-wrap gap-8">
                            {
                                ProductData.map((el ,index ) => {
                                    return(
                                        <div className="flex flex-col space-y-2">
                                        <div className="text-[15px]">{el.name}</div>
                                        <div className="bg-white pl-[3px] text-[12px] shadow-lg rounded-lg h-[100px] w-[100px] flex flex-col  justify-center space-y-2">
                                            <div>quantitée : {el.quantity}</div>
                                            <div>prix : {el.price}</div>
                                            <Link href={`/productlist/${el.id}`}>
                                                <button className="h-[18px] text-[12px] m-auto w-fit px-2 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white">Voir plus</button>
                                            </Link>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="w-[48vw] flex flex-col">
                        <div className="flex flex-row items-center space-x-[40%]">
                            <div className="text-[25px] text-[#2EAC33]">Commandes</div>
                            <Link href="/commandesadmin">
                                <button className="h-[30px] mt-2 text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white">Voir les commandes</button>
                            </Link>
                        </div>
                        <div className="text-[25px] font-light text-[#2EAC33]">Dernières commandes</div>
                        <div className="flex flex-wrap gap-8">
                            {
                                commandeData.map((el ,index ) => {
                                    return(
                                        <div className="flex flex-col space-y-2">
                                        <div className="flex flex-row space-x-2">
                                            <div>{el.firstName}</div>
                                            <div>{el.lastName}</div>
                                        </div>
                                        <div className="bg-white justify-center pl-[3px] text-[12px] shadow-lg rounded-lg h-[100px] w-[100px] flex flex-col space-y-2">
                                            <div>{el.produit}</div>
                                            <div>quantite : {el.quantity}</div>
                                            <Link href={`/commandesclient/${el.id}`}> 
                                                <button className="h-[18px] text-[12px] m-auto w-fit px-2 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white">Voir plus</button>
                                            </Link>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard;