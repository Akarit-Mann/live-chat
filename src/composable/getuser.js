
import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"

 let user =ref(auth.currentUser);
 auth.onAuthStateChanged((_user)=>{
     user.value = _user;
 })

let getuser = ()=>{
    return {user}
}

export default getuser;




















