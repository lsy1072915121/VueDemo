<template>
  <div class="login-bg">
    <div id="login">
      <login-input style="float: left;margin-left: 40px;"></login-input>
    </div>
  </div>
</template>

<script>

import LoginInput from '../components/login-input'

export default {
  name: 'login',
  components: {LoginInput},
  data () {
    return {
    }
  },
  methods:{

  }
}

</script>

<style scoped>
  .login-bg{
    width: 100%;
    height: 100%;
  }
  #login {
    width: 400px;
    height: 300px;
    margin: auto;
    background: aliceblue;
    border-radius: 8px;
    top: 30%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
</style>
