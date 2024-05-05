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
            <span class="text-3xl font-bold">File Upload Notifier</span>
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
                Tracks new file uploads in a specific Google Drive folder. If
                the time since the last upload is within a set interval, it
                sends a notification email, ensuring efficient file management.
              </p>
              <blockquote
                class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
              >
                This tool is invaluable for collaborative works between two
                parties using a specific Google Drive folder for file sharing.
                It provides timely notifications when a file is uploaded by the
                other party, enhancing efficiency and collaboration.
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
                  A Google account with access to Google Drive.
                </li>
                <li class="text-gray-700">
                  A foundational understanding of Google Drive and Google Apps
                  Script.
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-3">
            <div class="mb-3">
              <div id="setup" class="text-2xl font-bold">
                Setup
              </div>
              <div class="py-3">
                <ol class="list-decimal list-inside space-y-2">
                  <li class="text-gray-700">
                    <strong>Copyt the Sample Google Apps Script and Store it in your
                      Google Drive:</strong>
                    Copy the sample script from
                    <a
                      href="https://drive.google.com/drive/folders/16WEoOo_bTAKJSM6HAPCdPQj64cfeZCvt"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-lightblue underline hover:text-darkblue font-bold"
                    >HERE</a>
                    ,which is automatically stored in your Google Drive.
                    <div>
                      <img
                        src="assets/images/gas-tools/file-upload-notifier/copy-sample-file.png"
                        alt="Copy Sample"
                        class="w-96 h-64 my-2"
                      >
                      <figcaption class="p-2 text-gray-400">
                        Figure: Copy Sample
                      </figcaption>
                    </div>
                  </li>
                  <li class="text-gray-700">
                    Set the constant variables (folder url/ email address/
                    interval) in
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                      variables.gs</code>.
                    <div>
                      <img
                        src="assets/images/gas-tools/file-upload-notifier/set-constant-variables.png"
                        alt="Set Constant Variables"
                        class="w-96 h-36 my-2"
                      >
                      <figcaption class="p-2 text-gray-400">
                        Figure: Set Constant Variables
                      </figcaption>
                    </div>
                  </li>
                  <li class="text-gray-700">
                    <strong>Set Trigger:</strong> Set the trigger for the script
                    to run periodically. You can set the trigger in your
                    preferred way.
                    <div>
                      <img
                        src="assets/images/gas-tools/file-upload-notifier/set-trigger.png"
                        alt="Set Triggers"
                        class="w-96 h- my-2"
                      >
                      <figcaption class="p-2 text-gray-400">
                        Figure: Set Triggers
                      </figcaption>
                    </div>
                  </li>
                  <li class="text-gray-700">
                    <strong>Upload a File to the Folder:</strong> Upload a file
                    to the folder to test the script.
                  </li>
                  <li class="text-gray-700">
                    <strong>Run the Script:</strong> Run the script to test the
                    notification email. If you receive the email, the script is
                    working correctly.
                    <div>
                      <img
                        src="assets/images/gas-tools/file-upload-notifier/email-notification.png"
                        alt="Email Notification"
                        class="w-96 h-48 my-2"
                      >
                      <figcaption class="p-2 text-gray-400">
                        Figure: Email Notification
                      </figcaption>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div id="usage" class="mb-3">
            <div class="text-2xl font-bold">
              Usage
            </div>
            <ol class="list-decimal list-inside">
              <li class="my-2">
                <strong>File Monitoring:</strong> The script checks for new
                uploads in the designated Google Drive folder (by the pre-set
                triggers).
              </li>
              <li class="my-2">
                <strong>Notifications:</strong> An email is sent if a new file
                is uploaded within a set time interval.
              </li>
            </ol>
            <div class="text-lg leading-6 text-gray-900 font-bold my-4">
              Find the logic for file existence and notifications
              <a
                href="https://docs.google.com/presentation/d/1eaOfzJpEgpluX5kBIWKeiQHy_zm3yx5ktHjfPBqo90s/edit#slide=id.p"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lightblue underline hover:text-darkblue"
              >HERE</a>.
            </div>
          </div>
          <div id="others" class="mb-3">
            <div class="text-2xl font-bold">
              Others
            </div>
            <div class="text-lg leading-6 text-gray-900 font-bold my-4">
              You can find logics for new file existence and the notification
              from
              <a
                href="https://docs.google.com/presentation/d/1eaOfzJpEgpluX5kBIWKeiQHy_zm3yx5ktHjfPBqo90s/edit#slide=id.p"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lightblue underline hover:text-darkblue"
              >HERE</a>.
            </div>
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
            <span class="text-3xl font-bold">File Upload Notifier</span>
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
  { label: 'File Upload Notifier' }
]

// Sets the title of the page for SEO purposes.
useHead({
  title: 'File Upload Notifier'
})

// An array of objects representing the page items or sections.
const pageItems = [
  { label: 'About', id: 'about' },
  { label: 'Prerequisites', id: 'prerequisites' },
  { label: 'Setup', id: 'setup' },
  { label: 'Usage', id: 'usage' },
  { label: 'Others', id: 'others' },
  { label: 'Terms and Conditions', id: 'terms-conditions' },
  { label: 'Source Code', id: 'source-code' }
]

// An array of objects representing the badges to be displayed.
const badges = [
  {
    src: 'https://img.shields.io/badge/Google%20Apps-%20drive%20%26%20mail-brightgreen?style=flat-square&color=brightgreen',
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
