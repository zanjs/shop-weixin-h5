<template>
  <div>
    <myHead></myHead>
    <Swipe></Swipe>
    <List></List>
    <Split></Split>
    <Foot></Foot>
  </div>
</template>
<script>
  import myHead from '../header/header'
  import Split from '../split/split.vue'
  import Foot from '../footer/footer.vue'
  import Swipe from '../swipe/swipe.vue'
  import List from '../product/list.vue'
  export default {
    components: {
      myHead,
      Split,
      Foot,
      Swipe,
      List
    }

  }

</script>
<style scoped lang="scss" rel="stylesheet/scss">


</style>
