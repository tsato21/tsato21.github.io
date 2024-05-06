<template>
  <div class="my-3 mx-3">
    <img :src="imgSrc" alt="Tool Banner" class="w-64 h-64" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
});
</script>
