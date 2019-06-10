<template>
  <div class="icons-wrap">
    <swiper>
      <swiper-slide v-for="page in pages" :key="page.pageId">
        <span class="icon" v-for="icon in page.icons" :key="icon.id">
          <img :src="icon.iconUrl" />
          <p>{{ icon.info }}</p>
        </span>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import iconUrl0 from '@/assets/img/icon0.png'
import iconUrl1 from '@/assets/img/icon1.png'
import iconUrl2 from '@/assets/img/icon2.png'
import iconUrl3 from '@/assets/img/icon3.png'
import iconUrl4 from '@/assets/img/icon4.png'
import iconUrl5 from '@/assets/img/icon5.png'
import iconUrl6 from '@/assets/img/icon6.png'
import iconUrl7 from '@/assets/img/icon7.png'

export default {
  name: 'Icons',
  data() {
    return {
      icons: [
        {
          id: 0,
          iconUrl: iconUrl0,
          info: '景点门票',
        },
        {
          id: 1,
          iconUrl: iconUrl1,
          info: '滑雪季',
        },
        {
          id: 2,
          iconUrl: iconUrl2,
          info: '泡温泉',
        },
        {
          id: 3,
          iconUrl: iconUrl3,
          info: '动植物园',
        },
        {
          id: 4,
          iconUrl: iconUrl4,
          info: '一日游',
        },
        {
          id: 5,
          iconUrl: iconUrl5,
          info: '必游榜单',
        },
        {
          id: 6,
          iconUrl: iconUrl6,
          info: '自然风光',
        },
        {
          id: 7,
          iconUrl: iconUrl7,
          info: '全部',
        },
        {
          id: 7,
          iconUrl: iconUrl7,
          info: '全部',
        },
      ],
    }
  },
  computed: {
    pages() {
      const pages = []
      this.icons.forEach((icon, index) => {
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
  },
}
</script>

<style lang="scss" scoped>
.icons-wrap /deep/ .swiper-slide {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 50vw;
}
.icon {
  width: 25vw;
  height: 25vw;
  text-align: center;
  font-size: 0;
  img {
    width: 18vw;
    height: 18vw;
    margin: 1vw auto;
  }
  p {
    font-size: 16px;
    height: 5vw;
    line-height: 5vw;
  }
}
</style>
