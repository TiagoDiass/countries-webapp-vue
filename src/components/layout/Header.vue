<template>
  <header>
    <h1>Where in the world?</h1>

    <button class="lightTheme" v-if="darkTheme" @click="darkTheme = false">
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

  watch: {
    darkTheme(newValue) {
      if (newValue === true) {
        document.querySelector('#app').classList.add('dark');
      } else {
        document.querySelector('#app').classList.remove('dark');
      }
    },
  },
};
</script>
