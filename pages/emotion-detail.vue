<template>
  <div class="emotion-detail-container">
    <bg-bawah rootClassName="bg-bawah-root-class-name3"></bg-bawah>
    <aside class="emotion-detail-side-bar-full">
      <div class="emotion-detail-side-bar">
        <nuxt-link to="/dashboard-dosen" class="emotion-detail-navlink">
          <div class="emotion-detail-dashboard">
            <img
              alt="chartpie4162"
              src="/assets/chartpie4462-g92g.svg"
              class="emotion-detail-chartpie"
            />
          </div>
        </nuxt-link>
        <nuxt-link to="/vicon-started" class="emotion-detail-navlink1">
          <div class="emotion-detail-conference">
            <img
              alt="cash4162"
              src="/assets/cash4162-e06k.svg"
              class="emotion-detail-cash"
            />
          </div>
        </nuxt-link>
        <nuxt-link to="/daftar-mahasiswa" class="emotion-detail-navlink2">
          <div class="emotion-detail-class">
            <img
              alt="usergroup4162"
              src="/assets/usergroup4502-ntd.svg"
              class="emotion-detail-usergroup"
            />
          </div>
        </nuxt-link>
        <nuxt-link to="/notification" class="emotion-detail-navlink3">
          <div class="emotion-detail-notif">
            <img
              alt="bell4162"
              src="/assets/bell4162-7mh8.svg"
              class="emotion-detail-bell"
            />
          </div>
        </nuxt-link>
        <nuxt-link to="/gamvic" class="emotion-detail-navlink4">
          <div class="emotion-detail-gamvic">
            <img
              alt="bell4162"
              src="/assets/presentationchartbar5562-1s4d.svg"
              class="emotion-detail-gamvic1"
            />
          </div>
        </nuxt-link>
      </div>
    </aside>
    <div class="emotion-detail-detail-profile">
      <span class="emotion-detail-text"><span>Neil</span></span>
      <div class="emotion-detail-profil-content">
        <div class="emotion-detail-head-content">
          <img
            alt="Rectangle204512"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3215bc06-55da-4b4a-85b8-b3b65455a780/bab62bd3-37aa-45b4-83d7-24e15c1b3081?org_if_sml=182505"
            class="emotion-detail-profile-pic"
          />
          <div class="emotion-detail-email">
            <span class="emotion-detail-text02 HeadlineType23">
              <span>email@example.com</span>
            </span>
          </div>
          <div class="emotion-detail-email1">
            <span class="emotion-detail-text04 HeadlineType23">
              <span>Dasar Pemrograman</span>
            </span>
          </div>
        </div>
        <div class="emotion-detail-isi-content">
          <div class="emotion-detail-emosi-mahasiswa">
            <span class="emotion-detail-text06"><span>Overview</span></span>
            <div class="emotion-detail-overview-content"></div>
          </div>
          <div class="emotion-detail-emosi-mahasiswa1">
            <span class="emotion-detail-text08"><span>Kehadiran</span></span>
            <div class="emotion-detail-kehadiran-content"></div>
          </div>
        </div>
      </div>
    </div>
    <header data-thq="thq-navbar" class="emotion-detail-navbar-interactive">
      <div class="emotion-detail-container1">
        <nuxt-link to="/dashboard-dosen" class="emotion-detail-navlink5">
          <img
            alt="Rectangle84462"
            src="/assets/logo-200w.png"
            class="emotion-detail-logo"
          />
        </nuxt-link>
        <nuxt-link to="/daftar-mahasiswa" class="emotion-detail-navlink6">
          <div class="emotion-detail-back button">
            <img
              alt="Rectangle164462"
              src="/assets/rectangle164462-vd7d-200h.png"
              class="emotion-detail-rectangle16"
            />
            <img
              alt="chevronleft4462"
              src="/assets/chevronleft4462-xmap.svg"
              class="emotion-detail-chevronleft"
            />
          </div>
        </nuxt-link>
      </div>
      <div
        data-thq="thq-navbar-nav"
        data-role="Nav"
        class="emotion-detail-desktop-menu"
      >
        <nav
          data-thq="thq-navbar-nav-links"
          data-role="Nav"
          class="emotion-detail-nav"
        >
          <div class="emotion-detail-search">
            <div class="emotion-detail-input">
              <div class="emotion-detail-content">
                <img
                  alt="searchI416"
                  src="/assets/searchi416-d8ss.svg"
                  class="emotion-detail-search1"
                />
                <span class="emotion-detail-text10 leadingTighttextSmfontNormal">
                  <span>Search</span>
                </span>
              </div>
            </div>
            <button class="emotion-detail-button">
              <img
                alt="searchI416"
                src="/assets/searchi416-1gp7.svg"
                class="emotion-detail-search2"
              />
            </button>
          </div>
        </nav>
      </div>
      <div class="emotion-detail-profile">
        <img
          alt="Rectangle254162"
          src="/assets/rectangle254162-743-200h.png"
          class="emotion-detail-rectangle25"
        />
        <img
          alt="chevrondown4162"
          src="/assets/chevrondown4162-p2v.svg"
          class="emotion-detail-chevrondown"
        />
      </div>
      <div data-thq="thq-burger-menu" class="emotion-detail-burger-menu">
        <svg viewBox="0 0 1024 1024" class="emotion-detail-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
    </header>
  </div>
</template>

<script>
import BgBawah from '../components/bg-bawah'

