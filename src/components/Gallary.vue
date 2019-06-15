<template>
  <div class="gallary" @click.stop="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(img, index) in imgs" :key="index">
          <img :src="img" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',

  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    },
  },

  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        observer:true,
        observeParents:true,
      },
    }
  },

  methods: {
    handleGallaryClick() {
      this.$emit('closeGallary')
    },
  },
}
</script>

<style lang="scss" scoped>
.gallary {
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  img {
    width: 100vw;
  }
  .wrapper /deep/ .swiper-container {
    overflow: inherit;
  }
  .swiper-pagination {
    color: #fff;
    bottom: -16vw;
  }
}
</style>
