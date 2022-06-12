import Navbar from "../../components/Navbar";

const IdCommandes = props => {
    return(
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] text-[20px] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6">
                <div>ceci est la commande 1</div>
            </div>
        </div>
    )
}
export default IdCommandes;