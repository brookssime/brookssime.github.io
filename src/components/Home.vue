<script>
export default {

}
</script>
<template>
 <div class="home-page">
   <div class="half-black">
     <div class="name-spacer"></div>
     <div>Brooks</div>
   </div>
   <div class="half-white">
     <div>Sime</div>
   </div>
 </div>
</template>
<style lang="less" scoped>

.home-page {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Source Code Pro';
  font-size: 128px;

  .half-black {
    background-color: #000000;
    color: #ffffff;
    width: 100%;
    height: 50%;

    .name-spacer {
      height: 50%;
    }
  }

  .half-white {
    width: 100%;
    height: 50%;
  }
}
</style>
