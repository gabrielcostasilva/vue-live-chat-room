<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { user } from "../composables/getUser";
import NewChatForm from "../components/NewChatForm";
import ChatWindow from "../components/ChatWindow";

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.user = user
  },
  watch: {
    user: function () {
      if (!this.user) {
        this.$router.push({ name: "Welcome" });
      }
    },
  },
};
</script>

<style>
</style>