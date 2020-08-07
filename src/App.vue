<template>
  <div id="app">
    <keep-alive :exclude="comp">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      comp: [
        'Detail',
        'CitySearch'
      ]
    }
  }
};
</script>

