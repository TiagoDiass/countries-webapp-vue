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
  </div>
</template>

<script>
export default {
  name: 'Home',

  computed: {
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
};
</script>
