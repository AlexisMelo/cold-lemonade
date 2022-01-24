<template>
<div>
  <h1 class="pageHeading">Nos chansons</h1>
  <div class="box">
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />
    <SongCard />

  </div>

</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SongCard from "@/components/SongCard.vue";

export default defineComponent({
  name: "NosChansons",
  components: {SongCard}
})
</script>

<style scoped>
@import "~@/assets/scss/headings.scss";
.box{
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  row-gap: 30px;
  column-gap: 15px;
  margin: 0 auto;
}
</style>