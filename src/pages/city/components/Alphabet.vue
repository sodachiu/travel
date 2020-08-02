<template>
  <div class="item-list">
    <ul>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
};
</script>

<style lang="stylus" scoped>
  @import "~dir_styles/variable.styl"
  .item-list
    display flex
    flex-direction column
    justify-content center
    position: absolute;
    top 0
    right 0
    bottom 0
    width .4rem
    height 100%
    .item
      line-height .4rem
      color $bgColor
      text-align center
</style>
