<template>
  <div class="home">
    <Header />
    <Carousel />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'home',
  components: {
    Header,
    Carousel,
  },
}
</script>

<style lang="scss" scoped>

</style>
