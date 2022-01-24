<template>
  <div class="reseaux_container">
    <a title="Facebook" class="reseau_link" href="https://www.facebook.com/limonadefroide/" target="_blank">
      <img alt="Lien vers la page Facebook du groupe" class="facebook"
           src="@/assets/img/brand_logos/facebook.png">
    </a>
    <a title="Instagram" class="reseau_link" href="https://www.instagram.com/cold_lim/" target="_blank">
      <img alt="Lien vers la page Instagram du groupe" class="instagram"
           src="@/assets/img/brand_logos/instagram.png">
    </a>
    <a title="Bandcamp" class="reseau_link" href="https://coldlemonade.bandcamp.com/" target="_blank">
      <img alt="Lien vers la page Bandcamp du groupe" class="bandcamp"
           src="@/assets/img/brand_logos/bandcamp.png">
    </a>
    <a title="Youtube" class="reseau_link" href="https://www.youtube.com/c/ColdLemonade" target="_blank">
      <img alt="Lien vers la chaîne Youtube du groupe" class="youtube"
           src="@/assets/img/brand_logos/youtube.png">
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "SocialNetworks"
})
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

.reseaux_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 12%;
  padding-top: 20px;
  padding-bottom: 20px;

  @media(min-width: $breakpoint-sm) {
    padding-left: 20%;
    padding-right: 20%;
    height: 10%;
  }

  @media(min-width: $breakpoint-l) {
    height: 12%;
  }

  .reseau_link {
    height: 100%;
    text-align: center;
    padding: 5px;
    transition: padding 0.3s ease;

    img {
      height: 100%;
    }

    &:hover {
      position: relative;
      padding: 1px;
    }
  }
}
</style>