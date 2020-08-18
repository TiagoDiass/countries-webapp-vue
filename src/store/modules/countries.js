import Vue from 'vue';

const initialState = () => ({
  countries: [],
});

const state = initialState();

const getters = {
  getCountries(state) {
    return state.countries;
  },
};

const actions = {
  async fetchCountries({ commit }) {
    const url = '/v2/all';
    const response = await Vue.prototype.$httpClient.get(url);

    commit('setCountries', response.data);
  },
};

const mutations = {
  setCountries(state, data) {
    state.countries = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
