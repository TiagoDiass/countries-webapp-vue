<template>
  <header>
    <h1>Where in the world?</h1>

    <button v-if="darkTheme" @click="darkTheme = false">
      <i class="fas fa-sun"></i>
      Light Theme
    </button>
    <button v-else @click="darkTheme = true">
      <i class="fas fa-moon"></i>
      Dark Theme
    </button>
  </header>
</template>

<script>
export default {
  data: () => ({
    darkTheme: false,
  }),
};
</script>
