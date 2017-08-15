<template>
<div class="product-list">
  <ul>
    <li>
      <img src="../../assets/goods/list1.jpg" class="image" alt="">
      <div class="title">EVENT&VILLAGE【自助售票】,全澳通用，不限影片，即买即用</div>
      <div class="info">
        <span class="info-money">$49.90</span>
        <span class="info-group-buy">1人团</span>
      </div>
    </li>
    <li>
       <img src="../../assets/goods/list2.jpg" class="image" alt="">
      <div class="title">全澳洲包邮，小米手环2</div>
      <div class="info">
        <span class="info-money">$49.90</span>
        <span class="info-group-buy">1人团</span>
      </div>
    </li>
  </ul>
 
</div>
</template>
<script>
  export default{
    components: {
    }

  }
</script>
<style lang="scss" scoped>
@import '../../common/scss/var.scss';
.product-list{
  padding: 10px 10px;
  ul{
    overflow: hidden;
    li{
      width: 360px;
      height: 515px;
      background-color: #fff;
      display: block;
      float: left;
      margin-right: 10px;
      &:nth-child(2n){
        margin-right: 0px;
      }
      .image{
        width: 360px;
        height: 360px;
      }
      .title{
        height: 80px;
        font-size: 28px;
        color:#333;
        overflow: hidden;
        padding: 5px;
      }
      .info{
        font-size: 28px;
        padding: 10px 5px;
        display: flex;
        justify-content:space-between;
        &-money{
          color:$color;
        }
        &-group-buy{
          color:#c8c8c8;
        }
      }
    }
  }
}
</style>
