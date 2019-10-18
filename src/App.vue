<script>
export default {
  components: {}
}
</script>

<template>
  <div id="app">
    <router-view class="page-view"/>
  </div>
</template>

<style lang="less">
html, body {
    height: 100%;
    padding: 0;
    margin: 0;
}

#app {
  height: 100%;
}

.page-view {
  height: 100%;
}

/* source-code-pro-regular - latin
* Use for headers
*/

@font-face {
  font-family: 'Source Code Pro';
  font-style: normal;
  font-weight: 400;
  src: local('Source Code Pro'), local('SourceCodePro-Regular'),
       url('./assets/fonts/source-code-pro-v8-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('./assets/fonts/source-code-pro-v8-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* arapey-regular - latin
* Use for sub header
*/
@font-face {
  font-family: 'Arapey';
  font-style: normal;
  font-weight: 400;
  src: local('Arapey Regular'), local('Arapey-Regular'),
       url('./assets/fonts/arapey-v6-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('./assets/fonts/arapey-v6-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* nunito-sans-regular - latin
* Use for body
*/
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Nunito Sans Regular'), local('NunitoSans-Regular'),
       url('./assets/fonts/nunito-sans-v3-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('./assets/fonts/nunito-sans-v3-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

.link {
  color: black;
  cursor: pointer;
  text-decoration: none;

  &.no-hover:hover {
    color: inherit;
    background-color: inherit;
  }

  &:hover {
    color: white;
    background-color: black;

  }
}

</style>
