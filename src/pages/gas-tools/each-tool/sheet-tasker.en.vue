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
            <span class="text-3xl font-bold">SheetTasker</span>
            <!-- Language Section Option -->
            <LanguageSelections
              :languages="languages"
              :current-language="currentLanguage"
              class="ml-4"
            />
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="my-3 mx-2">
          <Banner :img-src="imgSrc" />
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
                Manages tasks in Google Sheets, output target tasks in Google
                Docs, and send reminders via Gmail, allowing for efficient task
                management on Google Workspace.
              </p>
              <blockquote
                class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
              >
                This tool is a database-style task management tool designed for
                managing tasks. It enables efficient task management within
                Google Workspace without using external apps. Unlike Google's
                built-in apps like Keep and Tasks, SheetTasker offers various
                features such as embedding URLs into specific words, notifying
                task reminders via Gmail, and more. In addition to
                individual-level task management, it also allows for task
                management at the team level.
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
                  A Google account with access to Google Sheets, Docs, and
                  Gmail.
                </li>
                <li class="text-gray-700">
                  A foundational understanding of Google Sheets, Docs, Gmail,
                  and Google Apps Script.
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
                  <strong>Access Your Google Sheet</strong>: Begin by opening
                  the
                  <a
                    href="https://docs.google.com/spreadsheets/d/1POCm-y8m7gonF4plOzVxxAk_1y8vjSP1xLR-4-mcMTU/edit#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                  >Sample Google Sheet</a>.
                  <ul class="list-disc ms-5">
                    【Note】
                    <li class="ms-6">
                      For your reference, you can find sample Google Documents
                      used to display tasks from
                      <a
                        href="https://drive.google.com/drive/folders/1lAcVzQ62BFrIlk0XRJJugsWFGrQZj_xb"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-lightblue underline hover:text-darkblue"
                      >HERE</a>, which will be explained later.
                    </li>
                    <li class="ms-6">
                      The samples provided are merely illustrative, showcasing a
                      tasks managements for an educational institution.
                    </li>
                  </ul>
                </li>
                <li class="text-gray-700">
                  <strong>Copy the Google Sheet</strong>: Make a copy of the
                  Google Sheet to create your personalized version.
                </li>
                <li class="text-gray-700">
                  <GASWarningEn />
                </li>
                <li class="text-gray-700">
                  <strong>Return to Original Format</strong>: Use this option to
                  reset the Google Sheet to its original format (i.e., Delete
                  sample task sheets, clear contents in index sheets, reset
                  pre-defined sample information, and delete sample triggers).
                  Navigate to
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Custom Menu</code>
                  >
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">SETTINGS</code>
                  and click
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Reset All Pre-Defined Info & Triggers</code>.
                </li>
                <li class="text-gray-700">
                  <strong>Set Information to be Pre-defined</strong>: Navigate
                  to
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Custom Menu</code>
                  >
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                    SETTINGS</code>
                  >
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Set Pre-Defined Info</code>
                  to customize the system to your specific requirements.
                  <ul class="list-disc">
                    <li class="ms-6">
                      <strong>General Setting</strong>: Essential to use this
                      tool such as defining index-sheets and name of the editors
                      (work staff) in the Google Sheet.
                    </li>
                    <li class="ms-6">
                      <strong>Setting for Each Type of Reminder</strong>: This
                      setting is designed to configure each type of reminder:
                      general reminders, which notify designated staff of all
                      incomplete tasks, and staff-based reminders. For each
                      reminder type, users need to set information such as the
                      staff to receive the reminder, the URL of the Google Doc
                      displaying target tasks, and the trigger to execute
                      sending reminder email.
                    </li>
                    <li class="ms-6">
                      <strong>Google Sheet and Doc Integration</strong>: Set a
                      trigger to monitor task completion statuses in Google Doc
                      and update the completion field in Google Sheet.
                    </li>
                  </ul>
                  <div class="flex flex-wrap mt-2">
                    <div class="w-full md:w-1/2">
                      <figure>
                        <img
                          src="assets/images/gas-tools/sheet-tasker/setup-image-1.png"
                          alt="Access Setting Button"
                          class="w-72 h-36"
                        >
                        <figcaption class="p-2 text-gray-400">
                          Figure: Access Setting Button
                        </figcaption>
                      </figure>
                    </div>
                    <div class="w-full md:w-1/2">
                      <figure>
                        <img
                          src="assets/images/gas-tools/sheet-tasker/setup-image-2.png"
                          alt="Features in Settings"
                          class="w-96 h-72"
                        >
                        <figcaption class="p-2 text-gray-400">
                          Figure: Features in Settings
                        </figcaption>
                      </figure>
                    </div>
                  </div>
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
                <strong>Task Sheet Generation</strong>: Create task sheets by
                selecting
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Custom Menu</code>
                >
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">TASK SHEETS</code>
                >
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Create a New Task Sheet</code>, designed to support a structured format for task management
                sheet.
                <ul class="list-disc">
                  <li class="ms-6">
                    Delegate tasks to team members using the in-built dropdown
                    functionality within the task sheet.
                  </li>
                  <li class="ms-6">
                    To alter the task sheet's access permissions, proceed to
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Custom Menu</code>
                    >
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">TASK SHEETS</code>
                    >
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Modify Editors of the Current Sheet</code>.
                  </li>
                </ul>
                <div class="my-3 container-img">
                  <img
                    src="assets/images/gas-tools/sheet-tasker/task-sheet-creation.png"
                    alt="Task Sheet Interface"
                    class="w-96 h-48"
                  >
                  <figcaption class="p-2 text-gray-400">
                    Fig: Task Sheet Interface
                  </figcaption>
                </div>
              </li>

              <li class="my-2">
                <strong>Reminders Testing</strong>: Test the reminder system via
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Custom Menu</code>
                >
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">TEST</code>.
                <ul class="list-disc">
                  <li class="ms-6">
                    Ensure Google Docs are established for each reminder type
                    prior to utilization of this feature.
                  </li>
                </ul>

                <div class="flex flex-wrap mt-2">
                  <div class="w-full md:w-1/2">
                    <figure class="my-3">
                      <img
                        src="assets/images/gas-tools/sheet-tasker/reminder-email.png"
                        alt="Email Reminder Notification"
                        class="w-72 h-48"
                      >
                      <figcaption class="p-2 text-gray-400">
                        Fig: Email Reminder Notification
                      </figcaption>
                    </figure>
                  </div>
                  <div class="w-full md:w-1/2">
                    <figure class="my-3">
                      <img
                        src="assets/images/gas-tools/sheet-tasker/reminder-general-doc-today.png"
                        alt="General Reminder Doc Today"
                        class="w-72 h-48"
                      >
                      <figcaption class="p-2 text-gray-400">
                        Fig: General Reminder Today's Doc
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div class="w-full md:w-1/2">
                  <figure class="my-3">
                    <img
                      src="assets/images/gas-tools/sheet-tasker/reminder-general-doc-week.png"
                      alt="General Reminder Doc Week"
                      class="w-72 h-48"
                    >
                    <figcaption class="p-2 text-gray-400">
                      Fig: General Reminder Week's Doc
                    </figcaption>
                  </figure>
                </div>
              </li>

              <li class="my-2">
                <strong>Status Synchronization</strong>: Input "C" in "Complete"
                column for tasks in Google Docs, which is synchronized with your
                Google Sheets.
                <ul class="list-disc">
                  <li class="ms-6">
                    You can test this synchronization by
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Custom Menu</code>
                    >
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">TEST</code>
                    ><code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Update Completion Status</code>.
                  </li>
                </ul>
                <div class="row">
                  <div class="col-md-4">
                    <figure class="my-3">
                      <img
                        src="assets/images/gas-tools/sheet-tasker/input-c-doc.png"
                        alt="Input C into Google Doc"
                        class="w-96 h-48"
                      >
                      <figcaption class="p-2 text-gray-400">
                        Fig: Input "C" to Indicate Task Completion in Google Doc
                      </figcaption>
                    </figure>
                  </div>
                  <div class="col-md-4">
                    <figure class="my-3">
                      <img
                        src="assets/images/gas-tools/sheet-tasker/reflect-status-spr.png"
                        alt="Status Reflection in Google Sheet"
                        class="w-full h-48"
                      >
                      <figcaption class="p-2 text-gray-400">
                        Fig: Task Completion Status Reflection in Google Sheet
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>

              <li class="my-2">
                <strong>Organization of Sheet Info</strong>: Optimize your sheet
                organization by using
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Custom Menu</code>
                >
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Update Index Sheets and Sort Task Sheets</code>.
                <ul class="list-disc">
                  <li class="ms-6">
                    This sorts task sheets by date and update index sheets.
                  </li>
                  <li class="ms-6">
                    Add the pre-set completion flag to the sheet with all tasks
                    completed. This makes the sheet information automatically
                    included in the
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">completed-task-index</code>
                    (e.g., If you set "Fin" as the sheet completion flag and
                    include "Fin" in the sheet name, the information of the
                    corresponding sheet will be automatically reflected in the
                    completed-task-index.).
                  </li>
                </ul>
                <div class="my-3 container-img">
                  <img
                    src="assets/images/gas-tools/sheet-tasker/update-index-sort-taskSh.png"
                    alt="Organization of Sheet Info"
                    class="w-80 h-35"
                  >
                  <figcaption class="p-2 text-gray-400">
                    Fig: Organization of Sheet Info
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
                  href="https://github.com/tsato21/sheet-tasker"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lightblue underline hover:text-darkblue"
                >HERE</a>
                .
              </p>
            </div>
          </div>

          <div class="mb-3">
            <AttributesEn :attributes="attributes" />
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
            <span class="text-3xl font-bold">SheetTasker</span>
            <!-- Language Section Option -->
            <LanguageSelections
              :languages="languages"
              :current-language="currentLanguage"
              class="ml-4"
            />
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>
        <!-- Page Menu Bar: fixed on large screen and relative on other sized screen -->
        <div class="bg-white shadow-lg rounded-lg md:relative lg:fixed lg:mr-2">
          <div class="mb-5 pt-5">
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
  { label: 'SheetTasker' }
]

