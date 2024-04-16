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
            <span class="text-3xl font-bold">Book Data Organizer</span>
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="mb-5 p-5 bottom-shadow">
          <div class="mb-3">
            <div class="text-2xl font-bold" id="about">About</div>
            <div class="py-3">
              <p>
                Automates book data organization in Google Sheets and uses
                <a
                  href="https://www.scriptable-assets.page/add-ons/group-merge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lightblue underline hover:text-darkblue"
                  >Group Merge Add-on</a
                >
                for personalized email sending to share book information.
              </p>
              <blockquote
                class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
              >
                This tool is designed to collaborate with the Group Merge
                add-on, eliminating the need for individual email creation, even
                when dealing with complex data structures.
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

          <div class="mb-3">
            <div class="text-2xl font-bold" id="setup">Setup</div>
            <div class="py-3">
              <ol class="list-decimal list-inside space-y-2">
                <li class="text-gray-700">
                  <strong>Access a Sample Google Sheet</strong>: Begin by
                  opening the
                  <a
                    href="https://docs.google.com/spreadsheets/d/1mMuQSK06hIcAUcI1qW4cgD2_IKOXU9_DAR2CTj2a-a8/edit#gid=511118661"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >Sample Google Sheet</a
                  >.
                  <p class="mt-2">
                    *Note: The samples provided are merely illustrative,
                    showcasing e-book data at an educational institution.
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
            <div class="text-2xl font-bold" id="setup">Usage</div>
            <div class="py-3">
              <!-- 1_Confirmation Emails -->
              <section class="my-5">
                <p id="tool_1_organize-offering-data" class="text-xl font-bold">
                  Tool 1: Confirmation Emails
                </p>
                <p>
                  The script processes data to generate unique items for each
                  confirmation email, such as recipient names, course
                  information, and book details. It then uses Group Merge Add-on
                  to send personalized confirmation emails to the recipients..
                </p>

                <div class="ml-3">
                  <p class="font-bold my-2">Usage and its Logics</p>
                  <ul class="list-decimal list-inside">
                    <li>
                      <strong>Input Reference Data</strong>: Enter reference
                      data in the designated orange range for each column in the
                      reference sheet,
                      <code
                        class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                        >Confirm Mail-Ref Data</code
                      >
                      .
                      <div class="ml-5">
                        <img
                          src="assets/images/gas-tools/book-data-organizer/input-ref-data.png"
                          alt="Image of Input Ref Data"
                          class="w-96 h-48"
                        />
                        <figcaption class="p-2 text-gray-400">
                          Figure: Input Reference Data
                        </figcaption>
                      </div>
                    </li>
                    <li>
                      <strong>Process data</strong>: Select
                      <code
                        class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                        >Output Mail Merge Data for Confirm Email</code
                      >
                      from 
                      <code
                        class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                        >Custom Menu</code
                      > 
                      to process data for confirmation emails.
                      <div class="ml-5">
                        <br />This function processes data to generate mail
                        merge data specifically for confirmation emails. The
                        function's logic is as follows:
                        <blockquote
                          class="mt-2 pl-4 border-l-4 border-gray-400 mb-2"
                        >
                          <ul class="list-disc list-inside">
                            <li>
                              Read each row of data from the input source.
                            </li>
                            <li>
                              If the second faculty information is provided,
                              combine the names and emails of the faculty
                              members.
                            </li>
                            <li>
                              If the first faculty has multiple records, combine
                              the data to create a single entry for that
                              faculty.
                            </li>
                            <li>
                              If a faculty has two books for a certain course,
                              list the book information as "BookXX)" where XX
                              represents the book number.
                            </li>
                            <li>
                              Generate the final mail merge data that can be
                              used to send confirmation emails.
                            </li>
                          </ul>
                        </blockquote>
                        Below are example screenshots illustrating the input
                        data and the output data:
                        <div style="margin-left: 30px">
                          <img
                            src="assets/images/gas-tools/book-data-organizer/ref-data-confirm.png"
                            alt="Image of Input Data for Confirm"
                            class="w-full h-72"
                          />
                          <figcaption class="p-2 text-gray-400">
                            Figure: Input Data for Confirm
                          </figcaption>
                        </div>
                        <div style="margin-left: 30px">
                          <img
                            src="assets/images/gas-tools/book-data-organizer/output-data-confirm.png"
                            alt="Output Data for Confirm"
                            class="w-96 h-96"
                          />
                          <figcaption class="p-2 text-gray-400">
                            Figure: Output Data for Confirm
                          </figcaption>
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>Use Output Data for Mail Merge</strong>: Processed
                      data are output in output sheet,
                      <code
                        class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                        >Confirm Mail-Mail Merge Data</code
                      >. Use the data for Mail Merge. As for the usage of Mail
                      Merge, click
                      <a
                        href="https://www.scriptable-assets.page/add-ons/group-merge/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-lightblue underline hover:text-darkblue"
                        >HERE</a
                      >.
                    </li>
                  </ul>
                </div>
              </section>
              <!-- Divider -->
              <hr />

              <!-- 2_Link Share Emails -->
              <section class="my-5">
                <p
                  id="tool_2-1_organize-schedule-data"
                  class="text-xl font-bold"
                >
                  Tool 2: Link Share Emails
                </p>
                <p>
                  The script processes data to generate unique items for each
                  email to share e-book links. It organizes the necessary
                  information, including recipient names, course details, and
                  e-book links. Using Group Merge Add-on, it sends personalized
                  link share emails to the recipients, providing them with the
                  relevant links to access e-books or resources.
                </p>
                <div class="ml-3">
                  <p class="font-bold my-2">Usage and its Logics</p>
                  <ul class="list-decimal list-inside">
                    <li>
                      <strong>Input Reference Data</strong>: Enter reference
                      data in the designated orange range for each column in the
                      reference sheet,
                      <code
                        class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                        >Link Share Mail-Ref Data</code
                      >.
                    </li>
                    <li>
                      <strong>Process data</strong>: Select
                      <code
                        class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                        >Output Mail Merge Data for Link Share Email</code
                      >
                      from 
                      <code
                        class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                        >Custom Menu</code
                      >
                      to process data for link share emails.
                      <ul>
                        <li>
                          <br />This function handles the processing of data to
                          generate mail merge data specifically for link share
                          emails. Once the button is clicked, you will be
                          prompted to enter the discount code and expiration
                          date. The logic of the function can be summarized as
                          follows:
                          <blockquote
                            class="mt-2 pl-4 border-l-4 border-gray-400 mb-2"
                          >
                            <ul class="list-disc list-inside">
                              <li>
                                Read each row of data from the input source.
                                (Unlike the confirmation email, this function is
                                not designed to accept the second faculty
                                information.)
                              </li>
                              <li>
                                If the faculty has multiple records, combine the
                                data to create a single entry for that faculty.
                              </li>
                              <li>
                                If a faculty has two books for a certain course,
                                combine the book information by "/" (e.g. Book A
                                / Book B). This is because the e-book link is
                                created by each course even if the course has
                                multiple books. (But you can modify the codes to
                                suit your case.)
                              </li>
                              <li>
                                Generate the final mail merge data that can be
                                used to send e-link share emails.
                              </li>
                            </ul>
                          </blockquote>
                          Below are example screenshots:
                          <div class="flex justify-between">
                            <div class="w-1/2 mr-2">
                              <img
                                src="assets/images/gas-tools/book-data-organizer/input-discount-code.png"
                                alt="Image of Input Screen for Discount Code"
                                class="w-full h-48"
                              />
                              <figcaption class="p-2 text-gray-400">
                                Figure: Input Screen for Discount Code
                              </figcaption>
                            </div>
                            <div class="w-1/2 ml-2">
                              <img
                                src="assets/images/gas-tools/book-data-organizer/input-expiry-date.png"
                                alt="Image of Input Screen for Expiry Date"
                                class="w-full h-48"
                              />
                              <figcaption class="p-2 text-gray-400">
                                Figure: Input Screen for Expiry Date
                              </figcaption>
                            </div>
                          </div>
                          <div style="margin-left: 30px">
                            <img
                              src="assets/images/gas-tools/book-data-organizer/ref-data-elink.png"
                              alt="Image of Input Data for E-link Share"
                              class="w-full h-48"
                            />
                            <figcaption class="p-2 text-gray-400">
                              Figure: Input Data for E-link Share
                            </figcaption>
                          </div>
                          <div style="margin-left: 30px">
                            <img
                              src="assets/images/gas-tools/book-data-organizer/output-data-elink.png"
                              alt="Image of Output Data for E-link Share"
                              class="w-full h-48"
                            />
                            <figcaption class="p-2 text-gray-400">
                              Figure: Output Data for E-link Share
                            </figcaption>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Use Output Data for Mail Merge</strong>: Processed
                      data are output in output sheet,
                      <code
                        class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                        >Link Share Mail-Mail Merge Data</code
                      >. Use the data for Mail Merge. As for the usage of Mail
                      Merge, click
                      <a
                        href="https://www.scriptable-assets.page/add-ons/group-merge/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-lightblue underline hover:text-darkblue"
                        >HERE</a
                      >.
                    </li>
                  </ul>
                </div>
              </section>
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
                  href="https://github.com/tsato21/book-data-organizer"
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
