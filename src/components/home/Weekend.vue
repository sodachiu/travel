<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div class="weekend-item border-bottom" v-for="item of list" :key="item.id">
      <div class="weekend-wrapper">
        <img class="weekend-img" :src="item.imgUrl" alt="">
      </div>
      <p class="weekend-title">{{item.title}}</p>
      <p class="weekend-desc">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {};
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
  @import "../../assets/styles/variable.styl"
  @import "../../assets/styles/mixins.styl"
  .title
    moduleTitle()
  .weekend-item
    height 2.84rem
    padding .1rem
    .weekend-wrapper
      overflow hidden
      width 100%
      height 0
      padding-bottom 27%
    .weekend-title
      color black
      margin-top .1rem
      ellipsis()
    .weekend-desc
      margin-top .05rem
      ellipsis()
</style>
