<template>
  <div id="app">
    <keep-alive exclude="Detail, CitySearch">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

