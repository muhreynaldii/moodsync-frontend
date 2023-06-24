<template>
  <main class="h-screen overflow-hidden bg-white">
    <div class="flex">
      <aside class="ml-24 flex h-screen w-[60%] items-center justify-center">
        <div class="h-fit w-fit">
          <img src="~img/connect-with-emotion.png" alt="connect-with-emotion" />
        </div>
      </aside>
      <section
        class="z-10 mr-[38px] flex h-screen w-[40%] items-center justify-center 2xl:justify-center"
      >
        <FormulateForm
          class="z-50 mt-[32px] flex flex-col"
          @submit="handleLogin"
        >
          <h1 class="text-center text-[17.25px] text-[#1C64F2] xl:text-[23px]">
            Welcome!
          </h1>
          <FormulateInput
            name="username"
            type="text"
            label="Username"
            input-class="h-[31px] w-[231px] xl:w-[308px] xl:h-[42px] rounded-md border border-Gray-300 py-[9px] px-3 mt-[6px] text-[10.5px] xl:text-[14px]"
            class="mt-[16px]"
            placeholder="Username"
            validation="required"
            error-class="text-red-700 text-xs mb-1"
            :validation-messages="{
              required: 'Email harus diisi',
            }"
            error-behavior="submit"
            label-class="font-medium text-[10.5px] xl:text-[14px] text-[#111928]"
          />
          <div class="relative">
            <FormulateInput
              :type="showPassword ? 'text' : 'password'"
              name="password"
              label="Password"
              input-class="h-[31px] w-[231px] xl:w-[308px] xl:h-[42px] rounded-md border border-Gray-300 py-[9px] px-3 xl:py-3 xl:px-4 mt-[6px] text-[10.5px] xl:text-[14px]"
              class="mt-[16px]"
              placeholder="Password"
              validation="required"
              validation-name="Password"
              error-class="text-red-700 text-xs mb-1"
              :validation-messages="{
                required: 'Password harus diisi',
              }"
              error-behavior="submit"
              label-class="font-medium text-[10.5px] xl:text-[14px] text-[#111928]"
            />
            <div
              @click="toggleShow"
              class="absolute right-[6px] top-[51px] scale-75 xl:right-3 xl:top-[55px] xl:scale-100"
            >
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
            input-class="h-[36px] w-[231px] xl:w-[308px] xl:h-[48px] self-center rounded-md bg-[#1C64F2] font-medium text-white text-[12px] xl:text-base"
            class="mt-[28px]"
          />
        </FormulateForm>
      </section>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Login",
  layout: "waves",
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
  methods: {
    ...mapActions("session", ["login"]),
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    handleLogin(data) {
      this.login(data);
    },
  },
  computed: {
    ...mapState("session", ["isLoading", "errors"]),
  },
};
</script>
