<template>
  <div class="home view">
    <div class="search-row">
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div class="region-filter">
        <select name="region" id="region">
          <option :value="null" selected>Filter by Region</option>
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

  components: {
    Country,
  },

  mounted() {
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
          value: 'Africa',
        },
        {
          placeholder: 'America',
          value: 'America',
        },
        {
          placeholder: 'Asia',
          value: 'Asia',
        },
        {
          placeholder: 'Europe',
          value: 'Europe',
        },
        {
          placeholder: 'Oceania',
          value: 'Oceania',
        },
      ];
    },
  },

  methods: {
    ...mapActions({
      fetchCountries: 'countries/fetchCountries',
    }),
  },
};
</script>
