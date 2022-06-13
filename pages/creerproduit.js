import { useStoreActions } from "easy-peasy";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Upload from "../Icons/Upload";

const CreerProduit = ({toastsRef}) => {

    const [name , setName] = useState(null)
    const [description , setDescription] = useState(null)
    const [image , setImage] = useState(null)
    const [quantity , setQuantity] = useState(null)
    const [price , setPrice] = useState(null)
    const [suivant , setSuivant] = useState(false)

    const {uploadImage} = useStoreActions(store=>store.productModel)

    const handleFileChange = e =>{
        e.preventDefault();
        setImage(e.target.files[0]);
    }
    const handleUploadImage = async e=>{
        if(!image){
            toastsRef.current.addMesage({text:"Svp ajoutez une image pour continuer",mode:"Error"})
            return;
        }
        e.preventDefault();
        try{

            const formData = new FormData();
            formData.append("image",image)
            const res =   await uploadImage(formData);
            console.log(res)
        }catch(err){
            console.log("error: ",err)

        }
      

    }
    return (
        <div className="h-fit pb-10 w-[100vw] min-h-[100vh] flex font-mono justify-center bg-[#EBFFEF]">
            <Navbar/>
            <div className="pt-[100px] flex flex-col items-center space-y-6 relative">
                {!suivant&&<img src="/ajouterPrduit.jpg" className="miw-blend-darken h-[500px] object-contain opacity-40"/>}
                <form className="h-[500px] absolute w-[600px] rounded-xl text-left items-start shadow-md bg-white/80 p-6">
                    {
                        !suivant&& 
                        <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-3 text-center w-full">
                            <div className='text-[30px] font-semibold text-[#2EAC33]'>Ajouter un produit</div>
                            <div className="italic text-[16px]">Les champs avec * sont obligatoires</div>
                        </div>
                        <div className="flex flex-rox space-x-4 items-center justify-center">
                            <div className="text-[#2EAC33] text-[18px]">Nom * :</div>
                            <input
                                className="h-[30px] w-[460px] bg-white/30 rounded-md shadow-md outline-none px-3"
                                placeholder="Nom ..."
                                onChange={(e)=> setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className="flex flex-col space-y-2 ">
                            <div className="text-[#2EAC33] text-[18px]">Description * :</div>
                            <textarea
                                placeholder="Description ..."
                                className="resize-none outline-none bg-white/30 h-[100px] w-[550px] rounded-md shadow-md p-3"
                                onChange={(e)=> setDescription(e.target.value)}
                                value={description}
                            />
                        </div>
                        
                        <div className="flex flex-rox space-x-4 items-center justify-center">
                            <div className="text-[#2EAC33] text-[18px]">prix * :</div>
                            <input
                                placeholder="Prix ..."
                                className="h-[30px] bg-white/30 w-[450px] rounded-md shadow-md outline-none px-3"
                                onChange={(e)=> setPrice(e.target.value)}
                                value={price}
                            />
                        </div>
                        <div className="flex flex-rox space-x-4 items-center justify-center">
                            <div className="text-[#2EAC33] text-[18px]">Quantitée :</div>
                            <input
                                placeholder="Quantitée ..."
                                className="h-[30px] bg-white/30 w-[420px] rounded-md shadow-md outline-none px-3"
                                onChange={(e)=> setQuantity(e.target.value)}
                                value = {quantity}
                            />
                        </div>
                        <button
                            className="h-[30px] text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto "
                            onClick={(e) => {name&&description&&price ? setSuivant(true)  : e.preventDefault}}
                        >
                            Suivant
                        </button>
                    </div>
                    }
                    {
                        suivant&&(
                            <div className="flex flex-col items-center justify-start mt-10 space-y-4 ">
                              {  image?(
                                  <div>
                                  <label htmlFor="input530"   className="h-[370px] w-[320px] bg-white/30 shadow-md rounded-md flex flex-col space-y-6 items-center justify-center">
                                    <img src={URL.createObjectURL(image)} className="h-[200px] object-contain "/>
                                      <div className="text-[18px] text-center">Cliquez ici pour ajouter une image !</div>
                                  </label>
                                  <input 
                                      type="file"
                                      id="input530"
                                      className="hidden"
                                      onChange={handleFileChange}
                                  />
                                     </div>
                               
                                )
                                :
                                (
                                  
                                        <div>
                                                <label htmlFor="input530"   className="h-[370px] w-[320px] bg-white/30 shadow-md rounded-md flex flex-col space-y-6 items-center justify-center">
                                                    <img src="/imageupload.webp" className="h-[300px] object-contain mix-blend-darken"/>
                                                    <div className="text-[18px] text-center">Cliquez ici pour ajouter une image !</div>
                                                </label>
                                                <input 
                                                    type="file"
                                                    id="input530"
                                                    className="hidden"
                                                    onChange={handleFileChange}
                                                />
                                        </div>
                                          
                                
                                    ) }
                                    
                                      <button  
                                        className="h-[30px] text-[18px] w-fit px-4 rounded-lg shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white m-auto"
                                        onClick = {handleUploadImage}
                                      >
                                                Valider
                                            </button>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    )
}
export default CreerProduit;