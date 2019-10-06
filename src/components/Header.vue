<script>
export default {
  data () {
    return {
      headerLinks: [
        {to: '/work', text: 'Work'},
        {to: '/about', text: 'About'},
        {to: '/contact', text: 'Contact'}
      ]
    }
  },
  methods: {
    isActive (linkDestination) {
      return this.$route.path === linkDestination
    }
  }

}
</script>
<template>
<div>
 <div class="title">
   <router-link class="link no-hover" to="/">Brooks Sime</router-link>
 </div>
  <div class="row">
    <div v-for="link in headerLinks" :key="link" :class="{'active-link': isActive(link.to)}">
      <router-link class="link" :to="link.to">{{ link.text }}</router-link>
    </div>
  </div>
</div>
</template>
<style lang="less" scoped>
.title {
  width: 100%;
  text-align: center;
  font-family: 'Source Code Pro', sans-serif;
  font-weight: bold;
  font-size: 24px;
}

.row {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  font-size: 16px;
  font-family: 'Arapey', serif;
  margin: 0 auto;
  width: 50%;

  .active-link {
    border-bottom: 2px solid black;
  }
}
</style>
