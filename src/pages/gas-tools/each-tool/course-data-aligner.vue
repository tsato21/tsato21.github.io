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
            <span class="text-3xl font-bold">Course Data Aligner</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="mb-5 p-5 bottom-shadow">
          <div class="mb-3">
            <div class="text-2xl font-bold" id="about">About</div>
            <div class="py-3">
              <p>
                Harmonizes course data between two Google Sheets with differing
                structures, effectively resolving data structure inconsistencies
                across multiple stakeholders.
              </p>
              <blockquote
                class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
              >
                This tool streamlines data management by addressing
                inconsistencies in course data, aligning it with system
                databases. It includes scripts for categorizing course
                offerings, synchronizing schedules, and coordinating faculty
                assignments, enhancing administrative efficiency and data
                retrieval.
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
                  A foundational understanding of Google Sheets and Google Apps
                  Script.
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-5 p-5 bottom-shadow">
            <div class="mb-3">
              <div class="text-2xl font-bold" id="about">About</div>
              <div class="py-3">
                <p>
                  Automates the creation of work manuals by extracting essential
                  details from Google Slides and organizing them into Google
                  Sheets, improving workflow efficiency.
                </p>
                <blockquote
                  class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
                >
                  This tool serves as a pivotal asset for organizations aiming
                  to centralize their manual documentation in Google Drive. By
                  consolidating manuals onto a single platform, it facilitates
                  easy access for all workers. Moreover, it ensures that the
                  information within each work manual is conveyed in a concise
                  manner, enhancing readability and comprehension.
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
                    A Google account with access to Google Sheets and Slides.
                  </li>
                  <li class="text-gray-700">
                    A foundational understanding of Google Sheets, Google Slides
                    and Google Apps Script.
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
                      href="https://docs.google.com/spreadsheets/d/1hG3fAQrBgtwIdJQAG5O8JBaQNG7n__tpV4-DVsqZSd0/edit#gid=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-lightblue underline hover:text-darkblue"
                      >Sample Google Sheet</a
                    >.
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
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="setup">Usage</div>
            <div class="py-3">
              <!-- 1_organize-offering-data.gs -->
              <section class="my-5">
                <p id="tool_1_organize-offering-data" class="text-xl font-bold">
                  Tool 1: Course Offering Data Alignment
                </p>
                <p>
                  This script aligns course offering data from a dataset to
                  match the institution's database format.
                </p>

                <p class="font-bold my-2">How it works:</p>
                <ol class="list-decimal list-inside">
                  <li>
                    Fetches data from the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'1_Offering Data by Program'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Filters out predefined course codes not needed for display
                    (e.g., 'MXD304' and 'WNV327' in the sample sheet)
                  </li>
                  <li>
                    Displays structured data (Course Code, Semester, Faculty) on
                    the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'1_Organized Offering Data'</code
                    >
                    sheet.
                  </li>
                </ol>

                <p class="font-bold my-1">How to use it:</p>
                <ol class="list-decimal list-inside">
                  <li>
                    Paste (*value only) given course offering data into the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'1_Offering Data by Program'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Click the button on the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'1_Organized Offering Data'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Structured course offering data will appear in columns A ~
                    C.
                  </li>
                </ol>

                <div class="flex flex-wrap">
                  <div class="w-full md:w-1/2">
                    <figure>
                      <img
                        src="assets/images/gas-tools/course-data-aligner/1_Offering Data by Program.png"
                        alt="Data Insertion"
                        class="w-80 h-40"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Data Insertion
                      </figcaption>
                    </figure>
                  </div>
                  <div class="w-full md:w-1/2">
                    <figure>
                      <img
                        src="assets/images/gas-tools/course-data-aligner/1_Organized Offering Data.png"
                        alt="Organized Data Display"
                        class="w-80 h-40"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Organized Data Display
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </section>
              <!-- Divider -->
              <hr />

              <!-- 2-1_organize-schedule-data.gs -->
              <section class="my-5">
                <p
                  id="tool_2-1_organize-schedule-data"
                  class="text-xl font-bold"
                >
                  Tool 2-1: Schedule Data Structuring (Type A)
                </p>
                <p>
                  This script structures class schedule data from a given
                  dataset to match the institution's database format.
                </p>

                <p class="font-bold my-2">How it works:</p>
                <ol class="list-decimal list-inside">
                  <li>
                    Fetches data from the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-1_Schedule Data by Program'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Checks each cell against a specific pattern. Matches are
                    stored, non-matches are stored as exceptions.
                  </li>
                  <li>
                    Groups data based on course code and day, then merges and
                    sorts them.
                  </li>
                  <li>
                    Displays structured data on the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-1_Organized Schedule Data'</code
                    >
                    sheet. Exceptions are listed in column G.
                  </li>
                </ol>

                <p class="font-bold my-1">How to use it:</p>
                <ol class="list-decimal list-inside">
                  <li>
                    Paste (*value only) given class schedule data into the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-1_Schedule Data by Program'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Click the button on the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-1_Organized Schedule Data'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Structured class schedule data will appear in columns A ~ E
                    and G.
                  </li>
                </ol>

                <div class="flex flex-wrap">
                  <div class="w-full md:w-1/2">
                    <figure>
                      <img
                        src="assets/images/gas-tools/course-data-aligner/2-1_Schedule Data by Program.png"
                        alt="Data Insertion"
                        class="w-80 h-40"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Data Insertion
                      </figcaption>
                    </figure>
                  </div>
                  <div class="w-full md:w-1/2">
                    <figure>
                      <img
                        src="assets/images/gas-tools/course-data-aligner/2-1_Organized Schedule Data.png"
                        alt="Organized Data Display"
                        class="w-80 h-40"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Organized Data Display
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </section>
              <hr />

              <!-- Divider -->
              <hr />

              <!-- 2-2_organize-schedule-data.gs -->
              <section class="my-5">
                <p
                  id="tool_2-2_organize-schedule-data"
                  class="text-xl font-bold"
                >
                  Tool 2-2: Schedule Data Structuring (Type B)
                </p>
                <p>
                  This script structures class schedule data from a given
                  dataset to match the institution's database format.
                </p>

                <p class="font-bold my-2">How it works:</p>
                <ol class="list-decimal list-inside">
                  <li>
                    Fetches data from the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-2_Schedule Data by Program'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Checks each cell against a specific pattern. Matches are
                    stored, non-matches are stored as exceptions.
                  </li>
                  <li>
                    Groups data based on course code, day, and faculty, then
                    merges and sorts them.
                  </li>
                  <li>
                    Displays structured data on the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-2_Organized Schedule Data'</code
                    >
                    sheet.
                  </li>
                </ol>

                <p class="font-bold my-1">How to use it:</p>
                <ol class="list-decimal list-inside">
                  <li>
                    Paste (*value only) given class schedule data into the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-2_Schedule Data by Program'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Click the button on the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-2_Organized Schedule Data'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Structured class schedule data will appear in columns A ~ G.
                  </li>
                </ol>

                <div class="flex flex-wrap">
                  <div class="w-full md:w-1/2">
                    <figure>
                      <img
                        src="assets/images/gas-tools/course-data-aligner/2-2_Schedule Data by Program.png"
                        alt="Data Insertion"
                        class="w-80 h-40"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Data Insertion
                      </figcaption>
                    </figure>
                  </div>
                  <div class="w-full md:w-1/2">
                    <figure>
                      <img
                        src="assets/images/gas-tools/course-data-aligner/2-2_Organized Schedule Data.png"
                        alt="Organized Data Display"
                        class="w-80 h-40"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Organized Data Display
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </section>
              <hr />

              <!-- 2-3_organize-schedule-data.gs -->
              <section class="my-5">
                <p
                  id="tool_2-3_organize-schedule-data"
                  class="text-xl font-bold"
                >
                  Tool 2-3: Schedule Data Structuring (Type C)
                </p>
                <p>
                  This script structures class schedule data from a given
                  dataset to match the institution's database format.
                </p>

                <p class="font-bold my-2">How it works:</p>
                <ol class="list-decimal list-inside">
                  <li>
                    Fetches data from the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-3_Schedule Data by Program'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Checks each cell against a specific pattern. Matches are
                    stored, non-matches are stored as exceptions.
                  </li>
                  <li>
                    Groups data based on course code, day, and faculty, then
                    merges and sorts them.
                  </li>
                  <li>
                    Displays structured data on the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-3_Organized Schedule Data'</code
                    >
                    sheet.
                  </li>
                </ol>

                <p class="font-bold my-1">How to use it:</p>
                <ol class="list-decimal list-inside">
                  <li>
                    Enter class schedule data into the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-3_Schedule Data by Program'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Click the button on the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >'2-3_Organized Schedule Data'</code
                    >
                    sheet.
                  </li>
                  <li>
                    Structured class schedule data will appear in columns A ~ G.
                  </li>
                </ol>

                <div class="flex flex-wrap">
                  <div class="w-full md:w-1/2">
                    <figure>
                      <img
                        src="assets/images/gas-tools/course-data-aligner/2-3_Schedule Data by Program.png"
                        alt="Data Insertion"
                        class="w-80 h-40"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Data Insertion
                      </figcaption>
                    </figure>
                  </div>
                  <div class="w-full md:w-1/2">
                    <figure>
                      <img
                        src="assets/images/gas-tools/course-data-aligner/2-3_Organized Schedule Data.png"
                        alt="Organized Data Display"
                        class="w-80 h-40"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Organized Data Display
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </section>
              <hr />
            </div>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="source-code">Source Code</div>
            <div class="py-3">
              <p class="text-lg mt-4">
                You can find the source code for this tool on Github. Click
                <a
                  href="https://github.com/tsato21/course-data-aligner"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lightblue underline hover:text-darkblue"
                  >HERE</a
                >
                .
              </p>
            </div>
          </div>

          <div class="mb-3">
            <TermsAndConditionsEn />
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
            <span class="text-3xl font-bold">Course Data Aligner</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>
        <!-- Page Menu Bar: fixed on large screen and relative on other sized screen -->
        <div class="bg-white shadow-lg rounded-lg md:relative lg:fixed lg:mr-2">
          <div class="mb-5 pt-5">
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
  { label: 'Gas Tools', to: '/gas-tools/gas-tools' },
  { label: 'Course Data Aligner' },
];

// Sets the title of the page for SEO purposes.
useHead({
  title: 'Course Data Aligner',
});

// An array of objects representing the page items or sections.
const pageItems = [
  { label: 'About', id: 'about' },
  { label: 'Prerequisites', id: 'prerequisites' },
  { label: 'Setup', id: 'setup' },
  { label: 'Usage', id: 'usage' },
  {
    label: 'Tool 1: Course Offering Data Alignment',
    id: 'tool_1_organize-offering-data',
  },
  {
    label: 'Tool 2-1: Schedule Data Structuring (Type A)',
    id: 'tool_2-1_organize-schedule-data',
  },
  {
    label: 'Tool 2-2: Schedule Data Structuring (Type B)',
    id: 'tool_2-2_organize-schedule-data',
  },
  {
    label: 'Tool 2-3: Schedule Data Structuring (Type C)',
    id: 'tool_2-3_organize-schedule-data',
  },
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
