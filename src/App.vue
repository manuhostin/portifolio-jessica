<script setup>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
<HeaderComp />
<router-view />
<FooterComp />
</template>

<style>
body {
  background-color: black;
  margin: 0;
  padding: 0;
}

#app {
  background-color: black;
  min-height: 100vh;
}
</style>

