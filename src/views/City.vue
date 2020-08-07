<template>
  <div>
    <city-header />
    <city-search :cities="cities" />
    <city-list :city="city" :cities="cities" :hotCities="hotCities" :letter="letter"/>
    <city-alphabet :cities="cities" @letterChange="handleLetterChange" />
  </div>
</template>

<script>
import CityHeader from '../components/city/Header';
import CitySearch from '../components/city/Search';
import CityList from '../components/city/List';
import CityAlphabet from '../components/city/Alphabet';

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
      hotCities: [],
      letter: ''
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
    },
    handleLetterChange (letter) {
      console.log('hello: ' + letter);
      this.letter = letter;
    }
  },
  mounted () {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>
