<template>
  <div>
    <p>{{ count }} x 2 = {{ double }}</p>
    <button @click="count++">Inc</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const count = ref(1);
const double = computed(() => count.value * 2);
</script>

<style scoped></style>
