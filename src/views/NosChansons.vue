<template>
  <h1 class="pageHeading">Nos chansons</h1>
  <div class="containerSearchBar">
    <input class="searchSongInput" placeholder="Chercher une chanson..." type="text" v-model="songTitleHint"/>
  </div>
  <div class="box">
    <SongCard v-for="(song, index) in songsFiltered"
              :key="index"
              :song="song"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SongCard from "@/components/SongCard.vue";
import SongsList from "@/assets/ts/SongsList";
import Song from "@/assets/ts/Song";

export default defineComponent({
  name: "NosChansons",
  components: {SongCard},
  data() {
    return {
      songTitleHint: "",
      songs: SongsList
    }
  },
  computed: {
    songsFiltered(): Song[] {
      return this.songs.filter((e) => { return e.title.toLowerCase().includes(this.songTitleHint.toLowerCase())})
    }
  }
})
</script>

<style scoped lang="scss">
@import "~@/assets/scss/headings.scss";
@import "~@/assets/scss/main.scss";

.box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  row-gap: 30px;
  column-gap: 15px;
  padding: 50px 0 ;
}

.containerSearchBar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.searchSongInput {
  font-size: 1.2rem;
  text-align: center;
  width: 90%;

  @media (min-width: $breakpoint-md) {
    width: 70%;
  }

  @media (min-width: $breakpoint-l) {
    width: 50%;
  }

  margin-right: 15px;
}
</style>