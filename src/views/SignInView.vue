<template>
  <body class="container-fluid view-height">
    <form class="row flex-column align-items-center">
      <div class="my-3 col-6">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" v-model="userInput.email" aria-describedby="emailHelp">
      </div>
      <div class="mb-3 col-6">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="userInput.password">
      </div>
      <div class="col-12 d-flex justify-content-center mb-5">
        <button @click="loginToFireBase()" type="button" class="btn btn-primary">Login</button>
      </div>
    </form>
  </body>
</template>

<script>
// Firebase
import { useFirebaseAuth, useFirestore } from "vuefire"
import { signInWithEmailAndPassword } from "@firebase/auth"
// Vue
import { ref } from "vue"
import { useRouter } from "vue-router"
export default {
  setup() {
    const router = useRouter()
    const userInput = ref({
      email: '',
      password: ''
    })

    const auth = useFirebaseAuth();
    const db = useFirestore()
    return {
      userInput,
      async loginToFireBase() {
        // @ts-ignore
        signInWithEmailAndPassword(auth, userInput.value.email, userInput.value.password)
          .then((userCredential) => {
            const user = userCredential.user;
            userInput.value.email = ''
            userInput.value.password = ''
            router.push({ name: 'home' })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
              return
            }
          });
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.view-height {
  height: 60vh;
}
</style>