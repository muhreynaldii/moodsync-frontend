<template>
  <div class="about-container">
    <bg-bawah rootClassName="bg-bawah-root-class-name9"></bg-bawah>
    <bg-atas rootClassName="bg-atas-root-class-name2"></bg-atas>
    <div class="about-main-content">
      <img
        alt="pastedImage"
        src="/assets/pastedimage-x2a8.svg"
        class="about-emotion"
      />
      <div class="about-container1">
        <img
          alt="pastedImage"
          src="/assets/pastedimage-sw6m.svg"
          class="about-texture"
        />
        <div class="about-headline">
          <span class="about-text HeadlineType65">About Us</span>
          <span class="about-text1">
            <span class="about-text2 HeadlineType23">
              Aplikasi Video Conference dengan Emotion Recognition adalah sebuah
              platform komunikasi jarak jauh yang dirancang khusus untuk
              meningkatkan pengalaman pengguna dalam konferensi video. Salah satu
              fitur utama dari aplikasi ini adalah kemampuannya untuk mendeteksi
              emosi pengguna selama panggilan video.
            </span>
            <br class="HeadlineType23" />
            <br class="HeadlineType23" />
            <span class="about-text5 HeadlineType23">
              Dengan menggunakan teknologi pengenalan emosi yang canggih, aplikasi
              ini dapat menganalisis ekspresi wajah pengguna dalam waktu nyata.
              Algoritma yang terintegrasi dengan aplikasi akan mengidentifikasi
              berbagai emosi seperti kegembiraan, kesedihan, kejutan, marah, atau
              ketidakpuasan. Hal ini memungkinkan para peserta video conference
              untuk mendapatkan pemahaman yang lebih mendalam tentang respons
              emosional satu sama lain, bahkan dalam komunikasi nonverbal
            </span>
            <span class="about-text6 HeadlineType23">.</span>
          </span>
          <div class="about-frame6">
            <nuxt-link to="/login" id="GetStarted" class="about-button button">
              <span class="about-text7">Lets Try!</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <app-nav rootClassName="nav-root-class-name2"></app-nav>
  </div>
</template>

<script>
import BgBawah from '../components/bg-bawah'
import BgAtas from '../components/bg-atas'
import AppNav from '../components/nav'

export default {
  name: 'About',
  components: {
    BgBawah,
    BgAtas,
    AppNav,
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
.about-main-content {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 1600px;
  height: 1002px;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: center;
  flex-direction: column;
}
.about-emotion {
  top: 0px;
  right: 0px;
  width: 608px;
  height: 1002px;
  position: absolute;
}
.about-container1 {
  top: 150px;
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
.about-text {
  color: var(--dl-color-default-black);
  width: 741px;
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
  text-decoration: none;
}
.about-text1 {
  color: var(--dl-color-gray-600);
  width: 741px;
  height: auto;
  font-size: 23px;
  font-style: normal;
  text-align: left;
  font-family: Poppins;
  font-weight: 400px;
  line-height: 120.00000476837158%;
}
.about-text2 {
  width: 741px;
  height: auto;
  text-align: left;
}
.about-text5 {
  width: 741px;
  height: auto;
  text-align: left;
}
.about-text6 {
  width: 741px;
  height: auto;
  text-align: left;
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
.about-text7 {
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
@media(max-width: 1600px) {
  .about-emotion {
    top: 0px;
    right: 0px;
  }
  .about-container1 {
    top: 172px;
    left: 0px;
    height: 681px;
  }
  .about-frame6 {
    align-self: flex-start;
  }
  .about-text7 {
    color: var(--dl-color-default-white);
    font-size: 16px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 150%;
    text-decoration: none;
  }
}
@media(max-width: 1200px) {
  .about-emotion {
    display: none;
  }
  .about-container1 {
    left: 192px;
    margin: auto;
  }
}
</style>
