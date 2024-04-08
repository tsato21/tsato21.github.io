<template>
  <div class="flex flex-wrap space-x-2">
    <span v-for="(badge, index) in badges" :key="index" class="mt-1">
       <a :href="badge.url" target="_blank">
        <img :src="badge.src" :alt="badge.alt" />
      </a>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Badge {
  url?: string;
  src: string;
  alt: string;
}

defineProps({
  badges: {
    type: Array as () => Badge[],
    required: true
  }
})
</script>