<template>
    <form>
        <textarea 
        placeholder="Text Message And hit Enter To Send" 
        v-model="message"
        @keypress.enter="handleSubmit"></textarea>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getuser from "../composable/getuser"
import {timestamp} from '../firebase/config'
import useCollection from '../composable/useCollection'
export default {
    setup(props) {
        let message =ref("");

        



        let {user} = getuser();
        let  {error,addDoc} = useCollection("messaages");

        let handleSubmit = async()=>{
            let chat = {
                message:message.value,
                name:user.value.displayName,
                created_at:timestamp()
            }

            await addDoc(chat);
            
            message.value = "";
        }
        return{message,handleSubmit}
    }
}
</script>

<style>
    form{
        margin: 10px;
    }
    textarea{
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>