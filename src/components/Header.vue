<script>
export default {
  
}
</script>
<template>
<div class="row">
  <router-link class="header-links" to="/">Home</router-link>
  <router-link class="header-links" to="/about">About</router-link>
  <router-link class="header-links" to="/contact">Contact</router-link>
</div>
</template>
<style lang="less" scoped>
.row {
  display: flex;
  justify-content: space-evenly;

  .header-links {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }
}
</style>
