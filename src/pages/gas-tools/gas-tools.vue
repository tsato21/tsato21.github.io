<template>
  <div>
    <UBreadcrumbs :breadCrumbs="breadCrumbs" />
    <div class="mb-5 pt-2 grid grid-cols-12 gap-3 md:gap-6">
      <!-- Section A (left in lg/ first in md/sm/xs) -->
      <div
        class="col-span-12 order-1 lg:col-span-2 lg:order-1 md:col-span-12 md:order-1 sm:col-span-12 sm:order-1"
      >
        <div class="mb-5 pt-5">
          <!-- contents -->
        </div>
      </div>

      <!-- Section B (middle in lg/ third in md/sm/xs) -->
      <div
        class="col-span-12 order-3 lg:col-span-8 lg:order-2 md:col-span-12 md:order-3 sm:col-span-12 sm:order-3"
      >
        <div class="text-3xl mt-2 font-bold lg:block hidden">
          GAS Tools (Google Apps Script Tools)
        </div>
        <div class="mb-5 p-5 bottom-shadow">
          <div
            v-for="(tool, index) in tools"
            :key="index"
            class="mt-5 flex justify-between items-start"
          >
            <div class="flex-grow">
              <div class="text-2xl font-semibold">{{ tool.title }}</div>
              <p class="mt-2">{{ tool.description }}</p>
            </div>
            <NuxtLink :to="tool.filePath" class="self-start ml-5">
              <button class="mt-3 px-4 py-2 bg-gray-400 text-white rounded">
                Details
              </button>
            </NuxtLink>
          </div>
        </div>
        <p>
          <Icon name="material-symbols:calendar-month-sharp" /> Last updated:
          {{ date }}
        </p>
      </div>

      <!-- Section C (right in lg/ second in md/sm/xs) -->
      <div
        class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2"
      >
        <div class="text-3xl mt-2 font-bold lg:hidden block">GAS Tools</div>
        <div class="mb-5 pt-5">
          <!-- contents -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UBreadcrumbs from '~/components/UBreadcrumbs.vue';
import { ref } from 'vue';

const breadCrumbs = [{ label: 'Home', to: '/' }, { label: 'GAS Tools' }];

const tools = ref([
  // tool 1
  {
    title: 'Manual Builder',
    description:
      'Automates the creation of work manuals by extracting essential details from Google Slides and organizing them into Google Sheets, improving workflow efficiency.',
    filePath: '/gas-tools/each-tool/manual-builder.en',
  },
  {
    title: 'Course Data Aligner',
    description:
      'Harmonizes course data between two Google Sheets with differing structures, effectively resolving data structure inconsistencies across multiple stakeholders.',
    filePath: '/gas-tools/each-tool/course-data-aligner',
  },
  {
    title: 'Row Height Optimizer',
    description:
      'Automates the adjustment of row heights in Google Sheets, enhancing readability and visual appeal by providing adequate padding for cell contents.',
    filePath: '/gas-tools/each-tool/row-height-optimizer',
  },
  {
    title: 'SheetMail Sync',
    description:
      'Automates email extraction and categorization in Gmail, and updates Google Sheets with the information.',
    filePath: '/gas-tools/each-tool/sheet-mail-sync',
  },
]);

let date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date('2024-04-06'))
);

useHead({
  title: 'GAS Projects',
});
</script>

<style scoped></style>
