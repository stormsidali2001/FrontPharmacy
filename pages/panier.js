import Navbar from "../components/Navbar";

const Panier = props => {


    const commande = [
        {
            id : 1,
            name : "Doliprane",
            quantity : 50,
            price : 60
        },
        {
            id : 1,
            name : "Paracétamol",
            quantity : 50,
            price : 60
        },
        {
            id : 1,
            name : "Rhumafed",
            quantity : 50,
            price : 60
        },
    ]
    const total = 1200

    return (
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] text-[20px] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] items-center text-center space-y-6 relative">
                <div className="text-[28px] text-[#2EAC33] font-semibold ">Vous avez commander</div>
                <table className="bg-white/70 w-[60vw] border-2 border-[#2EAC33]/50 shadow-md rounded-md backdrop-blur-sm">
                    <thead>
                        <tr className="text-[#2EAC33] font-thin underline">
                            <th className="pb-4">Produit</th>
                            <th className="pb-4">Quantitée</th>
                            <th className="pb-4">Prix</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            commande.map((el , index) => {
                                return(
                                    <tr className="text-[18px] font-thin">
                                        <td className="pb-3">{el.name}</td>
                                        <td>{el.quantity}</td>
                                        <td>{el.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="flex flex-row space-x-[40vw] pt-6">
                    <div>Total : {total} DA</div>
                    <button className="h-[30px] text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto">Valider</button>
                </div>
            </div>
        </div>
    )
}
export default Panier;