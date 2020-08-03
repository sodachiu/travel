<template>
  <div>
    <city-header />
    <city-search />
    <city-list :city="city" :cities="cities" :hotCities="hotCities" />
    <city-alphabet :cities="cities"/>
  </div>
</template>

<script>
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphabet from './components/Alphabet';

import Axios from 'axios';
export default {
  name: 'City',
  components: {
    CityAlphabet,
    CityHeader,
    CitySearch,
    CityList
  },
  data () {
    return {
      city: '',
      cities: {},
      hotCities: []
    };
  },
  methods: {
    getCityInfo () {
      Axios.get('/api/city.json')
        .then(this.getCityInfoSucc);
    },
    getCityInfoSucc (result) {
      result = result.data;
      if (result.ret && result.data) {
        const data = result.data;
        this.city = data.city;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    }
  },
  mounted () {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>
