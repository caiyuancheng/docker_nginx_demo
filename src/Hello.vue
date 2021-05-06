<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{text}}</p>
    <input type="text" v-model="msg" placeholder="请输入">
    <button @click="send(msg)">发送</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
      return {
        text: 'Hello docker and nginx!',
        msg: '', 
      }
  },
  methods: {
    send(msg) {
        if(!this.msg) return;
        axios.get('/api/json', {
            params: {
                msg
            }
        }).then(res => {
            this.text = res.data.data;
        }).catch( error => {
            console.log(error);
        });
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