// Sets the title of the page for SEO purposes.
useHead({
  title: 'SheetTasker'
})

// An array of objects representing the page items or sections.
const pageItems = [
  { label: 'About', id: 'about' },
  { label: 'Prerequisites', id: 'prerequisites' },
  { label: 'Setup', id: 'setup' },
  { label: 'Usage', id: 'usage' },
  { label: 'Terms and Conditions', id: 'terms-conditions' },
  { label: 'Source Code', id: 'source-code' },
  { label: 'Attributes', id: 'attributes' }
]

// An array of objects representing the badges to be displayed.
const badges = [
  {
    src: 'https://img.shields.io/badge/Google%20Apps-sheet%20%26%20doc%20%26%20mail-brightgreen?style=flat-square&color=brightgreen',
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

// An array of objects representing the available languages for the page.
const languages = [
  {
    name: '日本語',
    filePath: '/gas-tools/each-tool/sheet-tasker.jpn'
  }
]

// The current language of the page.
const currentLanguage = 'English'

// The date, formatted according to the US locale.
const date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date('2024-05-05'))
)

/*
imgSrc for Banner component
This should be stored in the public folder since it won't be included in your final build, and it will be resolved relative to the public path of your application at runtime.
*/
const imgSrc = '/banner/sheet-tasker.png'

// values for Attribute component
const attributes = {
  href: 'https://www.flaticon.com/free-icons/list',
  title: 'list icons',
  hyperLinkedDescription: 'List icons created by Freepik - Flaticon'
}

const scrollTo = inject('scrollTo') as (id: string) => Promise<void>
</script>
