<template>
  <div class="icons">
    <span class="icon" v-for="icon in icons" :key="icon.id">
      <img :src="icon.iconUrl" />
      <p>{{ icon.info }}</p>
    </span>
  </div>
</template>

<script>
// import iconUrl0 from '@assets/img/'
// import iconUrl1 from '@assets/img/'
// import iconUrl2 from '@assets/img/'
// import iconUrl3 from '@assets/img/'
// import iconUrl4 from '@assets/img/'
// import iconUrl5 from '@assets/img/'
// import iconUrl6 from '@assets/img/'
// import iconUrl7 from '@assets/img/'

export default {
  name: 'Icons',
  data() {
    return {
      // icons: [
      //   {
      //     id: 0,
      //     iconUrl: iconUrl0,
      //     info: '景点门票',
      //   },
      //   {
      //     id: 1,
      //     iconUrl: iconUrl1,
      //     info: '滑雪季',
      //   },
      //   {
      //     id: 2,
      //     iconUrl: iconUrl2,
      //     info: '泡温泉',
      //   },
      //   {
      //     id: 3,
      //     iconUrl: iconUrl3,
      //     info: '动植物园',
      //   },
      //   {
      //     id: 4,
      //     iconUrl: iconUrl4,
      //     info: '一日游',
      //   },
      //   {
      //     id: 5,
      //     iconUrl: iconUrl5,
      //     info: '必游榜单',
      //   },
      //   {
      //     id: 6,
      //     iconUrl: iconUrl6,
      //     info: '自然风光',
      //   },
      //   {
      //     id: 7,
      //     iconUrl: iconUrl7,
      //     info: '全部',
      //   },
      // ],
    }
  },
}
</script>

<style lang="scss" scoped>
.icons {
  width: 100vw;
  height: 50vw;
  .icon {
    display: inline-block;
    width: 25vw;
    height: 25vw;
  }
}
</style>
