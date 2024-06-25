<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header>
        <HeaderNav />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import HeaderNav from "@/components/HeaderNav.vue";
</script>

<style></style>
