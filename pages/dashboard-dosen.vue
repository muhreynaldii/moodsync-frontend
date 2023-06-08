<template>
  <div class="dashboard-dosen-container">
    <bg-bawah rootClassName="bg-bawah-root-class-name8"></bg-bawah>
    <side-bar-full-dash-active
      rootClassName="side-bar-full-dash-active-root-class-name1"
    ></side-bar-full-dash-active>
    <div class="dashboard-dosen-dashboard">
      <span class="dashboard-dosen-text"><span>Dashboard</span></span>
      <div class="dashboard-dosen-dashboard-content">
        <div class="dashboard-dosen-frame1413">
          <div class="dashboard-dosen-container1">
            <div class="dashboard-dosen-jp">
              <span class="dashboard-dosen-text02 HeadlineType23">
                <span>Pertemuan</span>
              </span>
              <img
                alt="academiccap4162"
                src="/assets/academiccap4162-bp8.svg"
                class="dashboard-dosen-academiccap"
              />
              <span class="dashboard-dosen-text04">4</span>
            </div>
          </div>
          <div class="dashboard-dosen-jm">
            <span class="dashboard-dosen-text05 HeadlineType23">
              <span>Jumlah Mahasiswa</span>
            </span>
            <img
              alt="users4162"
              src="/assets/users4162-aaxl.svg"
              class="dashboard-dosen-users"
            />
            <span class="dashboard-dosen-text07"><span>31</span></span>
          </div>
        </div>
        <div class="dashboard-dosen-statistic-top">
          <span class="dashboard-dosen-text09"><span>Statistic</span></span>
          <div class="dashboard-dosen-statistic">
            <div class="dashboard-dosen-presensi">
              <span class="dashboard-dosen-text11">
                <span>Presensi Mahasiswa</span>
              </span>
              <div class="dashboard-dosen-chart">
                <BarChart style="width: 100%; height: 100%;"></BarChart>
              </div>
            </div>
            <div class="dashboard-dosen-emosi-mahasiswa">
              <span class="dashboard-dosen-text13">
                <span>Emosi Mahasiswa</span>
              </span>
              <div class="dashboard-dosen-chart1">
                <RadarChart style="width: 100%; height: 100%;"></RadarChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <header data-thq="thq-navbar" class="dashboard-dosen-navbar-interactive">
      <nuxt-link to="/dashboard-dosen" class="dashboard-dosen-navlink">
        <img
          alt="Rectangle84462"
          src="/assets/logo-200w.png"
          class="dashboard-dosen-logo"
        />
      </nuxt-link>
      <div
        data-thq="thq-navbar-nav"
        data-role="Nav"
        class="dashboard-dosen-desktop-menu"
      >
        <nav
          data-thq="thq-navbar-nav-links"
          data-role="Nav"
          class="dashboard-dosen-nav"
        >
          <div class="dashboard-dosen-search">
            <div class="dashboard-dosen-input">
              <div class="dashboard-dosen-content">
                <img
                  alt="searchI416"
                  src="/assets/searchi416-d8ss.svg"
                  class="dashboard-dosen-search1"
                />
                <span class="dashboard-dosen-text15 leadingTighttextSmfontNormal">
                  <span>Search</span>
                </span>
              </div>
            </div>
            <button class="dashboard-dosen-button">
              <img
                alt="searchI416"
                src="/assets/searchi416-1gp7.svg"
                class="dashboard-dosen-search2"
              />
            </button>
          </div>
        </nav>
      </div>
      <div class="dashboard-dosen-profile">
        <div
          data-thq="thq-dropdown"
          class="dashboard-dosen-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            class="dashboard-dosen-dropdown-toggle"
          >
            <img
              alt="Rectangle254162"
              src="/assets/rectangle254162-743-200h.png"
              class="dashboard-dosen-rectangle25"
            />
            <img
              alt="chevrondown4162"
              src="/assets/chevrondown4162-p2v.svg"
              class="dashboard-dosen-chevrondown"
            />
          </div>
          <ul data-thq="thq-dropdown-list" class="dashboard-dosen-dropdown-list">
            <li
              data-thq="thq-dropdown"
              class="dashboard-dosen-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                class="dashboard-dosen-dropdown-toggle1"
              >
                <img
                  alt="user5862"
                  src="/assets/user5862-kh17n.svg"
                  class="dashboard-dosen-user"
                />
                <span class="dashboard-dosen-profile1 BodyType16">Profile</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              class="dashboard-dosen-dropdown1 list-item"
            >
              <nuxt-link to="/login">
                <div
                  data-thq="thq-dropdown-toggle"
                  class="dashboard-dosen-dropdown-toggle2"
                >
                  <img
                    alt="logout5862"
                    src="/assets/logout5862-woq.svg"
                    class="dashboard-dosen-logout"
                  />
                  <span class="dashboard-dosen-logout1 BodyType16">Logout</span>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div data-thq="thq-burger-menu" class="dashboard-dosen-burger-menu">
        <svg viewBox="0 0 1024 1024" class="dashboard-dosen-icon">
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
  name: 'DashboardDosen',
  components: {
  },
  head: {
    title: 'Dashboard-Dosen - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'Dashboard-Dosen - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.dashboard-dosen-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.dashboard-dosen-dashboard {
  gap: 31px;
  top: 130px;
  left: 0px;
  right: 0px;
  width: 1296px;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
.dashboard-dosen-text {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 33px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.dashboard-dosen-dashboard-content {
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.dashboard-dosen-frame1413 {
  gap: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-dosen-container1 {
  flex: 0 0 auto;
  width: 387px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.dashboard-dosen-jp {
  width: 387px;
  height: 193px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 36.557621002197266px;
  background-color: var(--dl-color-default-white);
}
.dashboard-dosen-text02 {
  top: 27px;
  left: 129px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  text-align: left;
  line-height: 120.00000476837158%;
}
.dashboard-dosen-academiccap {
  top: -60px;
  left: 295px;
  width: 110px;
  height: 110px;
  position: absolute;
}
.dashboard-dosen-text04 {
  top: 51px;
  left: 153px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 117.27472686767578px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.dashboard-dosen-jm {
  width: 388px;
  height: 192px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 36.557621002197266px;
  background-color: var(--dl-color-default-white);
}
.dashboard-dosen-text05 {
  top: 28px;
  left: 83px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  text-align: left;
  line-height: 120.00000476837158%;
  border-radius: 36.557621002197266px;
  background-color: var(--dl-color-default-white);
}
.dashboard-dosen-users {
  top: -60px;
  left: 296px;
  width: 110px;
  height: 110px;
  position: absolute;
}
.dashboard-dosen-text07 {
  top: 52px;
  left: 136px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 117.27472686767578px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.dashboard-dosen-statistic-top {
  gap: 16px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dashboard-dosen-text09 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 23px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.dashboard-dosen-statistic {
  gap: 18px;
  display: flex;
  align-items: flex-start;
}
.dashboard-dosen-presensi {
  width: 672px;
  height: 426px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 0;
  padding-top: var(--dl-space-space-fourunits);
  border-radius: 36.557621002197266px;
  background-color: var(--dl-color-default-white);
}
.dashboard-dosen-text11 {
  top: 26px;
  left: 23px;
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
.dashboard-dosen-chart {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.dashboard-dosen-emosi-mahasiswa {
  width: 606px;
  height: 426px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  flex-shrink: 0;
  padding-top: var(--dl-space-space-fourunits);
  border-radius: 36.557621002197266px;
  justify-content: center;
  background-color: var(--dl-color-default-white);
}
.dashboard-dosen-text13 {
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
.dashboard-dosen-chart1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.dashboard-dosen-navbar-interactive {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.dashboard-dosen-navlink {
  display: contents;
}
.dashboard-dosen-logo {
  width: 50px;
  height: 50px;
  text-decoration: none;
}
.dashboard-dosen-desktop-menu {
  display: flex;
}
.dashboard-dosen-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.dashboard-dosen-search {
  gap: 10px;
  width: 995px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-shrink: 0;
}
.dashboard-dosen-input {
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
.dashboard-dosen-content {
  gap: 8px;
  display: flex;
  flex-grow: 1;
  align-self: center;
  align-items: center;
}
.dashboard-dosen-search1 {
  width: 18px;
  height: 18px;
}
.dashboard-dosen-text15 {
  color: var(--dl-color-gray-500);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 125%;
}
.dashboard-dosen-button {
  width: auto;
  height: auto;
  display: flex;
  padding: 8px;
  align-self: center;
  box-sizing: content-box;
  align-items: center;
  flex-shrink: 0;
  border-color: #95b3f3;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  justify-content: center;
  background-color: var(--dl-color-primary-600);
}
.dashboard-dosen-search2 {
  width: 20px;
  height: 20px;
}
.dashboard-dosen-profile {
  gap: 2px;
  display: flex;
  align-items: center;
}
.dashboard-dosen-thq-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.dashboard-dosen-dropdown-toggle {
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
.dashboard-dosen-rectangle25 {
  width: 50px;
  height: 50px;
  border-radius: 33px;
}
.dashboard-dosen-chevrondown {
  width: 30px;
  height: 30px;
}
.dashboard-dosen-dropdown-list {
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
.dashboard-dosen-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.dashboard-dosen-dropdown-toggle1 {
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
.dashboard-dosen-dropdown-toggle1:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-blue-600);
}
.dashboard-dosen-user {
  width: 20px;
  height: 20px;
}
.dashboard-dosen-profile1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.dashboard-dosen-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.dashboard-dosen-dropdown-toggle2 {
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
.dashboard-dosen-dropdown-toggle2:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-red-400);
}
.dashboard-dosen-logout {
  width: 20px;
  height: 20px;
}
.dashboard-dosen-logout1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.dashboard-dosen-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.dashboard-dosen-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media(max-width: 1600px) {
  .dashboard-dosen-profile {
    top: 29px;
    right: 92px;
    position: static;
  }
}
@media(max-width: 1200px) {
  .dashboard-dosen-dashboard {
    top: 153px;
    flex: 1;
    left: 206px;
    width: 829px;
    position: absolute;
    flex-wrap: wrap;
  }
  .dashboard-dosen-statistic {
    align-items: center;
    flex-direction: column;
  }
  .dashboard-dosen-search {
    width: 787px;
  }
}
@media(max-width: 767px) {
  .dashboard-dosen-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .dashboard-dosen-desktop-menu {
    display: none;
  }
  .dashboard-dosen-burger-menu {
    display: flex;
  }
}
@media(max-width: 479px) {
  .dashboard-dosen-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
}
</style>
