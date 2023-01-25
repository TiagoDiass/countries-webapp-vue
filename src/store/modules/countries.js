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
    const url = '/all';
    const response = await Vue.prototype.$httpClient.get(url);

    commit('setCountries', response.data);
  },

  async fetchCurrentCountry({ commit }, id) {
    const url = `/alpha/${id}`;
    const response = await Vue.prototype.$httpClient.get(url);

    commit('setCurrentCountry', response.data);
  },

  async fetchCountriesByRegion({ commit }, region) {
    const url = `/region/${region}`;
    const response = await Vue.prototype.$httpClient.get(url);

    commit('setCountries', response.data);
  },

  async fetchCountryByName({ commit }, name) {
    const url = `/name/${name}`;
    let objectToReturn = {};

    await Vue.prototype
      .$httpClient(url)
      .then(response => {
        commit('setCountries', response.data);
        objectToReturn = {
          status: 200,
          message: 'Success',
        };
      })
      .catch(() => {
        commit('setCountries', []);
        objectToReturn = {
          status: 404,
          message: "We haven't found any country",
        };
      });

    return objectToReturn;
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
