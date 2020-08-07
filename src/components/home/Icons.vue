<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: false
      }
    };
  },
  methods: {
  },
  computed: {
    pages () {
      let pages = [];
      this.list.forEach((item, index) => {
        let page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
    showSwiper () {
      return (this.list.length !== 0);
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import "../../assets/styles/variable.styl"
  @import "../../assets/styles/mixins.styl"
  .icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 50%
    margin-top .1rem
    .icon
      position: relative
      float left
      overflow hidden
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        left 0
        right 0
        bottom .44rem
        top 0
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          height 100%
          margin 0 auto
      .icon-desc
        position absolute
        bottom 0
        width 100%
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipsis()
</style>
