<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <i class="iconfont">&#xe624;</i>
      </div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';

.header {
  background: $bgColor;
  line-height: $headerHeight;
  text-align: center;
  position: relative;
  color: #fff;
  .header-left {
    width: .64rem;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    color: #fff;
  }
}
</style>
