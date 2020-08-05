<template>
  <div>
    <div class="detail-banner" @click="showSwiper">
      <router-link tag="span"
                   to="/"
                   class="iconfont banner-back-icon">&#xe624;</router-link>
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        {{sightName}}
        <div class="img-icon-wrapper">
        <span class="iconfont banner-img-icon">&#xe624;</span>
        <span class="img-number">1张</span>
        </div>
      </div>
    </div>
    <div class="swiper-wrapper" v-show="isShowSwiper">
      <swiper class="banner-swiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide class="detail-banner">
          <img class="banner-img" :src="bannerImg" @click="showSwiper">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String
  },
  data () {
    return {
      isShowSwiper: false,
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    };
  },
  methods: {
    showSwiper () {
      this.isShowSwiper = !this.isShowSwiper;
    }
  }
};
</script>

<style lang="stylus" scoped>
  .detail-banner
    position relative
    overflow hidden
    width 100%
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      box-sizing border-box
      position absolute
      display float
      width 100%
      height .4rem
      line-height .4rem
      bottom .2rem
      color white
      padding 0 .2rem
      .img-icon-wrapper
        float right
        .banner-img-icon
          font-size .12rem
    .banner-back-icon
      position: absolute;
      top .2rem
      left .2rem
      width .8rem
      height .8rem
      line-height .8rem
      border-radius .4rem
      background-color rgba(0, 0, 0, 0.6)
      color white
      text-align center
      font-size .32rem
  .swiper-wrapper
    z-index 99
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    background-color #000
    .banner-swiper
      overflow hidden
      height 100%
      line-height 100%
</style>
