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
            <span class="text-3xl font-bold">Prod Test Auto-Management</span>
          </div>
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
                Automates workflows for coding,
                testing, and deployment of Google Apps Script Projects. It
                leverages GitHub Actions to manage test environments and
                seamlessly deploy completed projects to the production
                environment.
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
                  A Google account with access to Google Apps Script.
                </li>
                <li class="text-gray-700">
                  A foundational understanding of Google Apps Script and Github
                  Actions.
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-3">
            <div id="details" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#details" @click.prevent="scrollTo('setup')"
                  >Details</NuxtLink
                >
                <span
                  class="invisible group-hover/item:visible text-blue-300 text-base"
                >
                  #</span
                >
              </span>
            </div>
            <div class="py-3">
              Details such as set-up and usage are described in
              <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                >README</code
              >
              of the following repositories. <span class="text-red-500">*Language is Japanese</span>.
              <ul class="list-disc list-inside space-y-2">
                <li class="text-gray-700">
                  <a
                    href="https://github.com/tsato21/prod-test-auto-management_1"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >prod-test-auto-management_1</a
                  >
                </li>
                <li class="text-gray-700">
                  <a
                    href="https://github.com/tsato21/prod-test-auto-management_2"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >prod-test-auto-management_2</a
                  >
                </li>
              </ul>
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
            <span class="text-3xl font-bold">Prod Test Auto-Management</span>
          </div>
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
  { label: 'Github Actions', to: '/github-actions/github-actions' },
  { label: 'Prod Test Auto-Management' },
];

// Sets the title of the page for SEO purposes.
useHead({
  title: 'Prod Test Auto-Management',
});

// An array of objects representing the page items or sections.
const pageItems = [
  { label: 'About', id: 'about' },
  { label: 'Prerequisites', id: 'prerequisites' },
  { label: 'Details', id: 'details' },
  { label: 'Terms and Conditions', id: 'terms-conditions' },
];

// The date, formatted according to the US locale.
const date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date('2024-06-11'))
);

const scrollTo = inject('scrollTo') as (id: string) => Promise<void>;
</script>
