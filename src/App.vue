<template>
  <div id="app" ref="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import userInfo from '@/mixins/userInfo.js';

export default {
  name: 'App',
  mixins: [userInfo],
  data() {
    return {
      dataObj: {
        componentName: 'App component'
      }
    };
  },
  //provide App
  provide() {
    return {
      nameObj: this.dataObj,
      appComp: this
    };
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
