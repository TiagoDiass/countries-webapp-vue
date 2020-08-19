<template>
  <div id="app">
    <div id="container">
      <Header></Header>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
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
