<template>
<div id="app">

</div>
  <Sidenav />
  <Stok />
  <Footer />
  <router-view />
</template>

<script lang="ts">
import Sidenav from './components/includes/Sidenav.vue'
import Stok from './includes/includes/Stok.vue'
import Footer from './components/includes/Footer.vue'
import $ from 'jquery';

export default {
  name: "App",
  components: {
    Sidenav,
    Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:ital,wght@0,300;1,400&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
