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
            <span class="text-3xl font-bold">SheetMail Sync</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="mb-5 p-5">
          <div class="mb-3">
            <div id="about" class="text-2xl font-bold">
              About
            </div>
            <div class="py-3">
              <p>
                Automates email extraction and categorization in Gmail, and
                updates Google Sheets with the information.
              </p>
              <blockquote
                class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
              >
                This automation tool helps to verify the successful delivery of
                large volumes of customized emails. Even though the content of
                these emails is the same, they are personalized with different
                names and email addresses.
              </blockquote>
            </div>
          </div>

          <div class="mb-3">
            <div id="prerequisites" class="text-2xl font-bold">
              Prerequisites
            </div>
            <div class="py-3">
              <ul class="list-disc list-inside space-y-2">
                <li class="text-gray-700">
                  A Google account with access to Google Sheets and Gmail.
                </li>
                <li class="text-gray-700">
                  A foundational understanding of Google Sheets, Gmail, and
                  Google Apps Script.
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-3">
            <div id="setup" class="text-2xl font-bold">
              Setup
            </div>
            <div class="py-3">
              <ol class="list-decimal list-inside space-y-2">
                <li class="text-gray-700">
                  <strong>Access a Sample Google Sheet</strong>: Begin by
                  opening the
                  <a
                    href="https://docs.google.com/spreadsheets/d/1RiKE3KzWwea29mkPuIy1mrZZ2Rnk_L-e-yydLZ-5aHk/edit#gid=771932269"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                  >Sample Google Sheet</a>
                  <p class="mt-2">
                    *Note: The samples provided are merely illustrative,
                    showcasing course evaluation survey for an educational
                    institution.
                  </p>
                </li>
                <li class="text-gray-700">
                  <strong>Customize the values in the orange range of each
                    sheet:</strong>
                  The pre-set information is just a sample. Adjust these values
                  to fit your specific requirements.
                  <img
                    src="assets/images/gas-tools/sheet-mail-sync/sheet-name_pre-criteria.png"
                    class="w-100 h-50"
                  >
                  <figcaption class="p-2 text-gray-400">
                    Figure: Sheet Name and Pre-Criteria
                  </figcaption>
                </li>
                <li class="text-gray-700">
                  <GASWarningEn />
                </li>
              </ol>
            </div>
          </div>

          <div id="usage" class="mb-3">
            <div class="text-2xl font-bold">
              Usage
            </div>

            <ol class="list-decimal list-inside">
              <li class="my-2">
                <strong>Custom Menu in Google Sheets:</strong> The script
                automatically adds Custom Menu to your Google Sheet. Use this
                menu to execute script functions like
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                  Display URL Share Mail Info
                </code>
                and
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                  Display Result and Pass Mail Info </code>.
                <img
                  src="assets/images/gas-tools/sheet-mail-sync/custom-menu.png"
                  alt="Custom Menu Button"
                  class="w-80 h-40"
                >
                <figcaption class="p-2 text-gray-400">
                  Figure: Custom Menu Button
                </figcaption>
              </li>

              <li class="my-2">
                <strong>Processing Emails and Updating Sheets:</strong> The
                script reads emails based on the specified subjects and body
                phrases, categorizes them, and extracts the designated items.
                After processing the emails, the script updates designated
                Google Sheets with the extracted information. The type of
                information extracted and updated on the sheets depends on the
                function that is processing the emails:
                <ul class="list-disc pl-5">
                  <li>
                    <strong>Display URL Share Mail Info:</strong> This extracts
                    necessary information from sent emails to share URL via
                    attached files and update the sheet.
                    <img
                      src="assets/images/gas-tools/sheet-mail-sync/keys-url-share-email.png"
                      alt="URL Share Email Keys"
                      class="w-80 h-40"
                    >
                    <figcaption class="p-2 text-gray-400">
                      Figure: URL Share Email Keys
                    </figcaption>
                    <img
                      src="assets/images/gas-tools/sheet-mail-sync/display-url-share-email.png"
                      alt="URL Share Email Sheet"
                      class="w-80 h-40"
                    >
                    <figcaption class="p-2 text-gray-400">
                      Figure: URL Share Email Sheet
                    </figcaption>
                  </li>
                  <li>
                    <strong>Display Result and Pass Mail Info:</strong> This
                    function handles two types of emails simultaneously: sent
                    emails to share result (for type A faculty and type B
                    faculty) and password.
                    <img
                      src="assets/images/gas-tools/sheet-mail-sync/keys-result-share-email.png"
                      alt="Result Share Email Keys"
                      class="w-80 h-40"
                    >
                    <figcaption class="p-2 text-gray-400">
                      Figure: Result Share Email Keys
                    </figcaption>
                    <img
                      src="assets/images/gas-tools/sheet-mail-sync/display-result-share-full-email.png"
                      alt="Result Share Email Sheet Faculty Type A"
                      class="w-80 h-40"
                    >
                    <figcaption class="p-2 text-gray-400">
                      Figure: Result Share Email Sheet Faculty Type A
                    </figcaption>
                    <img
                      src="assets/images/gas-tools/sheet-mail-sync/display-result-share-adj-email.png"
                      alt="Result Share Email Sheet Faculty Type B"
                      class="w-80 h-40"
                    >
                    <figcaption class="p-2 text-gray-400">
                      Figure: Result Share Email Sheet Faculty Type B
                    </figcaption>
                    <img
                      src="assets/images/gas-tools/sheet-mail-sync/keys-pass-share-email.png"
                      alt="Pass Share Email Keys"
                      class="w-80 h-40"
                    >
                    <figcaption class="p-2 text-gray-400">
                      Figure: Pass Share Email Keys
                    </figcaption>
                    <img
                      src="assets/images/gas-tools/sheet-mail-sync/display-pass-share-email.png"
                      alt="Pass Share Email Sheet"
                      class="w-80 h-40"
                    >
                    <figcaption class="p-2 text-gray-400">
                      Figure: Pass Share Email Sheet
                    </figcaption>
                  </li>
                </ul>
              </li>

              <li class="my-2">
                <strong>Comparing Email Information and Original Information for
                  Final Check:</strong>
                This process involves comparing the information extracted from
                emails with the original data you have with Google Sheet
                formula.
                <img
                  src="assets/images/gas-tools/sheet-mail-sync/check-url-share-email.png"
                  alt="Pass Share Email Sheet"
                  class="w-80 h-40"
                >
                <figcaption class="p-2 text-gray-400">
                  Figure: Check URL Share Email
                </figcaption>
              </li>
            </ol>
          </div>

          <div class="mb-3">
            <TermsAndConditionsEn />
          </div>

          <div class="mb-3">
            <div id="source-code" class="text-2xl font-bold">
              Source Code
            </div>
            <div class="py-3">
              <p class="text-lg mt-4">
                You can find the source code for this tool on Github. Click
                <a
                  href="https://github.com/tsato21/sheet-mail-sync"
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
            <span class="text-3xl font-bold">Sheet Mail Sync</span>
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
  { label: 'SheetMail Sync' }
]

// Sets the title of the page for SEO purposes.
useHead({
  title: 'SheetMail Sync'
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
    src: 'https://img.shields.io/badge/Google%20Apps-%20sheet%20%26%20mail-brightgreen?style=flat-square&color=brightgreen',
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
  }).format(new Date('2024-04-18'))
)
</script>
