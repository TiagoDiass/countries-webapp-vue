import Vue from 'vue';

const initialState = () => ({
  countries: [],
  country: {},
});

const state = initialState();

const getters = {
  getCountries(state) {
    return state.countries;
  },

  getCurrentCountry(state) {
    return state.country;
  },
};

const actions = {
  async fetchCountries({ commit }) {
    const url = '/v2/all';
    const response = await Vue.prototype.$httpClient.get(url);

    commit('setCountries', response.data);
  },

  async fetchCurrentCountry({ commit }, id) {
    const url = `/v2/alpha/${id}`;
    const response = await Vue.prototype.$httpClient.get(url);

    commit('setCurrentCountry', response.data);
  },

  async fetchCountriesByRegion({ commit }, region) {
    const url = `/v2/region/${region}`;
    const response = await Vue.prototype.$httpClient.get(url);

    commit('setCountries', response.data);
  },
};

const mutations = {
  setCountries(state, data) {
    state.countries = data;
  },

  setCurrentCountry(state, data) {
    state.country = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
