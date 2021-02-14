<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { error, login } from '../composables/useLogin'

export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      async handleSubmit() {
          await login(this.email, this.password)

          if (!this.error) {
            this.$emit('login')
          }
        }
    },
}
</script>

<style>
</style>