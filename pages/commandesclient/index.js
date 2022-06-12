import Navbar from "../../components/Navbar";
import Link from "next/link"

const Commandes = props => {

    const commandes = [
        {
            id : 1,
            Date : "27/05/2022",
            Etat : "en attentes",
            Total : 150
        },
        {
            id : 2,
            Date : "12/02/2022",
            Etat : "en attentes",
            Total : 150
        },
        {
            id : 3,
            Date : "27/04/2022",
            Etat : "reçu",
            Total : 150
        },
        {
            id : 4,
            Date : "29/05/2022",
            Etat : "en attentes",
            Total : 150
        },
        {
            id : 5,
            Date : "09/05/2022",
            Etat : "reçu",
            Total : 150
        },
    ]

    if(commandes.length === 0) return <div>Aucune donnée</div>
    const columns = [...Object.keys(commandes[0]).filter(el=>el!=='id')];
    return (
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] text-[20px] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6 relative">
               <div className="text-[#2EAC33] text-left text-[30px] font-semibold">Vos commandes</div> 
               <table className="   bg-[#282873]/10 backdrop-blur-[8px] shadow-lg  leading-normal h-fit p-4 w-[70vw]">
                    <thead>
                        <tr  className="bg-white  rounded-[10px] h-[36px] text-[20px] text-[#2EAC33]  border-b-2 ">
                            {
                                columns.map(el=>{
                                    return(
                                        <th className="text-center">{el}</th>
                                    )
                                })
                            }
                            <th className="text-center">Détails</th>
                        </tr>
                       
                    </thead>
                    <tbody className=" ">
                        {
                            commandes.map(row=>{
                                return(
                                    <tr  className=" bg-white/60  rounded-[10px] text-[17px] font-thin">
                                        {
                                            Object.keys(commandes[0]).filter(el=>el!=='id').map(col=>{
                                                return(
                                                    <td className="text-center  h-[36px] ">
                                                        {row[col]}
                                                    </td>
                                                    
                                                )
                                            })
                                        }
                                        <td className="text-center h-[36px]">
                                            <Link href={`/commandesclient/${row.id}`}>
                                                <button  className="h-[22px] text-[14px] w-fit px-2 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto">
                                                    Voir plus
                                                </button>
                                            </Link>
                                        </td>
                                        
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
export default Commandes;