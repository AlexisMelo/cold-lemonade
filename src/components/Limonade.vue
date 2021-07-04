<template>
  <div class="hello">
    <h1>Cold lemonade c'est vraiment trop cool</h1>
    <div class="images">
      <img src="@/assets/amelie.png" alt="bg">
      <img src="@/assets/limonade.jpeg" alt="limonade cool">
      <img src="@/assets/lauriane.png" alt="bg aussi">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Limonade',
  props: {
    msg: String,
  },
});
</script>

<style lang="scss">
.hello {
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.images {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;

  img {
    padding: 1em;
  }
}
</style>