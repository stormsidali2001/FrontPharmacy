import { useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import Link from "next/link"
import Model from "../components/Model"

const listeMedicaments = props => {

    const CardData = [
        {
            id : 1,
            title : "Doliprane",
            text : "mlih l wja3 rass mlih l koulech chroub w rgoud tesbah labas",
            image : "/doliprane.png",
            price : "50" 
        },
        {
            id : 5,
            title : "Doliprane",
            text : "mlih l wja3 rass mlih dwa dwa dwa l koulech chroub w rgoud tesbah labas",
            image : "/doliprane.png",
            price : "50" 
        },
        {
            id : 7,
            title : "Doliprane",
            text : "mlih l wja3 rass mlih dwa dwa dwa l koulech chroub w rgoud tesbah labas",
            image : "/doliprane.png",
            price : "50" 
        },
        {
            id : 10,
            title : "Doliprane",
            text : "mlih l wja3 rass mlih dwa dwa dwa l koulech chroub w rgoud tesbah labas",
            image : "/doliprane.png",
            price : "50" 
        },
        {
            id : 25,
            title : "Doliprane",
            text : "mlih l wja3 rass mlih dwa dwa dwa l koulech chroub w rgoud tesbah labas",
            image : "/doliprane.png",
            price : "50" 
        },
        {
            id : 75,
            title : "Doliprane",
            text : "mlih l wja3 rass mlih dwa dwa dwa l koulech chroub w rgoud tesbah labas",
            image : "/doliprane.png",
            price : "50" 
        },
        
    ]

    const [panier , setPanier] = useState([])
    const [open , setOpen] = useState(false)
    const [produitSelectionne , setProduitSelectionne] = useState("")
    const [recherche , setRecherche] = useState("")
    const [quantite , setQuantite] = useState(1)

    return(
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] flex font-mono justify-center bg-[#EBFFEF] relative">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center  space-y-6">
                <div className='text-[35px] text-[#2EAC33]'>Liste des médicaments</div>
                <div className="flex flex-row space-x-2 items-center justify-center">
                    <input 
                        className="h-[40px] lg:w-[40vw] text-[18px] md:w-[50vw] px-2 outline-none w-[70vw] rounded-lg shadow-lg"
                        placeholder="Recherchez un médicament spécifique ..."
                        onChange={(e) => setRecherche(e.target.value)}
                    />
                    <button  className='h-[40px] text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white flex flex-row items-center justify-center space-x-4'>Rechercher</button>
                </div>
                <div className="flex flex-wrap w-[90%] items-center justify-center gap-10">
                    {
                        CardData.map((el , index) => {
                            return(
                                <Card bgImage="/blob.png" title={el.title} text={el.text} price={el.price} image={el.image} button="Ajouter au panier" setOpen={setOpen} open={open} produitSelectionne={produitSelectionne} setProduitSelectionne={setProduitSelectionne} el={el}/>  
                            )
                        })
                    }
                </div>
            </div>
            <Model open={open} setOpen={setOpen}>
                <div className="flex items-center flex-col space-y-4 justify-center">
                    <div>Veuiller préciser la quantitée</div>
                    <div className="flex flex-row items-center justify-center space-x-3">
                        <div>Quantiteé :</div>
                        <input 
                            className="outline-none"
                            placeholder="1" 
                            type="number"
                            min="1"
                            max="15"
                            onChange={(e) => setQuantite(e.target.value)}

                        />
                        <button 
                            className="h-fit py-1 text-[15px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white"
                            onClick={(e) => {setOpen(!open) ; setPanier([...panier , {produitSelectionne , quantite}])}}
                        >
                            Valider
                        </button>
                    </div>
                </div>
            </Model>
        </div>
    )
}
export default listeMedicaments