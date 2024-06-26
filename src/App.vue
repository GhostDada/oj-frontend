<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import BasicLayout from "../src/layouts/BasicLayout.vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

// 仅管理员可见，判断用户是否有权限
router.beforeEach((to, from, next) => {
  if (to.meta.access === "canAdmin") {
    if (store.state.user.loginUser.role !== "admin") {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>

<style></style>
