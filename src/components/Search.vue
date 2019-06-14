<template>
  <div class="search">
    <input type="text" v-model="keyword" placeholder="输入城市名或拼音" />
    <div class="search-content" v-show="keyword" ref="wrapper">
      <div>
        <button
          v-for="city in list"
          :key="city.id"
          class="search-item"
          @click="handleClickCity(city.name)"
        >{{ city.name }}
        </button>
        <div v-show="hasNoData">没有找到 😥</div>
      </div>
    </div>
  </div>  
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Search',

  props: {
    cities: Object,
  },

  data() {
    return {
      keyword: '',
      list: [],
      timer: null,
      hasNoData: 0,
    }
  },

  methods: {
    handleClickCity(city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    },
  },

  watch: {
    keyword() {
      if (this.timer) clearTimeout(this.timer) // 防抖
      this.timer = setTimeout(() => {
        const result = []
        if (this.keyword) {
          for (const letter in this.cities) {
            result.push(...this.cities[letter].filter(city => {
              return (city.spell.includes(this.keyword) || city.name.includes(this.keyword))
            }))
          }
        }
        this.list = result
        this.hasNoData = !this.list.length
      }, 400)
    },
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
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
  .search-content {
    z-index: 1;
    position: absolute;
    top: 21vw;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #fff;
    .search-item {
      display: block;
      width: 100vw;
      text-align: start;
      outline: none;
      line-height: 5vw;
      border-bottom: 1px solid #fff;
      padding: 2vw;
      color: #000;
      background: #eee;
    }
  }
}
</style>
