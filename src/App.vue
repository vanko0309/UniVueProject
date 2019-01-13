<template>
  <div id="app" class="h-100">
    <navigation></navigation>
    <router-view name="navigation"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from './components/navigation/Navigation';

  export default {
    name: 'App',
    components: {
      Navigation,
    },
  };
</script>

<style scoped>

</style>
