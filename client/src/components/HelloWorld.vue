<template>
    <div>
      <Row>
        <Col :xs="20" :sm="16" :md="12" :lg="14" offset="6">
          <div style="background:#eee;padding: 20px">
              <Card :bordered="false">
                  <h1 slot="title">Register</h1>
                  <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="Username/Email">
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
              </Card>
          </div>
        </Col>
      </Row>
    </div>
</template>
<script>
    import AuthenticationService from '@/services/AuthenticationService'
    export default {
        data () {
            return {
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
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(async (valid) => {
                    if (valid) {
                        console.log('handlesubmit', this.formInline.user)
                        await AuthenticationService.register({
                          email: this.formInline.user,
                          password: this.formInline.password
                        })
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
