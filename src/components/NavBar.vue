<template>
  <nav v-if="user">
      <div>
          <p>Hi {{user.displayName}}</p>
          <p class="email">Login as {{user.email}}</p>
      </div>
      <button @click="logout">Log Out</button>
  </nav>
</template>

<script>
import useLogOut from "../composable/useLogOut"
import getuser from "../composable/getuser"
import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"

export default {
    setup(props) {
        // let {error,logoutNow} = useLogOut();
        let error =ref(null)
        let {user} = getuser();
        let logout = async()=>{
            // await logoutNow();
            try{
                await auth.signOut();
                console.log("userlog out");
            } catch(err){
                error.value = err.message;
                console.log(error.value)
            }
        }

        return {logout,user};
        }
    }

</script>

<style>
    nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email{
        font-size: 14px;
        color: #999;
    }
    nav button{
        text-decoration: none;
        background: #5ae4ca;
        color: #fff;
        font-weight: bold;
        border: 0;
        border-radius: 20px;
        padding: 10px 20px;
    }
</style>