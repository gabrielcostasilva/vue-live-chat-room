<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script>
import { user } from "../composables/getUser";
import { timestamp } from "../firebase/config";
import useCollection from '../composables/useCollection'

export default {
  created() {
    const { addDoc, error } = useCollection('messages')
    this.error = error
    this.addDoc = addDoc
  },
  data() {
    return {
      message: '',
      error: {},
      addDoc: function(){}
    }
  },
  methods: {
    async handleSubmit() {
      const chat = {
        name: user.value.displayName,
        message: this.message,
        createdAt: timestamp()
      }
      
      await this.addDoc(chat)

      if (!this.error) {
        this.message = ''
      }
    }
  },
}
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
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