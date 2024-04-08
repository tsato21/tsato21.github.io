<template>
  <div>
    <ul class="break-words">
      <li
        v-for="(pageItem, index) in pageItems"
        :key="index"
        class="border-b border-gray-200 mx-2 py-1"
      >
        <a
          @click="goTo(pageItem.id)"
          class="text-xs font-bold text-gray-400 hover:text-blue-700 cursor-pointer about-menu-link"
          >{{ pageItem.label }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import VueScrollTo from 'vue-scrollto';

interface PageItem {
  label: string;
  id: string;
}

const props = defineProps({
  pageItems: {
    type: Array as () => PageItem[],
    required: true,
  },
});

const goTo = (id: string) => {
  VueScrollTo.scrollTo('#' + id, 500);
};
</script>
