<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import imgUrl0 from '@/assets/img/fh3.jpg'
import imgUrl1 from '@/assets/img/images.jpeg'
import imgUrl2 from '@/assets/img/roadster-space.jpg'
import imgUrl3 from '@/assets/img/SpaceX.png'

export default {
  name: 'Carousel',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
      },
      swiperList: [
        {
          id: 0,
          imgUrl: imgUrl0,
        },
        {
          id: 1,
          imgUrl: imgUrl1,
        },
        {
          id: 2,
          imgUrl: imgUrl2,
        },
        {
          id: 3,
          imgUrl: imgUrl3,
        },
      ],
    }
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
