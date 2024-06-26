<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header>
        <HeaderNav />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer"
        >OJ - 判题系统 By 是阿浩啊</a-layout-footer
      >
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import HeaderNav from "@/components/HeaderNav.vue";
</script>

<style scoped>
#basicLayout .content {
  padding: 20px;
}

#basicLayout .footer {
  padding: 16px;
  text-align: center;
  background-color: antiquewhite;
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
