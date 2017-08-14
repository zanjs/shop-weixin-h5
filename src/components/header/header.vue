<template>
  <iscroll-view ref="scrollView" class="scroll-view header-tabs-area" :options="{click: true, scrollX: true}" :scrollerClass="{'scroller':true}">
      <ul class="tabs">
        <li v-for="(item, index) in tabs" :class="{'active':index===currentIndex}"  class="tab-item" :key="item.id" @click="getCurrentIndex(index)">{{item.name}}</li>
      </ul>
  </iscroll-view>
</template>
<script>
  export default {
    data () {
      return {
        currentIndex: 0,
        tabs: [
          {
            name: '热卖'
          },
          {
            name: '小米华为'
          },
          {
            name: '日本直邮'
          },
          {
            name: '爆款零食'
          },
          {
            name: '超级卖场'
          },
          {
            name: '京东商城'
          },
          {
            name: '小家电'
          }
        ]
      }
    },
    mounted () {
      this.$refs.scrollView.refresh()
    },
    methods: {
      getCurrentIndex (index) {
        this.currentIndex = index
      }
    }
  }

</script>
<style lang="scss"  rel="stylesheet/scss">
@import "../../common/scss/var.scss";
  .header-tabs-area{
      touch-action: none;
      background-color: #fff;
      -webkit-transform:translate3d(0,0,0);
      overflow: hidden;
      .scroller, ul.tabs{
        display: inline-flex;
        height: 80px;
        align-items: center;
        padding: 0 20px; 
        .tab-item{
          width: 100%;
          text-align: center;
          position: relative;
          height: 100%;
          line-height: 80px;
          font-size: 26px;
          color: #666;
          white-space: nowrap;
          margin: 0px 20px;
          &.active{
            color: $color;
            &:after {
              position: absolute;
              bottom: 0;
              display: block;
              content: '';
              width: 100%;
              height: 4px;
              background: red;

            }
          }
          &:nth-last-child(1){
            margin-right: 0;
          }

        }
      }
  }
</style>
