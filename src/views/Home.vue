<template>
  <div>
    <home-header />
    <home-swiper :list="swiperList" />
    <home-icons :list="iconList"/>
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script>
import HomeHeader from '../components/home/Header';
import HomeSwiper from '../components/home/Swiper';
import HomeIcons from '../components/home/Icons';
import HomeRecommend from '../components/home/Recommend';
import HomeWeekend from '../components/home/Weekend';

import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    HomeWeekend,
    HomeRecommend,
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  computed: {
    ...mapState(['city'])
  },
  data () {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
      lastCity: ''
    };
  },
  methods: {
    getHomeData () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeDataSuc);
    },
    getHomeDataSuc (res) {
      res = res.data;
      console.log(res);
      if (res.ret && res.data) {
        res = res.data;
        this.iconList = res.iconList;
        this.recommendList = res.recommendList;
        this.swiperList = res.swiperList;
        this.weekendList = res.weekendList;
      }
    }
  },
  mounted () {
    this.getHomeData();
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeData();
    }
  }
};
</script>

<style scoped>

</style>
