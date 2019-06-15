<template>
  <div class="list">
    <div class="category"
      v-for="(category, index) in categoryList"
      :key="index"
    >
      <div class="tit">{{ category.title }}</div>

      <div v-if="category.children" class="category-children">
        <DetailList :categoryList="category.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',

  props: {
    categoryList: Array,
  },
}
</script>

<style lang="scss" scoped>
.tit {
  height: 40vw;
}
.category-children {
  padding-left: 10vw;
}
</style>
