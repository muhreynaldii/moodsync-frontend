<template>
  <div class="login-container">
    <bg-bawah rootClassName="bg-bawah-root-class-name4"></bg-bawah>
    <bg-atas rootClassName="bg-atas-root-class-name"></bg-atas>
    <img
      alt="pastedImage"
      src="/assets/pastedimage-sw6m.svg"
      class="login-texture"
    />
    <div class="login-container1">
      <img
        alt="pastedImage"
        src="/assets/pastedimage-6h5o.svg"
        class="login-login-pic"
      />
      <form class="login-form">
        <div class="login-login-form">
          <div class="login-frame1419">
            <span class="login-text HeadlineType23"><span>Welcome!</span></span>
            <img
              alt="Rectangle364091"
              src="/assets/rectangle364091-dmx9-200h.png"
              class="login-rectangle36"
            />
          </div>
          <div class="login-frame1420">
            <div class="login-input-field">
              <span class="login-text02"><span>Email</span></span>
              <div class="login-input">
                <img
                  alt="mailopenI409"
                  src="/assets/mailopeni409-37g.svg"
                  class="login-mailopen"
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  autofocus
                  autocomplete="email"
                  class="login-textinput input"
                />
              </div>
            </div>
            <div class="login-input-field1">
              <span class="login-text04"><span>Password</span></span>
              <div class="login-input1">
                <div class="login-content">
                  <img
                    alt="lockclosedI409"
                    src="/assets/lockclosedi409-nyxk.svg"
                    class="login-lockclosed"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    minlength="8"
                    size="16"
                    class="login-textinput1 input"
                  />
                </div>
              </div>
            </div>
            <div class="login-frame1421">
              <div class="login-checkbox">
                <input type="checkbox" checked="true" />
                <div class="login-labelhelpertext">
                  <span class="login-text06"><span>Remember me</span></span>
                </div>
              </div>
            </div>
          </div>
          <nuxt-link to="/dashboard-dosen" id="ButtonLogin" class="login-button">
            <span class="login-text08"><span>Login</span></span>
          </nuxt-link>
          <div class="login-frame1423">
            <img
              alt="Rectangle304091"
              src="/assets/rectangle304091-d5ir-200h.png"
              class="login-rectangle30"
            />
            <span class="login-text10"><span>or</span></span>
            <img
              alt="Rectangle314132"
              src="/assets/rectangle314132-cpgr-200h.png"
              class="login-rectangle31"
            />
          </div>
          <div class="login-frame12">
            <div class="login-frame16">
              <img
                alt="GoogleOriginal4091"
                src="/assets/googleoriginal4091-ili.svg"
                class="login-google-original"
              />
            </div>
            <div class="login-frame17">
              <img
                alt="FacebookOriginal4091"
                src="/assets/facebookoriginal4091-pmve.svg"
                class="login-facebook-original"
              />
            </div>
            <div class="login-frame18">
              <img
                alt="LinkedInOriginal4091"
                src="/assets/linkedinoriginal4091-ddfk.svg"
                class="login-linked-in-original"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    <app-nav rootClassName="nav-root-class-name"></app-nav>
  </div>
</template>

<script>
import BgBawah from '../components/bg-bawah'
import BgAtas from '../components/bg-atas'
import AppNav from '../components/nav'

export default {
  name: 'Login',
  components: {
    BgBawah,
    BgAtas,
    AppNav,
  },
  head: {
    title: 'Login - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'Login - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.login-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.login-texture {
  top: 18px;
  right: 15px;
  width: 158px;
  height: 110px;
  position: absolute;
}
.login-container1 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 1170px;
  bottom: 0px;
  height: 856px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.login-login-pic {
  top: 0px;
  left: 0px;
  width: 741px;
  height: 856px;
  position: absolute;
}
.login-form {
  top: 223px;
  right: 0px;
  width: 332px;
  height: 484px;
  display: flex;
  position: absolute;
}
.login-login-form {
  gap: 20px;
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.login-frame1419 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.login-text {
  color: var(--dl-color-blue-600);
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
  font-stretch: normal;
}
.login-rectangle36 {
  width: 80px;
  height: 1px;
  border-radius: 32.999996185302734px;
}
.login-frame1420 {
  gap: 12px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.login-input-field {
  gap: 8px;
  width: 308px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.login-text02 {
  color: var(--dl-color-gray-9003);
  height: auto;
  font-size: 14px;
  align-self: stretch;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.login-input {
  gap: 10px;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  padding-top: var(--dl-space-space-halfunit);
  border-color: rgba(209, 213, 219, 1);
  border-style: solid;
  border-width: 1px;
  padding-left: var(--dl-space-space-halfunit);
  border-radius: 8px;
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: var(--dl-color-gray-50);
}
.login-mailopen {
  width: 16px;
  height: 16px;
  margin-left: var(--dl-space-space-halfunit);
}
.login-textinput {
  border-width: 0px;
}
.login-input-field1 {
  gap: 8px;
  width: 308px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.login-text04 {
  color: var(--dl-color-gray-9003);
  height: auto;
  font-size: 14px;
  align-self: stretch;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.login-input1 {
  gap: 10px;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  padding-top: var(--dl-space-space-halfunit);
  border-color: rgba(209, 213, 219, 1);
  border-style: solid;
  border-width: 1px;
  padding-left: var(--dl-space-space-halfunit);
  border-radius: 8px;
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: var(--dl-color-gray-50);
}
.login-content {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-items: center;
}
.login-lockclosed {
  width: 16px;
  height: 16px;
  margin-left: var(--dl-space-space-halfunit);
}
.login-textinput1 {
  border-width: 0px;
}
.login-frame1421 {
  gap: 12px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.login-checkbox {
  gap: 8px;
  display: flex;
  align-self: center;
  align-items: center;
  border-radius: 4px;
}
.login-labelhelpertext {
  gap: 2px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.login-text06 {
  color: var(--dl-color-gray-9003);
  height: auto;
  font-size: 14px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 14px;
  font-stretch: normal;
  text-decoration: none;
}
.login-button {
  gap: 8px;
  width: 307px;
  display: flex;
  padding: 12px 20px;
  overflow: hidden;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-blue-600);
}
.login-text08 {
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
.login-frame1423 {
  gap: 22px;
  width: 308px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.login-rectangle30 {
  width: auto;
  height: 1px;
  flex-grow: 1;
  border-radius: 32.999996185302734px;
}
.login-text10 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 14px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.login-rectangle31 {
  width: auto;
  height: 1px;
  flex-grow: 1;
  border-radius: 32.999996185302734px;
}
.login-frame12 {
  gap: 14px;
  display: flex;
  align-items: flex-start;
}
.login-frame16 {
  width: 96px;
  height: 37px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(243, 244, 246, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 17px;
  background-color: rgba(255, 255, 255, 1);
}
.login-google-original {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 24px;
  bottom: 0px;
  height: 24px;
  margin: auto;
  position: absolute;
}
.login-frame17 {
  width: 96px;
  height: 37px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(243, 244, 246, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 17px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.login-facebook-original {
  width: 24px;
  height: 24px;
  align-self: center;
}
.login-frame18 {
  width: 96px;
  height: 37px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(243, 244, 246, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 17px;
  background-color: rgba(255, 255, 255, 1);
}
.login-linked-in-original {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 24px;
  bottom: 0px;
  margin: auto;
  position: absolute;
  align-self: center;
}
</style>
