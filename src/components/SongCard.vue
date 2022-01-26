<template>
  <div class="card" @click="goToDetails">
    <div class="imgBx">
      <img :alt="`Image d'illustration pour la chanson ${song.title} des Cold Lemonade`" :src="song.img">
    </div>
    <div class="details">
      <h2>{{ song.title }}</h2>
      <div>{{ song.year }}</div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import Song from "@/assets/ts/Song";

export default defineComponent({
  name: "SongCard",
  props: {
    song: {
      type: Object as PropType<Song>,
      required: true
    }
  },
  setup(props) {
    const theme = ref({
      color: props.song.color
    })

    return {
      theme
    }
  },
  methods: {
    goToDetails() {
      this.$router.push(`/chanson/${this.song.id}`)
    }
  }
})
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/main.scss";
$card_color: v-bind('theme.color');

.card {
  position: relative;
  width: 300px;
  height: 350px;
  background: $card_color;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
  cursor: pointer;
}

.card:before,
.card:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: $card_color;
  transition: 0.5s;
  z-index: -1;
}

.card:hover:before {
  transform: rotate(20deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, .2);
}

.card:hover:after {
  transform: rotate(10deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, .2);
}

.card .imgBx {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 80px;
  right: 10px;
  background: $card_color;
  transition: 0.5s;
  z-index: 1;
}

.card:hover .imgBx {
  bottom: 10px;
}

.card .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .details {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  background-color: white;
}

.card .details h2 {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 100%;
  color: $cl_orange;
  text-transform: uppercase;
}

.card .details div {
  font-weight: 500;
  font-size: 100%;
  color: royalblue;
  display: block;
}
</style>