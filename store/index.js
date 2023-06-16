export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },
};
