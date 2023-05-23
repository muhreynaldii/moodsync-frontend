<template>
  <div class="features-container">
    <app-nav rootClassName="nav-root-class-name3"></app-nav>
    <bg-bawah rootClassName="bg-bawah-root-class-name10"></bg-bawah>
    <bg-atas rootClassName="bg-atas-root-class-name3"></bg-atas>
    <div class="features-container1">
      <img
        alt="pastedImage"
        src="/playground_assets/pastedimage-x2a8.svg"
        class="features-emotion"
      />
      <div class="features-container2">
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-sw6m.svg"
          class="features-texture"
        />
        <div class="features-headline">
          <div class="features-headline1">
            <span class="features-text HeadlineType65">
              <span>
                <span>
                  Connect with Emotion:
                  <span v-html="raw6a6w"></span>
                </span>
                <span><span v-html="rawn839"></span></span>
              </span>
            </span>
            <span class="features-text04 HeadlineType46">
              <span>Experience Video Conferencing like never before!</span>
            </span>
          </div>
          <span class="features-text06 HeadlineType23">
            <span>
              Revolutionize your video conferencing experience with real-time
              emotion recognition technology.
            </span>
          </span>
          <div class="features-frame6">
            <nuxt-link to="/login" id="GetStarted" class="features-button button">
              <span class="features-text08"><span>Get Started!</span></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '../components/nav'
import BgBawah from '../components/bg-bawah'
import BgAtas from '../components/bg-atas'

export default {
  name: 'Features',
  components: {
    AppNav,
    BgBawah,
    BgAtas,
  },
  data() {
    return {
      raw6a6w: ' ',
      rawn839: ' ',
    }
  },
  head: {
    title: 'Features - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'Features - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.features-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.features-container1 {
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
.features-emotion {
  top: 0px;
  right: 0px;
  width: 608px;
  height: 1002px;
  position: absolute;
}
.features-container2 {
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
.features-texture {
  top: 0px;
  left: 0px;
  width: 158px;
  height: 110px;
  position: absolute;
}
.features-headline {
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
.features-headline1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features-text {
  color: var(--dl-color-default-black);
  width: 741px;
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
  text-decoration: none;
}
.features-text04 {
  color: var(--dl-color-default-black);
  width: 741px;
  height: auto;
  align-self: flex-start;
  text-align: left;
  line-height: 120.00000476837158%;
}
.features-text06 {
  color: var(--dl-color-gray-600);
  width: 741px;
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
}
.features-frame6 {
  gap: 40px;
  display: flex;
  align-items: flex-start;
}
.features-button {
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
.features-text08 {
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
</style>
