<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/variable.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: $textColor;
}

html {
  font-size: 50px;
}

* {
  margin: 0;
  padding: 0;
  border: none;
}
</style>
