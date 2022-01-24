<template>
  <div class="youtubeVideoContainer">
    <iframe class="youtubeVideo"
            :src="link" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            frameborder="0"
            title="Vidéo youtube des Cold Lemonade au tremplin phénix normandie 2021">
    </iframe>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "YoutubeVideo",
  data() {
    return {
      link: "https://www.youtube.com/embed/0Om1RtvtzyE",

    }
  }
})
</script>

<style scoped lang="scss">
@import "~@/assets/scss/main.scss";

.youtubeVideoContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25%;
  margin-top: 25%;

  @media (min-width: $breakpoint-sm) {
    margin-top: 20%;
    margin-bottom: 20%;
  }

  @media (min-width: $breakpoint-md) {
    margin-bottom: 5%;
    margin-top: 5%;
  }
}

.youtubeVideo {
  border-radius: 10px;
  background-color: red;
  width: 329px;
  height: 184px;

  @media (min-width: $breakpoint-sm) {
    width: 470px;
    height: 264px;
  }

  @media (min-width: $breakpoint-md) {
    width: 672px;
    height: 378px;
  }

}
</style>