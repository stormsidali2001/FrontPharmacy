import Navbar from "../../components/Navbar"
import Link from "next/link"

const commandesAdmin = props => {

    const commandes = [
        {
            id : 1,
            client : [
                {
                    id : 1,
                    firstName : 'Houda',
                    lastName : 'Debza',
                    email : "h.debza@esi-sba.dz"
                }

            ],
            commandeClient : [
                {
                    id : 1 ,
                    date : "25/04/2012",
                    etat : "En attente",
                    total : 100,
                }
            ]
        },
        {
            id : 1,
            client : [
                {
                    id : 1,
                    firstName : 'Sidali',
                    lastName : 'Assoul',
                    email : "h.debza@esi-sba.dz"
                }

            ],
            commandeClient : [
                {
                    id : 1 ,
                    date : "25/04/2012",
                    etat : "En attente",
                    total : 100,
                },
                {
                    id : 1 ,
                    date : "25/04/2012",
                    etat : "En attente",
                    total : 100,
                },
                {
                    id : 1 ,
                    date : "25/04/2012",
                    etat : "En attente",
                    total : 100,
                },
            ]
        },
        
    ]


    if(commandes.length === 0) return <div>Aucune donnée</div>
    const columns = [...Object.keys(commandes[0]).filter(el=>el!=='id')];

    return (
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] text-[20px] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6">
                <div className='text-[32px] font-semibold text-[#2EAC33]'>Liste des commandes</div>
                <table className="bg-white/60 backdrop-blur-[8px] shadow-lg  leading-normal h-fit p-4 w-[70vw]">
                    <thead className="bg-white rounded-[10px] h-[36px] text-[18px] text-[#2EAC33] border-b-2 ">
                        <tr>
                            <th>Nom et prénom</th>
                            <th>Date</th>
                            <th>Etat</th>
                            <th>Total</th>
                            <th>Voir plus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            commandes.map((el , index) => {
                               return(
                                    <tr className="text-center border-[#2EAC33]/40 border-y-2 text-[14px]">
                                        <td className="flex items-center justify-center"> 
                                            <table>
                                                {
                                                    el.client.map((element) => {
                                                        return(
                                                            <tr className="flex flex-col items-center justify-center space-y-1">
                                                                <td className="flex flex-row space-x-1 items-center justify-center">
                                                                    <div>{element.firstName}</div>
                                                                    <div>{element.lastName}</div>
                                                                </td>
                                                                <td>{element.email}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </table>
                                        </td>
                                        <td className="">
                                            <table className="w-full">
                                                {
                                                    el.commandeClient.map((element) => {
                                                        return(
                                                            <tr className={`w-[100%] ${el.commandeClient.length > 1 ?"border-b border-l border-[#2EAC33]/50" : ""} `}>
                                                               <td>{element.date}</td> 
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </table>
                                        </td>
                                        <td>
                                            <table className="w-full">
                                                {
                                                    el.commandeClient.map((element) => {
                                                        return(
                                                            <tr className={`w-[100%] ${el.commandeClient.length > 1 ?"border-b border-[#2EAC33]/50" : ""} `}>
                                                               <td>{element.etat}</td> 
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </table>
                                        </td>
                                        <td>
                                            <table className="w-full">
                                                {
                                                    el.commandeClient.map((element) => {
                                                        return(
                                                            <tr className={`w-[100%] ${el.commandeClient.length > 1 ?"border-b border-[#2EAC33]/50"  : ""} `}>
                                                               <td>{element.total}</td> 
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </table>
                                        </td>
                                        <td>
                                            <table className="w-full">
                                                {
                                                    el.commandeClient.map((element) => {
                                                        return(
                                                            <tr className={`w-[100%] ${el.commandeClient.length > 1 ?"border-b border-[#2EAC33]/50" : ""} `}>
                                                               <td>
                                                                   <Link href={`/commandesclient/${element.id}`}>
                                                                        <button className="h-[18px] text-[11px] w-fit px-2 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto">Voir plus</button>
                                                                   </Link>
                                                                </td> 
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </table>
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
export default commandesAdmin