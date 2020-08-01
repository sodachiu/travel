<template>
  <div>
    <home-header :city="city" />
    <home-swiper :list="swiperList" />
    <home-icons :list="iconList"/>
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';

import axios from 'axios';

export default {
  name: 'Home',
  components: {
    HomeWeekend,
    HomeRecommend,
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  data () {
    return {
      city: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    };
  },
  methods: {
    getHomeData () {
      axios.get('/api/index.json')
        .then(this.getHomeDataSuc);
    },
    getHomeDataSuc (res) {
      res = res.data;
      console.log(res);
      if (res.ret && res.data) {
        res = res.data;
        this.city = res.city;
        this.iconList = res.iconList;
        this.recommendList = res.recommendList;
        this.swiperList = res.swiperList;
        this.weekendList = res.weekendList;
      }
    }
  },
  mounted () {
    this.getHomeData();
  }
};
</script>

<style scoped>

</style>
