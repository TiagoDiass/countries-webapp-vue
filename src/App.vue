<template>
  <div id="app">
    <div id="container">
      <Header></Header>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header';

export default {
  components: {
    Header,
  },
};
</script>
