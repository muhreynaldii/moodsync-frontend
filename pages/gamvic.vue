<template>
  <div class="gamvic-container">
    <aside class="gamvic-side-bar-full">
      <div class="gamvic-side-bar">
        <nuxt-link to="/dashboard-dosen" class="gamvic-navlink">
          <div class="gamvic-dashboard">
            <img
              alt="chartpie4162"
              src="/assets/chartpie4462-g92g.svg"
              class="gamvic-chartpie"
            />
          </div>
        </nuxt-link>
        <nuxt-link to="/vicon-started" class="gamvic-navlink1">
          <div class="gamvic-conference">
            <img
              alt="cash4162"
              src="/assets/cash4162-e06k.svg"
              class="gamvic-cash"
            />
          </div>
        </nuxt-link>
        <nuxt-link to="/daftar-mahasiswa" class="gamvic-navlink2">
          <div class="gamvic-class">
            <img
              alt="usergroup4162"
              src="/assets/usergroup4162-5fld.svg"
              class="gamvic-usergroup"
            />
          </div>
        </nuxt-link>
        <nuxt-link to="/notification" class="gamvic-navlink3">
          <div class="gamvic-notif">
            <img
              alt="bell4162"
              src="/assets/bell4162-7mh8.svg"
              class="gamvic-bell"
            />
          </div>
        </nuxt-link>
        <nuxt-link to="/gamvic" class="gamvic-navlink4">
          <div class="gamvic-gamvic">
            <img
              alt="bell4162"
              src="/assets/presentationchartbarblue5562-ype.svg"
              class="gamvic-gamvic1"
            />
          </div>
        </nuxt-link>
      </div>
    </aside>
    <header data-thq="thq-navbar" class="gamvic-navbar-interactive">
      <nuxt-link to="/dashboard-dosen" class="gamvic-navlink5">
        <img
          alt="Rectangle84462"
          src="/assets/logo-200w.png"
          class="gamvic-logo"
        />
      </nuxt-link>
      <div data-thq="thq-navbar-nav" data-role="Nav" class="gamvic-desktop-menu">
        <nav data-thq="thq-navbar-nav-links" data-role="Nav" class="gamvic-nav">
          <div class="gamvic-search">
            <div class="gamvic-input">
              <div class="gamvic-content">
                <img
                  alt="searchI416"
                  src="/assets/searchi416-d8ss.svg"
                  class="gamvic-search1"
                />
                <span class="gamvic-text leadingTighttextSmfontNormal">
                  <span>Search</span>
                </span>
              </div>
            </div>
            <button class="gamvic-button">
              <img
                alt="searchI416"
                src="/assets/searchi416-1gp7.svg"
                class="gamvic-search2"
              />
            </button>
          </div>
        </nav>
      </div>
      <div class="gamvic-profile">
        <div data-thq="thq-dropdown" class="gamvic-thq-dropdown list-item">
          <div data-thq="thq-dropdown-toggle" class="gamvic-dropdown-toggle">
            <img
              alt="Rectangle254162"
              src="/assets/rectangle254162-743-200h.png"
              class="gamvic-rectangle25"
            />
            <img
              alt="chevrondown4162"
              src="/assets/chevrondown4162-p2v.svg"
              class="gamvic-chevrondown"
            />
          </div>
          <ul data-thq="thq-dropdown-list" class="gamvic-dropdown-list">
            <li data-thq="thq-dropdown" class="gamvic-dropdown list-item">
              <div data-thq="thq-dropdown-toggle" class="gamvic-dropdown-toggle1">
                <img
                  alt="user5862"
                  src="/assets/user5862-kh17n.svg"
                  class="gamvic-user"
                />
                <span class="gamvic-profile1 BodyType16">Profile</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" class="gamvic-dropdown1 list-item">
              <nuxt-link to="/login">
                <div
                  data-thq="thq-dropdown-toggle"
                  class="gamvic-dropdown-toggle2"
                >
                  <img
                    alt="logout5862"
                    src="/assets/logout5862-woq.svg"
                    class="gamvic-logout"
                  />
                  <span class="gamvic-logout1 BodyType16">Logout</span>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div data-thq="thq-burger-menu" class="gamvic-burger-menu">
        <svg viewBox="0 0 1024 1024" class="gamvic-icon">
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
  name: 'Gamvic',
  head: {
    title: 'Gamvic - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'Gamvic - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.gamvic-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.gamvic-side-bar-full {
  gap: 382px;
  top: 238px;
  left: 28px;
  width: auto;
  height: auto;
  display: flex;
  position: fixed;
  align-items: center;
  margin-right: var(--dl-space-space-threeunits);
  flex-direction: column;
}
.gamvic-side-bar {
  gap: 21px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.gamvic-navlink {
  display: contents;
}
.gamvic-dashboard {
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
.gamvic-chartpie {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.gamvic-navlink1 {
  display: contents;
}
.gamvic-conference {
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
.gamvic-cash {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.gamvic-navlink2 {
  display: contents;
}
.gamvic-class {
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
.gamvic-usergroup {
  top: 9px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.gamvic-navlink3 {
  display: contents;
}
.gamvic-notif {
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
.gamvic-bell {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.gamvic-navlink4 {
  display: contents;
}
.gamvic-gamvic {
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
.gamvic-gamvic1 {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.gamvic-navbar-interactive {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.gamvic-navlink5 {
  display: contents;
}
.gamvic-logo {
  width: 50px;
  height: 50px;
  text-decoration: none;
}
.gamvic-desktop-menu {
  display: flex;
}
.gamvic-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.gamvic-search {
  gap: 10px;
  width: 995px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-shrink: 0;
}
.gamvic-input {
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
.gamvic-content {
  gap: 8px;
  display: flex;
  flex-grow: 1;
  align-self: center;
  align-items: center;
}
.gamvic-search1 {
  width: 18px;
  height: 18px;
}
.gamvic-text {
  color: var(--dl-color-gray-500);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 125%;
}
.gamvic-button {
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
.gamvic-search2 {
  width: 20px;
  height: 20px;
}
.gamvic-profile {
  gap: 2px;
  display: flex;
  align-items: center;
}
.gamvic-thq-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.gamvic-dropdown-toggle {
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
.gamvic-rectangle25 {
  width: 50px;
  height: 50px;
  border-radius: 33px;
}
.gamvic-chevrondown {
  width: 30px;
  height: 30px;
}
.gamvic-dropdown-list {
  left: 0%;
  width: max-content;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #D9D9D9;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.gamvic-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.gamvic-dropdown-toggle1 {
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
.gamvic-dropdown-toggle1:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-blue-600);
}
.gamvic-user {
  width: 20px;
  height: 20px;
}
.gamvic-profile1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.gamvic-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.gamvic-dropdown-toggle2 {
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
.gamvic-dropdown-toggle2:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-red-400);
}
.gamvic-logout {
  width: 20px;
  height: 20px;
}
.gamvic-logout1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.gamvic-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.gamvic-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media(max-width: 1600px) {
  .gamvic-profile {
    top: 29px;
    right: 92px;
    position: static;
  }
}
@media(max-width: 1200px) {
  .gamvic-search {
    width: 787px;
  }
}
@media(max-width: 767px) {
  .gamvic-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .gamvic-desktop-menu {
    display: none;
  }
  .gamvic-burger-menu {
    display: flex;
  }
}
@media(max-width: 479px) {
  .gamvic-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
}
</style>
