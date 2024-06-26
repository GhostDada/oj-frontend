/* eslint-disable prettier/prettier */
import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: {
    loginUser: {
      username: "未登录",
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
  getters: {},
  actions: {
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", { username: "梁兆浩" });
    },
  },
} as StoreOptions<any>;
