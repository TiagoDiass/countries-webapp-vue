<template>
  <div class="country" @click="navigateToDetail">
    <div class="country-flag" :style="`background-image: url(${country.flag})`"></div>
    <div class="country-data">
      <h3>{{ country.name }}</h3>

      <!-- Population -->
      <div class="data-row">
        <span class="label">Population:</span> <span class="data">{{ country.population.toLocaleString() }}</span>
      </div>

      <!-- Region -->
      <div class="data-row">
        <span class="label">Region:</span> <span class="data">{{ country.region }}</span>
      </div>

      <!-- Capital -->
      <div class="data-row">
        <span class="label">Capital:</span> <span class="data">{{ country.capital }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: Object,
  },

  methods: {
    navigateToDetail() {
      this.$router.push({
        path: `countries/${this.country.alpha2Code}`,
      });
    },
  },
};
</script>

<style></style>
