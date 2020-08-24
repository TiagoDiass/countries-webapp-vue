<template>
  <div class="home view">
    <div class="search-row">
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input v-model="countryName" type="text" placeholder="Search for a country..." @keydown.enter="searchByName" />
      </div>

      <!-- Filtro de Região -->
      <div class="region-filter">
        <select name="region" id="region" @change="selectRegion" v-model="region">
          <option :value="null">Filter by Region</option>
          <option v-for="region in regions" :key="region.value" :value="region.value">{{ region.placeholder }}</option>
        </select>
      </div>
    </div>

    <div class="countries-container" v-if="countries.length">
      <Country v-for="(country, index) in countries" :key="index" :country="country"></Country>
    </div>
    <div class="error-container" v-else>
      <h1>We haven't found any country with this name</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Country from '../components/Country';

export default {
  name: 'Home',

  data: () => ({
    region: null,
    countryName: '',
  }),

  components: {
    Country,
  },

  beforeMount() {
    this.fetchCountries();
  },

  computed: {
    ...mapGetters({
      countries: 'countries/getCountries',
    }),

    regions() {
      return [
        {
          placeholder: 'Africa',
          value: 'africa',
        },
        {
          placeholder: 'America',
          value: 'americas',
        },
        {
          placeholder: 'Asia',
          value: 'asia',
        },
        {
          placeholder: 'Europe',
          value: 'europe',
        },
        {
          placeholder: 'Oceania',
          value: 'oceania',
        },
      ];
    },
  },

  methods: {
    ...mapActions({
      fetchCountries: 'countries/fetchCountries',
      fetchCountriesByRegion: 'countries/fetchCountriesByRegion',
      fetchCountryByName: 'countries/fetchCountryByName',
    }),

    selectRegion() {
      this.countryName = '';
      this.fetchCountriesByRegion(this.region);
    },

    async searchByName() {
      if (!this.countryName) {
        return this.fetchCountries();
      }

      const response = await this.fetchCountryByName(this.countryName);
      this.region = null;

      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      if (response.status == 404) {
        Toast.fire({
          icon: 'error',
          title: response.message,
        });
      } else {
        Toast.fire({
          icon: 'success',
          title: response.message,
        });
      }
    },
  },
};
</script>
