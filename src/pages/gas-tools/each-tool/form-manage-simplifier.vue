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
            <span class="text-3xl font-bold">Form Manage Simplifier</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="mb-5 p-5">
          <div class="mb-3">
            <div id="about" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#about" @click.prevent="scrollTo('about')">About</NuxtLink>
                <span class="invisible group-hover/item:visible text-blue-300 text-base">  #</span>
              </span>
            </div>
            <div class="py-3">
              <p>
                Streamlines the task of managing and processing Google Forms
                responses by efficiently updating form items based on reference
                lists in Google Sheets, validating submitted forms, and sending
                email notifications for invalid submissions.
              </p>
              <blockquote
                class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
              >
                While Google Forms allows validation of individual items, it
                lacks the ability to validate across multiple items. For
                instance, it's currently impossible to hide certain dropdown
                options based on a user's previous responses. This tool
                addresses this limitation by checking responses immediately
                after submission. If a user selects an invalid combination of
                options across multiple items, a notification email is
                automatically sent to them, requesting resubmission.
              </blockquote>
            </div>
          </div>

          <div class="mb-3">
            <div id="prerequisites" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#prerequisites" @click.prevent="scrollTo('prerequisites')">Prerequisites</NuxtLink>
                <span class="invisible group-hover/item:visible text-blue-300 text-base">  #</span>
              </span>
            </div>
            <div class="py-3">
              <ul class="list-disc list-inside space-y-2">
                <li class="text-gray-700">
                  A Google account with access to Google Sheets.
                </li>
                <li class="text-gray-700">
                  A foundational understanding of Google Sheets, Google Form and
                  Google Apps Script.
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-3">
            <div class="mb-3">
              <div id="sample-data" class="text-2xl font-bold">
                <span class="group/item">
                  <NuxtLink to="#sample-data" @click.prevent="scrollTo('sample-data')">Sample Data</NuxtLink>
                  <span class="invisible group-hover/item:visible text-blue-300 text-base">  #</span>
                </span>
              </div>
              <div class="py-3">
                <p class="text-gray-700">
                  You can access the sample Google Form and Google Sheet,
                  complete with response submissions and embedded scripts, via
                  the links provided below:
                </p>
                <ul class="list-disc list-inside space-y-2">
                  <li class="text-gray-700">
                    <strong>Sample Google Form</strong>:
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSe7uXYiOBeJakwl59kGF2L1ktrRO5P_SLdu3ND2_efMy6Zb6A/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-lightblue underline hover:text-darkblue"
                    >Access here</a>
                  </li>
                  <li class="text-gray-700">
                    <strong>Sample Google Sheet</strong>:
                    <a
                      href="https://docs.google.com/spreadsheets/d/1u5fB6-ucFqQtq6Pn_iVtCRxqo-p5_snTx6N0o4csgqg/edit?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-lightblue underline hover:text-darkblue"
                    >Access here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div id="usage" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#usage" @click.prevent="scrollTo('usage')">Usage</NuxtLink>
                <span class="invisible group-hover/item:visible text-blue-300 text-base">  #</span>
              </span>
            </div>
            <div class="text-lg leading-6 text-gray-900 font-bold my-4">
              Tool 1: Updating Google Form Items based on Data on Google Sheet:
            </div>
            <ol class="list-decimal list-inside">
              <li class="my-2">
                <strong>Pre-define Information in Sheets:</strong> Input
                necessary information in advance in the following sheets:
                <ul class="list-disc pl-5">
                  <li class="my-1">
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">course-lineup</code>
                    sheet: Enter course lineup for each program.
                  </li>
                  <li>
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">instructor-lineup</code>
                    sheet: Enter instructor lineup for each program.
                  </li>
                </ul>
                <div>
                  <img
                    src="assets/images/gas-tools/form-manage-simplifier/enter-item-options.png"
                    alt="Updated Google Form Items"
                    class="w-full h-64"
                  >
                  <figcaption class="p-2 text-gray-400">
                    Figure: Input Course Line-up to Be Reflected on Google Form
                  </figcaption>
                </div>
              </li>
              <li class="my-2">
                <strong>Execute Functions and Update Google Form:</strong> Use
                the
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Update Course Lineup</code>
                and
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Update Instructor Lineup</code>
                from the Custom Menu to update item options in Google Form.
                Verify if the target items in the Google Form are updated
                successfully.
                <ul class="list-disc pl-5">
                  <li>
                    Update Course Lineup: Synchronize each program's course
                    lineup from the Spreadsheet to the Google Form.
                  </li>
                  <li>
                    Update Instructor Lineup: Synchronize each program's
                    instructor lineup from the Spreadsheet to the Google Form.
                  </li>
                </ul>
                <div>
                  <img
                    src="assets/images/gas-tools/form-manage-simplifier/show-custom-menu.png"
                    alt="show-custom-menu"
                    class="w-64 h-48 my-2"
                  >
                  <figcaption class="p-2 text-gray-400">
                    Figure: Custom Menu
                  </figcaption>
                </div>
                <div>
                  <img
                    src="assets/images/gas-tools/form-manage-simplifier/form-items-update.png"
                    alt="Updated Google Form Items"
                    class="w-96 h-64 my-2"
                  >
                  <figcaption class="p-2 text-gray-400">
                    Figure: Updated Google Form Items
                  </figcaption>
                </div>
              </li>
            </ol>
            <div class="text-lg leading-6 text-gray-900 font-bold my-4">
              Tool 2: Automatic Notification Email along with Invalid Choices in
              Form Submission:
            </div>
            <ol class="list-decimal list-inside">
              <li class="my-2">
                <strong>Set Trigger:</strong> Navigate to Triggers in Apps
                Script and set a trigger for the
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">onFormSubmit</code>
                function.
                <div>
                  <img
                    src="assets/images/gas-tools/form-manage-simplifier/show-trigger.png"
                    alt="Trigger Setup"
                    class="w-96 h-72 my-2"
                  >
                  <figcaption class="p-2 text-gray-400">
                    Figure: Trigger Setup
                  </figcaption>
                </div>
                <div>
                  <img
                    src="assets/images/gas-tools/form-manage-simplifier/setup-trigger.png"
                    alt="Trigger Setup"
                    class="w-96 h-96 my-2"
                  >
                  <figcaption class="p-2 text-gray-400">
                    Figure: Trigger Setup
                  </figcaption>
                </div>
              </li>
              <li class="my-2">
                <strong>Test Form Submission:</strong> Ensure that the
                notification email is sent to respondents when a respondent
                chooses the same instructor twice.
                <div>
                  <img
                    src="assets/images/gas-tools/form-manage-simplifier/choose-instructors.png"
                    alt="Email Notification Example"
                    class="w-96 h-64 my-2"
                  >
                  <figcaption class="p-2 text-gray-400">
                    Figure: Email Notification Example
                  </figcaption>
                </div>
                <div>
                  <img
                    src="assets/images/gas-tools/form-manage-simplifier/email-notification.png"
                    alt="Email Notification Example"
                    class="w-full h-64 my-2"
                  >
                  <figcaption class="p-2 text-gray-400">
                    Figure: Email Notification Example
                  </figcaption>
                </div>
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
                <a
                  href="https://github.com/tsato21/form-manage-simplifier"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lightblue underline hover:text-darkblue"
                >HERE</a>
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
            <span class="text-3xl font-bold">Form Manage Simplifier</span>
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
  { label: 'Form Manage Simplifier' }
]

// Sets the title of the page for SEO purposes.
useHead({
  title: 'Form Manage Simplifier'
})

// An array of objects representing the page items or sections.
const pageItems = [
  { label: 'About', id: 'about' },
  { label: 'Prerequisites', id: 'prerequisites' },
  { label: 'Sample Data', id: 'sample-data' },
  { label: 'Usage', id: 'usage' },
  { label: 'Terms and Conditions', id: 'terms-conditions' },
  { label: 'Source Code', id: 'source-code' }
]

// An array of objects representing the badges to be displayed.
const badges = [
  {
    src: 'https://img.shields.io/badge/Google%20Apps-%20form%20%26%20sheet-brightgreen?style=flat-square&color=brightgreen',
    alt: 'Use of Google Apps'
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
