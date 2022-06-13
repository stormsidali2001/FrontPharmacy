import axios from "axios";
import { action, Action, thunk, Thunk } from "easy-peasy"

export interface UserState{
    access_token?:string;
    refresh_token?:string;

}
export interface UserActions{
    setTokens:Action<this,{refresh_token:string,access_token:string}>;

}
export interface SignUpPayload{
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    phoneNumber:string;
    address:string;
}
export interface SigninPayload{
    email:string;
    password:string;
}
export interface UserThunks{
    signUpUser:Thunk<this,SignUpPayload,undefined>;
    signin:Thunk<this,SigninPayload,undefined>;
    getUserInfoThunk:Thunk<this,undefined>;

}

export interface UserModel extends UserState,UserActions,UserThunks{}

export const userModel:UserModel = {
    signUpUser:thunk(async(actions,payload)=>{
        await axios.post("http://localhost:8080/auth/public/signup/client",payload,{
            
        });
    }),
    signin:thunk(async(actions,payload)=>{

        const formData = new FormData();
        formData.append("username",payload.email);
        formData.append("password",payload.password)
      const res =   await axios.post("http://localhost:8080/public/signin",formData,{
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        });

        actions.setTokens(res?.data);
        actions.getUserInfoThunk()

    }),
    setTokens:action((state,payload)=>{
        state.access_token = payload.access_token;
        state.refresh_token = payload.refresh_token;
    }),
    getUserInfoThunk:thunk(async(actions,payload,{getStoreState,getStoreActions})=>{
        try{
            //@ts-ignore
            const access_token = getStoreState().userModel.access_token;
            const res = await axios.get("http://localhost:8080/auth/userInfos",{
                headers:{
                    'Authorization':"Bearer "+access_token
                },
                withCredentials:true
            })
         
            return res?.data;


        }catch(err){
            console.log(err);
        }
        
    })


}