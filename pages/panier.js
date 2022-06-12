import Navbar from "../components/Navbar";

const Panier = props => {
    return (
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] text-[20px] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] items-center space-y-6 relative"></div>
        </div>
    )
}
export default Panier;