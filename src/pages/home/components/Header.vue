<template>
  <div class="header">
    <div class="header-back">
      <div class="iconfont icon-back">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-search">&#xe632;</span>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <router-link to="/city">
      <div class="header-city">
        {{this.city}}
        <span class="iconfont icon-arrow">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  },
  data () {
    return {};
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
  @import "~dir_styles/variable.styl"
  .header
    display flex
    line-height $headerHeight
    background-color $bgColor
    margin-top 0
    padding 0
    color #ffffff
    .header-back
      width 0.64rem
      float left
      margin-left 0
      font-size 1rem
      display inline-block
      text-align center
    .header-input
      flex 1
      color $placeholderColor
      background-color #ffffff
      border-radius 0.1rem
      line-height .64rem // 好像是必须的吧，不然不能垂直居中
      height 0.64rem
      margin-top 0.11rem
      margin-left .2rem
      padding-left 0.2rem
      text-align left
      .icon-search
        padding-top 0
    .header-city
      min-width 1.04rem
      float right
      text-align center
      color #fff
      margin 0 .1rem
      .icon-arrow
        font-size .24rem
        margin-left -.05rem
</style>
