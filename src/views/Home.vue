<template>
  <div class="home">
    <Header />
    <Carousel />
    <Icons />
    <Recommend />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Carousel from '@/components/Carousel.vue'
import Icons from '@/components/Icons.vue'
import Recommend from '@/components/Recommend.vue'

export default {
  name: 'home',
  components: {
    Header,
    Carousel,
    Icons,
    Recommend,
  },
}
</script>

<style lang="scss" scoped>

</style>
