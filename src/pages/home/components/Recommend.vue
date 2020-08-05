<template>
  <div>
    <div class="title">推荐景点</div>
    <router-link tag="div"
                 :to="'/detail/' + item.id"
                 class="recommend-item border-bottom"
                 v-for="item of list"
                 :key="item.id"
    >
      <img class="recommend-img" :src="item.imgUrl" />
      <div class="recommend-info">
        <p class="recommend-title">{{item.title}}</p>
        <p class="recommend-desc">{{item.desc}}</p>
        <button class="recommend-btn">查看详情</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {};
  },
  methods: {
    handleItemClick (id) {
      this.$router.push('/detail/' + id);
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import "~dir_styles/mixins.styl"
  @import "~dir_styles/variable.styl"
  .title
    moduleTitle()
  .recommend-item
    display flex
    height 1.66rem
    width 100%
    padding .1rem
    .recommend-img
      width 1.64rem
      height 1.64rem
    .recommend-info
      flex 1
      margin 0 .2rem
      min-width 0
      .recommend-title
        color black
        ellipsis()
      .recommend-desc
        margin-top .2rem
        ellipsis()
      .recommend-btn
        margin-top .2rem
        color white
        background-color coral
        border-radius .06rem
        padding 0 .1rem
</style>
