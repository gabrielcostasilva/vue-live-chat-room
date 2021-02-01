<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import { user } from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import NewChatForm from '../components/NewChatForm'
import ChatWindow from '../components/ChatWindow'

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>

</style>