<template>
  <div class="index-container">
    <bg-bawah rootClassName="bg-bawah-root-class-name7"></bg-bawah>
    <bg-atas rootClassName="bg-atas-root-class-name1"></bg-atas>
    <div class="index-container1">
      <img
        alt="pastedImage"
        src="/assets/pastedimage-x2a8.svg"
        class="index-emotion"
      />
      <div class="index-container2">
        <img
          alt="pastedImage"
          src="/assets/pastedimage-sw6m.svg"
          class="index-texture"
        />
        <div class="index-headline">
          <div class="index-headline1">
            <span class="index-text HeadlineType65">
              <span>
                <span>
                  Connect with Emotion:
                  <span v-html="rawv2cy"></span>
                </span>
                <span><span v-html="raw3tf7"></span></span>
              </span>
            </span>
            <span class="index-text04 HeadlineType46">
              <span>Experience Video Conferencing like never before!</span>
            </span>
          </div>
          <span class="index-text06 HeadlineType23">
            <span>
              Revolutionize your video conferencing experience with real-time
              emotion recognition technology.
            </span>
          </span>
          <div class="index-frame6">
            <nuxt-link to="/login" id="GetStarted" class="index-button button">
              <span class="index-text08"><span>Get Started!</span></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <app-nav rootClassName="nav-root-class-name1"></app-nav>
  </div>
</template>

<script>
import BgBawah from '../components/bg-bawah'
import BgAtas from '../components/bg-atas'
import AppNav from '../components/nav'

export default {
  name: 'Index',
  components: {
    BgBawah,
    BgAtas,
    AppNav,
  },
  data() {
    return {
      rawv2cy: ' ',
      raw3tf7: ' ',
    }
  },
  head: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.index-container {
  width: 100%;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.index-container1 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 1531px;
  bottom: 0px;
  height: 1002px;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.index-emotion {
  top: 0px;
  right: 0px;
  width: auto;
  height: 100%;
  position: absolute;
}
.index-container2 {
  top: 273px;
  left: 0px;
  width: 787px;
  height: 387.5625px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.index-texture {
  top: 0px;
  left: 0px;
  width: 158px;
  height: 110px;
  position: absolute;
}
.index-headline {
  gap: 26px;
  top: 40px;
  left: 46px;
  width: 741px;
  height: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.index-headline1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.index-text {
  color: var(--dl-color-default-black);
  width: 741px;
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
  text-decoration: none;
}
.index-text04 {
  color: var(--dl-color-default-black);
  width: 741px;
  height: auto;
  align-self: flex-start;
  text-align: left;
  line-height: 120.00000476837158%;
}
.index-text06 {
  color: var(--dl-color-gray-600);
  width: 741px;
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
}
.index-frame6 {
  gap: 40px;
  display: flex;
  align-items: flex-start;
}
.index-button {
  gap: 8px;
  width: 203px;
  display: flex;
  padding: 14px 24px;
  overflow: hidden;
  align-items: center;
  flex-shrink: 0;
  border-width: 0px;
  border-radius: 8px;
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-primary-7002);
}
.index-text08 {
  color: var(--dl-color-default-white);
  height: auto;
  font-size: 16px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
@media(max-width: 1200px) {
  .index-emotion {
    right: 323px;
  }
}
</style>
