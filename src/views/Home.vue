<template>
  <div class="home view">
    <div class="search-row">
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search for a country..." />
      </div>

      <!-- Filtro de Região -->
      <div class="region-filter">
        <select name="region" id="region" @change="selectRegion" v-model="region">
          <option :value="null">Filter by Region</option>
          <option v-for="region in regions" :key="region.value" :value="region.value">{{ region.placeholder }}</option>
        </select>
      </div>
    </div>

    <div class="countries-container">
      <Country v-for="(country, index) in countries" :key="index" :country="country"></Country>
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
    }),

    selectRegion() {
      this.fetchCountriesByRegion(this.region);
    },
  },
};
</script>
