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
            <span class="text-3xl font-bold">SheetMail WorkAutomator</span>
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
                >
                  #</span
                >
              </span>
            </div>
            <div class="py-3">
              <p>
                Automates tasks in Google Sheets, Drive, and Gmail. It
                streamlines file and email creation as well as sharing files
                with target individuals for efficient document organization and
                communication.
              </p>
              <blockquote
                class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
              >
                This tool is a powerful ally for organizations handling large
                volumes of files. It uses Google Apps Script to automate the
                creation and organization of customized files in Google Drive,
                and the drafting of notification emails in Gmail. It's designed
                to enhance efficiency in environments where efficient file
                sharing and prompt communication are crucial.
              </blockquote>
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
                  A Google account with access to Google Sheets and Gmail.
                </li>
                <li class="text-gray-700">
                  A foundational understanding of Google Sheets, Gmail, and
                  Google Apps Script and Drive Api.
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
                  <a
                    href="https://docs.google.com/spreadsheets/d/1yGVn-w6uhpvNWz4rK0l37hPGIsqSeeXpweF6Vq_ko04/edit#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >Sample Google Sheet</a
                  >
                  <p class="mt-2">
                    *Note: The examples given are for illustrative purposes
                    only. They demonstrate the bulk creation of individual
                    application sheets, sharing these sheets with each
                    individual, and generating customized emails for each person
                    within an educational institution.
                  </p>
                </li>

                <li class="text-gray-700">
                  <strong>Set Drive API:</strong>
                  Go to
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                    Extension</code
                  >
                  >
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Apps</code
                  >
                  Script >
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Service</code
                  >
                  and choose
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                    Drive API
                  </code>
                  and ADD, which enables you to use Drive API (necessary to
                  share files without notification).
                  <div>
                    <img
                      src="assets/images/gas-tools/sheet-mail-work-automator/access-apps-script.png"
                      alt="Image of Initial Setting"
                      class="w-96 h-40"
                    />
                    <figcaption class="p-2 text-gray-400">
                      Figure: Access Apps Script
                    </figcaption>
                  </div>
                  <div>
                    <img
                      src="assets/images/gas-tools/sheet-mail-work-automator/set-drive-api.png"
                      alt="Set Drive API"
                      class="w-96 h-96"
                    />
                    <figcaption class="p-2 text-gray-400">
                      Figure: Set Drive API
                    </figcaption>
                  </div>
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                    Drive API
                  </code>
                </li>
                <li class="text-gray-700">
                  <GASWarningEn />
                </li>
              </ol>
            </div>
          </div>

          <div class="mb-3">
            <div id="features" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#features" @click.prevent="scrollTo('features')"
                  >Features</NuxtLink
                >
                <span
                  class="invisible group-hover/item:visible text-blue-300 text-base"
                >
                  #</span
                >
              </span>
            </div>

            <ul class="list-disc list-inside">
              <li class="my-2">
                <strong>File Copying and Naming:</strong> Copies from a Google
                Sheet template and name files based on the list.
              </li>
              <li class="my-2">
                <strong>File Information Retrieval:</strong> Displays file
                details like name, URL, and sharing status.
              </li>
              <li class="my-2">
                <strong>Sharing Management:</strong> Manages file sharing
                permissions without notification emails.
              </li>
              <li class="my-2">
                <strong>Email Draft Creation:</strong> Generates personalized
                Gmail drafts for each dataset record.
              </li>
            </ul>
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

            <ol class="list-disk list-inside">
              <li class="my-2">
                <strong>Custom Menu in Google Sheets:</strong> The script
                automatically adds Custom Menu to your Google Sheet. Use this
                menu to execute script functions.
                <img
                  src="assets/images/gas-tools/sheet-mail-work-automator/custom-menu.png"
                  alt="Custom Menu Button"
                  class="w-96 h-48"
                />
                <figcaption class="p-2 text-gray-400">
                  Figure: Custom Menu Button
                </figcaption>
              </li>
            </ol>

            <ol class="list-decimal list-inside">
              <li class="my-2">
                <strong>Set information for student and faculty</strong>:
                <ol
                  class="list-decimal list-inside pl-5"
                  style="list-style-type: lower-alpha"
                >
                  <li>
                    Set information in the orange range in
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >system-data</code
                    >
                    sheet, which is the reference data for other sheets.
                  </li>
                  <div>
                    <img
                      src="assets/images/gas-tools/sheet-mail-work-automator/put-base-info.png"
                      alt="Image of Put Base Info"
                      class="w-96 h-48"
                    />
                  </div>
                  <figcaption class="p-2 text-gray-400">
                    Figure: Put Reference Data
                  </figcaption>
                </ol>
              </li>
              <li class="my-2">
                <strong>Copy and Name Files</strong>:
                <ol
                  class="list-decimal list-inside pl-5"
                  style="list-style-type: lower-alpha"
                >
                  <li>
                    Set the file name information in the orange range in
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >create-file</code
                    >
                    sheet.
                  </li>
                  <div>
                    <img
                      src="assets/images/gas-tools/sheet-mail-work-automator/put-file-name.png"
                      alt="Image of Put File Name"
                      class="w-72 h-48"
                    />
                  </div>
                  <figcaption class="p-2 text-gray-400">
                    Figure: Put File Name
                  </figcaption>
                  <li>
                    Click the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >Copy and Name Files</code
                    >
                    to create copies of a specified file for each entry in the
                    list from the Google Sheet.
                  </li>
                  <div>
                    *You will be asked to put the URL of the target folder to
                    store newly created files and the URL of the template Google
                    Sheet.
                  </div>
                </ol>
              </li>
              <li class="my-2">
                <strong>Retrieve and Display File Information</strong>:
                <ol
                  class="list-decimal list-inside pl-5"
                  style="list-style-type: lower-alpha"
                >
                  <li>
                    Click
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >Output File Info</code
                    >
                    to display detailed information about files in a designated
                    folder in
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >share-file</code
                    >
                    (Column A - E).
                    <div>
                      *You will be asked to put the URL of the target folder
                      where files are stored.
                    </div>
                    <div>
                      <img
                        src="assets/images/gas-tools/sheet-mail-work-automator/input-stored-file-url.png"
                        alt="Image of Input URL of Designated Folder"
                        class="w-96 h-48"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Input URL of Designated Folder
                      </figcaption>
                    </div>
                    <div>
                      <img
                        src="assets/images/gas-tools/sheet-mail-work-automator/output-file-info.png"
                        alt="Image of Output File Info"
                        class="w-96 h-48"
                      />
                    </div>
                    <figcaption class="p-2 text-gray-400">
                      Figure: Output File Info
                    </figcaption>
                    <div>
                      *Since the file (Google Sheet) has not been shared with
                      anyone at this moment (unless you share the stored folder
                      with someone), "Editors' emails" returns empty.
                    </div>
                  </li>
                </ol>
              </li>
              <li class="my-2">
                <strong>Manage File Sharing</strong>:
                <div class="ms-4">
                  Click either
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Share Files Without Notification</code
                  >
                  or
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Reset All Sharing Status</code
                  >
                  to manage file sharing settings.
                </div>
                <ul class="list-disc list-inside pl-5">
                  <li>
                    <strong>Share Files Without Notification:</strong> This
                    function allows you to share files with specified users
                    without sending them a notification. Once the file is shared
                    with target users, their email addresses are displayed in
                    the column D.
                    <div>
                      *You will be asked to put the URL of the target folder
                      where files are stored.
                    </div>
                  </li>
                  <li>
                    <strong>Reset All Sharing Status:</strong> This function
                    resets the sharing settings of all files in a specific
                    folder. It removes all users from the shared list and makes
                    the files private.
                  </li>
                </ul>
              </li>
              <li class="my-2">
                <strong>Create Email Drafts</strong>:
                <div class="ms-4">
                  Click
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Create Drafts</code
                  >
                  to generate personalized draft emails in Gmail.
                  <div class="mt-2">
                    <img
                      src="assets/images/gas-tools/sheet-mail-work-automator/gmail-draft.png"
                      alt="Image of Gmail Draft"
                      class="w-96 h-62"
                    />
                  </div>
                  <figcaption class="p-2 text-gray-400">
                    Figure: Gmail Draft
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
                <a
                  href="https://github.com/tsato21/sheet-mail-work-automator"
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
            <span class="text-3xl font-bold">SheetMail WorkAutomator</span>
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
  { label: 'SheetMail WorkAutomator' },
];

// Sets the title of the page for SEO purposes.
useHead({
  title: 'SheetMail WorkAutomator',
});

// An array of objects representing the page items or sections.
const pageItems = [
  { label: 'About', id: 'about' },
  { label: 'Prerequisites', id: 'prerequisites' },
  { label: 'Setup', id: 'setup' },
  { label: 'Features', id: 'features' },
  { label: 'Usage', id: 'usage' },
  { label: 'Terms and Conditions', id: 'terms-conditions' },
  { label: 'Source Code', id: 'source-code' },
];

// An array of objects representing the badges to be displayed.
const badges = [
  {
    src: 'https://img.shields.io/badge/Google%20Apps-%20sheet%20%26%20mail%20%26%20drive-brightgreen?style=flat-square&color=brightgreen',
    alt: 'Use of Google Apps',
  },
  {
    src: 'https://img.shields.io/badge/api-%20drive%20api-blue?style=flat-square&color=blue',
    alt: 'Use of Google Drive API',
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
  }).format(new Date('2024-05-05'))
);

const scrollTo = inject('scrollTo') as (id: string) => Promise<void>;
</script>
