<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-search">&#xe632;</i>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.doubleCity }}
        <i class="iconfont">&#xe62d;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Header',

  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity']),
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';

.header {
  display: flex;
  background: $bgColor;
  line-height: $headerHeight;
  color: #fff;
  .header-left {
    width: .64rem;
    float: left;
    text-align: center;
  }
  .header-input {
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    color: #999;
    background: #fff;
    border-radius: .1rem;
    margin-top: .12rem;
    margin-left: .2rem;
    .icon-search {
      margin-left: .1rem;
    }
  }
  .header-right {
    min-width: 1.04rem;
    padding: .1rem;
    line-height: .64rem;
    float: right;
    text-align: center;
    color: #fff;
  }
}
</style>
