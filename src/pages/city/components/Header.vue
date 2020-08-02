<template>
  <div class="city-header">
    城市选择
    <router-link to="/">
      <div class="iconfont city-back">&#xe624;</div>
    </router-link>
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
    text-align center
    background-color $bgColor
    height $headerHeight
    line-height $headerHeight
    color white
    font-size .32rem
    .city-back
      position absolute
      top 0
      color #fff
      margin-left .2rem
</style>
