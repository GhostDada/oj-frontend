/* eslint-disable prettier/prettier */
import ACCESS_ENUM from "@/access/accessEnum";
import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "浏览题目",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/noAuth",
    name: "无权限页面",
    component: () => import("@/views/NoAuthView.vue"),
  },
  {
    path: "/hide",
    name: "隐藏页面",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      showInMenu: true
    }
  },
  {
    path: "/admin",
    name: "管理员可见",
    component: () => import("@/views/AdminView.vue"),
    meta: {
      access: ACCESS_ENUM.ADMIN
    }
  },
  {
    path: "/about",
    name: "关于我的",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
];
