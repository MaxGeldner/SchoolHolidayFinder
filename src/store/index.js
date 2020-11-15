import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    apiKey: '',
    selectedCountries: [],
  },
  mutations: {
    setApiKey(state, key) {
      state.apiKey = key;
    },
    setSelectedCountries(state, countries) {
      state.selectedCountries = countries;
    },
  },
  actions: {
  },
  modules: {
  },
});
