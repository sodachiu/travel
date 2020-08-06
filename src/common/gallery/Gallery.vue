<template>
  <div class="gallery" @click="handleGalleryClick">
    <div class="wrapper">
    <swiper class="gallery-swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in imgList"
                    :key="index">
        <img class="gallery-img" :src="item">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close');
    }
  },
  mounted () {
    console.log(this.imgList);
  }
};
</script>

<style lang="stylus" scoped>
  .gallery >>> .swiper-container
    overflow inherit
  .gallery
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-color #000
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      color #ffffff
      .gallery-img
        width 100%
      .swiper-pagination
        bottom -1rem
</style>
