<template>
  <div>
    <div class="city-search">
      <input
          class="search-input"
          placeholder="请输入城市或拼音"
          v-model="keyword"/>
    </div>
    <div ref="wrapper" class="search-list" v-show="showSearchItem">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of searchCities"
            :key="item.id"
            @click.prevent="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="showNoMatchItem">未找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapActions } from 'vuex';
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
      const result = [];
      for (let key in this.cities) {
        this.cities[key].forEach((value) => {
          if (value.spell.indexOf(this.keyword) >= 0 ||
            value.name.indexOf(this.keyword) >= 0) {
            result.push(value);
          }
        });
      }
      this.searchCities = result;
    },
    handleCityClick (city) {
      this.changeCity(city);
      this.keyword = '';
      console.log('keyword: ' + this.keyword);
      this.$router.push('/');
    },
    ...mapActions(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.searchCities = [];
        return;
      }
      this.timer = setTimeout(() => {
        this.handleChange();
      }, 100);
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs['wrapper'], {
      click: true
    });
  },
  deactivated () {
    this.keyword = '';
  },
  destroyed () {
    console.log('des');
  }
};
</script>

<style lang="stylus" scoped>
  @import "../../assets/styles/variable.styl"
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
