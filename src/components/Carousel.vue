<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showCarousel" ref="mySwiper">
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
        autoplay: {
          disableOnInteraction: false, // 触摸滑动后 autoplay 没反应
          delay: 1000,
        },
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

    carousel() {
      return this.$refs.mySwiper.swiper
    },
  },

  watch: {
    $route(newVal) { // 解决改变路由后 autoplay 失效
      if (newVal.name !== 'home') {
        this.carousel.autoplay.stop()
      } else {
        this.carousel.autoplay.start()
      }
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
