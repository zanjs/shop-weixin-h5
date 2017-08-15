<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './components/index/index'

export default {
  name: 'app',
  components: {
    MyIndex: Index
  }
}
</script>

<style lang="scss">
body{
  background: #f5f5f5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #3d3d3d;
  background: #f5f5f5;
}
</style>
