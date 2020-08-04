<template>
  <div>
    <div class="city-search">
      <input
          class="search-input"
          placeholder="请输入城市或拼音"
          v-model="keyword"/>
    </div>
    <div ref="wrapper" class="search-list" v-if="showSearchItem">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of searchCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-if="showNoMatchItem">未找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  computed: {
    showNoMatchItem () {
      return !this.searchCities.length;
    },
    showSearchItem () {
      return this.keyword.length;
    }
  },
  data () {
    return {
      keyword: '',
      searchCities: [],
      timer: null
    };
  },
  methods: {
    handleChange () {
      this.searchCities = [];
      if (!this.keyword) {
        return;
      }
      for (let key in this.cities) {
        for (let item of this.cities[key]) {
          if (item.spell.indexOf(this.keyword) >= 0 ||
            item.name.indexOf(this.keyword) >= 0) {
            this.searchCities.push(item);
          }
        }
      }
      if (!this.searchCities) {
        // no match
      }
    },
    createBScroll () {
      if (!this.scroll) {
        console.log('new scroll');
        this.scroll = new BScroll(this.$refs['wrapper']);
      }
    },
    handleCityClick (city) {
      this.$router.push('/');
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.handleChange();
      }, 100);
    }
  },
  mounted () {
  },
  updated () {
    this.createBScroll();
  }
};
</script>

<style lang="stylus" scoped>
  @import "~dir_styles/variable.styl"
  .border-bottom
    &:before
      border-color #ccc
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
  .search-list
    z-index 1
    position absolute
    top 1.58rem
    bottom 0
    left 0
    right 0
    overflow hidden
    background-color #fff
    .search-item
      height .4rem
      line-height .4rem
      color #666
      padding-left .2rem
</style>
