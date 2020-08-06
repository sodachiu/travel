<template>
  <div>
    <detail-banner
        :bannerImg="bannerImg"
        :sightName="sightName"
        :galleryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header />
    <div class="content">
      <detail-list :list="categoryList"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';
import CommonFadeAnimation from 'common/animation/fade/Fade';

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    CommonFadeAnimation
  },
  data () {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: [],
      categoryList: []
    };
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc);
    },
    getDetailInfoSucc (result) {
      result = result.data;
      if (result.ret && result.data) {
        const data = result.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.categoryList = data.categoryList;
      }
    }
  },
  mounted () {
    this.getDetailInfo();
  }
};
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
