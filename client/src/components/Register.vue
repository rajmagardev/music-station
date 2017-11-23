<template>
  <div>
    <h1>Register</h1>
    <input
      type="text"
      name="email"
      v-model="email"
      placeholder="Enter Email...">
      <br>
      <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Enter Password...">
      <br>
      <button
        @click="register"
      >Register</button>
  </div>
</template>
<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    // watch: {
    //   email (value) {
    //     console.log('email has changed', value)
    //   }
    // },
    methods: {
      async register() {
        const res = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log('register button was clicked', res.data)
      }
    }
    // mounted () {
    //   setTimeout(() => {
    //     this.email = "hello world"
    //   }, 2000)
    // }
  }
</script>
<style>

</style>
