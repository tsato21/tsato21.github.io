<template>
  <div>
    <UBreadcrumbs :bread-crumbs="breadCrumbs" />
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
            <span class="text-3xl font-bold">NotionSheets Chart</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="mb-5 p-5">
          <div class="mb-3">
            <div id="about" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#about" @click.prevent="scrollTo('about')">About</NuxtLink>
                <span class="invisible group-hover/item:visible text-blue-300 text-base">#</span>
              </span>
            </div>
            <div class="py-3">
              <p>
                Integrates Notion databases with Google Sheets, and generate dynamic pie charts, providing a powerful and intuitive way to visualize and analyze data.
              </p>
            </div>
          </div>

          <div class="mb-3">
            <div id="prerequisites" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#prerequisites" @click.prevent="scrollTo('prerequisites')">Prerequisites</NuxtLink>
                <span class="invisible group-hover/item:visible text-blue-300 text-base"> #</span>
              </span>
            </div>
            <div class="py-3">
              <ul class="list-disc list-inside space-y-2">
                <li class="text-gray-700">
                  A Google account with access to Google Sheets and Notion account.
                </li>
                <li class="text-gray-700">
                  A foundational understanding of Google Sheets, Google Apps Script, Notion, Notion API.
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-3">
            <div id="setup" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#setup" @click.prevent="scrollTo('setup')">Setup</NuxtLink>
                <span class="invisible group-hover/item:visible text-blue-300 text-base">  #</span>
              </span>
            </div>
            <div class="py-3">
              <ol class="list-decimal list-inside space-y-2">
                <li class="text-gray-700">
                  <strong>Access a Sample Google Sheet</strong>: Begin by
                  opening the
                  <NuxtLink
                    to="https://docs.google.com/spreadsheets/d/1lQV51pXWX9gwPgQMlnY6CgJD6_k01_4U3ErcoDTqD5o/edit#gid=1013719003"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    external
                  >
                    Sample Google Sheet
                  </NuxtLink>.
                  <p class="mt-2">
                    *Note: The samples provided are merely illustrative,
                    showcasing personal financial management.
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

          <div class="mb-3">
            <div id="usage" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#usage" @click.prevent="scrollTo('usage')">Usage</NuxtLink>
                <span class="invisible group-hover/item:visible text-blue-300 text-base">  #</span>
              </span>
            </div>

            <ol class="list-decimal list-inside">
              <li class="my-2">
                <span class="font-bold">Notion API</span>: Create a Notion API for integration.
              </li>
              <li class="my-2">
                <span class="font-bold">Notion Database: </span>
                <ol class="list-decimal list-inside border border-gray-300 p-4 ms-2">
                  <li>
                    Create a database for integration. When creating a database, ensure the following columns with designated data types are set:
                  </li>
                  <ul class="list-disc list-inside ml-5">
                    <li>
                      <span class="font-bold"><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Item</code></span>: Title
                    </li>
                    <li>
                      <span class="font-bold"><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Category</code></span>: Select or Relation
                    </li>
                    <li>
                      <span class="font-bold"><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Pay Amount</code></span>: Number
                    </li>
                  </ul>
                  <li>Input each item record in the database.</li>
                  <div class="ml-5">
                    <img
                      src="assets/images/gas-tools/notion-sheets-integrator/sample-database.png"
                      alt="Image of Access Custom Menu"
                      class="w-full h-80 mt-2"
                    >
                    <figcaption class="p-2 text-gray-400">
                      Figure: Access Custom Menu
                    </figcaption>
                  </div>
                </ol>
              </li>

              <li class="my-2">
                <span class="font-bold">Spreadsheet: </span>
                <ol class="list-decimal list-inside border border-gray-300 p-4 ms-2">
                  <li>Create a new sheet to display record details from the Notion database.</li>
                  <li>
                    Navigate to Apps Script><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">variables.gs</code> and set each variable.
                    <ul class="list-disc list-inside ml-5">
                      <li>
                        For all databases (In creation of second or subsequent databases, skip this step):
                        <ul class="list-disc list-inside ml-5">
                          <li><span class="font-bold"><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">notionToken</code></span>: Notion API Secret Key</li>
                          <li><span class="font-bold"><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">sheetNameChart</code></span>: Name of the sheet where pie charts are displayed. By default, it is named as "Chart"</li>
                        </ul>
                      </li>
                      <li>
                        For each database:
                        <ul class="list-disc list-inside ml-5">
                          <li><span class="font-bold"><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">tableId</code></span>: ID of the target Notion database</li>
                          <li><span class="font-bold"><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">sheetName</code></span>: the name of the sheet where the record details from the target notion database are displayed</li>
                          <li><span class="font-bold"><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">item/category/monthlyPay</code></span>: Names of each field in Notion database</li>
                          <li><span class="font-bold"><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">chartName</code></span>: Name of the chart which is displayed at the top of the chart.</li>
                        </ul>
                      </li>
                    </ul>
                    <p class="ml-10 text-red-500">
                      * When creating second or subsequent pie charts, copy the variables and change the values of each variable.
                    </p>
                  </li>
                  <li>Create a trigger function in <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">codes.gs</code>. Ensure the required parameters are included and the variable names in the parameters are consistent with those set in <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">variables.gs</code>. The row and column parameters can be set as desired.</li>
                  <p class="ml-3 text-red-500">
                    * When creating second or subsequent pie charts, copy the previous function codes and change variable names.
                  </p>
                  <li>Test the trigger function: Verify that the records of the target Notion database are fetched and the pie chart for the database is successfully generated.</li>
                  <li>Set the trigger for the function: Navigate to <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Trigger</code> in Apps Script to set the trigger to fire the function. It is recommended to set the trigger as onOpen so that every time the spreadsheet is open, the pie chart is updated.</li>
                  <p class="ml-3 text-red-500">
                    * You can find a sample of the spreadsheet settings from <NuxtLink
                      to="https://docs.google.com/presentation/d/1-vphEn7APWwV29E1v7d4BBDAvl92EGSXmY5BLAXWpxU/edit#slide=id.g26522cd8648_0_12"
                      target="_blank"
                      class="text-lightblue underline hover:text-darkblue"
                    >
                      HERE
                    </NuxtLink>.
                  </p>
                </ol>
              </li>
            </ol>
          </div>

          <div class="mb-3">
            <TermsAndConditionsEn />
          </div>

          <div class="mb-3">
            <div id="source-code" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#source-code" @click.prevent="scrollTo('source-code')">Source Code</NuxtLink>
                <span class="invisible group-hover/item:visible text-blue-300 text-base">  #</span>
              </span>
            </div>
            <div class="py-3">
              <p class="text-lg mt-4">
                You can find the source code for this tool on Github. Click
                <NuxtLink
                  to="https://github.com/tsato21/pdf-info-inserter"
                  target="_blank"
                  class="text-lightblue underline hover:text-darkblue"
                  external
                >
                  HERE
                </NuxtLink>.
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
            <span class="text-3xl font-bold">NotionSheets Chart</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>
        <!-- Page Menu Bar: fixed on large screen and relative on other sized screen -->
        <div class="bg-white shadow-lg rounded-lg md:relative lg:fixed lg:mr-2">
          <div class="mb-5 pt-5 mr-2">
            <p class="text-l font-bold p-1 bg-gray-400 text-white">
              <Icon name="map:book-store" /> On this page
            </p>
            <PageItems :page-items="pageItems" />
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
  { label: 'NotionSheets Chart' }
]

