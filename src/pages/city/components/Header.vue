<template>
  <div class="city-header">
    <router-link to="/">
      <div class="iconfont city-back">&#xe624;</div>
    </router-link>
    <div class="city-title">
      <span>城市选择</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CityHeader'
};
</script>

<style lang="stylus" scoped>
  @import "~dir_styles/variable.styl"
  .city-header
    position relative
    .city-back
      position absolute
      color #fff
      height $headerHeight
      line-height $headerHeight
      margin-left .2rem
    .city-title
      width 100%
      text-align center
      color white
      font-size .35rem
      height $headerHeight
      line-height $headerHeight
      background-color $bgColor
</style>
