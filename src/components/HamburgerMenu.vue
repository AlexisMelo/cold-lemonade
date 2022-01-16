<template>
  <div class="menuMain">
    <router-link to="/" class="menu-container-trigger"><img src="@/assets/img/illustrations/fleur.png"></router-link>
    <div class="hidden_menu">
      <router-link to="/qui-sommes-nous" class="image-menu-item-container appear-animation-1 disappear-animation-1"><img
          src="@/assets/img/illustrations/glacon.png">
        <div class="linkTitle">Qui sommes nous ?</div>
      </router-link>
      <router-link to="/nos-chansons" class="image-menu-item-container appear-animation-2 disappear-animation-2"><img
          src="@/assets/img/illustrations/citron.png">
        <div class="linkTitle">Nos chansons</div>
      </router-link>
      <router-link to="/contact" class="image-menu-item-container appear-animation-3 disappear-animation-3"><img
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

$animation-type-appear: ease-out;
$animation-type-disappear: ease-in;

.menuMain {
  display: flex;
  justify-content: center;
  align-items: center;
  position: -webkit-sticky;
  position: absolute;
  top: 20px;
  left: 20px;

  .image-menu-item-container:first-of-type {
    margin-top: 10px;
  }

  .menu-container {
    cursor: pointer;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    position: relative;
    text-decoration: none;

    img {
      width: 100px;
    }
  }

  .menu-container-trigger {
    @extend .menu-container;
    $color: $cl_light_blue;

    cursor: pointer;
    z-index: 1;
    background-color: $color;
    border-radius: 50%;
    box-shadow: 0 0 10px $color;

    &:hover {
      box-shadow: 0 0 20px $color;
    }
  }

  .image-menu-item-container {
    @extend .menu-container;
    $color: $cl_light_green;

    margin-bottom: 10px;
    background-color: $color;
    position: relative;
    left: -200px;

    &.disappear-animation-1 {
      transition: left 0.7s $animation-type-disappear;
    }

    &.disappear-animation-2 {
      transition: left 0.5s $animation-type-disappear;
    }

    &.disappear-animation-3 {
      transition: left 0.3s $animation-type-disappear;
    }

    &:hover {
      box-shadow: 0 0 15px $color;
      width: auto;

      .linkTitle {
        display: flex;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
      }
    }

    .linkTitle {
      height: 100%;
      color: $cl_dark_green;
      background-color: $color;
      display: none;
      transition: opacity 0.5s;
      white-space: nowrap;
    }
  }

  .hidden_menu {
    position: absolute;
    margin-top: 100px;
    top: 0;
    left: -130px;
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
    transition: left 0.2s $animation-type-appear;
  }

  .appear-animation-2 {
    transition: left 0.4s $animation-type-appear;
  }

  .appear-animation-3 {
    transition: left 0.6s $animation-type-appear;
  }
}
</style>