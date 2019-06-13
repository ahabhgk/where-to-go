<template>
  <div class="list-wrap" ref="wrapper">
    <div class="list">
      <div class="area">
        <div class="tit">热门城市</div>
        <div class="citys">
          <div class="city" v-for="hotCity in hotCities" :key="hotCity.id">
            {{ hotCity.name }}
          </div>
        </div>
      </div>
      <div class="list-area" v-for="(cityList, key) in cities" :key="key">
        <div class="tit" :ref="key">{{ key }}</div>
        <div class="city" v-for="city in cityList" :key="city.id">{{ city.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'List',

  props: {
    hotCities: Array,
    cities: Object,
    letter: String,
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  },

  watch: {
    letter() {
      if (this.letter) {
        this.scroll.scrollToElement(...this.$refs[this.letter])
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.list-wrap {
  overflow: hidden;
  position: absolute;
  top: 21vw;
  bottom: 0;
}
.tit {
  background: #eee;
  color: #999;
  line-height: 9vw;
  padding-left: 2vw;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.area {
  .citys {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 1vw 4vw 1vw 0;
    .city {
      width: 30vw;
      line-height: 8vw;
      text-align: center;
      font-size: 14px;
      color: #757575;
      box-sizing: border-box;
      border: 1px solid #eee;
      border-radius: 1vw;
      margin: 1vw;
    }
  }
}
.list-area {
  .city {
    line-height: 8vw;
    border-bottom: 1px solid #eee;
    color: #757575;
    padding-left: 2vw;
  }
}
</style>
