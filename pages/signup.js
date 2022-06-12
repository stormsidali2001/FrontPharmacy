import { useState } from "react"
import Navbar from "../components/Navbar"

const Signup = props => {

    const [suivant , setSuivant] = useState(false);
    const [firstname , setFirstName] = useState("");
    const [lastName , setLastName] = useState("")
    const [adress , setAdress] = useState("")
    const [phoneNumber , setPhoneNumber] = useState(0)
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    

    const handleNext = e => {
        if (firstname === "" && lastName === "" && (email === "" || adress  === "")){
            e.preventDefault
           console.log(" un champs est manquant")
        }
        else {
            e.preventDefault;
            setSuivant(true)
        }
    }

    return (
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] text-[20px] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6 relative">
                <img/>
                <form className="h-[450px] w-[450px] items-center justify-center flex flex-col space-y-8 rounded-lg shadow-lg backdrop-blur-sm p-6 bg-white/60">
                    <div className="text-[25px] text-[#2EAC33]">Créer un compte !</div>
                    {
                        !suivant&&
                        <div className="flex flex-col space-y-4 text-[18px]">
                            <table>
                                <tr>
                                    <td className="text-[#2EAC33] pb-4">Nom :</td>
                                   <td>
                                    <input 
                                            placeholder="Nom..."
                                            className="h-[30px] w-[190px] rounded-md shadow-md bg-white/20 backdrop-blur-sm px-3 outline-none mb-4"
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                   </td>
                                </tr>
                                <tr>
                                    <td className="text-[#2EAC33] pb-4">Prénom :</td>
                                    <td>
                                        <input
                                            placeholder="Prénom..."
                                            className=" w-[190px] h-[30px] rounded-md shadow-md bg-white/20 backdrop-blur-sm px-3 outline-none mb-4"
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-[#2EAC33] pb-4 pr-2">Numéro téléphone :</td>
                                    <td>
                                        <input
                                            placeholder="Numéro de tlf..."
                                            className="w-[190px] h-[30px] rounded-md shadow-md bg-white/20 backdrop-blur-sm px-3 outline-none mb-4"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-[#2EAC33]">Adresse :</td>
                                    <td>
                                        <input
                                            placeholder="Adresse..."
                                            className="h-[30px] w-[190px] rounded-md shadow-md bg-white/20 backdrop-blur-sm px-3 outline-none"
                                            onChange={(e) => setAdress(e.target.value)}
                                        />
                                    </td>
                                </tr>
                            </table>
                            <button
                                onClick={(e) => {handleNext(e)}}
                                className="h-[30px] text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto"
                            >
                                Suivant
                            </button>
                        </div>
                    }
                    {
                        suivant&&
                        <table>
                            <tr>
                                <td className="text-[#2EAC33] pb-4">Email :</td>
                                <td>
                                    <input
                                        placeholder="Email..."
                                        className="w-[180px] h-[30px] rounded-md shadow-md bg-white/20 backdrop-blur-sm px-3 outline-none mb-4"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-[#2EAC33]  pb-4">Password :</td>
                                <td>
                                    <input
                                        placeholder="Password..."
                                        className="w-[180px] h-[30px] rounded-md shadow-md bg-white/20 backdrop-blur-sm px-3 outline-none mb-4"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-[#2EAC33] pr-2 pb-4">confirm password :</td>
                                <td>
                                    <input
                                        placeholder="Password..."
                                        className="w-[180px] h-[30px] rounded-md shadow-md bg-white/20 backdrop-blur-sm px-3 outline-none mb-4"
                                        type = "password"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        onClick={(e) => {e.preventDefault;setValider(!valider) }}
                                        className="h-[30px] text-[18px] w-fit px-4 rounded-lg shadow-lg hover:bg-[#2EAC33]/80 bg-[#2EAC33] text-white m-auto"
                                    >
                                        Précédent
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="submit"
                                        className="h-[30px] text-[18px] ml-20 w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto"
                                    >
                                        Valider
                                    </button>
                                </td>
                            </tr>
                        </table>
                    }
                </form>
            </div>
        </div>
    )
}
export default Signup