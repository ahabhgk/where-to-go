<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showCarousel">
      <!-- slides -->
      <swiper-slide v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  
  props: {
    carouselList: Array,
  },

  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },

  computed: {
    showCarousel() {
      return this.carouselList.length
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 31.25vw; // 防止 img 加载出来后的回流
  // height: 0;
  // overflow: hidden;
  // padding-bottom: 31.25%;
  img {
    width: 100%;
    height: 31.25vw;
  }
}
</style>
