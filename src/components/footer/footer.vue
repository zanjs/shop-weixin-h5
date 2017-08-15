<template>
  <div class="footer-tab">
    <div class="tab-item">
      <router-link :to="{ path: '/index'}" class="tab-item-link"> <i class="iconfont">&#xe608;</i>首页 </router-link>
    </div>
    <div class="tab-item">
      <router-link :to="{ path: '/order'}" class="tab-item-link"><i class="iconfont">&#xe620;</i>我的订单</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/mine" class="tab-item-link"><i class="iconfont">&#xe640;</i>我的</router-link>
    </div>
  </div>
  
</template>
<script>
  require('../../common/font/iconfont.css')
  export default{

  }
</script>
<style lang="scss" scoped>
.footer-tab{
  width: 100%;
  height: 100px;
  border-top: 1px solid #eee;
  background: #fff;
  position: fixed;
  left:0;
  right: 0px;
  bottom: 0px;
  font-size: 0;
  .tab-item{
    width: 33%;
    height: 100%;
    display: inline-block;
    text-align: center;
    .iconfont{
      padding-top: 5px;
      display: block;
      font-size: 36px;
    }
    &-link{
      font-size: 24px;
      color:#666;
      &.active{
        color:#a4d641;
      }
    }
  }
}
</style>

