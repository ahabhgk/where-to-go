<template>
  <div class="banner" @click="handleBannerClick">
    <img :src="bannerImg" />
    <div class="banner-tit">{{ title }}</div>
    <AnimationFade>
      <Gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @closeGallary="handleGallaryClose"
      />
    </AnimationFade>
  </div>
</template>

<script>
import Gallary from '@/components/Gallary.vue'
import AnimationFade from '@/components/AnimationFade.vue'

export default {
  name: 'Banner',

  components: {
    Gallary,
    AnimationFade,
  },

  props: {
    title: String,
    bannerImg: String,
    gallaryImgs: Array,
  },

  data() {
    return {
      showGallary: false,
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
