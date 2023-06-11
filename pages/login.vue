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
        <FormulateForm class="mt-[32px] flex flex-col">
          <h1 class="text-center text-[23px] text-[#1C64F2]">Welcome!</h1>
          <!-- Email -->
          <FormulateInput
            name="email"
            type="email"
            label="Email"
            input-class="h-[42px] w-[300px] sm:w-[414px] rounded-lg border-2 border-primary600 p-5 text-black"
            class="mt-[16px]"
            placeholder="Enter your email address"
            validation="required"
            error-class="text-red-700 text-xs mb-1"
            :validation-messages="{
              required: 'Email harus diisi',
            }"
            error-behavior="submit"
          />
          <!-- Password -->
          <div class="relative">
            <FormulateInput
              :type="showPassword ? 'text' : 'password'"
              name="password"
              label="Password"
              input-class="h-[42px] w-[300px] sm:w-[414px] rounded-lg border-2 border-primary600 p-5 text-black"
              class="mt-[16px]"
              placeholder="Password"
              validation="required"
              validation-name="Password"
              error-class="text-red-700 text-xs mb-1"
              :validation-messages="{
                required: 'Password harus diisi',
              }"
              error-behavior="submit"
            />
            <div class="absolute right-3 top-[52px]">
              <svg
                v-if="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
              <svg
                v-if="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M4.52 5.934L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066zm10.237 10.238l-1.464-1.464a3 3 0 0 1-4.001-4.001L7.828 9.243a5 5 0 0 0 6.929 6.929zM7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592l-3.86-3.86a5 5 0 0 0-5.68-5.68L7.974 3.761z"
                />
              </svg>
            </div>
          </div>
          <FormulateInput
            type="submit"
            name="Login"
            input-class="h-[50px] w-[300px] sm:w-[414px] self-center rounded-lg bg-[#1C64F2] font-bold text-white"
            class="mt-[28px]"
          />
        </FormulateForm>
      </form>
    </div>
    <app-nav rootClassName="nav-root-class-name"></app-nav>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
    };
  },
  head: {
    title: "Login | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "Login | Moodsync",
      },
    ],
  },
};
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
  width: 100%;
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
  width: 100%;
  height: auto;
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
