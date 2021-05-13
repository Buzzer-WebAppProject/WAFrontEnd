<template>
  <div class="app">

    <router-view/>

  </div>
</template>

<script>
import store from '@/store.js'

export default {
  data () {
    return store;
  },

  methods: {
    logout() {
      store.authenticated = false
    }
  }
}
</script>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
