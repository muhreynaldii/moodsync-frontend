<template>
  <div class="about-container">
    <app-nav rootClassName="nav-root-class-name2"></app-nav>
    <bg-bawah rootClassName="bg-bawah-root-class-name9"></bg-bawah>
    <bg-atas rootClassName="bg-atas-root-class-name2"></bg-atas>
    <div class="about-container1">
      <img
        alt="pastedImage"
        src="/playground_assets/pastedimage-x2a8.svg"
        class="about-emotion"
      />
      <div class="about-container2">
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-sw6m.svg"
          class="about-texture"
        />
        <div class="about-headline">
          <div class="about-headline1">
            <span class="about-text HeadlineType65">
              <span>
                <span>
                  Connect with Emotion:
                  <span v-html="rawvcpt"></span>
                </span>
                <span><span v-html="rawr5u9"></span></span>
              </span>
            </span>
            <span class="about-text04 HeadlineType46">
              <span>Experience Video Conferencing like never before!</span>
            </span>
          </div>
          <span class="about-text06 HeadlineType23">
            <span>
              Revolutionize your video conferencing experience with real-time
              emotion recognition technology.
            </span>
          </span>
          <div class="about-frame6">
            <nuxt-link to="/login" id="GetStarted" class="about-button button">
              <span class="about-text08"><span>Get Started!</span></span>
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
  name: 'About',
  components: {
    AppNav,
    BgBawah,
    BgAtas,
  },
  data() {
    return {
      rawvcpt: ' ',
      rawr5u9: ' ',
    }
  },
  head: {
    title: 'About - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'About - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.about-container1 {
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
.about-emotion {
  top: 0px;
  right: 0px;
  width: 608px;
  height: 1002px;
  position: absolute;
}
.about-container2 {
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
.about-texture {
  top: 0px;
  left: 0px;
  width: 158px;
  height: 110px;
  position: absolute;
}
.about-headline {
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
.about-headline1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.about-text {
  color: var(--dl-color-default-black);
  width: 741px;
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
  text-decoration: none;
}
.about-text04 {
  color: var(--dl-color-default-black);
  width: 741px;
  height: auto;
  align-self: flex-start;
  text-align: left;
  line-height: 120.00000476837158%;
}
.about-text06 {
  color: var(--dl-color-gray-600);
  width: 741px;
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
}
.about-frame6 {
  gap: 40px;
  display: flex;
  align-items: flex-start;
}
.about-button {
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
.about-text08 {
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
