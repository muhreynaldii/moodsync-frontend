export const state = () => ({
  errors: null,
  isLoading: false,
});

export const actions = {
  login({ commit }, dataLogin) {
    commit("setIsLoading", true);
    this.$auth
      .loginWith("local", { data: { user: dataLogin } })
      .catch((err) => {
        commit("setError", err.response.data.message);
      })
      .finally(() => commit("setIsLoading", false));
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
