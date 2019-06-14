<template>
  <Banner />
</template>

<script>
import axios from 'axios'
import Banner from '@/components/Banner.vue'

export default {
  name: 'Detail',

  components: {
    Banner,
  },

  methods: {
    async getDetailData() {
      const res = await axios.get(`/api/detail.json?id=${this.id}`)
    },
  },

  mounted() {
    this.getDetailData()
  },
}
</script>

<style lang="scss" scoped>

</style>
