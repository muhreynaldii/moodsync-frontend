const state = () => ({
  datetime: "",
});

const getters = {
  datetime: (state) => {
    return state.datetime;
  },
};

const mutations = {
  SET_DATETIME(state, param) {
    state.datetime = param;
  },
};

const actions = {
  changeDatetime({ commit }, { datetime }) {
    commit("SET_DATETIME", datetime);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
