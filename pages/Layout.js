import { useEffect } from "react";
import {useStoreActions} from '../store/hooks.ts'

const Layout = ({children,toastsRef})=>{
    const {getUserInfoThunk} = useStoreActions(store=>store.userModel)
    
    useEffect(async ()=>{
       await  getUserInfoThunk()
    },[])
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout;
