<template>
  <div class="home">
    <Header />
    <Carousel />
    <!-- <Icons /> -->
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Carousel from '@/components/Carousel.vue'
import Icons from '@/components/Icons.vue'

export default {
  name: 'home',
  components: {
    Header,
    Carousel,
    Icons,
  },
}
</script>

<style lang="scss" scoped>

</style>
