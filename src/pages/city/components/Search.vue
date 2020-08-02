<template>
  <div class="city-search">
    <input class="search-input" placeholder="请输入城市或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
};
</script>

<style lang="stylus" scoped>
  @import "~dir_styles/variable.styl"
  .city-search
    background-color $bgColor
    height .72rem
    line-height .72rem
    padding 0 .1rem
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      border-radius .06rem
      padding 0 .1rem
      text-align center
      color #333333
</style>
