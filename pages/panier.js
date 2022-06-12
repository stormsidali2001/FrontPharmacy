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
            <div className="pt-[100px] items-center space-y-6 relative">
                <div>Vous avez commander</div>
                <table className="bg-white/70 w-[60vw] shadow-md rounded-md backdrop-blur-sm">
                    <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Quantitée</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            commande.map((el , index) => {
                                return(
                                    <tr>
                                        <td>{el.name}</td>
                                        <td>{el.quantity}</td>
                                        <td>{el.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Panier;