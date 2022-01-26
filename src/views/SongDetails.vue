<template>
  <div v-if="song">
    COUCOU
    {{ song }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Song from "@/assets/ts/Song";
import SongsList from "@/assets/ts/SongsList";

export default defineComponent({
  name: "SongDetails",
  data() {
    return {
      song: null as unknown as Song
    }
  },
  mounted() {
    let id: number = Number.parseInt(this.$route.params.id as string)
    if (!Number.isNaN(id)) {
      for (const song of SongsList) {
        if (song.id === id) {
          this.song = song
        }
      }
    }

    if (!this.song) {
      this.$router.push("/chanson-existe-pas")
    }

  }
})
</script>

<style scoped>

</style>