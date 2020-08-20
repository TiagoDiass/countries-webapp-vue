<template>
  <div class="country-detail view">
    <button class="back-button" @click="navigateBack">
      <i class="fas fa-arrow-left"></i>
      Back
    </button>

    <div class="country-details">
      <div class="country-flag" :style="`background-image: url(${country.flag});`"></div>

      <div class="country-area">
        <h1>{{ country.name }}</h1>

        <div class="country-data">
          <div class="left-box">
            <div class="data-row">
              <span class="label">Native Name: </span>
              <span class="data">{{ country.nativeName }}</span>
            </div>

            <div class="data-row">
              <span class="label">Population: </span>
              <span class="data">{{ country.population.toLocaleString() }}</span>
            </div>

            <div class="data-row">
              <span class="label">Region: </span>
              <span class="data">{{ country.region }}</span>
            </div>

            <div class="data-row">
              <span class="label">Sub Region: </span>
              <span class="data">{{ country.subregion }}</span>
            </div>

            <div class="data-row">
              <span class="label">Capital: </span>
              <span class="data">{{ country.capital }}</span>
            </div>
          </div>

          <div class="right-box">
            <div class="data-row">
              <span class="label">Top Level Domain: </span>
              <span class="data">{{ country.topLevelDomain[0] }}</span>
            </div>

            <div class="data-row">
              <span class="label">Currencies: </span>
              <span class="data" v-for="(currency, index) in country.currencies" :key="index">
                {{ currency.code }}{{ index == country.currencies.length - 1 ? '.' : ', ' }}
              </span>
            </div>

            <div class="data-row">
              <span class="label">Languages: </span>
              <span class="data" v-for="(language, index) in country.languages" :key="index">
                {{ language.name }}{{ index == country.languages.length - 1 ? '.' : ', ' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Border countries here -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: {
    id: String,
  },

  beforeMount() {
    this.fetchCountry(this.id);
  },

  computed: {
    ...mapGetters({
      country: 'countries/getCurrentCountry',
    }),
  },

  methods: {
    ...mapActions({
      fetchCountry: 'countries/fetchCurrentCountry',
    }),

    navigateBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
