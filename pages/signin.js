import { useState } from "react"
import Navbar from "../components/Navbar"

const Signin = props => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    return(
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] text-[20px] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] items-center space-y-6 relative">
                <img/>
                <form className="h-[350px] w-[450px] items-center justify-center flex flex-col space-y-8 rounded-lg shadow-lg backdrop-blur-sm p-6 bg-white/60">
                    <div className="text-[28px] text-[#2EAC33]">Connectez vous !</div>
                    <table className="space-y-6 text-[18px]">
                        <tr>
                            <td className="text-[#2EAC33] pb-6">Email :</td>
                            <td>
                                <input
                                    placeholder="Email..."
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded-md shadow-md bg-white/20 backdrop-blur-sm px-3 outline-none"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[#2EAC33] pr-6">Mot de passe :</td>
                            <td>
                                <input
                                    placeholder="Password..."
                                    onChange={(e)=> setPassword(e.target.value)}
                                    className="rounded-md shadow-md bg-white/20 backdrop-blur-sm px-3 outline-none"
                                />
                            </td>
                        </tr>
                    </table>
                    <button
                        className="h-[30px] text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto"
                    >
                        Connection
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Signin