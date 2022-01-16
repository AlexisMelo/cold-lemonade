<template>
  <HamburgerMenu />
  <router-view/>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";

export default defineComponent({
  name: 'App',
  components: {HamburgerMenu}
});

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

body, html, #app {
  height: 100%;
  margin: 0;
  font-family: 'Merriweather', serif;
  background-color: white;
}

main, body {
  margin: 0;
}
*, *:before, *:after {
  box-sizing: border-box;
}
</style>