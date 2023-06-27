import Swal from "sweetalert2";

export const state = () => ({
  errors: null,
  isLoading: false,
});

export const actions = {
  login({ commit }, dataLogin) {
    this.$auth
      .loginWith("local", { data: dataLogin })
      .then(() => {
        Swal.fire({
          position: "center",
          type: "success",
          title: "Berhasil Login",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          type: "error",
          title: "Username atau Password salah",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  },
};

export const mutations = {
  setError(state, data) {
    state.errors = data;
  },
  setIsLoading(state, data) {
    state.isLoading = data;
  },
};
