<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" />  
  </div>  
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';

.search {
  height: 9.5vw;
  padding: 0 1vw;
  background: $bgColor;
  input {
    width: 96vw;
    line-height: 6.5vw;
    padding: 1vw;
    border-radius: 1vw;
    font-size: 16px;
    text-align: center;
  }
}
</style>
