export const state = () => ({
  overview: {},
  summary: {},
});

export const getters = {
  overview: (state) => {
    return state.overview;
  },
  summary: (state) => {
    return state.summary;
  },
};

export const mutations = {
  SET_OVERVIEW(state, param) {
    state.overview = param;
  },
  SET_SUMMARY(state, param) {
    state.summary = param;
  },
};

export const actions = {
  fetchOverview({ commit }) {
    commit("SET_OVERVIEW", {});
    return this.$axios
      .$get("api/recognition/overview")
      .then(({ data }) => {
        commit("SET_OVERVIEW", data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log("Error fetch overview", error.message);
      });
  },
  fetchSummary({ commit }) {
    commit("SET_SUMMARY", {});
    return this.$axios
      .$get("api/recognition/summary")
      .then(({ data }) => {
        commit("SET_SUMMARY", data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log("Error fetch summary", error.message);
      });
  },
};
