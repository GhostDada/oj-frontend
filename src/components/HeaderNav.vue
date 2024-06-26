<template>
  <a-row
    id="headerNav"
    style="margin-bottom: 16px"
    align="center"
    :wrap="false"
  >
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectKey"
        @menu-item-click="changeMenu"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/oj-logo.png" alt="logo" />
            <div class="title">OJ判题系统</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user.loginUser.username ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";

const router = useRouter();
const store = useStore();

const selectKey = ref(["/"]);
// 展示的菜单项
const visibleRoutes = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.showInMenu) {
      return false;
    }

    // 根据权限过滤菜单
    if (!checkAccess(store.state.user.loginUser, item.meta?.access as string)) {
      return false;
    }
    return true;
  });
});

setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    username: "梁兆浩管理员",
    role: ACCESS_ENUM.ADMIN,
  });
}, 3000);

// 路由跳转后执行
router.afterEach((to) => {
  selectKey.value = [to.path];
});

// 改变导航栏
const changeMenu = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}
.title-bar .logo {
  height: 48px;
  margin-right: 16px;
}
.title-bar .title {
  font-size: 16px;
  color: #000;
}
</style>
