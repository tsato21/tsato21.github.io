<template>
  <div>
    <UBreadcrumbs :bread-crumbs="breadCrumbs" />
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
          Github Actions
        </div>
        <div class="mb-5 p-5">
          <div class="flex justify-center space-x-2">
            <button
              @click="prevPage"
              :disabled="page === 0"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-l flex items-center justify-center"
              :class="{ 'opacity-50 cursor-not-allowed': page === 0 }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              @click="nextPage"
              :disabled="page >= pageCount - 1"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-r flex items-center justify-center"
              :class="{
                'opacity-50 cursor-not-allowed': page >= pageCount - 1,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div
            v-for="(tool, index) in paginatedData"
            :key="index"
            class="mt-5 flex justify-between items-start border-b-2 pb-5"
          >
            <div class="flex-grow">
              <div class="text-2xl font-semibold">
                {{ tool.title }}
              </div>
              <p class="mt-2">
                {{ tool.description }}
              </p>
            </div>
            <NuxtLink :to="tool.filePath" class="self-start ml-5">
              <button
                class="mt-3 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Details
              </button>
            </NuxtLink>
          </div>
          <div></div>
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
        <div class="text-3xl mt-2 font-bold ms-3 lg:hidden block">
          Github Actions
        </div>
        <div class="mb-5 pt-5">
          <!-- contents -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const breadCrumbs = [{ label: 'Home', to: '/' }, { label: 'Github Actions' }];

const tools = ref([
  {
    title: 'Prod Test Auto-Management',
    description: 'Automates workflows for coding, testing, and deployment of Google Apps Script Projects. It leverages GitHub Actions to manage test environments and seamlessly deploy completed projects to the production environment.',
    filePath: '/github-actions/each-action/prod-test-auto-management',
  },
]);

const date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date('2024-06-11'))
);

useHead({
  title: 'Github Actions',
});

const page = ref(0);
onMounted(() => {
  const storedPage = localStorage.getItem('lastPage');
  if (storedPage) {
    page.value = Number(storedPage);
  }
});

onUnmounted(() => {
  localStorage.setItem('lastPage', String(page.value));
});

const pageSize = ref(5);

const paginatedData = computed(() => {
  const start = page.value * pageSize.value;
  const end = start + pageSize.value;
  return tools.value.slice(start, end);
});

const pageCount = computed(() => {
  return Math.ceil(tools.value.length / pageSize.value);
});

const prevPage = () => {
  if (page.value > 0) {
    page.value--;
  }
};
const nextPage = () => {
  if (page.value < pageCount.value - 1) {
    page.value++;
  }
};
</script>
