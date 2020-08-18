<template>
  <div class="country">
    {{ country.name }}
    <img style="width: 150px;" :src="country.flag" />
  </div>
</template>

<script>
export default {
  props: {
    country: Object,
  },
};
</script>

<style></style>
