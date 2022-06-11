const Model = ({open , setOpen , children}) => {
    return (
        <div>
            {
                open ? 
                <div className=" transition-transform bg-white shadow-xl fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center p-8 justify-center rounded-lg">
                    <button 
                        className="absolute top-3 right-3 text-[25px]"
                        onClick={(e) => setOpen(!open)}
                    >
                        x
                    </button>
                    {children}
                </div>
                :
                ""
            }
        </div>
    )
}
export default Model