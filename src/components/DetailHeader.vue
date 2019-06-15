<template>
  <div class="header" ref="header">
    <router-link to="/">
      <div class="back"><i class="iconfont">&#xe624;</i></div>
    </router-link>
    <div class="bar" v-show="show" :style="opacityStyle">
      <router-link to="/">
        <div class="bar-back"><i class="iconfont">&#xe624;</i></div>
      </router-link>
      <span class="tit">心想乌龙</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',

  data() {
    return {
      show: false,
      opacityStyle: {
        opacity: 0,
      },
    }
  },

  methods: {
    handleScroll() {
      console.log('解绑全局对象事件')
      const { scrollTop } = document.documentElement
      if (scrollTop >= 60) {
        if (scrollTop < 200) {
          const opacity = scrollTop / 200
          this.opacityStyle = { opacity }
        }
        this.show = true
      } else {
        this.show = false
      }
    },
  },

  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },

  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';

.back {
  width: 10vw;
  height: 1000vw;
  line-height: 10vw;
  height: 10vw;
  text-align: center;
  position: absolute;
  top: 0;
  .iconfont {
    color: #fff;
    font-size: 6vw;
  }
}
.bar {
  background: $bgColor;
  width: 100vw;
  line-height: 10vw;
  font-size: 5vw;
  color: #fff;
  text-align: center;
  position: fixed;
  top: 0;
  .bar-back {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    height: 10vw;
    line-height: 10vw;
    width: 10vw;
  }
}
</style>
