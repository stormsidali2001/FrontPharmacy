import { thunk, Thunk } from "easy-peasy";
import axios from "axios";

export interface ProductState{

}
export interface ProductActions{

}
export interface ProductThunks{
    uploadImage:Thunk<this,any,undefined>;

}

export interface ProductModel extends ProductState,ProductActions,ProductThunks{}

export const productModel:ProductModel = {
    uploadImage:thunk(async(actions,payload)=>{
           const res = axios.post("http://localhost:8080/upload",payload);
    })

}