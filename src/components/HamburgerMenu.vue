<template>
  <div class="menuMain">
    <div class="menu-container-trigger"><img src="@/assets/img/illustrations/fleur.png"></div>
    <div class="hidden_menu">
      <div class="image-menu-item-container appear-animation-1 disappear-animation-1"><img src="@/assets/img/illustrations/glacon.png"></div>
      <div class="image-menu-item-container appear-animation-2 disappear-animation-2"><img src="@/assets/img/illustrations/glacon.png"></div>
      <div class="image-menu-item-container appear-animation-3 disappear-animation-3"><img src="@/assets/img/illustrations/glacon.png"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu"
}
</script>

<style lang="scss" scoped>
$animation-type-appear : ease-out;
$animation-type-disappear : ease-in;

.menuMain {
  display: flex;
  justify-content: center;
  align-items: center;
  position: -webkit-sticky;
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;

  .image-menu-item-container:first-of-type {
    margin-top: 10px;
  }

  .menu-container {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    img {
      width: 100%;
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
    }

  }

  .hidden_menu {
    opacity: 1;
    position: absolute;
    margin-top: 110px;
    top: 0;
  }
}

.menuMain:hover {
  .hidden_menu {
    opacity: 1;
  }

  .image-menu-item-container {
    left: 0;
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