<template>
  <div class="banner" @click="handleBannerClick">
    <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" />
    <div class="banner-tit">大连圣亚海洋世界(AAAA景区)</div>
    <Gallary :imgs="imgs" v-show="showGallary" @closeGallary="handleGallaryClose" />
  </div>
</template>

<script>
import Gallary from '@/components/Gallary.vue'

export default {
  name: 'Banner',

  components: {
    Gallary,
  },

  data() {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
    }
  },

  methods: {
    handleBannerClick() {
      this.showGallary = true
    },

    handleGallaryClose() {
      this.showGallary = false
    },
  },
}
</script>

<style lang="scss" scoped>
.banner {
  height: 55vw;
  position: relative;
  img {
    width: 100vw;
    height: 55vw;
  }
  .banner-tit {
    width: 100vw;
    line-height: 10vw;
    text-indent: 5vw;
    color: rgba($color: #fff, $alpha: .6);
    position: absolute;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
  }
}
</style>
