<template>
  <div>
    <h1>Register</h1>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
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
        password: '',
        formInline: {
            user: '',
            password: ''
        },
        ruleInline: {
            user: [
                { required: true, message: 'Please fill in the user name', trigger: 'blur' }
            ],
            password: [
                { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
            ]
        }
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
      },
      handleSubmit(name) {
          this.$refs[name].validate((valid) => {
              if (valid) {
                  this.$Message.success('Success!');
              } else {
                  this.$Message.error('Fail!');
              }
          })
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
