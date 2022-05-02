
<template>
  <h2>login Your Account</h2>
  <form @submit.prevent="login">
    
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <div v-if="error" class="error">{{error}}</div>
      <button >Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from "../composable/useLogin"
export default {

    setup(props,context) {
        
        let email = ref("");
        let password = ref("");
        let {error,signIn} = useLogin()
        let login = async()=>{
            
            let res = await signIn(email.value,password.value)
            if(res){
                context.emit("enterChatroom")
            }
        }
        return {email,password,login,error};
    }
}
</script>

<style>
    
</style>