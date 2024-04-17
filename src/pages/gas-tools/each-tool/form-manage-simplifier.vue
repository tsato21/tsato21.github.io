<template>
  <div>
    <UBreadcrumbs :breadCrumbs="breadCrumbs" />
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
      <div
        class="col-span-12 order-3 lg:col-span-8 lg:order-2 md:col-span-12 md:order-3 sm:col-span-12 sm:order-3"
      >
        <div class="lg:block hidden">
          <div class="my-2 flex items-center">
            <span class="text-3xl font-bold">Form Manage Simplifier</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="mb-5 p-5 bottom-shadow">
          <div class="mb-3">
            <div class="text-2xl font-bold" id="about">About</div>
            <div class="py-3">
              <p>
                Streamlines the task of managing and processing Google Forms responses by efficiently updating form items based on reference lists in Google Sheets, validating submitted forms, and sending email notifications for invalid submissions.
              </p>
              <blockquote class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400">
  While Google Forms allows validation of individual items, it lacks the ability to validate across multiple items. For instance, it's currently impossible to hide certain dropdown options based on a user's previous responses. This tool addresses this limitation by checking responses immediately after submission. If a user selects an invalid combination of options across multiple items, a notification email is automatically sent to them, requesting resubmission.
</blockquote>
              
            </div>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="prerequisites">
              Prerequisites
            </div>
            <div class="py-3">
              <ul class="list-disc list-inside space-y-2">
                <li class="text-gray-700">
                  A Google account with access to Google Sheets.
                </li>
                <li class="text-gray-700">
                  A foundational understanding of Google Sheets, Google Form and Google Apps
                  Script.
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="setup">Setup</div>
            <div class="py-3">
              <ol class="list-decimal list-inside space-y-2">
                <li class="text-gray-700">
                  <strong>Access a Sample Google Sheet</strong>: Begin by
                  opening the
                  <a
                    href="https://docs.google.com/spreadsheets/d/1154I0kMvhbp9WZ4r6COu_oA4lPJZvh9MnFxa2G7HZck/edit#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >Sample Google Sheet</a
                  >
                  <p class="mt-2">
                    *Note: The samples provided are merely illustrative,
                    showcasing course schedule for an educational institution.
                  </p>
                </li>
                <li class="text-gray-700">
                  <strong>Copy the Google Sheet</strong>: Make a copy of the
                  Google Sheet to create your personalized version.
                </li>
                
                <li class="text-gray-700">
                  <GASWarningEn />
                </li>
              </ol>
            </div>
          </div>

          <div id="usage" class="mb-3">
            <div class="text-2xl font-bold">Usage</div>

            <ol class="list-decimal list-inside">
              <li class="my-2">
                <span class="font-bold"
                  >Select
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Custom Menu</code
                  >
                  >
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Adjust Row Heights</code
                  ></span
                >
                <p>
                  This initiates a process that adjusts the height of each row
                  in a specified sheet, starting from a user-defined row number.
                </p>
                <p class="mt-2">Here's the step-by-step logic:</p>
                <ul class="list-disc pl-5">
                  <li>
                    <strong>Input Sheet Name and Starting Row</strong>: A dialog
                    prompts you to input the name of the sheet and the starting
                    row number.
                  </li>
                  <li>
                    <strong>Data Retrieval</strong>: The script retrieves the
                    data from the specified sheet and starting row, and gets the
                    widths of all columns in the sheet.
                  </li>
                  <li>
                    <strong>Row Height Calculation</strong>: For each row, the
                    script calculates the line count for each cell, taking into
                    account the physical width of the text and any manual line
                    breaks. It then determines the largest line count among all
                    cells in the row.
                  </li>
                  <li>
                    <strong>Height Adjustment</strong>: The row height is
                    adjusted based on the largest line count. The height is
                    calculated using a base height for a single line and an
                    additional height for each additional line.
                  </li>
                </ul>
                <p class="mt-2">
                  This function ensures that the row height accommodates the
                  cell with the most content, providing a cleaner and more
                  organized view of your data.
                </p>
              </li>
            </ol>
          </div>

          <div class="mb-3">
            <TermsAndConditionsEn />
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="source-code">Source Code</div>
            <div class="py-3">
              <p class="text-lg mt-4">
                You can find the source code for this tool on Github. Click
                <a
                  href="https://github.com/tsato21/row-height-optimizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lightblue underline hover:text-darkblue"
                  >HERE</a
                >
                .
              </p>
            </div>
          </div>
        </div>
        <p>
          <Icon name="material-symbols:calendar-month-sharp" /> Last updated:
          {{ date }}
        </p>
      </div>

      <!-- Part C: Displayed at right on large screen and at second on other sized screen) -->
      <div
        class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2"
      >
        <div class="text-3xl mt-2 font-bold lg:hidden block">
          <div class="my-2 flex items-center">
            <span class="text-3xl font-bold">Manual Builder</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>
        <!-- Page Menu Bar: fixed on large screen and relative on other sized screen -->
        <div class="bg-white shadow-lg rounded-lg md:relative lg:fixed lg:mr-2">
          <div class="mb-5 pt-5 mr-2">
            <p class="text-l font-bold p-1 bg-gray-400 text-white">
              <Icon name="map:book-store"></Icon> On this page
            </p>
            <PageItems :pageItems="pageItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// An array of objects representing the breadcrumb navigation links.
const breadCrumbs = [
  { label: 'Home', to: '/' },
  { label: 'GAS Tools', to: '/gas-tools/gas-tools' },
  { label: 'Form Manage Simplifier' },
];

// Sets the title of the page for SEO purposes.
useHead({
  title: 'Form Manage Simplifier',
});

// An array of objects representing the page items or sections.
const pageItems = [
  { label: 'About', id: 'about' },
  { label: 'Prerequisites', id: 'prerequisites' },
  { label: 'Setup', id: 'setup' },
  { label: 'Usage', id: 'usage' },
  { label: 'Terms and Conditions', id: 'terms-conditions' },
  { label: 'Source Code', id: 'source-code' },
];

// An array of objects representing the badges to be displayed.
const badges = [
  {
    src: 'https://img.shields.io/badge/Google%20Apps-%20form%26%20sheet-brightgreen?style=flat-square&color=brightgreen',
    alt: 'Use of Google Apps',
  },
  {
    url: 'https://github.com/google/clasp',
    src: 'https://img.shields.io/badge/built%20with-clasp-FFA500.svg?style=flat-square',
    alt: 'Built with Clasp',
  },
  {
    url: 'https://github.com/prettier/prettier',
    src: 'https://img.shields.io/badge/code_style-prettier-800080.svg?style=flat-square',
    alt: 'Code style: Prettier',
  },
];

// The date, formatted according to the US locale.
let date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date('2024-04-18'))
);
</script>
