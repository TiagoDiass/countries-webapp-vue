import Vue from 'vue';
import axios from 'axios';

Vue.use({
  install(Vue) {
    Vue.prototype.$httpClient = axios.create({
      baseURL: 'https://restcountries.com/v2'
    })
  }
})