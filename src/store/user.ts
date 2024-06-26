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
      commit("updateUser", { username: "梁兆浩", role: "admin"});
    },
  },
} as StoreOptions<any>;
