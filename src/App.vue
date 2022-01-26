<template>
  <HamburgerMenu />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";

export default defineComponent({
  name: 'App',
  components: {HamburgerMenu}
});

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
@import "~@/assets/scss/main.scss";

body, html, #app {
  height: 100%;
  margin: 0;
  font-family: 'Merriweather', serif;
}

main, body {
  margin: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
}

.container {
  width: 100%;
  margin: auto;
  min-height: 100%;
  padding-top: 25px;
  padding-bottom: 25px;

  @media (min-width: $breakpoint-sm) {
    width: 90%;
  }

  @media (min-width: $breakpoint-md) {
    width: 80%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>