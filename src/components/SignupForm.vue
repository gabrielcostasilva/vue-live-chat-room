<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { error, signup } from "../composables/useSignup";

export default {
  created() {
    this.error = error
  },
  data() {
    return {
      displayName: "",
      email: "",
      password: "",
      error: {}
    };
  },
  methods: {
    async handleSubmit() {
      await signup(this.email, this.password, this.displayName);

      if (!this.error) {
        this.$emit("signup");
      }
    },
  },
};
</script>

<style>
</style>