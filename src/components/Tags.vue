<template>
  <div class="flex flex-wrap">
    <span v-for="(tag, index) in tags" :key="index" class="my-1 p-1 text-xs flex">
       <a :href="tag.url" target="_blank" class="no-underline">
            <span :class="['p-1', tag.github ? 'bg-gray-800' : 'bg-gray-400']">
                <Icon v-if="tag.github" name="grommet-icons:github" class="text-white" />
                <span class="text-white">{{ tag.category }}</span>
            </span>
            <span class="text-white p-1" :style="{ backgroundColor: getRandomColor() }">{{ tag.item }}</span>
        </a>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

interface Tag {
  category: string;
  item: string;
  url: string;
  github?: boolean;
}

defineProps({
  tags: {
    type: Array as () => Tag[],
    required: false
  }
})

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>