<template>
  <nav class="nav-nav" v-bind:class="rootClassName">
    <img :alt="Rectangle8_alt" :src="Rectangle8_src" class="nav-rectangle8" />
    <div class="nav-frame8">
      <span class="nav-text"><span>About</span></span>
    </div>
    <div class="nav-frame9">
      <span class="nav-text2"><span>Features</span></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    Rectangle8_src: {
      type: String,
      default: '/playground_assets/logo-200w.png',
    },
    Rectangle8_alt: {
      type: String,
      default: 'Rectangle84462',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.nav-nav {
  gap: 40px;
  width: 427px;
  display: flex;
  position: relative;
  align-items: center;
}
.nav-rectangle8 {
  width: 50px;
  height: 50px;
}
.nav-frame8 {
  gap: 10px;
  width: 150px;
  height: 52px;
  display: flex;
  padding: 10px;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.nav-text {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 13px;
  font-style: normal;
  text-align: left;
  font-family: Poppins;
  font-weight: 500px;
  line-height: 200%;
  font-stretch: normal;
}
.nav-frame9 {
  gap: 10px;
  width: 150px;
  height: 52px;
  display: flex;
  padding: 10px;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.nav-text2 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 13px;
  font-style: normal;
  text-align: left;
  font-family: Poppins;
  font-weight: 500px;
  line-height: 200%;
  font-stretch: normal;
}
.nav-root-class-name {
  top: 38px;
  left: 105px;
  position: absolute;
}
.nav-root-class-name1 {
  top: 38px;
  left: 105px;
  position: absolute;
}
.nav-root-class-name2 {
  top: 38px;
  left: 105px;
  position: absolute;
}
.nav-root-class-name3 {
  top: 38px;
  left: 105px;
  position: absolute;
}
</style>
