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
            <span class="text-3xl font-bold">Manual Builder</span>
            <!-- Language Section Option -->
            <LanguageSelections
              :languages="languages"
              :currentLanguage="currentLanguage"
              class="ml-4"
            />
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="my-3 mx-2">
          <Banner :imgSrc="imgSrc"/>
        </div>

        <div class="mb-5 p-5">
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
                This tool serves as a pivotal asset for organizations aiming to
                centralize their manual documentation in Google Drive. By
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
                    href="https://docs.google.com/spreadsheets/d/1PMzgfemPZhTKBubqUDWp5gbM-veuWCbT0IKKOw3fsL8/edit#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >Sample Google Sheet</a
                  >. You can also find the
                  <a
                    href="https://docs.google.com/presentation/d/1pUxDKtwHA4GMXfmGXmwzXnjuAbW9g6DE9lFTj55wAn8/edit#slide=id.g2aa00057ea4_0_0"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >Sample Google Slide</a
                  >.
                  <p class="mt-2">
                    *Note: The samples provided are merely illustrative,
                    showcasing a manual for an educational institution.
                  </p>
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
                  all of the sample sheets except index sheet, reset all
                  pre-defined information, and clear contents in index sheet).
                  Navigate to
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Custom Menu</code
                  >Click<code
                    class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                  >
                    Setting</code
                  >
                  and click
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Delete All Sheets and Pre-Set Info</code
                  >.
                  <div class="mt-3">
                    <figure>
                      <img
                        src="assets/images/gas-tools/manual-builder/setting_menu.png"
                        alt="Setting Menu"
                        class="w-96 h-48"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Fig: Setting Menu
                      </figcaption>
                    </figure>
                  </div>
                </li>
                <li class="text-gray-700">
                  <strong>Set Slide URL and Name of Index Sheet</strong>:
                  Navigate to
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Custom Menu > Setting</code
                  >
                  and click
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Set Necessary Info</code
                  >
                  designating URL of Google Slide and name of the index sheet of
                  Google Sheet.
                </li>
              </ol>
            </div>
          </div>

          <div id="usage" class="mb-3">
            <div class="text-2xl font-bold">Usage</div>

            <ol class="list-decimal list-inside">
              <li class="my-2">
                <span class="font-bold"
                  >Make Slides with Designated Patterns</span
                >
                <p>
                  Users need to create slides in the designated Google Slide
                  following a certain pattern. The first slide of each section
                  should follow this structure:
                </p>
                <blockquote
                  class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
                >
                  Category:【Category Name】Subcategory Name<br />
                  Task: Task Name<br />
                  Summary: Summary Descriptions
                </blockquote>
                <div class="resize-image my-3 container-img">
                  <img
                    src="assets/images/gas-tools/manual-builder/slide-pattern.png"
                    alt="Customize Constants"
                    class="w-96 h-48"
                  />
                  <figcaption class="p-2 text-gray-400">
                    Figure: Slide Structure
                  </figcaption>
                </div>
                <p>
                  The script gets and stores the details including the slide URL
                  and category name from the first slide, which are later output
                  in the Google Sheet.
                </p>
              </li>
              <li class="my-2">
                <span class="font-bold">Update Index & Task Sheets</span>
                <p>
                  Navigate to
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Custom Menu</code
                  >
                  and click
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                    Update Index & Task Sheets</code
                  >. This action automatically updates the index and task sheets
                  based on the latest slide data.
                </p>

                <div class="row">
                  <div class="col-md-4">
                    <figure class="resize-image my-3">
                      <img
                        src="assets/images/gas-tools/manual-builder/update-button.png"
                        alt="Customize Constants"
                        class="w-72 h-36"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Update Button
                      </figcaption>
                    </figure>
                  </div>
                  <div class="col-md-4">
                    <figure class="resize-image my-3">
                      <img
                        src="assets/images/gas-tools/manual-builder/index-sheet.png"
                        alt="Customize Constants"
                        class="w-96 h-48"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Updates in Index Sheet
                      </figcaption>
                    </figure>
                  </div>
                  <div class="col-md-4">
                    <figure class="resize-image my-3">
                      <img
                        src="assets/images/gas-tools/manual-builder/task-sheet.png"
                        alt="Customize Constants"
                        class="w-96 h-48"
                      />
                      <figcaption class="p-2 text-gray-400">
                        Figure: Updates in Task Sheet
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="others">Others</div>
            <div class="py-3">
              <p class="text-lg mt-4">
                If you are interested in the logics on how the details from
                Google Slides are extracted and outputting them into Google
                Sheet, click
                <a
                  href="https://docs.google.com/presentation/d/1xSyIpb7w24os4EEhpNBP5CCTxS70q5PeTGKm2Vndumw/edit#slide=id.g6f52a3fb7eed7995_31"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lightblue underline hover:text-darkblue"
                  >HERE</a
                >
                for the detailed explanation.
              </p>
            </div>
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
                  href="https://github.com/tsato21/manual-builder"
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
            <AttributesEn
              :attributes="attributes"
            />
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
            <!-- Language Section Option -->
            <LanguageSelections
              :languages="languages"
              :currentLanguage="currentLanguage"
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
  { label: 'Manual Builder' },
];

// Sets the title of the page for SEO purposes.
useHead({
  title: 'Manual Builder',
});

// An array of objects representing the page items or sections.
const pageItems = [
  { label: 'About', id: 'about' },
  { label: 'Prerequisites', id: 'prerequisites' },
  { label: 'Setup', id: 'setup' },
  { label: 'Usage', id: 'usage' },
  { label: 'Others', id: 'others' },
  { label: 'Terms and Conditions', id: 'terms-conditions' },
  { label: 'Source Code', id: 'source-code' },
  { label: 'Attributes', id: 'attributes' },
];

// An array of objects representing the badges to be displayed.
const badges = [
  {
    src: 'https://img.shields.io/badge/Google%20Apps-slide%20%26%20sheet-brightgreen?style=flat-square&color=brightgreen',
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

// An array of objects representing the available languages for the page.
const languages = [
  {
    name: '日本語',
    filePath: '/gas-tools/each-tool/manual-builder.jpn',
  },
];

// The current language of the page.
const currentLanguage = 'English';

// The date, formatted according to the US locale.
let date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date('2024-04-23'))
);

/*
imgSrc for Banner component
This should be stored in the public folder since it won't be included in your final build, and it will be resolved relative to the public path of your application at runtime.
*/
const imgSrc = "/banner/manual-builder.png";

//values for Attribute component
const attributes = {
  href: 'https://www.flaticon.com/free-icons/manual',
  title: 'manual icons',
  hyperLinkedDescription: 'Manual icons created by Freepik - Flaticon',
};

</script>
