import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(currentUser => {
    console.log(`User state has changed. Current user is ${currentUser}`)
    user.value = currentUser
})

export { user }