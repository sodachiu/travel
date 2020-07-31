<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl">
          </div>
          <p class="icon-desc">{{icon.iconDesc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: iconsList,
      swiperOption: {
        loop: true
      }
    };
  },
  methods: {
  },
  computed: {
    pages () {
      let pages = [];
      this.iconsList.forEach((item, index) => {
        let page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};

let iconsList = [
  {
    id: '0001',
    imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
    iconDesc: '热门景点'
  }, {
    id: '0003',
    imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
    iconDesc: ''
  }, {
    id: '0004',
    imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
    iconDesc: 'sdjfadlfjladfjladjfladjlfasjd'
  }, {
    id: '0005',
    imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
    iconDesc: ''
  }, {
    id: '0006',
    imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
    iconDesc: ''
  }, {
    id: '0007',
    imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
    iconDesc: ''
  }, {
    id: '0008',
    imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
    iconDesc: ''
  }, {
    id: '0009',
    imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
    iconDesc: ''
  }
];
</script>

<style lang="stylus" scoped>
  @import "~dir_styles/variable.styl"
  @import "~dir_styles/mixins.styl"
  .icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 50%
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
