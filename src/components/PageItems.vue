<template>
  <div>
    <div class="text-3xl mt-2 font-bold lg:hidden block">{{ pageTitle }}</div>
    <ul class="break-words">
      <li v-for="(pageItem, index) in pageItems" :key="index" class="border-b border-gray-200 mx-2 py-1">
        <a href="#about-scripts-showcase" class="text-xs font-bold text-gray-400 hover:text-blue-700 about-menu-link">{{ pageItem.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup="ts">
import { defineProps } from 'vue'

defineProps({
  pageTitle: {
    type: String,
    required: true
  },
  pageItems: {
    type: Array,
    required: true
  }
})
</script>