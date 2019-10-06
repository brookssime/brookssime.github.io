<script>
import linkedinIcon from '@/assets/img/linkedin.png'
import githubIcon from '@/assets/img/github.png'
import emailIcon from '@/assets/img/email.png'
import instagramIcon from '@/assets/img/instagram.png'
import twitterIcon from '@/assets/img/twitter.png'
export default {
  data () {
    return {
      linkedinIcon: linkedinIcon,
      githubIcon: githubIcon,
      emailIcon: emailIcon,
      instagramIcon: instagramIcon,
      twitterIcon: twitterIcon
    }
  }
}
</script>
<template>
<div>
  <div class="row">
    <a href="https://www.linkedin.com/in/brookssime" target="_blank">
      <img class="social-media" :src="linkedinIcon"/>
    </a>
    <a href="https://github.com/brookssime" target="_blank">
      <img class="social-media" :src="githubIcon"/>
    </a>
    <a href="https://instagram.com/brooksatrillion" target="_blank">
      <img class="social-media" :src="instagramIcon"/>
    </a>
    <a href="https://twitter.com/notacreek" target="_blank">
      <img class="social-media" :src="twitterIcon"/>
    </a>
    <a href="mailto:brookssime@gmail.com">
      <img class="social-media" :src="emailIcon"/>
    </a>
  </div>
  <div class="attribution">
    Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
  </div>
</div>
</template>
<style lang="less" scoped>
.row {
  display: flex;
  justify-content: center;

  .social-media {
    max-width: 15px;
    max-height: 15px;
    margin: 5px;
  }
}

.attribution {
  font-size: 10px;
  text-align: center;
  font-family: 'Arapey', serif;
}
</style>
