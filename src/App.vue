<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    mounted() {
      localStorage.data = localStorage.data || [];
    }
  }
</script>
<style lang="scss">
  #app{
    padding: 10px;
  }
</style>
