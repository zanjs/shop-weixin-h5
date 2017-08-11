<template>
  <div id="app">
    <my-index></my-index>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #3d3d3d;
}
</style>
