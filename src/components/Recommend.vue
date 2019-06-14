<template>
  <div class="rec-wrapper" v-if="showRecommend">
    <div class="rec-tit">热销推荐</div>
    <router-link
      class="rec"
      v-for="recommend in recommendList"
      :key="recommend.id"
      tag="div"
      :to="`/detail/${recommend.id}`"
    >
      <img :src="recommend.imgUrl" />
      <div class="dec">
        <div class="tit">{{ recommend.title }}</div>
        <p class="desc">{{ recommend.desc }}</p>
        <span class="money"><span class="moneySign">¥</span>99<span class="qi">起</span></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  
  props: {
    recommendList: Array,
  },

  computed: {
    showRecommend() {
      return this.recommendList.length
    },
  },
}
</script>

<style lang="scss" scoped>
.rec-tit {
  line-height: 6vw;
  background: #eee;
  padding: 2vw;
}
.rec {
  display: flex;
  align-items: center;
  height: 26vw;
  padding: 2vw;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  img {
    width: 26vw;
    height: 26vw;
  }
  .dec {
    display: flex;
    flex-direction: column;
    height: 26vw;
    padding-left: 2vw;
    .tit {
      line-height: 6vw;
      font-size: 5vw;
    }
    .desc {
      color: #999;
      flex: 1;
    }
    .money {
      color: orange;
      font-size: 6vw;
      .moneySign {
        font-size: 3vw;
      }
      .qi {
        font-size: 3vw;
        color: #212121;
      }
    }
  }
}
</style>
