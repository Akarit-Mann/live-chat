import { ref } from "vue"
import {auth} from "../firebase/config"


let error =ref(null);

let logoutNow = async()=>{

    
       try{
            await auth.signOut();
            console.log("it work")
       } 
       catch(err){
           error.value = err.message;
           console.log(error.value)
       }
}

let useLogout = ()=>{

    return {error,logoutNow}
}

export default useLogout;