import Navbar from "../../components/Navbar"
import Link from "next/link"

const ListeProduit = props => {

    const data = [
        {
            id : 1,
            name : "Doliprane",
            quantity : '50',
            price : "50" 
        },
        {
            id : 5,
            name : "Doliprane",
            quantity : '50',
            price : "50" 
        },
        {
            id : 7,
            name : "Doliprane",
            quantity : '50',
            price : "50" 
        },
        {
            id : 10,
            name : "Doliprane",
            quantity : '50',
            price : "50" 
        },
        {
            id : 25,
            name : "Doliprane",
            quantity : '50',
            price : "50" 
        },
        {
            id : 75,
            name : "Doliprane",
            quantity : '50',
            price : "50" 
        },
    ]

    if(data.length === 0) return <div>Aucune donnée</div>
    const columns = [...Object.keys(data[0]).filter(el=>el!=='id')];

    return (
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6 relative">
                <div className='text-[32px] font-semibold text-[#2EAC33]'>Tous les produits</div>
                <table className="   bg-[#282873]/10 backdrop-blur-[8px] shadow-lg  leading-normal h-fit p-4 w-[70vw]">
                    <thead>
                        <tr  className="bg-white  rounded-[10px] h-[36px]  border-b-2 ">
                            {
                                columns.map(el=>{
                                    return(
                                        <th className="text-center">{el}</th>
                                        
                                    )
                                })
                            }
                            <th className="text-center">Détails</th>
                            <th className="text-center">Modifier</th>
                            <th className="text-center">Supprimer</th>
                        </tr>
                       
                    </thead>
                    <tbody className=" ">
                        {
                            data.map(row=>{
                                return(
                                    <tr  className=" bg-white/60  rounded-[10px] ">
                                        {
                                            Object.keys(data[0]).filter(el=>el!=='id').map(col=>{
                                                return(
                                                    <td className="text-center  h-[36px] ">
                                                        {row[col]}
                                                    </td>
                                                    
                                                )
                                            })
                                        }
                                        <td className="text-center h-[36px]">
                                            <Link href={`/productlist/${row.id}`}>
                                                <button  className="h-[22px] text-[14px] w-fit px-2 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto">
                                                    Details
                                                </button>
                                            </Link>
                                        </td>
                                        <td className="text-center h-[36px]"><button>Modifier</button></td>
                                        <td className="text-center h-[36px]"><button>Supprimer</button></td>
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
export default ListeProduit