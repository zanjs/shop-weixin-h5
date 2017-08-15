<template>
  <div class="split">
    <div class="split-font">我可是有底线的</div>
  </div>
</template>
<script>
  export default {

  }

</script>
<style lang="scss" scoped>
  @import "../../common/scss/var.scss";
  .split {
    width: 100%;
    height: 80px;
    line-height: 80px;
    padding: 0px 40px;
    text-align: center;
    position: relative;
    &-font {
      font-size: 26px;
      color: #999;
      background-color: $bgc;
      padding: 0px 10px;
      z-index: 2;
      &::before,
      &::after {
        background: #dbdbdb;
        content: "";
        height: 1px;
        position: absolute;
        top: 50%;
        width: 30%;
      }
      &::before {
        left: 40px;
      }
      &::after {
        right: 40px;
      }
    }
  }

</style>