// Sets the title of the page for SEO purposes.
useHead({
  title: 'NotionSheets Chart'
})

// An array of objects representing the page items or sections.
const pageItems = [
  { label: 'About', id: 'about' },
  { label: 'Prerequisites', id: 'prerequisites' },
  { label: 'Setup', id: 'setup' },
  { label: 'Usage', id: 'usage' },
  { label: 'Terms and Conditions', id: 'terms-conditions' },
  { label: 'Source Code', id: 'source-code' }
]

// An array of objects representing the badges to be displayed.
const badges = [
  {
    src: 'https://img.shields.io/badge/Google%20Apps-%20sheet-brightgreen?style=flat-square&color=brightgreen',
    alt: 'Use of Google Apps'
  },
  {
    src: 'https://img.shields.io/badge/Other%20Apps-%20notion%20database%20%26%20api-blue?style=flat-square',
    alt: 'Use of Other Apps'
  },
  {
    url: 'https://github.com/google/clasp',
    src: 'https://img.shields.io/badge/built%20with-clasp-FFA500.svg?style=flat-square',
    alt: 'Built with Clasp'
  },
  {
    url: 'https://github.com/prettier/prettier',
    src: 'https://img.shields.io/badge/code_style-prettier-800080.svg?style=flat-square',
    alt: 'Code style: Prettier'
  }
]

// The date, formatted according to the US locale.
const date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date('2024-05-05'))
)

const scrollTo = inject('scrollTo') as (id: string) => Promise<void>
</script>
