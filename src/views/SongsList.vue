<template>
  <h1 class="pageHeading">Nos chansons</h1>
  <div class="containerSearchBar">
    <input class="searchSongInput" placeholder="Chercher une chanson..." type="text" v-model="songTitleHint"/>
  </div>
  <transition-group name="animated-list" tag="div" class="box">
      <SongCard v-for="song in songsFiltered"
                :key="song.id"
                :song="song"
                class="animated-list-item"
      />
  </transition-group>
  <transition name="no-song-fade">
    <div class="no-song-container" v-if="songsFiltered.length === 0">
      <p>
        Aucune chanson ne correspond à la recherche ...
      </p>
      <img src="@/assets/img/illustrations/sad_thumbleweed.png" alt="Aucune image trouvée">
    </div>
  </transition>
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

.animated-list-item {
  transition: all 0.4s;
}

.animated-list-enter-from,
.animated-list-leave-to {
  opacity: 0;
}

.animated-list-leave-active {
  transition: all 0.4s;
  opacity: 0;
  position: fixed;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  text-align: center;
}

.no-song-fade-enter-active {
  transition: opacity 1s ease;
}

.no-song-fade-enter-from, .no-song-fade-leave-to {
  opacity: 0;
}

.no-song-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10%;

  img {
    height: 150px;
  }
}
</style>