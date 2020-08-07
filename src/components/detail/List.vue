<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div class="list border-bottom">{{item.title}}</div>
      <div class="list-child">
        <detail-list v-if="item.children" :list="item.children">
        </detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
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
  .border-bottom
    &:before
      border-color #333333
  .list
    moduleTitle()
  .list-child
    padding-left .2rem
</style>
