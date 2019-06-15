<template>
  <div>
    <Banner
      :title="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    />
    <DetailHeader />
    <DetailList :categoryList="categoryList" />
  </div>
</template>

<script>
import axios from 'axios'
import Banner from '@/components/Banner.vue'
import DetailHeader from '@/components/DetailHeader.vue'
import DetailList from '@/components/DetailList.vue'

export default {
  name: 'Detail',

  components: {
    Banner,
    DetailHeader,
    DetailList,
  },

  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
    }
  },

  methods: {
    async getDetailData() {
      try {
        const res = await axios.get('/api/detail.json', {
          params: {
            id: this.$route.params.id,
          },
        })
        const { data } = res.data

        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      } catch (err) {
        console.log(err)
      }
    },
  },

  mounted() {
    this.getDetailData()
  },
}
</script>

<style lang="scss" scoped>

</style>
