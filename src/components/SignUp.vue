
<template>
  <h2>SignUp</h2>
  <form @submit.prevent="signUp">
      <input type="text" placeholder="Display Name" v-model="displayName">
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <div v-if="error" class="error">
          {{error}}
      </div>
      <button >Sign In</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
// import {auth} from "../firebase/config"
import {useSignup} from "../composable/useSignup"
export default {

    setup(props,context) {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let {error,createAccount} = useSignup();

        let signUp = async()=>{
          let res = await createAccount(email.value,password.value,displayName.value)
          if(res){
                context.emit("enterChatroom")
            
          }
         
        }
        return {displayName,email,password,signUp,error};
    }
}
</script>

<style>
    
</style>