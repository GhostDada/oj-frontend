/* eslint-disable prettier/prettier */
import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: {
    loginUser: {},
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
  getters: {},
  actions: {
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", payload);
    },
  },
} as StoreOptions<any>;