export default {
  name: 'EmotionDetail',
  components: {
    BgBawah,
  },
  head: {
    title: 'Emotion-Detail - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'Emotion-Detail - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.emotion-detail-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.emotion-detail-side-bar-full {
  gap: 382px;
  top: 238px;
  left: 28px;
  width: auto;
  height: auto;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
}
.emotion-detail-side-bar {
  gap: 21px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.emotion-detail-navlink {
  display: contents;
}
.emotion-detail-dashboard {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: var(--dl-color-default-white);
}
.emotion-detail-chartpie {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.emotion-detail-navlink1 {
  display: contents;
}
.emotion-detail-conference {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: var(--dl-color-default-white);
}
.emotion-detail-cash {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.emotion-detail-navlink2 {
  display: contents;
}
.emotion-detail-class {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: var(--dl-color-blue-100);
}
.emotion-detail-usergroup {
  top: 9px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.emotion-detail-navlink3 {
  display: contents;
}
.emotion-detail-notif {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 1);
}
.emotion-detail-bell {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.emotion-detail-navlink4 {
  display: contents;
}
.emotion-detail-gamvic {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 1);
}
.emotion-detail-gamvic1 {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.emotion-detail-detail-profile {
  gap: 135px;
  top: 123px;
  left: 0px;
  right: 0px;
  width: 1198px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
}
.emotion-detail-text {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 46px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.emotion-detail-profil-content {
  width: 1198px;
  height: 611px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: var(--dl-color-blue-50);
}
.emotion-detail-head-content {
  top: -119px;
  left: 106px;
  width: 989px;
  height: 238px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.emotion-detail-profile-pic {
  top: 0px;
  left: 374px;
  width: 238px;
  height: 238px;
  position: absolute;
  border-radius: 158px;
}
.emotion-detail-email {
  gap: 10px;
  top: 166px;
  left: 0px;
  display: flex;
  padding: 10px;
  position: absolute;
  align-items: flex-start;
  border-radius: 21px;
  background-color: var(--dl-color-default-white);
}
.emotion-detail-text02 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
}
.emotion-detail-email1 {
  gap: 10px;
  top: 166px;
  left: 726px;
  display: flex;
  padding: 10px;
  position: absolute;
  align-items: flex-start;
  border-radius: 21px;
  background-color: var(--dl-color-default-white);
}
.emotion-detail-text04 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
}
.emotion-detail-isi-content {
  gap: 20px;
  top: 155px;
  left: 25px;
  width: 1152px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
}
.emotion-detail-emosi-mahasiswa {
  width: 566px;
  height: 426px;
  display: flex;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.emotion-detail-text06 {
  top: 26px;
  left: 38px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 23px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.emotion-detail-overview-content {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
}
.emotion-detail-emosi-mahasiswa1 {
  width: 566px;
  height: 426px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: var(--dl-color-default-white);
}
.emotion-detail-text08 {
  top: 26px;
  left: 38px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 23px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.emotion-detail-kehadiran-content {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
}
.emotion-detail-navbar-interactive {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.emotion-detail-container1 {
  width: 157px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.emotion-detail-navlink5 {
  display: contents;
}
.emotion-detail-logo {
  width: 50px;
  height: 50px;
  text-decoration: none;
}
.emotion-detail-navlink6 {
  display: contents;
}
.emotion-detail-back {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-width: 0px;
  text-decoration: none;
}
.emotion-detail-rectangle16 {
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 12px;
}
.emotion-detail-chevronleft {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.emotion-detail-desktop-menu {
  display: flex;
}
.emotion-detail-nav {
  flex: 0 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
}
.emotion-detail-search {
  gap: 10px;
  width: 995px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: center;
}
.emotion-detail-input {
  width: 100%;
  height: auto;
  display: flex;
  padding: 12px 16px;
  align-self: center;
  box-sizing: content-box;
  align-items: center;
  border-color: rgba(209, 213, 219, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  background-color: var(--dl-color-gray-50);
}
.emotion-detail-content {
  gap: 8px;
  display: flex;
  flex-grow: 1;
  align-self: center;
  align-items: center;
}
.emotion-detail-search1 {
  width: 18px;
  height: 18px;
}
.emotion-detail-text10 {
  color: var(--dl-color-gray-500);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 125%;
}
.emotion-detail-button {
  width: auto;
  height: auto;
  display: flex;
  padding: 8px;
  align-self: center;
  box-sizing: content-box;
  align-items: center;
  flex-shrink: 0;
  border-color: rgba(28, 100, 242, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  justify-content: center;
  background-color: var(--dl-color-primary-600);
}
.emotion-detail-search2 {
  width: 20px;
  height: 20px;
}
.emotion-detail-profile {
  gap: 2px;
  display: flex;
  align-items: center;
}
.emotion-detail-rectangle25 {
  width: 50px;
  height: 50px;
  border-radius: 33px;
}
.emotion-detail-chevrondown {
  width: 30px;
  height: 30px;
}
.emotion-detail-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.emotion-detail-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media(max-width: 1600px) {
  .emotion-detail-container1 {
    width: 137px;
  }
  .emotion-detail-profile {
    top: 29px;
    right: 92px;
    position: static;
  }
}
@media(max-width: 1200px) {
  .emotion-detail-search {
    width: 787px;
  }
}
@media(max-width: 767px) {
  .emotion-detail-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .emotion-detail-desktop-menu {
    display: none;
  }
  .emotion-detail-burger-menu {
    display: flex;
  }
}
@media(max-width: 479px) {
  .emotion-detail-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
}
</style>
