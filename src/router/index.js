import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 登录
  {
    path: "/",
    redirect: "login",
    hidden: true,
    
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
     
    component: () => import(/* webpackChunkName: "Login" */  "../views/Login/index.vue"),
  },
  // 控制台
  {
    path: "/console",
    name: "Console",
    component: () => import(/* webpackChunkName: "Console" */ "../views/Layout/index.vue"),
    meta:{name:"控制台"},
    children:[
      {
        path:"/consoleindex",
        name:"Index",
        component: () =>import(/* webpackChunkName: "Console" */ "../views/Console/index.vue"),
        meta:{name:"主页"},
      }
    ]
  },
  // 信息
  {
    path: "/info",
    name: "Info",
    component: () => import(/* webpackChunkName: "Console" */ "../views/Layout/index.vue"),
    meta:{name:"信息"},
    children:[
      {
        path:"/infoindex",
        name:"Index",
        component: () =>import(/* webpackChunkName: "Console" */ "../views/Info/index.vue"),
        meta:{name:"信息列表"},
      },
      {
        path:"/infoclassify",
        name:"Classify",
        component: () =>import(/* webpackChunkName: "Console" */ "../views/Info/classify.vue"),
        meta:{name:"信息分类"},
      }
    ]
  },
  
];

const router = new VueRouter({
  // mode:"history",
  routes,
});

export default router;
