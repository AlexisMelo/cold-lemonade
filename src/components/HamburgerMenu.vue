<template>
  <div class="menuMain">
    <router-link class="menu-container-trigger" to="/"><img alt="Image menu déroulant" src="@/assets/img/illustrations/fleur.png"></router-link>
    <div class="hidden_menu">
      <router-link class="image-menu-item-container appear-animation-1" to="/qui-sommes-nous"><img
          src="@/assets/img/illustrations/glacon.png">
        <div class="linkTitle">Qui sommes nous ?</div>
      </router-link>
      <router-link class="image-menu-item-container appear-animation-2" to="/nos-chansons"><img
          src="@/assets/img/illustrations/citron.png">
        <div class="linkTitle">Nos chansons</div>
      </router-link>
      <router-link class="image-menu-item-container appear-animation-3" to="/contact"><img
          src="@/assets/img/illustrations/quartier_citron.png">
        <div class="linkTitle">Contact</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HamburgerMenu"
})
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";

$animation-type-appear: ease-in;
$animation-type-disappear: ease-in;

$menu-size: 50px;
$menu-size-sm: 50px;
$menu-size-md: 75px;
$menu-size-l: 100px;

.menuMain {
  display: flex;
  justify-content: center;
  align-items: center;
  position: -webkit-sticky;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;

  .image-menu-item-container:first-of-type {
    margin-top: 10px;
  }

  .menu-container {
    cursor: pointer;
    height: $menu-size-sm;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    text-decoration: none;

    img {
      width: $menu-size-sm;
    }

    @media (min-width: $breakpoint-sm) {
      height: $menu-size-md;

      img {
        width: $menu-size-md;
      }
    }

    @media (min-width: $breakpoint-md) {
      height: $menu-size-l;

      img {
        width: $menu-size-l;
      }
    }


  }

  .menu-container-trigger {
    @extend .menu-container;
    $color: $cl_light_blue;

    cursor: pointer;
    z-index: 1;
    background-color: $color;
    border-radius: 50%;
    box-shadow: 0 0 15px 3px $color;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 0 15px 8px $color;
    }
  }

  .image-menu-item-container {
    @extend .menu-container;
    $color: $cl_light_green;
    margin-bottom: 10px;
    background-color: $color;
    position: relative;
    left: -200px;
    border-radius: 5px;
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    -o-transition: background-color 2s ease-out;
    box-shadow: 0 0 0 0 $color;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 0 20px $color;
      filter: brightness(0.8);
    }

    .linkTitle {
      height: 100%;
      color: black;
      display: flex;
      transition: opacity 0.5s;
      white-space: nowrap;
      padding-left: 10px;
      padding-right: 10px;
      align-items: center;
    }
  }

  .hidden_menu {
    position: absolute;
    margin-top: $menu-size-sm;
    top: 0;
    left: -130px;
    transition: left 0.2s $animation-type-appear;

    @media (min-width: $breakpoint-sm) {
      margin-top: $menu-size-md;
    }

    @media (min-width: $breakpoint-md) {
      margin-top: $menu-size-l;
    }
  }
}

.menuMain:hover {

  .hidden_menu {
    left: 0;
  }

  .image-menu-item-container {
    left: 0;
    opacity: 1;
  }

  .appear-animation-1 {
    transition: left 0.3s $animation-type-appear;
  }

  .appear-animation-2 {
    transition: left 0.5s $animation-type-appear;
  }

  .appear-animation-3 {
    transition: left 0.7s $animation-type-appear;
  }
}
</style>