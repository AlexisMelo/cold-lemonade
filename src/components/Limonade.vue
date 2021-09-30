<template>
  <div class="hello">
    <h1>Cold lemonade c'est vraiment trop cool</h1>
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
</style>