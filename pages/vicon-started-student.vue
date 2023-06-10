<template>
  <div class="vicon-started-container">
    <bg-bawah rootClassName="bg-bawah-root-class-name1"></bg-bawah>
    <div class="vicon-started-vicon">
      <div class="vicon-started-vicon-content">
        <div class="vicon-started-frame1408">
          <span class="vicon-started-text"><span>Get Started</span></span>
          <span class="vicon-started-text02 HeadlineType23">
            <span>Setup your Audio and Video before Joining</span>
          </span>
        </div>
        <div class="vicon-started-video-preview">
          <img
            alt="Rectangle14462"
            src="/assets/rectangle14462-2owv-600h.png"
            class="vicon-started-rectangle1"
          />
          <div class="vicon-started-profile-card">
            <div class="vicon-started-persinal-info">
              <div class="vicon-started-name">
                <span class="vicon-started-text04"><span>Dr. Dre</span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="vicon-started-frame26">
          <img
            alt="Volume4542"
            src="/assets/volume4542-g9ck.svg"
            class="vicon-started-volume"
          />
          <div class="vicon-started-action">
            <div class="vicon-started-group18">
              <img
                alt="videocamera4462"
                src="/assets/videocamera4462-3wf.svg"
                class="vicon-started-videocamera"
              />
            </div>
            <div class="vicon-started-group19">
              <img
                alt="microphone4462"
                src="/assets/microphone4462-f20b.svg"
                class="vicon-started-microphone"
              />
            </div>
            <div class="vicon-started-group20">
              <img
                alt="collection4462"
                src="/assets/collection4462-4hk9.svg"
                class="vicon-started-collection"
              />
            </div>
            <div class="vicon-started-group21">
              <img
                alt="dotshorizontal4462"
                src="/assets/dotshorizontal4462-8lo5.svg"
                class="vicon-started-dotshorizontal"
              />
            </div>
          </div>
          <nuxt-link to="/vicon-student" class="vicon-started-button">
            <span class="vicon-started-text06"
              ><span>Join Conference</span></span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <header data-thq="thq-navbar" class="vicon-started-navbar-interactive">
      <nuxt-link to="/vicon-started-student" class="vicon-started-navlink5">
        <img
          alt="Rectangle84462"
          src="/assets/logo-200w.png"
          class="vicon-started-logo"
        />
      </nuxt-link>
      <div
        data-thq="thq-navbar-nav"
        data-role="Nav"
        class="vicon-started-desktop-menu"
      >
        <nav
          data-thq="thq-navbar-nav-links"
          data-role="Nav"
          class="vicon-started-nav">
        </nav>
      </div>
      <nav class="vicon-started-profile">
        <div
          data-thq="thq-dropdown"
          class="vicon-started-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            class="vicon-started-dropdown-toggle"
          >
            <img
              alt="Rectangle254162"
              src="/assets/rectangle254162-743-200h.png"
              class="vicon-started-rectangle25"
            />
            <img
              alt="chevrondown4162"
              src="/assets/chevrondown4162-p2v.svg"
              class="vicon-started-chevrondown"
            />
          </div>
          <ul data-thq="thq-dropdown-list" class="vicon-started-dropdown-list">
            <li
              data-thq="thq-dropdown"
              class="vicon-started-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                class="vicon-started-dropdown-toggle1"
              >
                <img
                  alt="user5862"
                  src="/assets/user5862-kh17n.svg"
                  class="vicon-started-user"
                />
                <span class="vicon-started-profile1 BodyType16">Profile</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              class="vicon-started-dropdown1 list-item"
            >
              <nuxt-link to="/login">
                <div
                  data-thq="thq-dropdown-toggle"
                  class="vicon-started-dropdown-toggle2"
                >
                  <img
                    alt="logout5862"
                    src="/assets/logout5862-woq.svg"
                    class="vicon-started-logout"
                  />
                  <span class="vicon-started-logout1 BodyType16">Logout</span>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
      <div data-thq="thq-burger-menu" class="vicon-started-burger-menu">
        <svg viewBox="0 0 1024 1024" class="vicon-started-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "ViconStartedStudent",
  head: {
    title: "MoodSync",
    meta: [
      {
        property: "og:title",
        content: "MoodSync",
      },
    ],
  },
};
</script>

