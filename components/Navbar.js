import Chario from "../Icons/Chario"
import Inscription from "../Icons/Inscription"

const Navbar = props => {

    const inscrit = true
    const firstName = "Houda"
    const lastName = "Debza"

    return (
        <div className="h-[60px] lg:w-[70vw] top-[10px] flex fixed w-[90vw] rounded-full shadow-md bg-white flex-row lg:space-x-[35vw] md:space-x-[20vw] sm:space-x-[10vw] space-x-[20px] items-center justify-center text-[#2EAC33] font-mono md:text-[22px] text-[18px] z-50">
            <div>Home</div>
            <div className="flex flex-row items-center justify-center space-x-10">
                {
                    inscrit === true ? 
                    <div className="flex flex-row space-x-2">
                        <div>{firstName}</div>
                        <div>{lastName}</div>
                    </div>

                     : 
                    <div className="flex flex-row space-x-2 items-center justify-center">
                        <Inscription/>
                        <div>Inscrivez vous</div>
                    </div>
                }
                <Chario/>
            </div>
        </div>
    )
}
export default Navbar;