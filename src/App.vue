<template>
  <div id="app">
        <router-link :to="'/'" style="margin-right:20px;">Hello</router-link>
        <router-link :to="'/Home'">Home</router-link>
    <router-view/>
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
