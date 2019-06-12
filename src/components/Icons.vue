<template>
  <div class="icons-wrap">
    <swiper v-if="showPages">
      <swiper-slide v-for="page in pages" :key="page.pageId">
        <span class="icon" v-for="icon in page.icons" :key="icon.id">
          <img :src="icon.imgUrl" />
          <p>{{ icon.desc }}</p>
        </span>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',

  props: {
    iconList: Array,
  },

  computed: {
    pages() {
      const pages = []

      this.iconList.forEach((icon, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = {
            pageId: page,
            icons: [],
          }
        }
        pages[page].icons.push(icon)
      })

      return pages
    },

    showPages() {
      return this.pages.length
    },
  },
}
</script>

<style lang="scss" scoped>
.icons-wrap /deep/ .swiper-slide {
  display: flex;
  flex-wrap: wrap;
  height: 42vw;
}
.icons-wrap {
  padding: 3vw 0;
  width: 100vw;
  height: 44vw;
  .icon {
    width: 25vw;
    height: 22vw;
    text-align: center;
    font-size: 0;
    img {
      width: 14vw;
      height: 14vw;
      margin: 1vw auto;
    }
    p {
      font-size: 16px;
      height: 5vw;
      line-height: 5vw;
    }
  }
}
</style>
