<template>
  <div>
    <Banner />
    <DetailHeader />
  </div>
</template>

<script>
import axios from 'axios'
import Banner from '@/components/Banner.vue'
import DetailHeader from '@/components/DetailHeader.vue'

export default {
  name: 'Detail',

  components: {
    Banner,
    DetailHeader,
  },

  methods: {
    async getDetailData() {
      const res = await axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }) // wrong
    },
  },

  mounted() {
    this.getDetailData()
  },
}
</script>

<style lang="scss" scoped>

</style>
