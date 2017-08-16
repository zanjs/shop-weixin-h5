<template>
  <!-- <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../assets/banner/banner1.jpg">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div> -->
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- 幻灯内容 -->
    <swiper-slide> <img src="../../assets/banner/banner1.jpg"></swiper-slide>
    <swiper-slide> <img src="../../assets/banner/banner1.jpg"></swiper-slide>
    <!-- 以下控件元素均为可选 -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"  slot="scrollbar"></div>
</swiper>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default{
    data () {
      return {
        swiperOption: {
           // 所有配置均为可选（同Swiper配置）
          autoplay: 3000,
          pagination: '.swiper-pagination',
          prevButton: '.swiper-button-prev',
          direction: 'horizontal',
          nextButton: '.swiper-button-next'
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="scss">
.swiper-wrapper{
  display: flex;
}
.swiper-container{
  width: 750px;
  height: 450px;
  border: 1px solid red;
  display: inline-block;
  .swiper-slide{
    width: 750px;
    height: 450px;
    img{
     width: 750px;
     height: 450px;
    }
  }
}
</style>
