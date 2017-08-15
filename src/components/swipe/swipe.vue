<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../assets/banner/banner1.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../assets/banner/banner1.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../assets/banner/banner1.jpg">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
          onSlideChangeEnd: function (swiper) {
            console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
.swiper-wrapper{
  margin-top: 20px;
  img{
    width: 750px;
    height: 450px;
  }
}
</style>
