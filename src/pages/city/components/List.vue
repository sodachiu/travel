<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="list-title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="list-title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="list-title border-topbottom">{{key}}</div>
        <div class="item-list"
             v-for="city of item"
             :key="city.id"
             @click="handleCityClick(city.name)"
        >
          <div class="item border-bottom">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    ...mapActions(['changeCity']),
    handleCityClick (city) {
      this.changeCity(city);
      this.$router.push('/');
    }
  },
  watch: {
    letter () {
      this.scroll.scrollToElement(this.$refs[this.letter][0]);
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
  @import "~dir_styles/variable.styl"
  @import "~dir_styles/mixins.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    right 0
    bottom 0
    left 0
    .area
      .list-title
        moduleTitle()
      .button-list
        padding .1rem .6rem .1rem .1rem
        overflow hidden
        .button-wrapper
          width 33.33%
          float left
          .button
            padding .1rem
            margin .1rem
            text-align center
            border-radius .06rem
            border .02rem solid #ccc
      .item-list
        .item
          line-height .76rem
          padding-left .2rem
</style>