<style scoped>
.vicon-started-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.vicon-started-side-bar-full {
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
.vicon-started-side-bar {
  gap: 21px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.vicon-started-navlink {
  display: contents;
}
.vicon-started-dashboard {
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
.vicon-started-chartpie {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-started-navlink1 {
  display: contents;
}
.vicon-started-conference {
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
.vicon-started-cash {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-started-navlink2 {
  display: contents;
}
.vicon-started-class {
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
.vicon-started-usergroup {
  top: 9px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-started-navlink3 {
  display: contents;
}
.vicon-started-notif {
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
.vicon-started-bell {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-started-navlink4 {
  display: contents;
}
.vicon-started-gamvic {
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
.vicon-started-gamvic1 {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-started-vicon {
  top: 122px;
  left: 0px;
  right: 0px;
  width: 1160px;
  height: 836px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: var(--dl-color-gray-50);
}
.vicon-started-vicon-content {
  gap: 29px;
  top: 27px;
  left: 91px;
  width: 954px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
}
.vicon-started-frame1408 {
  gap: 6px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.vicon-started-text {
  color: var(--dl-color-blue-600);
  height: auto;
  font-size: 65px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-started-text02 {
  color: var(--dl-color-gray-400);
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
}
.vicon-started-video-preview {
  width: 954px;
  height: 534px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-started-rectangle1 {
  top: 0px;
  left: 0px;
  width: 954px;
  height: 534px;
  position: absolute;
  border-radius: 33px;
}
.vicon-started-profile-card {
  gap: 2.8138978481292725px;
  top: 487.1094970703125px;
  left: 33.17263412475586px;
  width: 160.1438751220703px;
  height: 27.03099250793457px;
  display: flex;
  padding: 22.51118278503418px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 11.25559139251709px 22.51118278503418px 0px
    rgba(0, 0, 0, 0.25);
  align-items: center;
  flex-shrink: 0;
  border-radius: 4.502236366271973px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.30000001192092896);
}
.vicon-started-persinal-info {
  gap: 31.16315269470215px;
  width: 139.7472686767578px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.vicon-started-name {
  width: 140px;
  height: 44px;
  display: flex;
  position: relative;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-started-text04 {
  color: var(--dl-color-default-white);
  width: 140px;
  height: auto;
  position: absolute;
  font-size: 29.2154541015625px;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-started-frame26 {
  gap: 179px;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.vicon-started-volume {
  flex: 1;
  width: 150px;
  height: 56px;
  box-sizing: content-box;
}
.vicon-started-action {
  gap: 9px;
  display: flex;
  align-items: flex-start;
}
.vicon-started-group18 {
  width: 59px;
  height: 56.38554382324219px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: var(--dl-color-gray-200);
  border-width: 1px;
  border-radius: 18.61px;
  background-color: rgba(255, 255, 255, 1);
}
.vicon-started-videocamera {
  top: 13px;
  left: 15px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-started-group19 {
  width: 59px;
  height: 56.38554382324219px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: var(--dl-color-gray-200);
  border-width: 1px;
  border-radius: 18.61px;
  background-color: rgba(255, 255, 255, 1);
}
.vicon-started-microphone {
  top: 13px;
  left: 14.77349853515625px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-started-group20 {
  width: 59px;
  height: 56.38554382324219px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: var(--dl-color-gray-200);
  border-width: 1px;
  border-radius: 18.61px;
  background-color: rgba(255, 255, 255, 1);
}
.vicon-started-collection {
  top: 13px;
  left: 14.5469970703125px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-started-group21 {
  width: 59px;
  height: 56.38554382324219px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: var(--dl-color-gray-200);
  border-width: 1px;
  border-radius: 18.61px;
  background-color: rgba(255, 255, 255, 1);
}
.vicon-started-dotshorizontal {
  top: 13px;
  left: 14.32049560546875px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-started-button {
  gap: 8px;
  display: flex;
  padding: 14px 24px;
  overflow: hidden;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-blue-700);
}
.vicon-started-text06 {
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
.vicon-started-navbar-interactive {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.vicon-started-navlink5 {
  display: contents;
}
.vicon-started-logo {
  width: 50px;
  height: 50px;
  text-decoration: none;
}
.vicon-started-desktop-menu {
  display: flex;
}
.vicon-started-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.vicon-started-input {
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
.vicon-started-content {
  gap: 8px;
  display: flex;
  flex-grow: 1;
  align-self: center;
  align-items: center;
}
.vicon-started-text08 {
  color: var(--dl-color-gray-500);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 125%;
}
.vicon-started-button1 {
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
.vicon-started-profile {
  gap: 2px;
  display: flex;
  align-items: center;
}
.vicon-started-thq-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.vicon-started-dropdown-toggle {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius2);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.vicon-started-rectangle25 {
  width: 50px;
  height: 50px;
  border-radius: 33px;
}
.vicon-started-chevrondown {
  width: 30px;
  height: 30px;
}
.vicon-started-dropdown-list {
  left: 0%;
  width: max-content;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.vicon-started-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.vicon-started-dropdown-toggle1 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.vicon-started-dropdown-toggle1:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-blue-600);
}
.vicon-started-user {
  width: 20px;
  height: 20px;
}
.vicon-started-profile1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.vicon-started-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.vicon-started-dropdown-toggle2 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.vicon-started-dropdown-toggle2:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-red-400);
}
.vicon-started-logout {
  width: 20px;
  height: 20px;
}
.vicon-started-logout1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.vicon-started-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.vicon-started-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media (max-width: 1600px) {
  .vicon-started-profile {
    top: 29px;
    right: 92px;
    position: static;
  }
}
@media (max-width: 767px) {
  .vicon-started-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .vicon-started-desktop-menu {
    display: none;
  }
  .vicon-started-burger-menu {
    display: flex;
  }
}
@media (max-width: 479px) {
  .vicon-started-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
}
</style>
