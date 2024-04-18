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
        <div class="text-3xl mt-2 font-bold sm:ml-3 lg:hidden block">
          GAS Tools
        </div>
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
    title: 'SheetTasker',
    description:
      'XXX.',
    filePath: '/gas-tools/each-tool/sheet-tasker.en',
  },
  {
    title: 'Course Data Aligner',
    description:
      'Harmonizes course data between two Google Sheets with differing structures, effectively resolving data structure inconsistencies across multiple stakeholders.',
    filePath: '/gas-tools/each-tool/course-data-aligner',
  },
  {
    title: 'Book Data Organizer',
    description:
      'Automates e-book data organization in Google Sheets and uses Group Merge Add-on for personalized email sending. Handles confirmation and link share emails.',
    filePath: '/gas-tools/each-tool/book-data-organizer',
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
  {
    title: 'SheetMail WorkAutomator',
    description:
      'Automates tasks in Google Sheets, Drive, and Gmail. It streamlines file management, email creation, and sharing for efficient document organization and communication.',
    filePath: '/gas-tools/each-tool/sheet-mail-work-automator',
  },
  {
    title: 'PDF Info Inserter',
    description:
      'Automates the process of extracting and inserting PDF metadata into Google Sheets.',
    filePath: '/gas-tools/each-tool/pdf-info-inserter',
  },
  {
    title: 'Form Manage Simplifier',
    description:
      'Streamlines the task of managing and processing Google Forms responses including efficiently updating form items based on reference lists in Google Sheets, validating submitted forms, and sending email notifications for invalid submissions.',
    filePath: '/gas-tools/each-tool/form-manage-simplifier',
  },
  {
    title: 'File Upload Notifier',
    description:
      'Tracks new file uploads in a specific Google Drive folder. If the time since the last upload is within a set interval, it sends a notification email, ensuring efficient file management.',
    filePath: '/gas-tools/each-tool/file-upload-notifier',
  },
]);

let date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date('2024-04-18'))
);

useHead({
  title: 'GAS Tools',
});
</script>

<style scoped></style>
