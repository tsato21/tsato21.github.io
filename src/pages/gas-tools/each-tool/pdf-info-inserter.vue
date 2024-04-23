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
            <span class="text-3xl font-bold">PDF Info Inserter</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="mb-5 p-5">
          <div class="mb-3">
            <div class="text-2xl font-bold" id="about">About</div>
            <div class="py-3">
              <p>
                Automates the process of extracting and inserting PDF metadata
                into Google Sheets.
              </p>
              <blockquote
                class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
              >
                This tool streamlines file management by scanning a specified
                Google Drive folder for PDF files and populating the sheet with
                their names and URLs, enhancing document organization and
                communication.
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
                  A Google account with access to Google Sheets and Google
                  Drive.
                </li>
                <li class="text-gray-700">
                  A foundational understanding of Google Apps and Google Apps
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
                    href="https://docs.google.com/spreadsheets/d/1z1i7ZYgkRRC0WS3xqS3CGh1GJ8iUQWKkcMwbVa3YU6Q/edit#gid=1971008536"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >Sample Google Sheet</a
                  >
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
                  >Copy the Google Drive Folder URL:
                </span>
                <p>
                  Copy the URL of the Google Drive folder that contains target
                  PDF files.
                </p>
                <div class="ml-5">
                  <img
                    src="assets/images/gas-tools/pdf-info-inserter/copy-folder-url.png"
                    alt="Image of Copy Folder URL"
                    class="w-96 h-48"
                  />
                  <figcaption class="p-2 text-gray-400">
                    Figure: Copy Folder URL
                  </figcaption>
                </div>
              </li>
              <li class="my-2">
                <span class="font-bold">Open the Google Sheet: </span>
                <p>
                  Open the Google Sheet where you want to insert the PDF
                  information.
                </p>
              </li>
              <li class="my-2">
                <span class="font-bold">Access the Custom Menu: </span>
                <p>
                  Click on the
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Custom Menu</code
                  >
                  that appears in the menu bar of the Google Sheet and select
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Insert PDF info into Sheet</code
                  >.
                </p>
                <div class="ml-5">
                  <img
                    src="assets/images/gas-tools/pdf-info-inserter/access-custom-menu.png"
                    alt="Image of Access Custom Menu"
                    class="w-full h-32 mt-2"
                  />
                  <figcaption class="p-2 text-gray-400">
                    Figure: Access Custom Menu
                  </figcaption>
                </div>
              </li>
              <li class="my-2">
                <span class="font-bold">Display the PDF Information: </span>
                <p>
                  The PDF information is displayed in the Google Sheet. By
                  clicking the the name, you can access the target PDF.
                </p>
                <div class="ml-5 mt-4">
                  <img
                    src="assets/images/gas-tools/pdf-info-inserter/display-pdf-info.png"
                    alt="Image of Display PDF Info"
                    class="w-96 h-48"
                  />
                  <figcaption class="p-2 text-gray-400">
                    Figure: Display PDF Info
                  </figcaption>
                </div>
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
                  href="https://github.com/tsato21/pdf-info-inserter"
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
            <span class="text-3xl font-bold">PDF Info Inserter</span>
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
  { label: 'PDF Info Inserter' },
];

// Sets the title of the page for SEO purposes.
useHead({
  title: 'PDF Info Inserter',
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
    src: 'https://img.shields.io/badge/Google%20Apps-%20sheet-brightgreen?style=flat-square&color=brightgreen',
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
  }).format(new Date('2024-04-06'))
);
</script>
