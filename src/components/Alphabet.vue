<template>
  <ul>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
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
    list-style: none;
  }
}
</style>
