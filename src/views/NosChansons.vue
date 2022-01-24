<template>
  <h1 class="pageHeading">Nos chansons</h1>
  <div class="containerSearchBar">
    <input class="searchSongInput" placeholder="Chercher une chanson..." type="text" v-model="songTitleHint"/>
  </div>
  <div class="box">
    <SongCard v-for="(song, index) in songsFiltered"
              :key="index"
              :img="song.img"
              :subtitle="song.subtitle"
              :title="song.title"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SongCard from "@/components/SongCard.vue";

interface Song {
  title: string,
  subtitle: string,
  img: string
}

export default defineComponent({
  name: "NosChansons",
  components: {SongCard},
  data() {
    return {
      songTitleHint: "",
      songs: [
        {
          title: "I hope",
          subtitle: "2018",
          img: require("@/assets/img/illustrations_chansons/i_hope.jpg")
        },
        {
          title: "Saurochoria",
          subtitle: "2018",
          img: require("@/assets/img/illustrations_chansons/saurochoria.jpg")
        },
        {
          title: "Just the way you are",
          subtitle: "Cover - 2021",
          img: require("@/assets/img/illustrations/fleur.png")
        },
        {
          title: "Sunflower",
          subtitle: "Cover - 2019",
          img: require("@/assets/img/illustrations/quartier_citron.png")
        },
        {
          title: "Help",
          subtitle: "Cover - 2019",
          img: "https://1.bp.blogspot.com/-dsoQZXMnikY/VzaDXzRPilI/AAAAAAAAR40/cgSudK0IRo81zXNLHvU0aB2ngegrFoVhwCLcB/s1600/DSCF0948.JPG"
        },
        {
          title: "Someday",
          subtitle: "Cover - 2019",
          img: require("@/assets/img/illustrations/citron.png")
        },
        {
          title: "My smile is extinct",
          subtitle: "Cover - 2019",
          img: require("@/assets/img/illustrations/quartier_citron.png")
        },
        {
          title: "Ambitious Song",
          subtitle: "2018",
          img: require("@/assets/img/illustrations/glacon.png")
        }
      ] as Song[]
    }
  },
  computed: {
    songsFiltered(): Song[] {
      return this.songs.filter((e) => { return e.title.toLowerCase().includes(this.songTitleHint.toLowerCase())})
    }
  }
})
</script>

<style scoped>
@import "~@/assets/scss/headings.scss";

.box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  row-gap: 30px;
  column-gap: 15px;
  margin-top: 50px;
}

.containerSearchBar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.searchSongInput {
  font-size: 1.2rem;
  text-align: center;
  width: 30%;
  margin-right: 15px;
}
</style>