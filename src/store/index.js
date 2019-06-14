import Vue from 'vue';
import Vuex from 'vuex';

import state from './state'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions: {
    // 没有异步或很复杂的操作，可直接调用 mutations
    // changeCity(ctx, city) {
    //   ctx.commit('changeCity', city)
    // },
  },
  getters: {
    doubleCity(state) {
      return `${state.city} ${state.city}`
    },
  },
});
