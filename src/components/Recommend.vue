<template>
  <div class="rec-wrapper">
    <div class="rec-tit">热销推荐</div>
    <div class="rec" v-for="recommend in recommends" :key="recommend.id">
      <img :src="recommend.recImgUrl" />
      <div class="dec">
        <div class="tit">{{ recommend.tit }}</div>
        <p class="desc">{{ recommend.desc }}</p>
        <span class="money"><span class="moneySign">¥</span>{{ recommend.money }}<span class="qi">起</span></span>
      </div>
    </div>
  </div>
</template>

<script>
import recImgUrl0 from '@/assets/img/recImgUrl0.jpg'

export default {
  name: 'Recommend',
  data() {
    return {
      recommends: [
        {
          id: 0,
          recImgUrl: recImgUrl0,
          tit: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋世界。',
          money: 99,
        },
        {
          id: 1,
          recImgUrl: recImgUrl0,
          tit: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋世界。',
          money: 99,
        },
        {
          id: 2,
          recImgUrl: recImgUrl0,
          tit: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋世界。',
          money: 99,
        },
        {
          id: 3,
          recImgUrl: recImgUrl0,
          tit: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋世界。',
          money: 99,
        },
        {
          id: 4,
          recImgUrl: recImgUrl0,
          tit: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋世界。',
          money: 99,
        },
      ],
    }
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
