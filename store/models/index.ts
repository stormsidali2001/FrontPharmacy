//@ts-ignore
import { CartModel,cartModel } from "./cart.model.ts"
//@ts-ignore
import { productModel, ProductModel } from "./product.model.ts";
//@ts-ignore
import { UserModel ,userModel} from "./user.model.ts";
import {persist} from 'easy-peasy'

export interface Model{
    cartModel:CartModel;
    productModel:ProductModel;
    userModel:UserModel;

}


export const model:Model = {
    cartModel,
    productModel,
   userModel:persist(userModel)


}