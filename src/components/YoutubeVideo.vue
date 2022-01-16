<template>
  <div class="youtubeVideoContainer">
    <iframe :height="height"
            :src="link" :width="width" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
      width: 560,
      height: 315
    }
  }
})
</script>

<style scoped>
.youtubeVideoContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  margin-top: 5%;
}
</style>