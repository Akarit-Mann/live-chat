<template>
  <div class="container">
    <NavBar></NavBar>
    <ChatWindow></ChatWindow>
    <NewChatform></NewChatform>
  </div>
  
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewChatform from '../components/NewChatform'
import { watch } from '@vue/runtime-core'
import NavBar from '../components/NavBar'
import getuser from '../composable/getuser'
import {useRouter} from 'vue-router'
export default {
  components: {
    ChatWindow,
    NewChatform, NavBar },
  setup(props) {
    let {user} = getuser();
    let router = useRouter()
    watch(user,()=>{
      if(!user.value){
        router.push("/")
      }
    })
  }
}
</script>

<style>

</style>