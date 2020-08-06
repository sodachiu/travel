<template>
  <div class="header">
    <router-link tag="span"
                 to="/"
                 class="iconfont banner-back-icon"
                 v-show="showAbs"
    >
      &#xe624;
    </router-link>
    <div class="header-title" :style="opacityStyle" v-show="!showAbs">
      景点详情
      <router-link to="/">
        <div class="iconfont detail-back">&#xe624;</div>
      </router-link></div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      opacityStyle: {
        opacity: 0
      },
      showAbs: true,
      timer: null
    };
  },
  methods: {
    handleScroll () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const scrollY = document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.offsetTop; // make the project compatible with different browsers and terminals
        if (scrollY > 140) {
          this.opacityStyle.opacity = 1;
          return;
        }
        if (scrollY > 70) {
          this.showAbs = false;
          this.opacityStyle.opacity = scrollY / 140;
        } else {
          this.showAbs = true;
          this.opacityStyle.opacity = 0;
        }
      }, 8);
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
  @import "~dir_styles/variable.styl"
  .header
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
    .header-title
      z-index 2
      position fixed
      top 0
      width 100%
      height $headerHeight
      line-height $headerHeight
      padding 0 .2rem
      background-color $bgColor
      color #ffffff
      text-align center
      .detail-back
        position absolute
        top 0
        color #fff
        margin-left .2rem
</style>
