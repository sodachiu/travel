<template>
  <div>
    <div class="detail-banner" @click="showSwiper">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-img-icon">&#xe63d;</span>
          1
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
          v-show="isShowSwiper"
          :imgList="galleryImgs"
          @close="closeGallery"
      />
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from '../../common/gallery/Gallery';
import FadeAnimation from '../../common/animation/fade/Fade';
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  data () {
    return {
      isShowSwiper: false,
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    };
  },
  methods: {
    showSwiper () {
      this.isShowSwiper = true;
    },
    closeGallery () {
      this.isShowSwiper = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
  .detail-banner >>> .swiper-pagination
    bottom -2rem
    color white
  .detail-banner
    position relative
    overflow hidden
    width 100%
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      right 0
      bottom 0
      left 0
      line-height .6rem
      background-image linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      color white
      padding 0 .2rem
      .banner-title
        flex 1
      .banner-number
        padding 0 .3rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        background-color rgba(0, 0, 0, 0.8)
        margin-top .14rem
        .banner-img-icon
          font-size .24rem
</style>
