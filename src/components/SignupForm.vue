<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { error, signup } from '../composables/useSignup'

export default {
    setup(props, {emit}) {
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async() => {
            await signup(email.value, password.value, displayName.value)

            if (!error.value) {
              emit('signup')
            }
        }

        return { displayName, email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>