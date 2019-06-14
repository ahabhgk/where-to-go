<template>
  <div class="home">
    <Header />
    <Carousel :carouselList="carouselList" />
    <Icons :iconList="iconList" />
    <Recommend :recommendList="recommendList" />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/layout/Header.vue'
import Carousel from '@/components/Carousel.vue'
import Icons from '@/components/Icons.vue'
import Recommend from '@/components/Recommend.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',

  components: {
    Header,
    Carousel,
    Icons,
    Recommend,
  },

  data() {
    return {
      lastCity: '',
      carouselList: [],
      iconList: [],
      recommendList: [],
    }
  },

  computed: {
    ...mapState(['city']),
  },

  methods: {
    async getHomeInfo() {
      try {
        const res = await axios.get(`/api/index.json?city=${this.city}`)
        const data = await res.data.data

        this.carouselList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
      } catch (err) {
        console.log(err)
      }
    },
  },

  mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
  },

  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
