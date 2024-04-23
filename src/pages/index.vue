<template>
  <div>
    <div class="mb-5 p-4 grid grid-cols-12 gap-3 md:gap-6">
      <!-- Part A: Displayed at left on large screen and at first on other sized screen) -->
      <div
        class="col-span-12 order-1 lg:col-span-2 lg:order-1 md:col-span-12 md:order-1 sm:col-span-12 sm:order-1"
      >
        <div class="mb-5 pt-5">
          <!-- contents -->
        </div>
      </div>

      <!-- Part B: Displayed at middle on large screen and at third on other sized screen) -->
  <div class="col-span-12 order-3 lg:col-span-8 lg:order-2 md:col-span-12 md:order-3 sm:col-span-12 sm:order-3">
    <div class="flex justify-between flex-wrap mb-5 border-b-2 pb-2">
      <div class="w-full md:w-1/2 mb-3 p-2" v-for="tool in tools" :key="tool.name">
        <img :src="tool.banner" :alt="tool.name" class="w-80 h-72">
        <div class="text-2xl font-bold my-3">{{ tool.name }}</div>
        <p class="mt-2">{{ tool.description }}</p>
        <NuxtLink :to="tool.filePath">
          <button class="mt-3 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
            Details
          </button>
        </NuxtLink>
      </div>
    </div>
    <div class="mt-2">
      <div class="text-2xl font-bold">Feel free to utilize the tools!</div>
      <p class="text-lg mb-2">
        As for the source code, you can always access it via <a href="https://github.com/tsato21" class="text-lightblue underline hover:text-darkblue">GitHub repositories</a>.
        </p>
    </div>
  </div>

      <!-- Part C: Displayed at right on large screen and at second on other sized screen) -->
      <div
        class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2"
      >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tools = ref([
  {
    name: 'Manual Builder',
    description: 'Automates the creation of work manuals by extracting essential details from Google Slides and organizing them into Google Sheets, improving workflow efficiency.',
    banner: '/banner/manual-builder.png',
    filePath: '/gas-tools/each-tool/manual-builder.en',
  },
  {
    name: 'SheetTasker',
    description: 'Manages tasks in Google Sheets, output target tasks in Google Docs, and send reminders via Gmail, allowing for efficient task management on Google Workspace.',
    banner: '/banner/sheet-tasker.png',
    filePath: '/gas-tools/each-tool/sheet-tasker.en',
  },
]);
</script>