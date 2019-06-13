<template>
  <ul>
    <li v-for="(city, key) in cities" :key="key">{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',

  props: {
    cities: Object,
  },
}
</script>

<style lang="scss" scoped>
ul {
  position: absolute;
  right: 0;
  top: 21vw;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1vw;
  li {
    text-align: center;
    list-style: none;
  }
}
</style>
