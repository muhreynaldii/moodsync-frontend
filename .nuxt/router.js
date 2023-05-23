import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ffe935a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _b49ac6da = () => interopDefault(import('..\\pages\\daftar-mahasiswa.vue' /* webpackChunkName: "pages/daftar-mahasiswa" */))
const _4742c33e = () => interopDefault(import('..\\pages\\dashboard-dosen.vue' /* webpackChunkName: "pages/dashboard-dosen" */))
const _2ffaf7a6 = () => interopDefault(import('..\\pages\\emotion-detail.vue' /* webpackChunkName: "pages/emotion-detail" */))
const _60dbca32 = () => interopDefault(import('..\\pages\\features.vue' /* webpackChunkName: "pages/features" */))
const _8d3f97a2 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _23f3c0d6 = () => interopDefault(import('..\\pages\\notification.vue' /* webpackChunkName: "pages/notification" */))
const _4b69a3b5 = () => interopDefault(import('..\\pages\\vicon.vue' /* webpackChunkName: "pages/vicon" */))
const _1a486069 = () => interopDefault(import('..\\pages\\vicon-started.vue' /* webpackChunkName: "pages/vicon-started" */))
const _208eddd0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5ffe935a,
    name: "about"
  }, {
    path: "/daftar-mahasiswa",
    component: _b49ac6da,
    name: "daftar-mahasiswa"
  }, {
    path: "/dashboard-dosen",
    component: _4742c33e,
    name: "dashboard-dosen"
  }, {
    path: "/emotion-detail",
    component: _2ffaf7a6,
    name: "emotion-detail"
  }, {
    path: "/features",
    component: _60dbca32,
    name: "features"
  }, {
    path: "/login",
    component: _8d3f97a2,
    name: "login"
  }, {
    path: "/notification",
    component: _23f3c0d6,
    name: "notification"
  }, {
    path: "/vicon",
    component: _4b69a3b5,
    name: "vicon"
  }, {
    path: "/vicon-started",
    component: _1a486069,
    name: "vicon-started"
  }, {
    path: "/",
    component: _208eddd0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
