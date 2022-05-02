import { ref } from "vue";
import {auth} from "../firebase/config"


let error = ref(null);

let createAccount = async(email,password,displayName)=>{

    try{
        let res = await auth.createUserWithEmailAndPassword(email,password);
      if(!res){
          throw new Error("I don't want to work")
      }
      res.user.updateProfile({displayName})
      return res;
    } catch(err){
        
        error.value = err.message ;
        // console.log(error.value)
    }
    
}

let useSignup = ()=>{

    return {error,createAccount};
}

export  {useSignup}