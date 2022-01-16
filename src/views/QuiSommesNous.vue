<template>
  <div>
    <h1 class="pageHeading">Qui sommes-nous ?</h1>
    <div class="contenu">
      <div class="containerPortrait">
        <img alt="Photo portrait des Cold Lemonade" src="@/assets/img/photos/qui-sommes-nous.jpg">
      </div>
      <div class="description">
        "Deux ados qui chantent avec une qui joue de la guitare et une qui chante plus aigu que l'autre et qui joue du violon aussi un peu des fois"

        <br><br>

        Lauréates du Tremplin Phénix Normandie 2021
      </div>
    </div>

  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "QuiSommesNous"
})
</script>

<style scoped lang="scss">
@import "~@/assets/scss/headings.scss";
@import "~@/assets/scss/main.scss";

.contenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  padding-top: 5%;

  @media (min-width: $breakpoint-l) {
    flex-direction: row;
  }
}

.description {
  text-align: center;
  padding-top: 5%;

  @media (min-width: $breakpoint-l) {
    padding: 0 5%;
  }
}

.containerPortrait {
  width: 80%;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  @media (min-width: $breakpoint-md) {
    width: 50%;
  }

  @media (min-width: $breakpoint-xl) {
    width: 25%;
  }
}
</style>