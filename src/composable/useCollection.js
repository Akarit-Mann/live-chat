


import { ref } from "vue";
import {db} from '../firebase/config'

let useCollection = (collection)=>{
    let error = ref(null);
    let addDoc = async(doc)=>{
        try{
           await db.collection(collection).add(doc);
        }catch(err){
            console.log(err.message);
            error.value = "Not Work";
        }
    }
    return {error,addDoc};
}

export default useCollection;