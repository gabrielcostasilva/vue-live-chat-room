<template>
  <nav>
      <div>
          <p>Hey there ...</p>
          <p class="email">Currently logged in as ...</p>
      </div>
      <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import { error, logout } from '../composables/useLogout'

export default {
  setup() {
    const handleClick = async() => {
      await logout()

      if (!error.value) {
        console.log('User logged out')
      }
    }

    return {handleClick}
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
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>