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
            <span class="text-3xl font-bold">Notion Reminder</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="mb-5 p-5">
          <div class="mb-3">
            <div id="about" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#about" @click.prevent="scrollTo('about')"
                  >About</NuxtLink
                >
                <span
                  class="invisible group-hover/item:visible text-blue-300 text-base"
                  >#</span
                >
              </span>
            </div>
            <div class="py-3">
              <p>
                Integrates with Notion to automate and manage reminders for
                tasks or events via Gmail. It utilizes Google Sheets for
                configuration and data management.
              </p>
            </div>
          </div>

          <div class="mb-3">
            <div id="prerequisites" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink
                  to="#prerequisites"
                  @click.prevent="scrollTo('prerequisites')"
                  >Prerequisites</NuxtLink
                >
                <span
                  class="invisible group-hover/item:visible text-blue-300 text-base"
                >
                  #</span
                >
              </span>
            </div>
            <div class="py-3">
              <ul class="list-disc list-inside space-y-2">
                <li class="text-gray-700">
                  A Google account with access to Google Sheets and Notion
                  account.
                </li>
                <li class="text-gray-700">
                  A foundational understanding of Google Sheets, Gmail, Google
                  Apps Script, Notion, and Notion API.
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-3">
            <div id="setup" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#setup" @click.prevent="scrollTo('setup')"
                  >Setup</NuxtLink
                >
                <span
                  class="invisible group-hover/item:visible text-blue-300 text-base"
                >
                  #</span
                >
              </span>
            </div>
            <div class="py-3">
              <ol class="list-decimal list-inside space-y-2">
                <li class="text-gray-700">
                  <strong>Access a Sample Google Sheet</strong>: Begin by
                  opening the
                  <NuxtLink
                    to="https://docs.google.com/spreadsheets/d/1WGDKzsrIiDjb8vFQ4GbHoNejuZrBQXbe_MKOq4STIa4/edit#gid=322808281"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    external
                  >
                    Sample Google Sheet </NuxtLink
                  >.
                  <p class="mt-2">
                    *Note: The samples provided are merely illustrative,
                    showcasing personal daily task management.
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
                <NuxtLink to="#usage" @click.prevent="scrollTo('usage')"
                  >Usage</NuxtLink
                >
                <span
                  class="invisible group-hover/item:visible text-blue-300 text-base"
                >
                  #</span
                >
              </span>
            </div>

            <ol class="list-decimal list-inside">
              <li class="my-2">
                <span class="font-bold">Notion API</span>: Create a Notion API
                for integration.
              </li>
              <li class="my-2">
                <span class="font-bold">Notion Database: </span>
                <ol
                  class="list-decimal list-inside border border-gray-300 p-4 ms-2"
                >
                  <li>
                    Create a database for integration. When creating a database,
                    ensure the following data columns are set:
                  </li>
                  <ul class="list-disc list-inside ml-5">
                    <li>
                      <span class="font-bold"
                        ><code
                          class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                          >Title</code
                        ></span
                      >
                    </li>
                    <li>
                      <span class="font-bold"
                        ><code
                          class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                          >Date</code
                        ></span
                      >: Used for date and time
                    </li>
                    <li>
                      <span class="font-bold"
                        ><code
                          class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                          >Checkbox</code
                        ></span
                      >: Used for completion status
                    </li>
                  </ul>
                  <li>Input each item record in the database.</li>
                  <li>Integrate with Notion Api created in the first step.</li>
                </ol>
              </li>

              <li class="my-2">
                <span class="font-bold">Google Sheet: </span>
                <ol
                  class="list-decimal list-inside border border-gray-300 p-4 ms-2"
                >
                  <li>
                    In your personalized Google Sheet, navigate to
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >Notion Reminder</code
                    >
                    and select
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >Create New Sheet</code
                    >. This displays a modal for selecting the table type and
                    theme color. A new sheet is created based on your
                    selections.
                  </li>
                  <div class="ml-5">
                    <img
                      src="assets/images/gas-tools/notion-reminder/create-sheet-modal.png"
                      alt="Create New Sheet Modal"
                      class="w-96 h-72 mt-2"
                    />
                    <figcaption class="p-2 text-gray-400">
                      Figure: Create New Sheet Modal
                    </figcaption>
                  </div>

                  <li>
                    Enter the required information in the designated (orange)
                    cells of the new sheet, including the Integration API Key.
                  </li>
                  <div class="ml-5">
                    <img
                      src="assets/images/gas-tools/notion-reminder/input-info.png"
                      alt="Enter Required Information"
                      class="w-full h-80 mt-2"
                    />
                    <figcaption class="p-2 text-gray-400">
                      Figure: Enter Required Information
                    </figcaption>
                  </div>

                  <li>
                    Navigate to
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                      Notion Reminder
                    </code>
                    and select
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                      Test Reminder </code
                    >. This tests the entire process from reading values in the
                    Google Sheet to referencing the relevant Notion database and
                    their properties. If the email is sent, check if the content
                    in the email is as expected.
                  </li>
                  <div class="ml-5">
                    <img
                      src="assets/images/gas-tools/notion-reminder/test-reminder-email.png"
                      alt="Test Reminder Email"
                      class="w-96 h-72 mt-2"
                    />
                    <figcaption class="p-2 text-gray-400">
                      Figure: Test Reminder Email
                    </figcaption>
                  </div>

                  <li>
                    Go to the Apps Script editor, open the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                      code-each-reminder.gs</code
                    >, copy the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                      reminderTodoSample</code
                    >, rename it for that reminder, and adjust the parameters to
                    match the name of your reminder sheet. This is used to set
                    up a trigger of the reminder.
                  </li>
                  <div class="ml-5">
                    <img
                      src="assets/images/gas-tools/notion-reminder/make-function.png"
                      alt="Make Function for Trigger"
                      class="w-80 h-48 mt-2"
                    />
                    <figcaption class="p-2 text-gray-400">
                      Figure: Make Function for Trigger
                    </figcaption>
                  </div>

                  <li>
                    Set the trigger for the function: Navigate to
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >Trigger</code
                    >
                    in Apps Script to set the trigger to fire the function.
                  </li>
                  <div class="ml-5">
                    <img
                      src="assets/images/gas-tools/notion-reminder/set-trigger.png"
                      alt="Set Trigger"
                      class="w-96 h-80 mt-2"
                    />
                    <figcaption class="p-2 text-gray-400">
                      Figure: Set Trigger
                    </figcaption>
                  </div>
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
                <NuxtLink
                  to="#source-code"
                  @click.prevent="scrollTo('source-code')"
                  >Source Code</NuxtLink
                >
                <span
                  class="invisible group-hover/item:visible text-blue-300 text-base"
                >
                  #</span
                >
              </span>
            </div>
            <div class="py-3">
              <p class="text-lg mt-4">
                You can find the source code for this tool on Github. Click
                <NuxtLink
                  to="https://github.com/tsato21/notion-reminder"
                  target="_blank"
                  class="text-lightblue underline hover:text-darkblue"
                  external
                >
                  HERE </NuxtLink
                >.
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
            <span class="text-3xl font-bold">Notion Reminder</span>
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
  { label: 'Notion Reminder' },
];

// Sets the title of the page for SEO purposes.
useHead({
  title: 'Notion Reminder',
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
    src: 'https://img.shields.io/badge/Google%20Apps-%20sheet%20%26%20mail-brightgreen?style=flat-square&color=brightgreen',
    alt: 'Use of Google Apps: Sheet and Mail',
  },
  {
    src: 'https://img.shields.io/badge/Other%20Apps-%20notion%20database%20%26%20api-blue?style=flat-square',
    alt: 'Use of Other Apps',
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
const date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date('2024-05-06'))
);

const scrollTo = inject('scrollTo') as (id: string) => Promise<void>;
</script>
