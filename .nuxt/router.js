import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3fb98c50 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _1c231676 = () => interopDefault(import('..\\pages\\daftar-mahasiswa.vue' /* webpackChunkName: "pages/daftar-mahasiswa" */))
const _408bfe0a = () => interopDefault(import('..\\pages\\dashboard-dosen.vue' /* webpackChunkName: "pages/dashboard-dosen" */))
const _2efe1ad0 = () => interopDefault(import('..\\pages\\emotion-detail.vue' /* webpackChunkName: "pages/emotion-detail" */))
const _062027ca = () => interopDefault(import('..\\pages\\features.vue' /* webpackChunkName: "pages/features" */))
const _29190a2c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _39a5fa10 = () => interopDefault(import('..\\pages\\notification.vue' /* webpackChunkName: "pages/notification" */))
const _89bb0c9c = () => interopDefault(import('..\\pages\\vicon.vue' /* webpackChunkName: "pages/vicon" */))
const _6c042d34 = () => interopDefault(import('..\\pages\\vicon-started.vue' /* webpackChunkName: "pages/vicon-started" */))
const _5f716715 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3fb98c50,
    name: "about"
  }, {
    path: "/daftar-mahasiswa",
    component: _1c231676,
    name: "daftar-mahasiswa"
  }, {
    path: "/dashboard-dosen",
    component: _408bfe0a,
    name: "dashboard-dosen"
  }, {
    path: "/emotion-detail",
    component: _2efe1ad0,
    name: "emotion-detail"
  }, {
    path: "/features",
    component: _062027ca,
    name: "features"
  }, {
    path: "/login",
    component: _29190a2c,
    name: "login"
  }, {
    path: "/notification",
    component: _39a5fa10,
    name: "notification"
  }, {
    path: "/vicon",
    component: _89bb0c9c,
    name: "vicon"
  }, {
    path: "/vicon-started",
    component: _6c042d34,
    name: "vicon-started"
  }, {
    path: "/",
    component: _5f716715,
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
