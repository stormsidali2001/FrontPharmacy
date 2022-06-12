import Navbar from "../../components/Navbar"

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
            id : 1 ,
            name : "Paracétamol",
            quantity : 50,
            price : 150
        },
        {
            id : 1 ,
            name : "Ventoline",
            quantity : 50,
            price : 150
        },
        {
            id : 1 ,
            name : "Rhumafed",
            quantity : 50,
            price : 150
        },
        
    ]

    return(
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] text-[20px] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6 relative">
                <div className="min-h-[70vh] h-fit p-6 w-[50vw] rounded-xl shadow-xl bg-white/60 flex flex-col space-y-4 items-center justify-center backdrop-blur-sm">
                    <div className="flex flex-row text-center space-x-2">
                        <div>La commande du :</div>
                        <div>{date}</div>
                    </div>
                    <div className="flex flex-row space-x-16">
                        <div className="flex flex-row space-x-2">
                            <div>Etat :</div>
                            <div>{etat}</div>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div>total :</div>
                            <div>{total}</div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>Produits commandés</div>
                        <div className="flex flex-wrap gap-6">
                            {
                                produits.map((el , index) => {
                                    return(
                                        <div className="h-[120px] w-[120px] rounded-md shadow-md bg-white/50 backdrop-blur-sm flex flex-col space-y-2 text-[13px]">
                                            <div>{el.name}</div>
                                            <div>{el.quantity}</div>
                                            <div>{el.price}</div>
                                            <button>Voir plus</button>
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
export default commandeId