<template>
  <div class="home">
    <Limonade />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Limonade from "@/components/Limonade.vue";

export default defineComponent({
  name: 'Home',
  components: {
    Limonade,
  },
});
</script>
