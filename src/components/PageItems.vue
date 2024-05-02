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
        >
          {{ pageItem.label }}
        </a>
        <ul v-if="pageItem.subItems && pageItem.subItems.length">
          <li
            v-for="(subItem, subIndex) in pageItem.subItems"
            :key="`sub-${subIndex}`"
            class="border-t border-gray-100 ms-4 py-1"
          >
            <a
              @click="goTo(subItem.id)"
              class="text-xs font-bold text-gray-400 hover:text-blue-700 cursor-pointer about-menu-link"
            >
              {{ subItem.label }}
            </a>
          </li>
        </ul>
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
  subItems?: PageItem[];
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